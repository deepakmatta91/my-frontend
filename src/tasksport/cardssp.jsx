import C1 from "./cardssp.module.css"
import { Link } from "react-router-dom";
// import styled from 'styled-components';
const Cards = () => {
    return (
      <div className={C1.container}>
      {/* <StyledWrapper> */}
        <div className={C1.card}>
          <img src="\public\cricket12.jpeg" alt="Card One" />
          <h3>Cricket</h3><br></br>
          <p>
            Cricket matches ,ipl,world,test,leaks,click button it display all cricket matches
          </p><br></br><p></p>
          <a href="#" className= "btn">Learn More</a>
          <Link to="/click">
          <button className={C1.button1}>click</button>
          </Link>
        </div>
  
        <div className={C1.card}>
          <img src="\public\volleyball2.jpeg" alt="Card Two" />
          <h3>volley Boll</h3><br></br>
          <p>
            This is the second card. You can style it however you want with CSS.
          </p><br></br>
          <a href="#" className="btn">Learn More</a>
          <button className={C1.button1}><Link to="/click1">click</Link></button>
        </div>


        <div className={C1.card}>
          <img src="\public\kabaddi.jpeg" alt="Card Two" />
          <h3>kabaddi</h3><br></br>
          <p>
            This is the second card. You can style it however you want with CSS.
          </p><br></br>
          <a href="#" className="btn">Learn More</a>
          <button className={C1.button1}><Link to="/click3">click</Link></button>
        </div>
        {/* </StyledWrapper> */}


       









       
      </div>
    );
  };
  
  export default Cards;
  