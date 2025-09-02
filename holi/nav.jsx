
import navbar from "./nav.module.css"

const Nav=() =>{
    return(
        <>
        <div className={navbar.main}>
            <div className={navbar.homet}><a href="#">home</a></div>
            <div className={navbar.holi}><a href="#">Happy Holi</a></div>
            <div className={navbar.s1}>
                <a href="#">colors</a>
                <a href="#">images</a>
                <a href="#">about</a>
            </div>
        </div>


        </>
    )

}
export default Nav;