import icon1 from"/src/assets/icons/product-range_3896912.png"
import icon2 from"/src/assets/icons/business_14743183.png"
import icon3 from"/src/assets/icons/quality-service_18615043.png"
import icon4 from"/src/assets/icons/digital-transformation_11746778.png"
import icon5 from"/src/assets/icons/handshake_18451098.png"
import icon6 from"/src/assets/icons/adaptability_12316737.png"
import {useTranslation} from "react-i18next";

const Advantages =()=>{
    const { t} = useTranslation();
    return (
        <div className="py-12">
            <div className="container mx-auto h-full px-4">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-20">{t('home_advantages')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="flex justify-center items-center flex-col mb-6">
                        <div className="max-w-80">
                            <div className="flex justify-center">
                                <div className="border-2 advantages-bg rounded-full p-10">
                                    <img className="w-20" src={icon1} alt={icon1}/>
                                </div>
                            </div>
                            <div className="text-center pt-10 space-y-3">
                                <h6 className="font-semibold text-xl sm:text-2xl title-color">{t('home_advantages_title1')}</h6>
                                <p className="text-advantages">{t('home_advantages_text1')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col mb-6">
                        <div className="max-w-80">
                            <div className="flex justify-center">
                                <div className="border-2 advantages-bg rounded-full p-10">
                                    <img className="w-20" src={icon2} alt={icon2}/>
                                </div>

                            </div>
                            <div className="text-center pt-10 space-y-3">
                                <h6 className="font-semibold text-xl sm:text-2xl title-color">{t('home_advantages_title2')}</h6>
                                <p className="text-advantages">{t('home_advantages_text2')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col mb-6">
                        <div className="max-w-80">
                            <div className="flex justify-center">
                                <div className="border-2 advantages-bg rounded-full p-10">
                                    <img className="w-20" src={icon3} alt={icon3}/>
                                </div>

                            </div>
                            <div className="text-center pt-10 space-y-3">
                                <h6 className="font-semibold text-xl sm:text-2xl title-color">{t('home_advantages_title3')}</h6>
                                <p className="text-advantages">{t('home_advantages_text3')}</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-center items-center flex-col mb-6">
                        <div className="max-w-80">
                            <div className="flex justify-center">
                                <div className="border-2 advantages-bg rounded-full p-10">
                                    <img className="w-20" src={icon4} alt={icon4}/>
                                </div>

                            </div>
                            <div className="text-center pt-10 space-y-3">
                                <h6 className="font-semibold text-xl sm:text-2xl title-color">{t('home_advantages_title4')}</h6>
                                <p className="text-advantages">{t('home_advantages_text4')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col mb-6">
                        <div className="max-w-80">
                            <div className="flex justify-center">
                                <div className="border-2 advantages-bg rounded-full p-10">
                                    <img className="w-20" src={icon5} alt={icon5}/>
                                </div>

                            </div>
                            <div className="text-center pt-10 space-y-3">
                                <h6 className="font-semibold text-xl sm:text-2xl title-color">{t('home_advantages_title5')}</h6>
                                <p className="text-advantages">{t('home_advantages_text5')}</p>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-center items-center flex-col mb-6">
                        <div className="max-w-80">
                            <div className="flex justify-center">
                                <div className="border-2 advantages-bg rounded-full p-10">
                                    <img className="w-20" src={icon6} alt={icon6}/>
                                </div>

                            </div>
                            <div className="text-center pt-10 space-y-3">
                                <h6 className="font-semibold text-xl sm:text-2xl title-color">{t('home_advantages_title6')}</h6>
                                <p className="text-advantages">{t('home_advantages_text6')}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Advantages;