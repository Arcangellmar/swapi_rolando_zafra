import React, { useState, useEffect, useRef } from 'react'
import NoticeHeader from '../../atomos/notice_header/notice_header';
import PersonaBuscador from '../../organismos/persona_buscador/persona_buscador';
import PersonaProps from '../../../interfaces/persona_props';
import { getUrlAxios } from '../../../api/api';

interface PeoplesProps {
  onclickCharacter: (url: string, namePersonajeSelected: string) => void;
}

const Peoples: React.FC<PeoplesProps> = ({ onclickCharacter }) => {

    const [peoples, setPeoples] = useState<PersonaProps[]>([]); // Almacena la lista de personajes seleccionables
    const [page, setPage] = useState(1); // Almacena la pagina actual de la api (inicia en 1)
    const [errorApi, setError] = useState<string | null>(null); // Almacena en caso hubiera error
    const [isLoading, setLoading] = useState(false); // Almacena el estado de la carga o si ya cargo
    const [hasMore, setHasMore] = useState(true); // Almacena si hay mas personajes para cargar
    const isMounted = useRef(true); // Por defecto se lanza 2 veces el init en react, con esto evito que se llame 2 veces el fetch
  
    // Obtiene la lista de personajes
    const fetchCharacters = async () => {
		try {
			setLoading(true);
			const response = await getUrlAxios(`https://swapi.dev/api/people/?page=${page}`);
			const newData = response.data.results;

			const newDataModify : PersonaProps[] = [];

			// Demora mas pero obtiene toda la data que se necesita de frente
			for (const person of newData) {
				const planetResponse = await getUrlAxios(person.homeworld);

				person.planetResponse = planetResponse;

				// Por defecto humano
				const specieResponse = await getUrlAxios(person.species[0] || "https://swapi.dev/api/species/1/");
				person.speciesResponse = specieResponse;

				newDataModify.push(person);
			}


			// Se agrega la nueva data a la lista de personajes
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
              ? <NoticeHeader />
              : <PersonaBuscador peoples={peoples} onclickCharacter={onclickCharacter} next={fetchMore} hasMore={hasMore} />
            }
        </>
    );
}

export default Peoples;