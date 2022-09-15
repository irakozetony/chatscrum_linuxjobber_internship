import SignUp from "./components/sign-up/SignUp";
import SignIn from "./components/sign-in/SignIn";
import Home from "./components/home/Home";
import Scrumboard from "./components/scrumboard/Scrumboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/scrumboard" element={<Scrumboard />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
