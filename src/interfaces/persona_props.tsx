import PlanetModel from "./planet_nmodel";
import SpecieModel from "./specie_model";

interface PersonaProps {
    name: string;
    speciesResponse?: SpecieModel;
    planetResponse: PlanetModel;
    url: string;
}

export default PersonaProps;