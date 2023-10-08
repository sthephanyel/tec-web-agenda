'use client'
import { getDeletePost } from "@/Utils/getUser";
import Icon from "./Icon";
import { Trash, PencilSimple } from "@phosphor-icons/react";

export interface InfoUserPosts {
    data:{
        id: string;
        name: string;
        email: string;
        Post: Array<TypePost>
    } | null
}

interface TypePost{
    id: string;
    authorId: string;
    content: string;
    title: string;
    createdAt: Date,
    published: string
    author: {
        id: string;
        email: string;
        emailVerified: null | string;
        image: string;
        name: string;
    }
}

async function getPostsDelete({ id }: any) {
  try {
    // console.log('GETPOSTSDELETE', id);
    const res = await fetch('http://localhost:3000/api/postDelete', {
        cache: 'no-store',
        method: 'POST',
        body: JSON.stringify({ id }),
    });
    console.log('resposta post--->',res)

  } catch (error) {
    console.log('--ERRO--');
    console.log(error);
    return null;
  }
}

export default function Posts({data}: any){
    console.log('POSTS',data)
    return( 
        <article className="flex flex-col w-full justify-center items-center bg-dark_colors-100 p-6 rounded-md">
            <section className="flex w-full justify-center items-center border-b-2 border-gray-250">
                <div className="flex w-1/5 justify-center items-center">
                    <h1 className="font-semibold text-xl text-gray-250">Data de Criação</h1>
                </div>
                <div className="flex w-1/5 justify-center items-center">
                    <h1 className="font-semibold text-xl text-gray-250">Titulo</h1>
                </div>
                <div className="flex w-1/2 items-center">
                    <h1 className="font-semibold text-xl text-gray-250">Descrição</h1>
                </div>
                <div className="flex w-1/5 justify-center items-center">
                    <h1 className="font-semibold text-xl text-gray-250">Items</h1>
                </div>
            </section>
            {/* {JSON.stringify(data, null ,2)} */}
            {data && 
            data.Post.length > 0 ? 
            (
                data.Post.map((item: TypePost, index: number) =>{
                    return(
                        <article key={index} className="flex w-full mt-2 bg-dark_colors-200 justify-center items-center rounded-2xl overflow-hidden">
                            <div className="flex flex-col w-1/5 p-3 bg-green-400 justify-center items-center">
                                <h1 className="text-white font-bold text-3xl">{new Intl.DateTimeFormat('pt-br',{day: 'numeric'}).format(new Date(item.createdAt))}</h1>
                                <div className="flex flex-row w-full justify-around items-center">
                                    <h1 className="text-white text-xs font-semibold">{new Intl.DateTimeFormat('pt-br',{month: 'short'}).format(new Date(item.createdAt))}</h1>
                                    <h1 className="text-white text-xs font-semibold">{new Intl.DateTimeFormat('pt-br',{year: 'numeric'}).format(new Date(item.createdAt))}</h1>
                                </div>
                            </div>
                            <div className="flex w-1/5 justify-center items-center border-r-2 border-white">
                                <h1 className="text-white font-semibold">
                                    {item.title}
                                </h1>
                            </div>
                            <div className="flex p-2 w-1/2 items-center border-r-2 border-white">
                                <h1 className="text-gray-250 font-medium text-xs">
                                    {item.content}
                                </h1>
                            </div>
                            <div className="flex flex-row w-1/5 justify-around items-center">
                            <button className='' onClick={async ()=> {
                                // console.log('click', item.id)
                                await getPostsDelete({ id: item.id })
                                }}>
                                <Trash size={25} color={'#fff'} />
                            </button>
                            </div>
                        </article>

                    );
                })
            ):(
                <div>
                    <h1>
                        Sem registro
                    </h1>
                </div>
            )
            }
        </article>
    )
}