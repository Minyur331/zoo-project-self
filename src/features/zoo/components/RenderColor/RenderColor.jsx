import { useState } from "react";

const RenderColor = ({labelText, inputProps}) => {

    const {id, name, defaultValue, required}= inputProps;

    const [value, setValue] = useState(defaultValue);

    return (
        <div className="d-flex flex-column g-1">
            <label htmlFor={id}>{labelText}</label>
            <input
                id={id}
                type="color"
                name={name}
                className="block w-full border p-2 rounded mb-2"
                value={value}
                defaultValue={defaultValue}
                onChange={(e) => setValue(e.target.value)}
                required={required}
            />
                
        </div>
    )
}
export default RenderColor;
