import {useTranslation} from 'react-i18next';
import {useEffect, useState} from "react";
import icon1 from '../../assets/counter/slide-ico1.png'
import icon2 from '../../assets/counter/slide-ico2-300x211.png'
import icon3 from '../../assets/counter/slide-ico3.png'
import icon4 from '../../assets/counter/slide-ico4-300x211.png'
import icon5 from '../../assets/counter/delivery-truck_353220.png'

const Counter = () => {
    const {t} = useTranslation();
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const [counter4, setCounter4] = useState(0);
    const [counter5, setCounter5] = useState(0);

    useEffect(() => {
        if (counter1 < 2100) {
            const timer = setInterval(() => {
                setCounter1(prevCount => prevCount + 1);
            }, 1); // Count every second

            return () => clearInterval(timer);
        }
    }, [counter1])

    useEffect(() => {
        if (counter2 < 6600) {
            const timer = setInterval(() => {
                setCounter2(prevCount => prevCount + 1);
            }, 1); // Count every second

            return () => clearInterval(timer);
        }
    }, [counter2])

    useEffect(() => {
        if (counter3 < 3500) {
            const timer = setInterval(() => {
                setCounter3(prevCount => prevCount + 1);
            }, 1); // Count every second

            return () => clearInterval(timer);
        }
    }, [counter3])

    useEffect(() => {
        if (counter4 < 100) {
            const timer = setInterval(() => {
                setCounter4(prevCount => prevCount + 1);
            }, 10); // Count every second

            return () => clearInterval(timer);
        }
    }, [counter4])

    useEffect(() => {
        if (counter5 < 10) {
            const timer = setInterval(() => {
                setCounter5(prevCount => prevCount + 1);
            }, 100); // Count every second

            return () => clearInterval(timer);
        }
    }, [counter5])

    return (
        <div className="py-12 section">
            <div className="container mx-auto h-full px-4">
                <div className="w-full flex justify-center">
                    <h4 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-20">{t("about_advantages")}</h4>
                </div>
                <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-5 py-8">
                    <div className="flex flex-col items-center">
                        <div className="flex-1">
                            <img src={icon1} alt={icon1} style={{width: "175px"}}/>
                        </div>
                        <div className="text-7xl font-bold text-orange-500 mt-4 h-20">{counter1}</div>
                        <div className="text-xl text-center max-w-56 h-20">{t("counter1")}</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex-1">
                            <img src={icon2} alt={icon2} style={{width: "350px"}}/>
                        </div>
                        <div className="text-7xl font-bold text-orange-500 mt-4 h-20">{counter2}</div>
                        <div className="text-xl text-center max-w-56 h-20">{t("counter2")}</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex-1">
                            <img src={icon3} alt={icon3} style={{width: "160px"}}/>
                        </div>
                        <div className="text-7xl font-bold text-orange-500 mt-4 h-20">{counter3} <span
                            className="text-xl">{t('kw')}</span></div>
                        <div className="text-xl text-center max-w-56 h-20">{t("counter3")}</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex-1">
                            <img src={icon4} alt={icon4} style={{width: "250px"}}/>
                        </div>
                        <div className="text-7xl font-bold text-orange-500 mt-4 h-20">{counter4} %</div>
                        <div className="text-xl text-center max-w-56 h-20">{t("counter4")}</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex-1">
                            <img src={icon5} alt={icon5} style={{width: "175px"}}/>
                        </div>
                        <div className="text-7xl font-bold text-orange-500 mt-4 h-20">{counter5}</div>
                        <div className="text-xl text-center max-w-56 h-20">{t("counter5")}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Counter