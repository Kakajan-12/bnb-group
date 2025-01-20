import partner1 from "../assets/partners/barline-967x1080.png"
import partner2 from "../assets/partners/peykam.jfif"
import partner3 from "../assets/partners/part3.png"
import { useTranslation } from 'react-i18next';
import {useState} from "react";

const Partners=()=>{
    const { t} = useTranslation();
    const [activeBlock, setActiveBlock] = useState('block1');

    const handleClick = (block) => {
        setActiveBlock(block);
    };
    return (
            <div className="py-12 bg-grey section">
                <div className="container mx-auto h-full px-4">
                    <div className="flex justify-center items-start flex-col h-full">
                        <div className="text-2xl lg:text-6xl mb-6 lg:mb-24 font-bold">{t("partners_page")}</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="grid grid-cols-3 gap-6">
                                <div onClick={() => handleClick('block3')} className="max-w-[190px] max-h-36 flex justify-center items-center shadow-xl p-2 cursor-pointer">
                                    <img className="w-full h-fit" src={partner3} alt={partner3}/>
                                </div>
                                <div onClick={() => handleClick('block1')} className="max-w-[190px] max-h-36 flex justify-center items-center shadow-xl p-2 cursor-pointer">
                                    <img className="w-fit h-full" src={partner1} alt={partner1}/>
                                </div>
                                <div onClick={() => handleClick('block2')} className="max-w-[190px] max-h-36 flex justify-center items-center shadow-xl p-2 cursor-pointer">
                                    <img className="w-fit h-full" src={partner2} alt={partner2}/>
                                </div>
                            </div>
                            {activeBlock === 'block1' && (
                            <div className="w-full shadow-xl rounded-md p-10">
                                <h4 className="font-bold text-4xl mb-10">{t('partners1_title')}</h4>
                                <p className="text-lg">{t('partners1_text')}</p>
                            </div>
                            )}
                            {activeBlock === 'block2' && (
                            <div className="w-full shadow-xl rounded-md p-10">
                                <h4 className="font-bold text-4xl mb-10">{t('partners2_title')}</h4>
                                <p className="text-lg">{t('partners2_text')}</p>
                            </div>
                            )}
                            {activeBlock === 'block3' && (
                            <div className="w-full shadow-xl rounded-md p-10">
                                <h4 className="font-bold text-4xl mb-10">{t('partners3_title')}</h4>
                                <p className="text-lg">{t('partners3_text')}</p>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
    )

}

export default Partners