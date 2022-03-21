import Spinner from './Spinner'

function Button({
  children,
  color = 'primary',
  isLoading,
  variant = 'solid',
  className,
  ...restProps
}) {
  const baseColor = `${color}-400`
  const hoverColor = `${color}-900`

  const colorClasses =
    variant === 'solid'
      ? `bg-${baseColor} hover:bg-${hoverColor}`
      : `bg-white hover:bg-gray-100`
  const contentColor = variant === 'solid' ? 'white' : baseColor

  return (
    <button
      {...restProps}
      className={`flex justify-center rounded-xl border border-${baseColor} py-2 px-4 text-${contentColor} ${colorClasses} ${className}`}
    >
      {isLoading ? <Spinner color={contentColor} /> : children}
    </button>
  )
}

export default Button
