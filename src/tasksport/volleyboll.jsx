import { Link } from "react-router-dom";
import E1 from "./volleyboll.module.css"

const Volleybollcadrs=() =>{
    return(
        <>
        <div className={E1.container}>
                <div className={E1.card}>
                  <img src="\public\v1.jpg" alt="Card One" />
                  <h3>Mens volleyboll </h3><br></br>
                  <p>
                    Cricket matches ,ipl,world,test,leaks,click button it display all cricket matches
                  </p><br></br><p></p>
                  <a href="#" className="btn">Learn More</a>
                  <Link to="/volley">
                  <button className={E1.button1}>click</button>
                  </Link>
                </div>
          
                <div className={E1.card}>
                  <img src="\public\v2.jpg" alt="Card Two" />
                  <h3>Womens Vollyboll </h3><br></br>
                  <p>
                    This is the second card. You can style it however you want with CSS.
                  </p><br></br>
                  <a href="#" className="btn">Learn More</a>
                  <button className={E1.button1}>click</button>
                </div>
        
        
                <div className={E1.card}>
                  <img src="\public\v3.jpeg" alt="Card Two" />
                  <h3>WORILD CUP</h3><br></br>
                  <p>
                    This is the second card. You can style it however you want with CSS.
                  </p><br></br>
                  <a href="#" className="btn">Learn More</a>
                  <button className={E1.button1}>click</button>
                </div>
        
               
              </div>


        </>
    )
}
export default Volleybollcadrs;