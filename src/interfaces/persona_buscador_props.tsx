import PersonaProps from "./persona_props";

interface PersonaBuscadorProps {
    peoples: PersonaProps[];
    onclickCharacter: (url: string, namePersonajeSelected: string) => void;
    next: () => void;
    hasMore: boolean;
}

export default PersonaBuscadorProps;