import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import ErrorText from '../atomos/error_text';
import PersonaBuscador from '../organismos/persona_buscador';

function Peoples({ onclickCharacter }) {

    const [peoples, setPeoples] = useState([]);
    const [page, setPage] = useState(1);
    const [errorApi, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const isMounted = useRef(true);
  
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        console.log(page);
        const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
        const newData = response.data.results;

        for (const person of newData) {
          const planetResponse = await axios.get(person.homeworld);
          // const updatedPerson = await fetchPerson(person);
          // updatedPeople.push(updatedPerson);
          console.log(planetResponse.data.name);
        }

  
        setPeoples((peopleAntiguo) => [...peopleAntiguo, ...newData]);
        setPage((prevPage) => prevPage + 1);
        setHasMore(newData.length > 0);
      } catch (error) {
        setError(error);
      }

      setLoading(false);
    };

    useEffect(() => {
      if (isMounted.current) {
        fetchCharacters();
        isMounted.current = false;
      }
      }, []);

    const fetchMore = () => {
      if (!isLoading && hasMore) {
        fetchCharacters();
      }
    };

    return (
        <>
            {
              errorApi
              ? <ErrorText />
              : <PersonaBuscador peoples={peoples} onclickCharacter={onclickCharacter} next={fetchMore} hasMore={hasMore} />
            }
        </>
    );
}

export default Peoples;