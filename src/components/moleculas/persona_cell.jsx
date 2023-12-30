import arrow from '../../img/arrow.png';

function PersonaCell({ title, subtitle}) {
    return (
        <div className="sw-persona-cell-container">
            <div className="w-100">
                <p className="m-0 sw-persona-cell-title">{title}</p>
                <p className="m-0 sw-persona-cell-subtitle">{subtitle}</p>
            </div>
            <img src={arrow} alt="buscar" />
        </div>
    );
}

export default PersonaCell;