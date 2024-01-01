import React, { useState, useEffect } from 'react';
import backButton from '../../img/back_button.png';
import { Link } from 'react-router-dom';

interface HeaderProps {
    title: string;
    peopleNameSelec: string;
    onBackButton: (value: string) => void;
    clearNamePeopleSelected: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBackButton, peopleNameSelec, clearNamePeopleSelected }) => {
    
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

    const getTitle = () => {
        return windowWidth < 768 ? (peopleNameSelec === "" ? title : peopleNameSelec) : title;
    };

    return (
        <div className="row sw-header text-center text-md-start fixed-top">
            <div className="col-12">
                {
                    (peopleNameSelec !== "")
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