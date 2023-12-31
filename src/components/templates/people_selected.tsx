import React, { useState, useEffect } from 'react'
import { useParams, useOutletContext } from "react-router-dom";
import axios from 'axios';
import Loader from '../atomos/loader';
import PersonaResultado from '../organismos/persona_resultado';
import LoaderSpinner from '../atomos/loader_spinner';
import { UserPeopleUrlSelect } from '../paginas/home';

const PeopleSelected: React.FC = () => {
  const {peopleUrlSelec} = UserPeopleUrlSelect();

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const fetchPeople = async () => {
    try{
      if (peopleUrlSelec != undefined) {
        setLoading(true);

        const response = await axios.get(decodeURIComponent(peopleUrlSelec));
        const newData = response.data;

        newData.vehiclesResponse = [];

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
                <Loader />
                <LoaderSpinner />
              </>
            : <PersonaResultado data={data} />
          : <></>
      }
    </>
  );
}

export default PeopleSelected;