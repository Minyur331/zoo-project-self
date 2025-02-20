const RenderTextarea = ({labelText, inputProps }) => {
    const {id, name, rows, cols, defaultValue}= inputProps
    return (
        <div className="d-flex flex-column g-1">
            <label htmlFor={id}>{labelText}</label>
            <textarea
                id={id}
                type="textarea"
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
