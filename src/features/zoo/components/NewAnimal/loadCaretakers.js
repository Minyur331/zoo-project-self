export default async function loadCaretakers() {
    let data;

    try {
        const response = await fetch('../../assets/json/caretaker.json');

        if (!response.ok) {
            throw new Error('A kért adat nem elérhető.');
        }

        try {
            data = await response.json();
        } catch (err) {
            throw new Error('A kért adat nem elérhető vagy korrupt.');
        }

    } catch (err) {
        console.error(err);
        throw err;
    }

    return data;
}