import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import AlertCard from "../../../../global/AlertCard";
import { useImmer } from "use-immer";
import postAnimal from "./postAnimal";
import RenderInput from "../RenderInput/RenderInput";
import RenderSelect from "../RenderSelect/RenderSelect";

const NewAnimal = () => {
    const navigate = useNavigate();
    const caretakers = useLoaderData();

    const [formData, setFormData] = useState({
        nev: "",
        faj: "",
        erkezes: "",
        helye: "",
        gondozo: ""
    });

    const [alerts, setAlerts] = useImmer([]);

    useEffect(() => {
        setFormData(prevData => ({
            ...prevData,
            erkezes: new Date().toISOString().split('T')[0],
        }));
    }, []);

    const handleChange = ({ target: { name, value } }) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await postAnimal(formData);
            
            if (!response.ok) {
                throw new Error(`Szerverhiba: ${response.status} - ${response.statusText}`);
            }
            
            alert("Új állat hozzáadva!");
            navigate('/allataink'); 
        } catch (error) {
            console.error("Hiba történt az állat hozzáadásakor:", error);
            alert("Hiba történt az állat hozzáadásakor. Ellenőrizd a szerver elérhetőségét vagy a beállításokat!");
            setAlerts(draft => {
                draft.push(<AlertCard message={`${error}`} type='danger'/>);
            });
        }
    };

    return (
        <div className="container-md border border-4 border-dark p-4" style={{ maxWidth: "600px" }}>
            <h2 className="text-xl font-bold mb-4 text-center">Új állat regisztrálása</h2>
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
                {RenderInput("Új állat neve:", "nev", formData.nev, handleChange)}
                {RenderInput("Faja az állatnak:", "faj", formData.faj, handleChange)}
                {RenderInput("Érkezés dátuma:", "erkezes", formData.erkezes, handleChange, "date")}
                {RenderInput("Helye az állatkertben:", "helye", formData.helye, handleChange)}
                {RenderSelect("Gondozója:", "gondozo", formData.gondozo, caretakers, handleChange)}
                <div className="d-flex justify-content-center">
                    <button type="submit" className="mt-4 btn btn-primary text-white px-4 py-2 rounded">
                        Felvétel
                    </button>
                </div>
                {alerts}

            </form>
        </div>
    );
};


export default NewAnimal;
