import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../atomos/loader";
import PersonaCell from "../moleculas/persona_cell";

function PersonaBuscador({ peoples, onclickCharacter, next, hasMore }) {
    return (
        <InfiniteScroll
            className="min-vh-100"
            dataLength={peoples.length}
            loader= {
                <Loader />
            }
            hasMore={hasMore}
            next={next}
        >
            {
                peoples.map((character) => (
                    <PersonaCell key={character.name} title={character.name} subtitle={character.birth_year} onClick={() => onclickCharacter(character.url)}/>
                    // <li className="list-group-item" onClick={() => onclickCharacter(character.url)} key={character.name}>{character.name}</li>
                ))
            }
        </InfiniteScroll>
    );
}

export default PersonaBuscador;