import loader from '../../img/loader.png';

function Loader() {
    return (
        <>
            <div className='text-center m-3'>
                <img src={loader} className="loader-logo" alt="cargando" />
                <span className='sw-text-color-grey ps-1 fw-bold'>Loading</span>
            </div>
            {/* <div id="loadingSpinner" className="d-flex">
                <div className="spinner-border text-custom" role="status">
                    <span className="visually-hidden">Loading</span>
                </div>
            </div> */}
        </>
    );
}

export default Loader;