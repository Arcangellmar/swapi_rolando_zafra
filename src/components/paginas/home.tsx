import { useState, useEffect } from 'react';
import { Outlet, useOutletContext } from "react-router-dom";
import Header from '../moleculas/header';
import Peoples from '../templates/people';

type ContextType = { peopleUrlSelec: string | null };

function Home() {
    
    const [peopleUrlSelec, setPeopleUrlSelec] = useState(""); // Almacena el url del personaje seleccionado
    const [peopleNameSelec, setPeopleNameSelec] = useState(""); // Almacena el nombre del personaje seleccionado
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Se utilizara para saber el ancho de la pantalla y asi mostrar el titulo de la pagina

    const onSelectCharacter = (value: string, namePersonajeSelected: string) => {
        setPeopleUrlSelec(value);
        setPeopleNameSelec(namePersonajeSelected);
    }

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getTitle = () => windowWidth < 768 ? 'People of Star Wars' : 'Ravn Star Wars Registry';

    return (
        <div className="container-fluid min-vh-100">
            <Header titulo={getTitle()} onBackButton={setPeopleUrlSelec} nombrePersonajeSelecionado={peopleNameSelec} clearNamePeopleSelected={setPeopleNameSelec}/>
            <div className="row pt-5">
                <div className="col-12 col-md-4 sw-col sw-border-right">
                    <Peoples onclickCharacter={onSelectCharacter}/>
                </div>
                
                {/* Se pasara el url del personaje seleccionado por contexto */}
                <Outlet context={{ peopleUrlSelec } satisfies ContextType}></Outlet>
            </div>
        </div>
    );
}

export default Home;


export const UserPeopleUrlSelect = () => useOutletContext<ContextType>();
