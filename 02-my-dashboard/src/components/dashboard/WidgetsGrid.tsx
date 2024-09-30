'use client';

import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'
import {IoCartOutline } from 'react-icons/io5';

export const WidgetsGrid = () => {
    const countCart = useAppSelector(state => state.counter.count);
    // const dispatch = useAppDispatch();
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget 
            title={`${countCart}`}  
            subtitle='Productos agregados'
            label='Contador' 
            icon={<IoCartOutline size={50} className="text-blue-500"/>} 
            href='/dashboard/counter'/>
        {/* <SimpleWidget /> */}
    </div>
  )
}
