import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import ErrorText from '../atomos/error_text';
import PersonaBuscador from '../organismos/persona_buscador';
import PersonaProps from '../../interfaces/persona_props';

interface PeoplesProps {
  onclickCharacter: (url: string, namePersonajeSelected: string) => void;
}

const Peoples: React.FC<PeoplesProps> = ({ onclickCharacter }) => {

    const [peoples, setPeoples] = useState<PersonaProps[]>([]);
    const [page, setPage] = useState(1);
    const [errorApi, setError] = useState<string | null>(null);
    const [isLoading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const isMounted = useRef(true);
  
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
        const newData = response.data.results;

        const newDataModify : PersonaProps[] = [];

        for (const person of newData) {
          const planetResponse = await axios.get(person.homeworld);

          person.planetResponse = planetResponse;

          // Por defecto humano
          const specieResponse = await axios.get(person.species[0] || "https://swapi.dev/api/species/1/");
          person.speciesResponse = specieResponse;

          newDataModify.push(person);
        }

  
        setPeoples((peopleAntiguo) => [...peopleAntiguo, ...newDataModify]);
        setPage((prevPage) => prevPage + 1);
        setHasMore(newData.length > 0);
      }
      catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
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