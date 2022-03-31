function InputForm({
  label,
  id,
  register,
  errors,
  select,
  options,
  className,
  ...restProps
}) {
  return (
    <div className="flex flex-col text-left">
      <label className="mb-1">{label}</label>
      {!select ? (
        <input
          {...restProps}
          {...register(id, { required: 'Campo requerido' })}
          className={`${
            errors[id] &&
            'border-red-600 focus:border-red-600 focus:ring-red-600'
          } ${className}`}
        />
      ) : (
        <select
          {...register(id, { required: 'Campo requerido' })}
          className={`${
            errors[id] &&
            'border-red-600 focus:border-red-600 focus:ring-red-600'
          } ${className}`}
        >
          {options.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      )}
      {errors[id] && <p className="text-red-600">{errors[id].message}</p>}
    </div>
  )
}

export default InputForm
