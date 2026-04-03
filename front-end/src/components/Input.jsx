function Input({ type, placeholder, name, onChange, value, disabled, className }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
            disabled={disabled}
            className={className} // 👈 ESSA LINHA RESOLVE
        />
    );
}

export default Input;