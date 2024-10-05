/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

export function useCurrencyInfo(currency){
    const [data,setData]=useState(0);
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>{
            res.json();
            console.log("api is working ");
        })
        .then((res)=>
            setData(res[currency])
        )
    },[currency])

    return data;

}
