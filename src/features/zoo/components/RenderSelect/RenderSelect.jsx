const RenderSelect = (label, name, value, options, onChange) => {
    return (
        <div className="d-flex flex-column g-1">
            <label>
                {label}
            </label>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="block w-full border p-2 mb-2 rounded"
            >
                <option value="" hidden>Válassz gondozót...</option>
                {options.map((option, index) => (
                    <option key={index} value={option.name}>{option.name}</option>
                ))}
            </select>
            
        </div>

    )
}
export default RenderSelect;