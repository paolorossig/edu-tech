import Spinner from './Spinner'
import { contrastColors, hoverColors } from '@/utils/colors'

function Button({
  children,
  color = 'primary',
  isLoading,
  variant = 'solid',
  ...restProps
}) {
  const contrastColor = contrastColors[color] || 'black'
  const hoverColor = hoverColors[color] || 'gray-400'
  const colorClasses =
    variant === 'solid'
      ? `bg-${color} hover:bg-${hoverColor}`
      : `bg-white hover:bg-gray-100`
  const contentColor = variant === 'solid' ? contrastColor : color

  return (
    <button
      {...restProps}
      className={`flex justify-center rounded-xl border border-${color} py-2 px-4 text-${contentColor} ${colorClasses}`}
    >
      {isLoading ? <Spinner color={contentColor} /> : children}
    </button>
  )
}

export default Button
