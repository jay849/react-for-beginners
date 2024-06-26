import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./styles.css";

function App() {
    return (
        <Router basename="/react-for-beginners">
            <Routes>
                <Route path="/movie/:id" element={<Detail />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
