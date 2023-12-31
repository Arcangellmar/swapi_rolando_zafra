import PersonaProps from "./persona_props";

interface PersonaBuscadorProps {
    // peoples: {
    //     name: string;
    //     speciesResponse?: {
    //         data: {
    //             name: string;
    //         };
    //     };
    //     planetResponse: {
    //         data: {
    //             name: string;
    //         };
    //     };
    //     url: string;
    // }[];
    peoples: PersonaProps[];
    onclickCharacter: (url: string) => void;
    next: () => void;
    hasMore: boolean;
}

export default PersonaBuscadorProps;