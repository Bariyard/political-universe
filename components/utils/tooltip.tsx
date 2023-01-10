import React, { useState, useRef } from 'react'
import useOnClickOutside from './useOnClickOutside'

type Props = {
  className?: string
  children?: JSX.Element
  content?: JSX.Element
  closeButton?: JSX.Element
  closePosition: 'top' | 'bottom'
}

const Tooltip = ({ className, children, content, closeButton, closePosition }: Props) => {
  const [show, setShow] = useState(false)

  const tooltipRef = useRef<null | HTMLDivElement>(null)
  useOnClickOutside(tooltipRef, () => setShow(false))

  return (
    <div className={`${className} relative`} onClick={() => setShow(!show)}
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}>
      <div className='pointer'>{children}</div>
      <div className='relative flex justify-center'>
        <div className='absolute -bottom-3' ref={tooltipRef}>
          <div className={`relative flex justify-center items-center ${show ? 'visible block' : 'invisible hidden'} transition-all
         w-screen
         desktop:max-w-[895px]  `}>
            {content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tooltip
