import { PrismaClient } from "@prisma/client";
import { NextResponse } from 'next/server'

const prisma = new PrismaClient();

export async function GET(request){
    const formData = await prisma.post.findMany();
    return NextResponse.json(formData)
}