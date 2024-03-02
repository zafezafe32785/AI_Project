import "../App.css";
import NavBar from "../Component/NavBar";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { FaThList } from "react-icons/fa";

function Form() {
    const text = "กรุณาตอบคำถามทั้งหมด \nเพื่อทำการคัดกรองอาการเบื้องต้น";
    const subtext = "แบบประเมิณต่อไปนี้เป็นการพูดแล้วอัดเสียง"
    const subtext2 = "หากท่านไม่ต้องการอัดเสียง กรุณาคลิกที่"
    const subtext3 = "เพื่อทำแบบประเมิณอาการเบื้องต้น"

    const navigate = useNavigate();

    const ShowInfo = () => {
        navigate("/ShowInfo")
    }
    const PageQuestion1 = () => {
        navigate("/PageQuestion1")
    }

    return (
        <>
            <NavBar />
            <div className="ArrowList">
                <button className="ArrowLeft" onClick={ShowInfo} ><GoArrowLeft /></button><br/>
                <button className="ArrowLeft" onClick={PageQuestion1} ><FaThList /></button><br/>
            </div>
            <div className="HeadtextForm">{text}</div>
            <div className="Subtext">{subtext}</div>
            <div className="Button">
                <Button onClick={PageQuestion1} >คลิกที่นี่เพื่อเริ่มต้น</Button>

            </div>
            <div className="TextBox">
                <div className="Subtext">{subtext2} </div>
                <FaThList className="BoxListText" />
            </div>

            <div className="Subtext">{subtext3}</div>
        </>
    );
}

export default Form;