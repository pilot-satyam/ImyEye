import Base from "../Components/Base"
import { Link } from 'react-router-dom';
import Content from "../Components/Content";
import '../Style/Global.css';
import Contact from "./Contact";
import { Container } from "reactstrap";
const Services = () => {
    const data = {
        name: "Our Services",
      };
    return (
        <Base>
            <Content myData={data} />

        <br/>
        <container className="centerIt">
            <div className="col-container bg1">
                <div className="col mt-4" style={{ margin: "1rem"}}>
                    <p className="mt-6">Cure with Care Center</p>
                    <p> and make your vision clear</p>
                    <Link to="/doctor">
                        <button className="button">
                            <i style={{fontSize:"24px"}} className="fa">&#xf0f0;</i>
                        </button>
                    </Link>
                </div>

                <div className="col bg2 ml-5">
                    
                    <p className="mt-4 ">Want to book Appointment</p>
                    <p>to avaid the last minute rush then</p>
                    <p>book your Appointment</p>
                    <p>here!</p>
                    
                    
                    <Link to="/showAppointment">
                        <button className="button"><i style={{fontSize:"24px"}} className="fa">&#xf274;</i></button>
                    </Link>
                    <br/>
                    <br/>
                </div>

                <div className="col bg1">
                    
                    <p>See this address </p>
                    <p>for in person meeting.</p>
                    <Link to="/address">
                        <button className="button mb-5">
                             <i style={{fontSize:'24px'}} className='fas'>&#xf3c5;</i>
                        </button>
                    </Link>
                </div>
            </div>

        </container>
           
        </Base>
    );
}
export default Services