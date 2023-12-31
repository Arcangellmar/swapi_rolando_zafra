interface PersonaResultadoProps {
    data?: {
        eye_color: string;
        hair_color: string;
        skin_color: string;
        birth_year: string;
        vehiclesResponse?: Array<{
            name: string
        }>;
        vehicles: string[];
    } | null;
}

export default PersonaResultadoProps;