import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../atomos/loader";
import PersonaCell from "../moleculas/persona_cell";

function PersonaBuscador({ peoples, onclickCharacter, fetchCharacters }) {
    return (
        <InfiniteScroll
            dataLength={peoples.length}
            loader= {
                <Loader />
            }
            hasMore={true}
            next = {async () => await fetchCharacters() }
            scrollableTarget="scrollableDiv"
        >
            {
                peoples.map((character) => (
                    <div key={character.name} onClick={() => onclickCharacter(character.url)}>
                        <PersonaCell title={character.name} subtitle={character.birth_year}/>
                    </div>
                    // <li className="list-group-item" onClick={() => onclickCharacter(character.url)} key={character.name}>{character.name}</li>
                ))
            }
        </InfiniteScroll>
    );
}

export default PersonaBuscador;