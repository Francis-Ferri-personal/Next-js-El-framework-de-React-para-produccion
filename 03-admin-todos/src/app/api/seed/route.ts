import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcryptjs';
import { create } from 'domain';

export async function GET(request: Request) {

  await prisma.todo.deleteMany();// delete * from todo
  await prisma.user.deleteMany();// delete * from user

  const user = await prisma.user.create({
    data: {
      email: 'test1@google.com',
      password: bcrypt.hashSync('123456'),
      roles: ["admin", "client", "superuser"],
      todos: {
        create: [
          { description: "Piedra del alma", complete: true },
          { description: 'Puedra del poder' },
          { description: 'Puedra del tiempo' },
          { description: 'Puedra del espacio' },
          { description: 'Puedra del realidad' },
        ]
      }
    },

  });

  return NextResponse.json({ message: "Seed executed" });
}