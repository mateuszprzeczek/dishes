const renderField = ({ input, label, type, step, min, max, value, defaultValue, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} step={step} min={min} max={max} value={value} defaultValue={defaultValue} type={type}/>
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)

  export default renderField;