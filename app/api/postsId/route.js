// import { PrismaClient } from "@prisma/client";
// import { NextResponse } from 'next/server'

// const prisma = new PrismaClient();

// export async function GET(request){
//     // const formData = await prisma.post.findMany();
    
//     // Retorna um unico registro
//     const uni = await prisma.user.findUnique({
//         where: {
//             // id:'clk07mvax0000vjxsw31d7rb4',
//             email: 'sthephanyelsilva3@gmail.com'
//         },
//         select:{
//             id: true,
//             name:true,
//             email: true,
//             Post:{
//                 select:{
//                     author: true,
//                     authorId: true,
//                     title:true,
//                     content: true
//                 }
//             }
//         }
//     })
//     console.log('findUnique',uni)
//     return new Response(JSON.stringify(uni))

// }