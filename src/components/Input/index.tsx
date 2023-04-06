import React, { InputHTMLAttributes } from 'react'

import classnames from 'classnames'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = React.forwardRef<any, InputProps>((props, ref) => {
  const { error = null } = props
  return (
    <div className="mb-4">
      <input
        ref={ref}
        {...props}
        className={classnames(
          'shadow appearance-none border border-gray-400/30 font-sm rounded-lg w-full py-2 px-3',
          'text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100/80 min-h-[48px]',
          {
            'border-red-500': !!error,
          },
        )}
      />
      {error && (
        <span className="text-red-500 text-xs italic pt-3">{error}</span>
      )}
    </div>
  )
})

export default Input
