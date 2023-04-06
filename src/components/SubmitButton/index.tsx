import React, { useMemo } from 'react'

import { Button, ButtonProps } from '@mantine/core'

import ReactLoading from 'react-loading'

interface SubmitButtonProps extends ButtonProps {
  isLoading?: boolean
  onClick?: () => void
}

const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  const { isLoading, ...rest } = props

  const renderChildren = useMemo(() => {
    if (isLoading) {
      return (
        <ReactLoading
          className="mx-auto my-0"
          type="spin"
          color="white"
          height={25}
          width={30}
        />
      )
    }

    return props.children
  }, [isLoading, props.children])

  return (
    <Button type="submit" h="48px" {...rest}>
      {renderChildren}
    </Button>
  )
}

export default SubmitButton
