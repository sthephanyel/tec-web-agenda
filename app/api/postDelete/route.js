import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    console.log('Conteúdo do corpo da solicitação:', req.body);
    const body = await req.json()
    console.log(body.id)
    await prisma.post.delete({
      where: {
        id: body.id
      }
    });

    return NextResponse.json({ message: 'method allow' });
  } catch (error) {
    console.error('Erro na rota POST:', error);
  }
}
