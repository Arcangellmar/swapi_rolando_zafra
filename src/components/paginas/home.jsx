import { useState } from 'react';
import Header from '../moleculas/header';
import Peoples from '../templates/people';
import PeopleSelected from '../templates/people_selected';

function Home() {
    
    const [peopleUrlSelec, setPeopleUrlSelec] = useState("");

    const onSelectCharacter = (value) => {
        setPeopleUrlSelec(value);
    }

    return (
        <div className="container-fluid min-vh-100">
            <Header title="Ravn Star Wars Registry"/>
            <div className="row">
                <div className="col-12 col-md-4 swapi-col">
                    <Peoples onclickCharacter={onSelectCharacter}/>
                </div>
                <div className="col-12 col-md-8 swapi-col">
                    <PeopleSelected peopleUrl={peopleUrlSelec}/>
                </div>
            </div>
        </div>
    );
}

export default Home;