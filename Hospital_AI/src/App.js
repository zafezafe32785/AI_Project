// import "./App.css";
// import "./Questionaire.css"
import HomeScreen from "./page/HomeScreen";
import EnterID from "./page/EnterID";
import Form from "./page/Form";
import ShowInfo from "./page/ShowInfo";
import PageQuestion1 from "./Question/PageQuestion1";
import LoginForm from './Component/LoginForm'
import Dashboard from './page/Dashboard';
import Editting from './page/Editting';
import Layout from './Component/Shared/Layout';
import { BrowserRouter,Routes,Route,} from "react-router-dom";
import Register from "./Component/Register";
import Testaudio from "./page/Testaudio";

function App() {
 

  return (
    <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomeScreen />} />
                    <Route exact path="/EnterID" element={<EnterID/>} />
                    <Route exact path="/Form" element={<Form/>} />
                    <Route exact path="/ShowInfo" element={<ShowInfo/>} />
                    <Route exact path="/PageQuestion1" element={<PageQuestion1/>} />


                    <Route exact path="/login" element={<LoginForm />} />
                    <Route exact path="/Register" element={<Register/>} />
                    <Route exact path="/Layout" element={<Layout/>} />
                    <Route exact path="/Dashboard" element={<Dashboard/>} />
                    <Route exact path="/Editting" element={<Editting/>} />
                    <Route exact path="/Testaudio" element={<Testaudio/>} />
                </Routes>
           </BrowserRouter>
    </>
   );
}

export default App;