import React from 'react'

import logo from '@app/assets/images/logo-pana.png'

interface LoginProps {
  children: React.ReactNode
}

const Login: React.FC<LoginProps> = (props) => {
  return (
    <div className="w-full p-4 flex items-center justify-center flex-col h-[100vh] bg-[#F5F5F5]">
      <div className="mb-9">
        <img className="max-w-[180px]" src={logo} />
      </div>
      <div
        className="w-full max-w-sm bg-white border border-gray-200 rounded-lg sm:p-6 md:p-8 shadow-md"
        {...props}
      />
    </div>
  )
}

export default Login
