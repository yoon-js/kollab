function InputField({ className, label, id, type, name, placeholder, required, min, max, maxLength, textarea, select, options }) {
    const InputType = textarea ? "textarea" : select ? "select" : "input"

    return (
        <div className="field-group">
            <label htmlFor={id}>{label}</label>
            <InputType
                className={className}
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
                min={min}
                max={max}
                maxLength={ maxLength }
            >
                {select && options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
            </InputType>
            <p></p>
        </div>
    );
}

export default InputField;