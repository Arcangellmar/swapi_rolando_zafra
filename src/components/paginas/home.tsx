import { useState } from 'react';
import { Outlet, useOutletContext } from "react-router-dom";
import Header from '../moleculas/header';
import Peoples from '../templates/people';
import PeopleSelected from '../templates/people_selected';

type ContextType = { peopleUrlSelec: string | null };

function Home() {
    
    const [peopleUrlSelec, setPeopleUrlSelec] = useState("");

    const onSelectCharacter = (value: string) => {
        setPeopleUrlSelec(value);
    }

    return (
        <div className="container-fluid min-vh-100">
            <Header title="Ravn Star Wars Registry"/>
            <div className="row">
                <div className="col-12 col-md-4 swapi-col">
                    <Peoples onclickCharacter={onSelectCharacter}/>
                </div>
                
                <Outlet context={{ peopleUrlSelec } satisfies ContextType}></Outlet>
            </div>
        </div>
    );
}

export default Home;



export function UserPeopleUrlSelect() {
    return useOutletContext<ContextType>();
}