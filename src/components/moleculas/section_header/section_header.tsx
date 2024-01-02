interface SectionHeaderProps {
    title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
    return(
        <div className="col-12">
            <p className="fw-bold sw-persona-cell-title">{title}</p>
        </div>
    );
}

export default SectionHeader;