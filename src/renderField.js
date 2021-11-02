const renderField = ({
    input,
    label,
    type,
    step,
    min,
    max,
    value,
    defaultValue,
    meta: { touched, error, warning },
}) => (
    <div>
        <label>{label}</label>
        <div>
            <input
                {...input}
                placeholder={label}
                step={step}
                min={min}
                max={max}
                value={value}
                defaultValue={defaultValue}
                type={type}
            />
            {touched &&
        ((error && <span style={{color: 'red'}}>{error}</span>) ||
          (warning && <span>{warning}</span>))}
        </div>
    </div>
);

export default renderField;
