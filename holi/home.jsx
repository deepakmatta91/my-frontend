import matta from "./home.module.css"
import Reactplayer from "react-player";
import video from "./video2.mp4";

const Home=() =>{
    return(
        <>
        <div className={matta.main}>
            <div className={video.v1}>
            <Reactplayer  url={video} controls={true}/>

            </div>
           
    
           
        </div>
        </>
    )
}
export default Home;