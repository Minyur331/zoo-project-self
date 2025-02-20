const RenderInputDate = ({labelText, id, name, type = "date"}) => {
    return (
        <div className="d-flex flex-column g-1">
            <label htmlFor={id}>{labelText}</label>
            <input
                id={id}
                type={type}
                name={name}
                className="block w-full border p-2 rounded mb-2"
                defaultValue={(new Date()).toISOString().split('T')[0]}
                required
            />
                
        </div>
    )
}
export default RenderInputDate
