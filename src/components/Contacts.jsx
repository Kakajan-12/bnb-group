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
        <div className="py-12 section">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="p-4 rounded-md col-span-2">
                        <div className="text-3xl lg:text-6xl mb-6 lg:mb-12 font-bold">{t("contacts")}</div>
                        <div className="flex flex-col">
                            <div className="flex items-center mb-4">
                                <MapPinned size={42} color="#f04c4c" className="mr-4 w-full" style={{maxWidth:"42px"}}/>
                                <div className="text-lg sm:text-xl md:text-2xl font-semibold">{t("contact_address")}
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <PhoneIncoming size={42} color="#f04c4c"/>
                                <div className="text-lg sm:text-xl md:text-2xl ml-4 font-semibold">+99312226602</div>
                            </div>
                            <div className="flex items-center mb-4">
                                <PhoneIncoming size={42} color="#f04c4c"/>
                                <div className="text-lg sm:text-xl md:text-2xl ml-4 font-semibold">+99362697306</div>
                            </div>
                            <div className="flex items-center mb-4">
                                <Printer size={42} color="#f04c4c"/>
                                <div className="text-lg sm:text-xl md:text-2xl ml-4 font-semibold">+99312224279</div>
                            </div>
                            <div className="flex items-center mb-4">
                                <MailCheck size={42} color="#f04c4c"/>
                                <div className="text-lg sm:text-xl md:text-2xl ml-4 font-semibold">info@bnbgroup.biz</div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 rounded-md">
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <h4 className="font-semibold text-3xl lg:text-6xl mb-4">{t("contact_form")}</h4>
                            <label htmlFor="email" className="text-lg font-bold mb-2" style={{color: "#8e8e8e"}}>
                                {t("contact_email")}
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="p-2 focus:border-0 rounded-md border-b-2"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <label htmlFor="message" className="text-lg font-bold mb-2" style={{color: "#8e8e8e"}}>
                                {t("contact_message")}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="p-2 focus:border-0 rounded-md mb-4 border-b-2"
                                rows="8"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <button type="submit" disabled={state.submitting}
                                    className="rounded-md p-2 text-xl tracking-wide font-bold text-white btn-color">
                                {t("contact_submit")}
                            </button>
                        </form>
                    </div>
                    {/*<div className="bg-orange p-4 rounded-md">*/}
                    {/*    <iframe*/}
                    {/*        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad112c8ec8c5b205ef2ac663852e134913354e195be4f695014f798d825982d09&amp;source=constructor"*/}
                    {/*        width="100%" height="100%" frameBorder="0"></iframe>*/}
                    {/*</div>*/}
                </div>

            </div>
        </div>
    )
}

export default Contacts