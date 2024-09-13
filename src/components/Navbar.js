import Image from 'next/image'
import React from 'react'
import Dropdown from './Dropdown'
import { DropdownButton } from './DropdownLink'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import Link from 'next/link'

function Navbar() {

  const { logout, user } = useAuth({ middleware: 'auth' })
  const [open, setOpen] = useState(false)

    return (
        <div className="flex items-center justify-between p-4">
            {/* SEARCH BAR */}
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
                <Image src="/search.png" alt="" width={14} height={14} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-[200px] p-2 bg-transparent outline-none border-none focus:border-none focus:ring-0 focus:outline-none"
                />
            </div>
            {/* ICONS AND USER */}
            <div className="flex items-center gap-6 justify-end w-full">
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                    <Image src="/message.png" alt="" width={20} height={20} />
                </div>
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                    <Image
                        src="/announcement.png"
                        alt=""
                        width={20}
                        height={20}
                    />
                    <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
                        1
                    </div>
                </div>
                {/* <div className="flex flex-col">
                    <span className="text-xs leading-3 font-medium">
                        John Doe
                    </span>
                    <span className="text-[10px] text-gray-500 text-right">
                        Admin
                    </span>
                </div> */}
                {/* <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full"/> */}
                {/* Settings Dropdown */}
                <div className="hidden sm:flex sm:items-center sm:ml-6">
                
                    <Dropdown
                        align="right"
                        width="48"
                        trigger={
                            <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                                <div>{user?.name}</div>

                                <div className="ml-1">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </button>
                        }>
                        {/* Authentication */}
                        <div className="w-full ">
                        <Link href="/" className="flex text-left px-4 py-2 text-sm leading-5 text-gray-700">profile</Link>
                        <Link href="/" className="flex text-left px-4 py-2 text-sm leading-5 text-gray-700">settings</Link>
                        <DropdownButton onClick={logout}>Logout</DropdownButton>
                        </div>
                    </Dropdown>
                </div>
                <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full"/>
            </div>
        </div>
    )
}

export default Navbar
