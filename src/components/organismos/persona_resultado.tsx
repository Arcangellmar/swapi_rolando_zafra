import PersonaResultadoProps from "../../interfaces/persona_resultado_props";
import LoaderIndicator from "../atomos/loader_indicator";
import DataCell from "../moleculas/data_cell";
import SectionHeader from "../moleculas/section_header";

const PersonaResultado: React.FC<PersonaResultadoProps> = ({ data }) => {

    if (data == null) {
        return <LoaderIndicator />
    }

    return (
        <div className="row m-5">
            <SectionHeader title="General Information" />

            <DataCell text="Eye Color" title={data.eye_color} />
            <DataCell text="Hair Color" title={data.hair_color} />
            <DataCell text="Skin Color" title={data.skin_color} />
            <DataCell text="Birth Year" title={data.birth_year} />

            <div className="p-4"></div>

            <SectionHeader title="Vehicles" />
            {
                (data.vehiclesResponse ?? []).map((vehicle) => (
                    <DataCell key={vehicle.name} text={vehicle.name} title="" />
                ))
            }

        </div>
    );
}

export default PersonaResultado;