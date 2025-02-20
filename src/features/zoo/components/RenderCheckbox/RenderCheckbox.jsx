import { useState } from "react";

const RenderCheckbox = ({ labelText, id, name, options }) => {
    const [selectedValues, setSelectedValues] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        setSelectedValues((prevSelected) =>
            checked ? [...prevSelected, value] : prevSelected.filter((v) => v !== value)
        );

    };


    return (
        <div className="d-flex flex-column g-1">
            <label htmlFor={id}>{labelText}</label>
            {options.map((option, index) => (
                <div >
                    <input className="d-flex flex-row gap-1" key={index}
                        type="checkbox"
                        id={`${id}-${index}`}
                        name={name}
                        value={option}
                        className="block w-full border p-2 rounded"
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor={`${id}-${index}`}>{option}</label>
                </div>
            ))}
            
            <div className="mt-2">
                <strong>Kiválasztott értékek:</strong> {selectedValues.join(", ")}
            </div>
        </div>
    );
};

export default RenderCheckbox;