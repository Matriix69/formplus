import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Pagination from "./components/pagination/Pagination";
import Templates from "./components/templates/Templates";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemplates } from "./redux/slice";
import Loader from "./components/loader/Loader";
import Error from "./components/error/Error";

function App() {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.template.status);

    useEffect(() => {
        dispatch(fetchTemplates());
    }, []);

    return (
        <main>
            <Header />
            <Info
                text={
                    "Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates"
                }
            />
            {status === "done" && (
                <>
                    <Templates />
                    <Pagination />
                </>
            )}
            {status === "loading" && <Loader />}
            {status === "failed" && <Error />}
        </main>
    );
}

export default App;
