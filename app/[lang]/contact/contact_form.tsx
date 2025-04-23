'use client';
import feather from 'feather-icons';
import { FormEvent, useCallback, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { TailSpin } from 'react-loader-spinner';
import { ContactFormRequest } from '@/app/api/register_contact_form/route';

export interface FieldNames {
    email: string;
    name: string;
    description: string;
    button_waiting: string;
    button_sent: string;
    form_success: string;
    form_failure: string;
}

export default function ContactForm({ fields }: { fields: FieldNames }) {
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const [submitStatus, setSubmitStatus] = useState<
        'waiting' | 'sent' | 'success' | 'failure'
    >('waiting');
    const [loadingSpinnerColor, setLoadingSpinnerColor] = useState('black');

    const emailInput = useRef<HTMLInputElement>(null);
    const nameInput = useRef<HTMLInputElement>(null);
    const descriptionInput = useRef<HTMLTextAreaElement>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const setToken = useCallback((token: string | null) => {
        setRecaptchaToken(token);
    }, []);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (
            !emailInput.current ||
            !nameInput.current ||
            !descriptionInput.current
        ) {
            setSubmitStatus('failure');
            return;
        }

        if (
            !emailInput.current.value ||
            !nameInput.current.value ||
            !recaptchaToken
        ) {
            setSubmitStatus('failure');
            return;
        }

        setSubmitStatus('sent');

        const res = await fetch('/api/register_contact_form', {
            method: 'POST',
            body: JSON.stringify({
                recaptchaToken: encodeURI(recaptchaToken),
                email: emailInput.current.value,
                name: nameInput.current.value,
                description: descriptionInput.current.value,
            } as ContactFormRequest),
        });

        if (res.status == 200) {
            setSubmitStatus('success');
            emailInput.current.value = '';
            nameInput.current.value = '';
            descriptionInput.current.value = '';
        } else setSubmitStatus('failure');

        recaptchaRef.current?.reset();
    }

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="w-full rounded-md p-5 shadow-lg shadow-slate-600 transition-all sm:w-3/4 md:w-2/3 lg:w-1/2">
            {submitStatus == 'success' || submitStatus == 'failure' ? (
                <div className="mb-6 flex w-full items-center justify-center">
                    <button
                        type="button"
                        className="flex w-1/12 items-center justify-center"
                        dangerouslySetInnerHTML={{
                            __html: feather.icons.x.toSvg(),
                        }}
                        onClick={() => setSubmitStatus('waiting')}
                    />
                    <span className="text-center">
                        {submitStatus == 'success' ? (
                            <p className="text-green-600">
                                {fields.form_success}
                            </p>
                        ) : (
                            <></>
                        )}
                        {submitStatus == 'failure' ? (
                            <p className="text-red-600">
                                {fields.form_failure}
                            </p>
                        ) : (
                            <></>
                        )}
                    </span>
                </div>
            ) : (
                <></>
            )}
            <div className="mb-3 flex flex-col">
                <label htmlFor="email" className="text-start">
                    {fields.email}:
                </label>
                <input
                    type="email"
                    id="email"
                    ref={emailInput}
                    required
                    className="border-b-2 border-black px-2 outline-hidden"
                />
            </div>
            <div className="my-6 flex flex-col">
                <label htmlFor="name" className="text-start">
                    {fields.name}:
                </label>
                <input
                    type="text"
                    id="name"
                    ref={nameInput}
                    required
                    className="border-b-2 border-black px-2 outline-hidden"
                />
            </div>
            <div className="my-3 flex flex-col">
                <label htmlFor="description" className="text-start">
                    {fields.description}:
                </label>
                <textarea
                    rows={5}
                    id="description"
                    ref={descriptionInput}
                    className="rounded-sm border-2 border-black px-2 py-1 outline-hidden"
                />
            </div>
            <div className="my-6 flex items-center justify-center gap-4">
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={setToken}
                />
            </div>
            <div className="flex w-full items-center justify-center">
                <button
                    formAction="submit"
                    disabled={!recaptchaToken || submitStatus == 'sent'}
                    onMouseEnter={() => setLoadingSpinnerColor('white')}
                    onMouseLeave={() => setLoadingSpinnerColor('black')}
                    className="flex items-center justify-center gap-2 rounded-sm border-4 border-primary bg-primary px-5 py-2 font-bold text-white transition hover:scale-105 hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:border-gray-800 disabled:bg-gray-800 disabled:hover:scale-100 disabled:hover:bg-gray-800 md:bg-white md:text-black md:disabled:bg-white">
                    {submitStatus == 'sent'
                        ? fields.button_sent
                        : fields.button_waiting}{' '}
                    {submitStatus == 'sent' ? (
                        <TailSpin
                            width={20}
                            height={20}
                            strokeWidth={6}
                            color={loadingSpinnerColor}
                        />
                    ) : (
                        <span
                            className="inline-block"
                            dangerouslySetInnerHTML={{
                                __html: feather.icons.send.toSvg(),
                            }}></span>
                    )}
                </button>
            </div>
        </form>
    );
}
