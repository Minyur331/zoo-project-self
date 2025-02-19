export default async function postAnimal(payload) {
    const response = fetch ('https://run.mocky.io/v3/78a06006-f259-4471-9f2f-7fe805a573e0', { //ide kell beírni hova küldöd el.
        method: "POST",
        headers: {
            "Content-Type":"Application/json"
         },
        body: JSON.stringify(payload),
    });

    console.log(response);
}