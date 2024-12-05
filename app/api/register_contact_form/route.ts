import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

export interface ContactFormRequest {
    recaptchaToken: string;
    email: string;
    name: string;
    description: string;
}

export async function POST(request: Request): Promise<Response> {
    const { recaptchaToken, email, name, description } =
        (await request.json()) as ContactFormRequest;

    if (!recaptchaToken || !email || !name)
        return new Response('Malformed request', { status: 400 });

    const recaptchaVerificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY!}&response=${encodeURI(recaptchaToken)}`;
    const recaptchaTokenVerificationResponse = await fetch(
        recaptchaVerificationURL,
    );
    const recaptchaTokenVerificationJSON =
        await recaptchaTokenVerificationResponse.json();

    const isVerified = recaptchaTokenVerificationJSON.success as boolean;

    if (!isVerified) return new Response('Bad token', { status: 401 });

    const serviceAccountAuth = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
        key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY!,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(
        process.env.GOOGLE_SHEETS_ID!,
        serviceAccountAuth,
    );

    await doc.loadInfo();

    const sheet = doc.sheetsByTitle[process.env.GOOGLE_SHEETS_WORKSHEET_TITLE!];

    await sheet.addRow({
        Email: email,
        'Name / Company': name,
        Description: description,
    });

    return new Response('Success', { status: 200 });
}
