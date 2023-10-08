import { PrismaClient } from "@prisma/client";
// 
const prisma = new PrismaClient();



export async function GET(request){
//     const allUsers = await prisma.user.findMany();
//     console.log('ALL_USERS',allUsers)

    // EXEMPLO:
    // ALL_USERS [
    //     {
    //       id: 'clk07mvax0000vjxsw31d7rb4',
    //       name: 'Sthephanyel Silva',
    //       email: 'sthephanyelsilva3@gmail.com',
    //       emailVerified: null,
    //       image: 'https://lh3.googleusercontent.com/a/AAcHTtfvcrStxibTw3pweirk4s_h07ouNgeBiiBDcQlnt_JrUZc=s96-c'
    //     },
    //     {
    //       id: 'clk0aftjn0000vjiwh5ahx33i',
    //       name: 'sthephanyel silva',
    //       email: 'sthephanyelsilva4@gmail.com',
    //       emailVerified: null,
    //       image: 'https://lh3.googleusercontent.com/a/AAcHTtdjXKWZ4Skk7lQCfwEnLH2yjTuAO8TbWVPMExrFQ94x=s96-c'
    //     }
    //   ]

    // CRIANDO UM NOVO POST
    await prisma.post.create({
        data: {
            title: 'USER ZERO',
            content: 'TESTE DELETE',
            published: true,
            authorId: "clk0aftjn0000vjiwh5ahx33i"
        },
      })

    // return new Response(JSON.stringify(allUsers))
}