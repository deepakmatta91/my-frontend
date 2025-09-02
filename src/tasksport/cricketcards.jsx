import D1 from "./cricketcards.module.css"
import { Link } from "react-router-dom";
const Cricketcadrs=() =>{
    return(
        <>
        <div className={D1.container}>
                <div className={D1.card}>
                  <img src="\public\ipl.jpg" alt="Card One" />
                  <h3>IPL</h3><br></br>
                  <p>
                    Cricket matches ,ipl,
                  </p><br></br><p></p>
                  <a href="#" className="btn">Learn More</a>
                  <Link to="/clickilp">
                  <button className={D1.button1}>click</button>
                  </Link>
                </div>
          
                <div className={D1.card}>
                  <img src="\public\icc.jpg" alt="Card Two" />
                  <h3>TESTS</h3><br></br>
                  <p>
                    Test series in world cup
                  </p><br></br>
                  <a href="#" className="btn">Learn More</a>
                  <Link to="/clicktest">
                  <button className={D1.button1}>click</button>
                  </Link>
                </div>
        
        
                <div className={D1.card}>
                  <img src="\public\OIP.jpeg" alt="Card Two" />
                  <h3>WORILD CUP</h3><br></br>
                  <p>
                    wotld cup matches lists
                  </p><br></br>
                  <a href="#" className="btn">Learn More</a>
                  <Link to="/clickworld">
                  <button className={D1.button1}>click</button>
                  </Link>
                </div>
        
               
              </div>


        </>
    )
}
export default Cricketcadrs;