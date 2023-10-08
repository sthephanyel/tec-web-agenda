"use client"
import {signIn, signOut} from 'next-auth/react';
import Image,{ImageLoaderProps } from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { GoogleChromeLogo, CalendarCheck } from "@phosphor-icons/react";

type detailsSession = {
        name: string,
        email: string,
        image: string
}
export default ({session}: any)=>{
    
    const [sessionValue, setSessionValue] = useState<detailsSession>()

    useEffect(()=>{
        if(session) setSessionValue(session.user)
        else setSessionValue(undefined)
    },[])
    return (
        <main className='flex flex-col justify-center items-center'>
            {!sessionValue ? (
                <>
                    <header className='flex p-5 px-3 w-full justify-between items-center'>
                        <figure className='flex justify-center items-center'>
                            <Image className="pr-2" width={50} height={50} alt='Image-logo' src={'logo_infinit.svg'} />
                            {/* <h1 className='text-white text-3xl font-medium'>Bem Vindo! {sessionValue?.name}</h1> */}
                        </figure>

                        <figure className='flex justify-center items-center'>
                            <button className='flex p-6 text-white text-xl font-semibold bg-blue-500 justify-center items-center rounded-xl' 
                                onClick={async ()=> await signIn("google")}>
                                <GoogleChromeLogo size={35} weight='duotone' color="#fafafa" />
                                Entrar com o Google
                            </button>
                        </figure>
                        
                        {/* <button className='flex p-3 text-white text-xl font-medium bg-blue-500 justify-center items-center rounded-xl' onClick={async()=> await signOut()}>Sair</button> */}
                    </header>
                    <nav className='flex w-full p-24 justify-between items-center'>
                        <div className='flex flex-col pl-5 justify-start border-l-8 border-orange-700'>
                            <div className='flex items-center'>
                                <h1 className='font-semibold text-white text-3xl pr-3'>ME LEMBRE</h1>
                                <CalendarCheck size={30} color="#fafafa" />
                            </div>
                            <p className='font-medium text-xl text-orange-700'>Mantenha-se presente nos momentos importantes. Nunca mais esqueça um evento significativo e mostre o quanto se importa.</p>
                        </div>
                    </nav>
                </>
                
            ):(
                <>
                    <header className='flex p-5 px-3 w-full justify-between items-center'>
                        <figure className='flex justify-center items-center'>
                            <Image className="pr-2" width={50} height={50} alt='Image-logo' src={'logo_infinit.svg'} />
                            {/* <h1 className='text-white text-3xl font-medium'>Bem Vindo! {sessionValue?.name}</h1> */}
                        </figure>

                        <figure className='flex justify-center items-center'>
                            <Image className="rounded-xl pr-2" width={53} height={53} alt='Image-logo' src={sessionValue?.image} />
                            {/* <h1 className='text-white text-3xl font-medium'>Bem Vindo! {sessionValue?.name}</h1> */}
                            <button className='flex px-5 text-white text-xl font-semibold justify-center items-center rounded-xl' 
                                onClick={async ()=> await signOut()}>
                                Sair
                            </button>
                        </figure>
                        
                        {/* <button className='flex p-3 text-white text-xl font-medium bg-blue-500 justify-center items-center rounded-xl' onClick={async()=> await signOut()}>Sair</button> */}
                    </header>
                    <nav className='flex w-full p-24 justify-between items-center'>
                        <div className='flex flex-col pl-5 justify-start border-l-8 border-orange-700'>
                            <h1 className='text-white font-bold text-3xl'>Olá, {sessionValue?.name}</h1>
                            <div className='flex items-center mt-4'>
                                <h1 className='font-semibold text-white text-xl pr-3'>ME LEMBRE</h1>
                                <CalendarCheck size={30} color="#fafafa" />
                            </div>
                            <p className='font-medium text-xl text-orange-700'>Mantenha-se presente nos momentos importantes. Nunca mais esqueça um evento significativo e mostre o quanto se importa.</p>
                        </div>
                    </nav>
                </>
            )}
        </main>
    )
}