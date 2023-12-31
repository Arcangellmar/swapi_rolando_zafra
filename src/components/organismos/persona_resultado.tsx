import PersonaResultadoProps from "../../interfaces/persona_resultado_props";
import Loader from "../atomos/loader";
import PersonaResultadoCell from "../moleculas/persona_resultado_cell";
import PersonaResultadoHead from "../moleculas/persona_resultado_head";

const PersonaResultado: React.FC<PersonaResultadoProps> = ({ data }) => {

    if (data == null) {
        return <Loader />
    }

    return (
        <div className="row m-5">
            <PersonaResultadoHead title="General Information" />

            <PersonaResultadoCell text="Eye Color" title={data.eye_color} />
            <PersonaResultadoCell text="Hair Color" title={data.hair_color} />
            <PersonaResultadoCell text="Skin Color" title={data.skin_color} />
            <PersonaResultadoCell text="Birth Year" title={data.birth_year} />

            <div className="p-4"></div>

            <PersonaResultadoHead title="Vehicles" />
            {
                (data.vehiclesResponse ?? []).map((vehicle) => (
                    <PersonaResultadoCell key={vehicle.name} text={vehicle.name} title="" />
                ))
            }

        </div>
    );
}

export default PersonaResultado;