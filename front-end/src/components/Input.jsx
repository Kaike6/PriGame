function Input({ type, placeholder, name, onChange, value, disabled }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
            disabled={disabled} // 👈 ESSA LINHA RESOLVE
        />
    );
}

export default Input;