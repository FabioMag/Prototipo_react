import React from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { useAuth } from '@app/hooks/auth'

import Avatar from '@app/components/Avatar'

import { Link } from 'wouter'

import logo from '@app/assets/images/logo-pana.png'

const Header: React.FC = () => {
  const signOut = useAuth((auth) => auth.signOut)

  return (
    <header className="flex  justify-between h-auto bg-white p-4 px-7">
      <h1 className="text-3xl font-bold mt-0 mb-0">
        <Link href="/">
          <a className="active">
            <img src={logo} className="w-24" alt="Logo da Paulista" />
          </a>
        </Link>
      </h1>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <div className="menu flex justify-between items-center gap-4 cursor-pointer">
            <p className="font-medium text-sm text-blue-500">Olá, Admin</p>
            <Avatar name="AD" />
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="bg-white p-4 shadow-md rounded-md min-w-[100px]"
            sideOffset={5}
            align="center"
          >
            <DropdownMenu.Item
              className="font-normal text-md outline-none cursor-pointer hover:text-gray-400"
              onClick={signOut}
            >
              Sair
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </header>
  )
}

export default Header
