import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import NotFound from "./pages/NotFound/NotFound";
import SiteNavbar from "./components/Navbar/SiteNavbar";

function App() {
    return (
        <>
            <Router>
                <SiteNavbar></SiteNavbar>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/shop" element={<Shop />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
