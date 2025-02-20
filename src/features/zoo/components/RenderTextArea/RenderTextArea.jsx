const RenderTextarea = ({labelText, id, name,rows, cols, type = "textarea", defaultValue}) => {
    return (
        <div className="d-flex flex-column g-1">
            <label htmlFor={id}>{labelText}</label>
            <textarea
                id={id}
                type={type}
                name={name}
                rows={rows}
                cols={cols}
                className="block w-full border p-2 rounded mb-2"
                defaultValue={defaultValue}

            >
            </textarea>
                
        </div>
    )
}
export default RenderTextarea;
