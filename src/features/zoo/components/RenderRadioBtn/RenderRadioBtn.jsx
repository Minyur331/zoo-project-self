
const RenderRadioBtn = ({ labelText, inputProps, options }) => {

    const {id, name, required}= inputProps

    return (
        <div className="d-flex flex-column g-1">
            <label htmlFor={id}>{labelText}</label>
            {options.map((option, index) => (
                <div >
                    <input className="d-flex flex-row gap-1" key={index}
                        type="radio"
                        id={`${id}-${index}`}
                        name={name}
                        value={option}
                        className="block w-full border p-2 rounded"
                        required={required}
                    />
                    <label htmlFor={`${id}-${index}`}>{option}</label>
                </div>
            ))}
            
        </div>
    );
};

export default RenderRadioBtn;