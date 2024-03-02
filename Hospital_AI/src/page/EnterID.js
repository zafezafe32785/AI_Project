import "../App.css";
import NavBar from "../Component/NavBar";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";

function EnterID() {
    const Headtext =  "กรุณากรอกหมายเลขไอดีของท่าน";  
    const [val, setVal] = useState(' ')
    
    const click = () => {
        alert(val)
    }

    const navigate = useNavigate();
    const goToHomeScreen = () => {
        try {
            navigate("/");
        } catch (error) {
            console.error("Error navigating to HomeScreen:", error);
            // Handle the error, e.g., show a notification to the user
        }
    }
   
    return(
        <>
            <NavBar/>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">  
                <button className="ArrowLeft" onClick={goToHomeScreen} ><GoArrowLeft /></button>
                <div className =" create">
                    <div className="Headtext">{Headtext}
                    <br/>
                        <center>

                            <input type="text" className="inputblock " 
                            onChange={(e) => setVal(e.target.value)} 
                            style={{width:'615px'}} 
                            placeholder="กรุณากรอกหมายเลข ID"/>
                            
                        </center>
                        <Button className="nextto" 
                            onClick ={click}>ถัดไป
                        </Button>
                    </div>
                </div>
            </div>
           
            
        </>
    );
}

export default EnterID;