import InfiniteScroll from "react-infinite-scroll-component";
import LoaderIndicator from "../atomos/loader_indicator";
import PersonaCell from "../moleculas/persona_cell";
import PersonaBuscadorProps from "../../interfaces/persona_buscador_props";

const PersonaBuscador: React.FC<PersonaBuscadorProps> = ({ peoples, onclickCharacter, next, hasMore }) => {
    return (
        <InfiniteScroll
            className="min-vh-100"
            dataLength={ peoples.length }
            loader= { <LoaderIndicator /> }
            hasMore={hasMore}
            next={next}
        >
            {
                peoples.map((character) => (
                    <PersonaCell
                        key={character.name}
                        title={character.name}
                        subtitle={(character.speciesResponse == null ? "Sin especie" : character.speciesResponse.data.name) + " from " + character.planetResponse.data.name}
                        onClick={() => onclickCharacter(character.url, character.name)}
                        urlPersonaje={character.url}
                    />
                ))
            }
        </InfiniteScroll>
    );
}

export default PersonaBuscador;