import React from 'react'

import Header from '@app/components/Header'

interface DashboardProps {
  children: React.ReactNode
}

const Dashboard: React.FC<DashboardProps> = (props) => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header />
      <div className="py-4 px-4 lg:px-0 xl:px-4">
        <main
          className="container h-auto my-0 mx-auto pt-10 md:pt-16"
          {...props}
        />
      </div>
    </div>
  )
}

export default Dashboard
