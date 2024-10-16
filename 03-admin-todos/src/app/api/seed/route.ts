import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    await prisma.todo.deleteMany();// delete * from todo
    
    const todo = await prisma.todo.createMany({
      data: [
        {description: "Piedra del alma", complete: true},
        {description: 'Puedra del poder'},
        {description: 'Puedra del tiempo'},
        {description: 'Puedra del espacio'},
        {description: 'Puedra del realidad'},
      ]
    })
    
    console.log(todo)

    return NextResponse.json({message: "Seed executed"});
}