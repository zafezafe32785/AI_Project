import "../App.css";
import NavBar from "../Component/NavBar";
// import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";



function ShowInfo() {
    
    const text =  "สวัสดีค่ะ";  
    const navigate = useNavigate();           
    const EnterID = () => {
      navigate("/EnterID")
    }

    return (
        <>
          <NavBar/>    
          
            <button className="ArrowLeft" onClick={EnterID} ><GoArrowLeft /></button><br/>
        
            <div className="Homeheadtext">{text}</div>

            </>
  );
}



    export default ShowInfo;