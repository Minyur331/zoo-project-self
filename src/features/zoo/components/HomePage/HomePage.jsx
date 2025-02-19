import { useLoaderData } from "react-router";
import NavElement from "../NavElement/NavElement";
import ListComponent from "../ListComponent/ListComponent";

const HomePage = () => {

    const article = useLoaderData();

    console.log(article);
    const{title, p01, nev, helyszin,alapitasi_ev}= article[0];

    const listElements = article[1].erdekessegek || [];


    return (
        <div className="container-md d-flex flex-column justify-content-center align-items-center mx-auto mt-5 p-2 text-center border border-4 border-dark">
            <div className="container-md text-start">
                <h1 className="text-center">{title}</h1>
                <NavElement/>

                <section >
                    <p className="mb-0"><strong>Név:</strong> {nev}</p>
                    <p className="mb-0"><strong>Helyszín:</strong> {helyszin}</p>
                    <p ><strong>Alapítási év:</strong> {alapitasi_ev}</p>
                </section>

                <p>{p01}</p>
                <section>
                    <h2>{article[1].title}</h2>
                    {
                         Object.values(article[1].p).map((item, index) => (
                            <p key={index}>{item}</p>
                        ))
                    }
                </section>

                <section className="d-flex flex-column flex-lg-row">
                    <div>
                        <h2>Érdekességek</h2>
                        <ul>
                            {
                               <ListComponent listData={listElements} />
                            }
                        </ul>
                    </div>
                    <img src="../../assets/img/gettyimages-474690025.jpg" alt="zoo" className="container-md"  style={{ width: "100%", height: "auto", objectFit: "cover" }}/>
                    
                </section>

            </div> 
        </div>
    )
}

export default HomePage;
