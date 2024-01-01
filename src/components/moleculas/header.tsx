import React, { useState, useEffect } from 'react';
import backButton from '../../img/back_button.png';
import { Link } from 'react-router-dom';

interface HeaderProps {
    titulo: string;
    nombrePersonajeSelecionado: string;

    onBackButton: (value: string) => void;
    clearNamePeopleSelected: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ titulo, onBackButton, nombrePersonajeSelecionado, clearNamePeopleSelected }) => {
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Si el nombre del personaje seleccionado es diferente de vacio, se mostrara el nombre del personaje seleccionado
    // Si es web siempre se mostrara el titulo
    const getTitle = () => windowWidth < 768 ? (nombrePersonajeSelecionado === "" ? titulo : nombrePersonajeSelecionado) : titulo; 

    return (
        <div className="row sw-header text-center text-md-start fixed-top">
            <div className="col-12">
                {
                    // Solo se mostrara la flecha de retroceso en mobile y si hay un personaje seleccionado
                    (nombrePersonajeSelecionado !== "")
                        ? <div className="d-flex d-md-none position-absolute p-3" onClick={() => {onBackButton(""); clearNamePeopleSelected("");}}>
                                <Link to="/">
                                    <img src={backButton} className="loader-logo" alt="volver" />
                                </Link>
                            </div>
                        : <></>
                }
                <p className="sw-header-title">{getTitle()}</p>
            </div>
        </div>
    )
};

export default Header;