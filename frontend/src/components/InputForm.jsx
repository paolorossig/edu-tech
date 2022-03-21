function InputForm({
  label,
  id,
  register,
  errors,
  select,
  children,
  ...restProps
}) {
  return (
    <div className="flex flex-col text-left">
      <label>{label}</label>
      {!select ? (
        <input
          {...restProps}
          {...register(id, { required: 'Campo requerido' })}
          className={`${
            errors[id] &&
            'border-red-600 focus:border-red-600 focus:ring-red-600'
          }`}
        />
      ) : (
        <select
          {...register(id, { required: 'Campo requerido' })}
          className={`${
            errors[id] &&
            'border-red-600 focus:border-red-600 focus:ring-red-600'
          }`}
        >
          {children}
        </select>
      )}
      {errors[id] && <p className="text-red-600">{errors[id].message}</p>}
    </div>
  )
}

export default InputForm
