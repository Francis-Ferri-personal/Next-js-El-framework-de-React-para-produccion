import Image from 'next/image';
import Link from 'next/link';
import { SidebarInterface, SidebarItem } from './SidebarItem';
import { IoBasketOutline, IoCalendarOutline, IoCheckboxOutline, IoCodeWorkingOutline, IoListOutline, IoPersonOutline } from 'react-icons/io5';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { LogoutButton } from './LogoutButton';

const menuItems: SidebarInterface[] = [
  {
    icon: <IoCalendarOutline />,
    title: 'Dashboard',
    path: '/dashboard'
  },
  {
    icon: <IoCheckboxOutline />,
    title: 'Rest TODOs',
    path: '/dashboard/rest-todos'
  },
  {
    icon: <IoListOutline />,
    title: 'Server Actions',
    path: '/dashboard/server-todos'
  },
  {
    icon: <IoCodeWorkingOutline />,
    title: 'Cookies',
    path: '/dashboard/cookies'
  },
  {
    icon: <IoBasketOutline />,
    title: 'Productos',
    path: '/dashboard/products'
  },
  {
    icon: <IoPersonOutline />,
    title: 'Perfil',
    path: '/dashboard/profile'
  }
]

export const Sidebar = async () => {

  const session = await getServerSession(authOptions);

  const avatarURL = session?.user?.image ??   "https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp";
  const username = session?.user?.name ?? "No name";
  const userRoles = session?.user?.roles ?? ["client"];

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        

        <div className="mt-8 text-center">
          <Image src={avatarURL}
            alt=""
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            width={50}
            height={50}
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{username}</h5>
          <span className="hidden text-gray-400 lg:block capitalize">{userRoles.join(", ")}</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {
            menuItems.map(item => <SidebarItem key={item.path} {...item}/>)
          }
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <LogoutButton />
      </div>
    </aside>
  )
}
