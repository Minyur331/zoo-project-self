import { useState } from "react";

const RenderColor = ({labelText, id, name, type = "color", defaultValue}) => {

    const [value, setValue] = useState(defaultValue);

    console.log(value);

    return (
        <div className="d-flex flex-column g-1">
            <label htmlFor={id}>{labelText}</label>
            <input
                id={id}
                type={type}
                name={name}
                className="block w-full border p-2 rounded mb-2"
                value={value}
                defaultValue={defaultValue}
                onChange={(e) => setValue(e.target.value)}
                required
            />
                
        </div>
    )
}
export default RenderColor;
