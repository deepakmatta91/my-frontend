import axios from "axios"
 import { useEffect,useState } from "react"
 
 
 const Empdet=()=>{
    const [userData,setUserData]=useState([]);
    useEffect(()=>{

        console.log("Testing")
        axios.get("http://localhost:8000/getUser")
        .then((result)=>{
            console.log(result.data);
            setUserData(result.data)
        }).catch((er)=>{
            console.log(er)
        })

    },[])
    return(
        <>
        <h2>User Details</h2>
        {
            userData.map((item,index)=>{
                return(
                    <div key={index}>
                        <h2>username:{item.userName}</h2>
                        <h2>Pasword:{item.userPassword}</h2>
                    </div>
                )
            })
        }
        </>
    )
 }
 export default Empdet