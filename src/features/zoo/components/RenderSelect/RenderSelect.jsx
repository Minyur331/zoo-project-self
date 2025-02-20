const RenderSelect = ({labelText, inputProps,  options}) => {

    const {id, name, required}= inputProps

    return (
        <div className="d-flex flex-column g-1">
            <label htmlFor={id}>
                 {labelText}
            </label>
            <select
                id={id}
                name={name}
                className="block w-full border p-2 mb-2 rounded"
                required={required}
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