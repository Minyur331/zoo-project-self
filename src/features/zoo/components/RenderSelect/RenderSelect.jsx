const RenderSelect = ({labelText, name,  options}) => {
    return (
        <div className="d-flex flex-column g-1">
            <label htmlFor={name}>
                 {labelText}
            </label>
            <select
                id={name}
                name={name}
                className="block w-full border p-2 mb-2 rounded"
                defaultValue=""
                required
            >
                <option value="" disabled hidden>Válassz gondozót...</option>
                {options.map((option, index) => (
                    <option key={index} value={option.name}>{option.name}</option>
                ))}
            </select>
            
        </div>

    )
}
export default RenderSelect;