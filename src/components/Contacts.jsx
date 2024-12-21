import {useForm, ValidationError} from '@formspree/react';
import {MapPinned, PhoneIncoming, Printer, MailCheck} from "lucide-react"
import {SocialIcon} from "react-social-icons";
import {useTranslation} from 'react-i18next';

const Contacts = () => {
    const {t} = useTranslation();
    const [state, handleSubmit] = useForm("xanyzklz");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <div id="contacts" className="py-12 section">
            <div className="container mx-auto px-4">
                <div className="text-4xl lg:text-7xl mb-6 lg:mb-12 font-bold text-title">{t("contacts")}</div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="bg-grey p-4 rounded-md">
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <h4 className="font-bold text-4xl mb-4">{t("contact_form")}</h4>
                            <label htmlFor="email" className="text-title text-lg font-bold mb-2">
                                {t("contact_email")}
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="p-2 focus:border-0 rounded-md"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <label htmlFor="message" className="text-title text-lg font-bold mb-2">
                                {t("contact_message")}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="p-2 focus:border-0 rounded-md mb-4"
                                rows="8"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <button type="submit" disabled={state.submitting}
                                    className="bg-orange rounded-md p-2 text-2xl uppercase tracking-wide font-bold border-2 border-color text-white">
                                {t("contact_submit")}
                            </button>
                        </form>
                    </div>
                    <div className="bg-orange p-4 rounded-md">
                        <h4 className="font-bold text-4xl mb-4 text-white">{t("contacts")}</h4>
                        <div className="flex flex-col">
                            <div className="flex items-center mb-4">
                                <MapPinned size={42} color="#ffffff"/>
                                <div className="text-xl text-white ml-4">{t("contact_address")}
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <PhoneIncoming size={42} color="#ffffff"/>
                                <div className="text-xl text-white ml-4">+99312226602</div>
                            </div>
                            <div className="flex items-center mb-4">
                                <PhoneIncoming size={42} color="#ffffff"/>
                                <div className="text-xl text-white ml-4">+99362697306</div>
                            </div>
                            <div className="flex items-center mb-4">
                                <Printer size={42} color="#ffffff"/>
                                <div className="text-xl text-white ml-4">+99312224279</div>
                            </div>
                            <div className="flex items-center mb-4">
                                <MailCheck size={42} color="#ffffff"/>
                                <div className="text-xl text-white ml-4">info@bnbgroup.biz</div>
                            </div>
                            <div className="grid gap-4 grid-cols-8 lg:grid-cols-5 xl:grid-cols-8">
                                <SocialIcon network="telegram" url="#" bgColor="#d66c2f" className="border-2 border-white rounded-full"/>
                                <SocialIcon network="instagram" url="www.vimeo.com" bgColor="#d66c2f" className="border-2 border-white rounded-full"/>
                                <SocialIcon network="tiktok" url="www.vimeo.com" bgColor="#d66c2f" className="border-2 border-white rounded-full"/>
                                <SocialIcon network="x" url="www.vimeo.com" bgColor="#d66c2f" className="border-2 border-white rounded-full"/>
                                <SocialIcon network="line.me" url="www.vimeo.com" bgColor="#d66c2f" className="border-2 border-white rounded-full"/>

                            </div>
                        </div>
                    </div>
                    <div className="bg-orange p-4 rounded-md">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad112c8ec8c5b205ef2ac663852e134913354e195be4f695014f798d825982d09&amp;source=constructor"
                            width="100%" height="100%" frameBorder="0"></iframe>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contacts