import { getUserSessionServer } from '@/auth/actions/auth-actions';
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

    const user = await getUserSessionServer();

    if (!user){
        return NextResponse.json('No authorizado', {status: 401});
    }

    try {
        const { complete, description } = await postSchema.validate(await req.json());
        const todo = await prisma.todo.create({data: {complete, description, userId: user.id}});
        return NextResponse.json(todo);

    } catch (error) {
        return NextResponse.json(error, {status: 400})
    }
}


export async function DELETE(req: Request){

    const user = await getUserSessionServer();

    if (!user){
        return NextResponse.json('No authorizado', {status: 401});
    }


    try {
        await prisma.todo.deleteMany({where: {complete: true, userId: user.id}})
        return NextResponse.json('Borrados');
    } catch (error){
        return NextResponse.json(error, {status: 400})
    }
 }