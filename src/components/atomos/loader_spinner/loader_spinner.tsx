function LoaderSpinner() {
    return (
        <div id="loadingSpinner" className="d-flex">
            <div className="spinner-border text-custom" role="status">
                <span className="visually-hidden">Loading</span>
            </div>
        </div>
    );
}

export default LoaderSpinner;