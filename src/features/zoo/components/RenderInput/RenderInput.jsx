const RenderInput = (label, name, value, onChange, type = "text") => {
    return (
        <div className="d-flex flex-column g-1">
            <label>
            {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="block w-full border p-2 rounded mb-2"
                required
            />
                
        </div>
    )
}
export default RenderInput
