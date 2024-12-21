import partner1 from "../assets/partners/part1.png"
import partner2 from "../assets/partners/part2.png"
import partner3 from "../assets/partners/part3.png"
import { useTranslation } from 'react-i18next';

const Partners=()=>{
    const { t} = useTranslation();

    return (
            <div id="partners" className="py-12 bg-grey section">
                <div className="container mx-auto h-full px-4">
                    <div className="flex justify-center items-start flex-col h-full">
                        <div className="text-4xl lg:text-7xl mb-6 lg:mb-24 font-bold text-title">{t("partners")}</div>
                        <div className="flex justify-around items-center w-full flex-col-reverse xl:flex-row h-full">
                            <div className="flex flex-col items-center h-64 justify-between mb-8">
                                <img className="mb-10 w-full" src={partner1} alt={partner1}/>
                                <div className="text-4xl font-bold uppercase text-title">&quot;Cargill&quot;</div>
                            </div>
                            <div className="flex flex-col items-center h-64 justify-between mb-8">
                                <img className="mb-10 w-full h-44" src={partner2} alt={partner2}/>
                                <div className="text-4xl font-bold uppercase text-title">&quot;lustdorf&quot;</div>
                            </div>
                            <div className="flex flex-col items-center h-64 justify-between mb-8">
                                <img className="mb-10 w-full" src={partner3} alt={partner3}/>
                                <div className="text-4xl font-bold uppercase text-title">TM &quot;GRANUM&quot;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )

}

export default Partners