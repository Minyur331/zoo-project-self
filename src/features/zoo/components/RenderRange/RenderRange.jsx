import { useState } from "react";

const RenderRange = ({ labelText, id, name, min, max, type = "range", defaultValue = 5 }) => {
    const [value, setValue] = useState(defaultValue);

    return (
        <div className="d-flex flex-column g-1">
            <label htmlFor={id}>
                {labelText} <span>{value}</span>
            </label>
            <input
                type={type}
                id={id}
                name={name}
                min={min}
                max={max}
                step="1"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="block w-full border p-2 rounded mb-2"
                required
            />
        </div>
    );
};

export default RenderRange;
