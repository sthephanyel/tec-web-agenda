'use client'
import { useEffect, useState } from "react";

export default async function Calendario(){
    const [startDate, setStartDate] = useState<Date | undefined>(new Date());
    useEffect(()=>{
        const start = new Date();
        // setStartDate(start)
    },[])
    return(
        <>
            <h1>Calendario</h1>
        </>
    )
}