import { useLoaderData } from "react-router";

const OurAnimals = () => {
    let animals = useLoaderData();


    if (!animals || animals.length === 0) {
        return <p>Nincsenek elérhető állatok.</p>;
    }

    const tableHeaders = [
        { key: 'name', friendlyName: 'Neve' },
        { key: 'species', friendlyName: 'Faja' },
        { key: 'caretaker', friendlyName: 'Gondozója' },
        { key: 'location', friendlyName: 'Helye az állatkertben' },
        { key: 'arrivalDate', friendlyName: 'Érkezése' },
    ];
    return (
        <div className="container-md d-flex flex-column justify-content-center align-items-center mx-auto mt-5 p-2 text-center border border-4 border-dark">
            <h1>Állatkertünk jelenlegi lakói</h1>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                        {tableHeaders.map((header, index) => (
                            <th key={index}>{header.friendlyName}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {animals.map((animal, animalIndex) => (

                        <tr key={animalIndex}>

                            {tableHeaders.map((header, headerIndex) => (
                                <td key={`${animalIndex}-${headerIndex}`}>{animal[header.key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OurAnimals;
