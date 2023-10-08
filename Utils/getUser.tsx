import { PrismaClient } from '@prisma/client';
import { cache } from 'react'

// const prisma = new PrismaClient();
let prisma: any

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }

  prisma = global.prisma
}

export const fetchCache = 'force-cache'

// A mesma função chamada com os mesmos argumentos 
// reutilizará um valor armazenado em cache em vez de executar novamente a função.
// cache

// Recupera todos os posts
export const getUser = cache(async (id: string) => {
    const posts = await prisma.post.findMany();
    console.log('ID--', id)
    await prisma.$disconnect()
    return posts;
})

// exclue post especifico
export const getDeletePost = cache(async () => {
    // await prisma.post.delete({
    //     where:{
    //         id: 'clk0dsn8f0003vjps4zsu67mw'
    //     }
    // })
    // console.log('ID--', id)
    console.log('POST DELETADO')

    // await prisma.$disconnect()
    // return true;
})

// Pega os dados de um usuario especifico
export const getPostUser = cache(async (email: string)=>{
    
    const postsUser = await prisma.user.findUnique({
        where: {
            email: email
        },
        select:{
            id: true,
            name:true,
            email: true,
            Post:{
                select:{
                    id: true,
                    author: true,
                    authorId: true,
                    title:true,
                    content: true,
                    createdAt: true,
                    published: true
                }
            }
        }
    })
    await prisma.$disconnect()
    return postsUser;
})