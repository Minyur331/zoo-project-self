export default async function loadAnimals() {

    let data;

    try {
        const response = await fetch ('../../assets/json/animals.json') ///megadott link / allatok.json
        try{
            data = await response.json();
        }
        catch(err){
            throw new Error('A kért adat nem elérhető vagy korrupt.')
        }

        await new Promise((resolve, reject)=> {
            setTimeout(()=> resolve(), 2000);
        });
    }
    catch(err){
        console.log(err);

    }

    return data;
}