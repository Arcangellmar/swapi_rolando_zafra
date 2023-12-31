import arrow from '../../img/arrow.png';

interface PersonaCellProps {
    title: string;
    subtitle: string;
    onClick: () => void;
}

const PersonaCell: React.FC<PersonaCellProps> = ({ title, subtitle, onClick }) => {
    return (
        <div className="sw-persona-cell-container" onClick={onClick}>
        <div className="w-100">
            <p className="m-0 sw-persona-cell-title">{title}</p>
            <p className="m-0 sw-persona-cell-subtitle">{subtitle}</p>
        </div>
        <img src={arrow} alt="buscar" />
        </div>
    );
};

export default PersonaCell;