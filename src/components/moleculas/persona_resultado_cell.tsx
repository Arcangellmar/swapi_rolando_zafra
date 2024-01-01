import React from 'react';

function capitalizeString(str: string): string {
    if (str) {
        return str.replace(/\b\w/g, match => match.toUpperCase());
    }
    return "";
}

interface PersonaResultadoCellProps {
    text: string;
    title: string;
}

const PersonaResultadoCell: React.FC<PersonaResultadoCellProps> = ({ title, text }) => {
    return (
        <div className="col-12">
            <div className="d-flex justify-content-between sw-border-bottom py-3">
                <p className="m-0 sw-color-text fw-bold">{text}</p>
                <p className="m-0 sw-color-title fw-bold">{capitalizeString(title)}</p>
            </div>
        </div>
    );
};


export default PersonaResultadoCell;