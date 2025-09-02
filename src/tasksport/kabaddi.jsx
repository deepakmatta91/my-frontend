import K1 from "./kabaddi.module.css"
const Kabaddi=() =>{
    return(
        <>
        <div className={K1.container}>
                <div className={K1.card}>
                  <img src="\public\ipl.jpg" alt="Card One" />
                  <h3>IPL</h3><br></br>
                  <p>
                    Cricket matches ,ipl,world,test,leaks,click button it display all cricket matches
                  </p><br></br><p></p>
                  <a href="#" className="btn">Learn More</a>
                  <button className={K1.button1}>click</button>
                </div>
          
                <div className={K1.card}>
                  <img src="\public\icc.jpg" alt="Card Two" />
                  <h3>TESTS</h3><br></br>
                  <p>
                    This is the second card. You can style it however you want with CSS.
                  </p><br></br>
                  <a href="#" className="btn">Learn More</a>
                  <button className={K1.button1}>click</button>
                </div>
        
        
                <div className={K1.card}>
                  <img src="\public\OIP.jpeg" alt="Card Two" />
                  <h3>WORILD CUP</h3><br></br>
                  <p>
                    This is the second card. You can style it however you want with CSS.
                  </p><br></br>
                  <a href="#" className="btn">Learn More</a>
                  <button className={K1.button1}>click</button>
                </div>
        
               
              </div>


        </>
    )
}
export default Kabaddi;