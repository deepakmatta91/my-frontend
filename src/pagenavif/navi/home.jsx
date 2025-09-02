import { Link,Outlet } from "react-router-dom";
import Head from "../navi2/header";
import Footer from "../navi2/fooetr";
const Homepage=() =>{
    
    return(
        <>
        <Head></Head>
        <h1>home</h1>
        <ul>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contact">contact</Link></li>
            

        </ul>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
        
    )
}
export default Homepage;