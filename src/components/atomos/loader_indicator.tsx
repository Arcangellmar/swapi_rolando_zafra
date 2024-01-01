import loader from '../../img/loader.png';

function LoaderIndicator() {
    return (
        <div className='text-center m-3'>
            <img src={loader} className="loader-logo" alt="cargando" />
            <span className='sw-text-color-grey ps-1 fw-bold'>Loading</span>
        </div>
    );
}

export default LoaderIndicator;