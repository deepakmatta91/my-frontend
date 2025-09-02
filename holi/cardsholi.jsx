import cards from "./cards.module.css"

const Cards=() => {
    return(
        <div className={cards.full}>
         <div className={cards.main}>
            <div className={cards.d1}>
                <img className={cards.img} src="" alt=""></img>
                <div className={cards.content}>
                    <h2 className={cards.h2}>Holi special</h2>
                    <p>holi is an color full day </p>
                </div>
                <button>click</button><br></br>
            </div>

         </div>
         {/* card2 */}
         <div className={cards.main}>
            <div className={cards.d1}>
                <img className={cards.img} src="" alt=""></img>
                <div className={cards.content}>
                    <h2 className={cards.h2}>Holi Dress</h2>
                    <p>holi is an color full day </p>
                </div>
                <button>click</button><br></br>
            </div>

         </div>
         {/* carss3 */}
         <div className={cards.main}>
            <div className={cards.d1}>
                <img className={cards.img} src="" alt=""></img>
                <div className={cards.content}>
                    <h2 className={cards.h2}>Holi colors</h2>
                    <p>holi is an color full day </p>
                </div>
                <button>click</button><br></br>
            </div>

         </div>
         {/* cars4 */}
         <div className={cards.main}>
            <div className={cards.d1}>
                <img className={cards.img} src="" alt=""></img>
                <div className={cards.content}>
                    <h2 className={cards.h2}>water beloons</h2>
                    <p>holi is an color full day </p>
                </div>
                <button>click</button><br></br>
                
            </div>

         </div>
       

         
        </div>
    )
}
export default Cards;