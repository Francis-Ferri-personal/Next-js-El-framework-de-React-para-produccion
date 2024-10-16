import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { bool, object, string } from 'yup';

export async function GET(request: Request) { 
    const { searchParams }= new URL(request.url);
    const take = Number(searchParams.get('take') ?? '10');
    const skip = Number(searchParams.get('skip') ?? '0');

    // +value make it a number
    if (isNaN(take))  return NextResponse.json({message: 'Take tiene que ser un número', status: 400});
    if (isNaN(skip))  return NextResponse.json({message: 'Skip tiene que ser un número', status: 400});

    const todos = await prisma.todo.findMany({take, skip});

    return NextResponse.json(todos);
}


const postSchema = object({
    description: string().required(),
    complete: bool().optional().default(false)
})

export async function POST(req: Request) {
    try {
        const { complete, description } = await postSchema.validate(await req.json());
        const todo = await prisma.todo.create({data: {complete, description}});
        return NextResponse.json(todo);

    } catch (error) {
        return NextResponse.json(error, {status: 400})
    }
 }