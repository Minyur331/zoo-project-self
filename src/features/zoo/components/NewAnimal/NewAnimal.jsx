import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import AlertCard from "../../../../global/AlertCard";
import { useImmer } from "use-immer";
import postAnimal from "./postAnimal";
import RenderInput from "../RenderInput/RenderInput";
import RenderSelect from "../RenderSelect/RenderSelect";
import RenderCheckbox from "../RenderCheckbox/RenderCheckbox";
import RenderRange from "../RenderRange/RenderRange";
import RenderRadioBtn from "../RenderRadioBtn/RenderRadioBtn";
import RenderInputDate from "../RenderInputDate/RenderInputDate";
import RenderTextarea from "../RenderTextArea/RenderTextArea";
import RenderColor from "../RenderColor/RenderColor";

const NewAnimal = () => {
    const navigate = useNavigate();
    const caretakers = useLoaderData();
    const gender =["lány", "fiú"] ;
    const preference = ["hal", "fű", "gyümölcs"]


    const [alerts, setAlerts] = useImmer([]);

    /*useEffect(() => {
        setFormData(prevData => ({
            ...prevData,
            erkezes: new Date().toISOString().split('T')[0],
        }));
    }, []);*/


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formValues = Array.from(formData.entries());


        console.log(formValues);

        const formObj = formValues.reduce((acc, [key, value]) => {
            if (acc[key]) {
                // Ha már létezik, hozzáadjuk az új értéket a tömbhöz
                acc[key].push(value);
            } else {
                // Ha még nem létezik, létrehozzuk a kulcsot és berakjuk az első értéket egy tömbbe
                acc[key] = [value];
            }
            return acc;
        }, {});

        console.log(formObj);

        try {
            await postAnimal(formObj);
            navigate('/allataink'); 
            console.log('Sikerült a mentés');
        }
        catch (err) {
            setAlerts(draft => {
                draft.push(<AlertCard  message={`${err}`} type='danger'/> )
                alert("Hiba történt az állat hozzáadásakor. Ellenőrizd a szerver elérhetőségét vagy a beállításokat!");
            });
        }

        
        /*try {
            const response = await postAnimal(formData);
            console.log(formObj);
            
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
        }*/
    };

    return (
        <div className="container-md border border-4 border-dark p-4" style={{ maxWidth: "600px" }}>
            <h2 className="text-xl font-bold mb-4 text-center">Új állat regisztrálása</h2>
            <form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
                <RenderInput 
                    labelText="Új állat neve:" 
                    id="name"
                    name="nev" 
                />

                <RenderInput 
                    labelText="Faja az állatnak:" 
                    id="species"
                    name="faj" 
                />

                <RenderInputDate
                    labelText="Érkezés dátuma:" 
                    id="arrival-date"
                    name="erkezes" 
                />

                <RenderInput 
                    labelText="Helye az állatkertben:" 
                    name="helye" 
                />

                <RenderSelect 
                    labelText="Gondozója:" 
                    name="gondozo" 
                    options={caretakers} 
                />
                <RenderCheckbox 
                    labelText="Preferált étel:"
                    id="preferences" 
                    name="pref" 
                    options={preference} 

                />
                <RenderRange
                    labelText="Egészség:" 
                    id="health"
                    name="egeszseg" 
                    min="1"
                    max="10"
                />
                <RenderRadioBtn
                    labelText="Neme:"
                    id="gender" 
                    name="neme" 
                    options={gender} 
                />
                <RenderColor
                    labelText="Színkód:"
                    id="color" 
                    name="color" 
                    defaultValue="#e66465"
                />
                <RenderTextarea
                    labelText="Megjegyzés"
                    id="comment" 
                    name="megjegyzes"    
                    rows="5"
        
                />



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
