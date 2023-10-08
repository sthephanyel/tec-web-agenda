'use client'
import { Trash, PencilSimple } from "@phosphor-icons/react";

export default async function Icon({color, size, func}: any){
    return(
        <button className='' onClick={async ()=> {
            console.log('click')
            }}>
            <Trash size={size} color={color} />
        </button>
    )
}