interface PersonaResultadoHeadProps {
    title: string;
}

const PersonaResultadoHead: React.FC<PersonaResultadoHeadProps> = ({ title }) => {
    return(
        <div className="col-12">
            <p className="fw-bold sw-persona-cell-title">{title}</p>
        </div>
    );
}

export default PersonaResultadoHead;