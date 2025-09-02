import F1 from "./footer.module.css"
const Footer=()=>{
    return(
        <>
        <div className={F1.main} >
            <div className={F1.m2}>
                <div className={F1.matters}>
                    <h1>sports acadamy</h1>
                    <ul>
                        <li>9133472232</li><br></br>
                        <li>deepakmatta@gmail.com</li><br></br>
                        <li>mon-fri/9:00am to 5:00pm</li><br></br>
                        <li>Privacy Policy</li><br></br>
                        <li>Terms & Conditions</li><br></br>
                        <li>Cookie Polic</li><br></br>
                        <li>2025 YourWebsiteName. All Rights Reserved</li>
                    </ul>
                </div>
            </div>
            <div className={F1.m3}>
                <div className={F1.m1}>
                    <h2>INFROMATION US</h2>
                    <ul>
                        <li>about us</li><br></br>
                        <li>store us</li><br></br>
                        <li>contact us</li><br></br>
                        <li>latest news</li><br></br>
                        <li>gaming</li><br></br>
                        <li>last matches</li><br></br>
                        <li>couch list</li>
                    </ul>
                    
                </div><p></p>
                <div className={F1.m22}>
                    <h2>MY ACCOUNT</h2>
                    <ul>
                        <li>sign in</li><br></br>
                        <li>Register</li><br></br>
                        <li>View sports</li><br></br>
                        <li>players</li><br></br>
                        <li>gaming</li><br></br>
                        <li>up coming matches</li><br></br>
                        <li>team list</li>
                    </ul>
                    
                </div>

            </div>
        </div>
        </>
    )
}
export default Footer;