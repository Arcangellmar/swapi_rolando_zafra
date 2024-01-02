import React, { useState, useEffect } from 'react'
import axios from 'axios';
import LoaderIndicator from '../../atomos/loader_indicator/loader_indicator';
import PersonaResultado from '../../organismos/persona_resultado/persona_resultado';
import LoaderSpinner from '../../atomos/loader_spinner/loader_spinner';
import { UserPeopleUrlSelect } from '../../paginas/home';

const PeopleSelected: React.FC = () => {

  const {peopleUrlSelec} = UserPeopleUrlSelect(); // Se obtiene el valor de la url seleccionada por contexto

  const [data, setData] = useState(null); // Se guarda la data de la persona seleccionada
  const [isLoading, setLoading] = useState(false); // Se guarda el estado (esta cargando o ya se obtuvo los datos)

  // Obtiene los datos de la persona seleccionada
  const fetchPeople = async () => {
    try{
      if (peopleUrlSelec != undefined) {
        setLoading(true);

        const response = await axios.get(decodeURIComponent(peopleUrlSelec));
        const newData = response.data;

        newData.vehiclesResponse = [];

		// Se espera mas, pero se obtiene la data de los vehiculos
        for (const vehicle of newData.vehicles) {
          const vehicleResponse = await axios.get(vehicle);
          
          newData.vehiclesResponse.push(vehicleResponse.data);
        }

        setData(newData);
      }

    }
    catch(error){
      console.log(error);
    }
    
    setLoading(false);
  };

  // Si se selecciono una url de persona, obtiene los datos del personaje
  useEffect(() => {
    if (peopleUrlSelec) {
      fetchPeople();
    }
  }, [peopleUrlSelec]);

  return (
    <>
      {
        peopleUrlSelec
          ? isLoading
            ? <>
				{/* Se muestra un loader como elemento y un spinner como background para que no seleccione mas de un personaje */}
                <div className="min-vh-100">
                  <LoaderIndicator />
                </div>
                <LoaderSpinner />
              </>
            : <PersonaResultado data={data} />
          : <></>
      }
    </>
  );
}

export default PeopleSelected;