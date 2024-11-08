import { Todo } from "@prisma/client";
import { bool } from 'yup';

export const updateTodo = async(id: string, complete: boolean): Promise<Todo> => {
    const body = {complete};

    const todo = await fetch(`/api/todos/${id}`, {
        method:'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => resp.json());
    
    console.log(todo);

    return todo;
}

export const createTodo = async(description: string): Promise<Todo> => {
    const body = {description};

    const todo = await fetch(`/api/todos`, {
        method:'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => resp.json());
    
    console.log(todo);

    return todo;
}


export const deleteCompeletedTodos = async(): Promise<boolean> => {
    const count =  await fetch(`/api/todos`, {
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => resp.json());

    return true;
}