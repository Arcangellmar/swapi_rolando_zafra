import { useState, useEffect } from 'react';
import { Outlet, useOutletContext } from "react-router-dom";
import Header from '../moleculas/header';
import Peoples from '../templates/people';

type ContextType = { peopleUrlSelec: string | null };

function Home() {
    
    const [peopleUrlSelec, setPeopleUrlSelec] = useState("");
    const [peopleNameSelec, setPeopleNameSelec] = useState("");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const onSelectCharacter = (value: string, namePersonajeSelected: string) => {
        setPeopleUrlSelec(value);
        setPeopleNameSelec(namePersonajeSelected);
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getTitle = () => windowWidth < 768 ? 'People of Star Wars' : 'Ravn Star Wars Registry';

    return (
        <div className="container-fluid min-vh-100">
            <Header title={getTitle()} onBackButton={setPeopleUrlSelec} peopleNameSelec={peopleNameSelec} clearNamePeopleSelected={setPeopleNameSelec}/>
            <div className="row pt-5">
                <div className="col-12 col-md-4 sw-col sw-border-right">
                    <Peoples onclickCharacter={onSelectCharacter}/>
                </div>
                
                <Outlet context={{ peopleUrlSelec } satisfies ContextType}></Outlet>
            </div>
        </div>
    );
}

export default Home;


export const UserPeopleUrlSelect = () => useOutletContext<ContextType>();
