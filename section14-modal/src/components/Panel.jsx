import React from 'react'
import classNames from 'classnames'

const Panel = ({ children, className, ...rest }) => {
  const finalClassName = classNames('w-full p-3 bg-white border rounded shadow', 
  className
  )

  return (
    <div {...rest} className={finalClassName}>{children}</div>
  )
}

export default Panel