import { NextResponse } from 'next/server'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function POST(req, res){
    console.log('teste')
    const teste = 'teste........';
    // const { id } = JSON.parse(res.body);
    // const idUser = req.body.id
    // await prisma.post.delete({
    //     where:{
    //         id: idUser
    //     }
    // })

    return NextResponse.json(teste)
}