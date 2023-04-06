import React from 'react'

interface AvatarProps {
  name: string
}

const Avatar: React.FC<AvatarProps> = ({ name }) => {
  return (
    <div className="flex h-10 w-10 rounded-full ring-1 ring-gray-300 bg-gray-200 items-center justify-center">
      <span className="font-medium">{name}</span>
    </div>
  )
}

export default Avatar
