function Spinner({ size = 'small', color = 'primary' }) {
  const sizeClasess = {
    small: 'h-6 w-6',
    medium: 'h-10 w-10',
    large: 'h-16 w-16'
  }

  return (
    <div
      className={`${sizeClasess[size]} animate-spin rounded-full border-2 border-${color}-400 border-t-transparent`}
    />
  )
}
export default Spinner
