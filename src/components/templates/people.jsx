import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from '../atomos/loader';
import ErrorText from '../atomos/error_text';
import PersonaBuscador from '../organismos/persona_buscador';

function Peoples({ onclickCharacter }) {

    const [next, setNext] = useState("https://swapi.dev/api/people/");
    const [errorApi, setError] = useState("");
    const [peoples, setPeoples] = useState([]);
    const [isLoading, setLoading] = useState(true);
  
    const fetchCharacters = async () => {
      try {
        
        console.log(next);
        const response = await axios.get(next);

        console.log(response);

        setNext(response.data.next);
        setPeoples(response.data.results);
      } catch (error) {
        setError(error);
        console.error('Error fetching data from SWAPI:', error);
      }
      setLoading(false);
    };

    useEffect(() => {
        fetchCharacters();
      }, []);

    return (
        <>
            {
                isLoading 
                  ? <Loader />
                  : errorApi
                    ? <ErrorText />
                    : <PersonaBduscador peoples={peoples} onclickCharacter={onclickCharacter} fetchCharacters={fetchCharacters}/>
            }
        </>
    );
}

export default Peoples;