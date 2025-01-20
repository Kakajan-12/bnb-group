import {useTranslation} from 'react-i18next';
import {useEffect, useState} from 'react';
import i18n from "i18next";

const Products = () => {
    const {t} = useTranslation();
    const language = i18n.language;
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch(`/translation/${language}/products.json`
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(()=>{
        getData()
    },[language])


    return (
        <div className="py-12 section">
            <div className="container mx-auto px-4">
                <div className="text-3xl lg:text-5xl mb-6 lg:mb-24 font-bold">{t("products")}</div>
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {data.map((item, i) => (
                        <div
                            className="border-2 rounded-lg mx-2 p-4 shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                            key={i}>
                            <img className="w-auto h-56 mx-auto mb-4" src={item.image} alt={item.image}/>
                            <h4 className="font-bold text-md mb-4">{item.name}</h4>
                            <p className="font-bold text-sm">{item.manufactured}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Products;