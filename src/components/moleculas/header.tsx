import React from 'react';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <div className="row sw-header">
            <div className="col-12">
                <p className="sw-header-title">{title}</p>
            </div>
        </div>
    )
};

export default Header;