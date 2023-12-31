import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loader from '../atomos/loader';
import PersonaResultado from '../organismos/persona_resultado';
import LoaderSpinner from '../atomos/loader_spinner';

interface PeopleSelectedProps {
  peopleUrl: string
}


const PeopleSelected: React.FC<PeopleSelectedProps> = ({ peopleUrl }) => {

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const fetchPeople = async () => {
    try{
      setLoading(true);

      const response = await axios.get(peopleUrl);
      const newData = response.data;

      newData.vehiclesResponse = [];

      for (const vehicle of newData.vehicles) {
        const vehicleResponse = await axios.get(vehicle);
        
        newData.vehiclesResponse.push(vehicleResponse.data);
      }

      setData(newData);

    }
    catch(error){
      console.log(error);
    }
    
    setLoading(false);
  };

  
  useEffect(() => {
    if (peopleUrl) {
      fetchPeople();
    }
  }, [peopleUrl]);

  return (
    <div>
      {
        peopleUrl
          ? isLoading
            ? <>
                <Loader />
                <LoaderSpinner />
              </>
            : <PersonaResultado data={data} />
          : <></>
      }
    </div>
  );
}

export default PeopleSelected;