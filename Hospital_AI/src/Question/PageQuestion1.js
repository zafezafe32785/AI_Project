import "../Questionaire.css";
import Stepper from "../Component/Stepper";
import NavBar from "../Component/NavBar";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

function PageQuestion1() {
    const navigate = useNavigate();           
    const Form = () => {
      navigate("/Form")
    }
    
    return(
       <>
         <NavBar/>    <br/>
            <h1>Hello would</h1>
            <button className="ArrowLeft" onClick={Form} ><GoArrowLeft /></button><br/>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <Stepper />
         </div>
       </>
    );

}

export default PageQuestion1;