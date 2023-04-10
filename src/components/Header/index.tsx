import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useAuth } from '@app/hooks/auth';
import Avatar from '@app/components/Avatar';
import { Link } from 'wouter';
import logo from '@app/assets/images/logo-pana.png';
import { FiHome, FiFileText, FiUpload } from 'react-icons/fi';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const Header: React.FC = () => {
  const signOut = useAuth((auth) => auth.signOut);

  return (
    <header className="flex justify-between h-auto bg-white p-4 px-7">
      <ReactTooltip />
      <h1 className="text-3xl font-bold mt-0 mb-0">
        <Link href="/" data-tip="Voltar para a página inicial">
          <a className="active">
            <img src={logo} className="w-24" alt="Logo da Paulista" />
          </a>
        </Link>
      </h1>

      <div className="menu flex items-center gap-4">
        <Link to="/" className="font-medium text-sm text-blue-500 cursor-pointer flex items-center" style={{ textDecoration: 'none' }}>
          <FiHome className="mr-1" />
          Dashboard
        </Link>
        <Link to="/relatorio" className="font-medium text-sm text-blue-500 cursor-pointer flex items-center" style={{ textDecoration: 'none' }}>
          <FiFileText className="mr-1" />
          Relatório
        </Link>
        <Link to="/upload" className="font-medium text-sm text-blue-500 cursor-pointer flex items-center" style={{ textDecoration: 'none' }}>
          <FiUpload className="mr-1" />
          Upload
        </Link>

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
      </div>
    </header>
  );
};

export default Header;
