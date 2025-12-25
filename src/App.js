import { BrowserRouter, Route, Routes, Link } from "react-router";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import News from "./pages/News";

function App() {
    return (
        <>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/news">News</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/news" element={<News />} />
                </Routes>
            </BrowserRouter>
            ;
        </>
    );
}

export default App;
