import className from 'classnames'
import PropTypes from 'prop-types'

const Button = ({ 
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
  }) => {

  const classes = className(rest.className,'flex items-center justify-center w-48 h-24 px-4 py-2 mb-2 ', {
    'text-lg duration-500 bg-blue-300 border-blue-600 hover:bg-blue-500': primary,
    'text-lg duration-500 bg-yellow-300 border-yellow-600 hover:bg-yellow-500': secondary, 
    'text-lg duration-500 bg-green-300 border-green-600 hover:bg-green-500': success,
    'text-lg duration-500 bg-pink-300 border-pink-600 hover:bg-pink-500': warning, 
    'text-lg duration-500 bg-red-300 border-red-600 hover:bg-red-500': danger,
    'border border-2 bg-white': outline,
    'rounded-full': rounded,
    'text-blue-500': primary && outline,
    'text-yellow-500': secondary && outline,
    'text-green-500': success && outline,
    'text-pink-500': warning && outline,
    'text-red-500': danger && outline,
  })

  return (
    <button {...rest} className={classes} >{ children }</button>
  )
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger, onClick }) => {
    const count = Number(!!primary)
      + Number(!!secondary)
      + Number(!!success)
      + Number(!!warning)
      + Number(!!danger)

    if (count > 1) {
      return new Error('only one of Primary, Secondary, Success, Warning, Danger can be true')
  }
}
}
export default Button 


