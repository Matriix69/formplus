import "./loader.scss";
function Loader() {
    return (
        <div className="overlay-loader">
            <div className="spinner"></div>
            <p>loading templates...</p>
        </div>
    );
}

export default Loader;
