const renderField = ({ input, label, type, step, min, value, defaultValue, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} step={step} min={min} value={value} defaultValue={defaultValue} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

  export default renderField;