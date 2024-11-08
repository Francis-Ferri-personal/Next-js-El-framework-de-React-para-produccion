'use client';

import { usePathname } from 'next/navigation';
import { CiBookmarkCheck } from 'react-icons/ci';

import style from './SidebarItem.module.css'
import Link from 'next/link';

export interface SidebarInterface {
    icon: React.ReactNode;
    path: string;
    title: string;
}

export const SidebarItem = ({ icon, path, title }: SidebarInterface) => {
    const pathName = usePathname();
    return (
        <li>
            <Link href={path} className={`px-4 py-3 flex items-center space-x-4 rounded-md group hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white ${path == pathName ? style['active-link'] : style["link"]}`}>
                {icon}
                <span className={"group-hover:text-white"}>{title}</span>
            </Link>
        </li>
    )
}
