function Spinner({ size = 'small', color = 'primary' }) {
  return (
    <div
      className={`${
        size === 'small'
          ? 'h-6 w-6'
          : size === 'medium'
          ? 'h-10 w-10'
          : ' h-16 w-16'
      } animate-spin rounded-full border-2 ${
        color === 'white' ? 'border-white' : 'border-primary-400'
      } border-t-transparent`}
    />
  )
}
export default Spinner
