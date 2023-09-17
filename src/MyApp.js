import { Routes, Route } from "react-router-dom";

import Footer from "./Footers";
import TopBar from "./TopBar";

import Home from "./Home";
import Movie from "./Movie";
import Tv from "./Tv";
import E404 from "./Error";

function App() {
    return (
        <>
            <TopBar />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/movie/:id" element={<Movie />} />

                <Route path="/tv/:id" element={<Tv />} />

                <Route path="*" element={<E404 />} />
            </Routes>

            <Footer />
        </>
    )
}


export default App;
