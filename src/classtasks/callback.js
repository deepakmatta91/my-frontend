// const getuserdata=(callback)=>{
//     setTimeout(() =>{
//         console.log("userdata");
//         callback();

//     },2000);
 
// }

// const validuserdata=(callback)=>{
//     setTimeout(() =>{
//         console.log("validata");
//         callback();

//     },2000);
 
// }
// const upuserdata=(callback)=>{
//     setTimeout(() =>{
//         console.log("updatedata");
//         callback();

//     },2000);
 
// }
// getuserdata(() =>{
//     validuserdata(() =>{
//         upuserdata(() =>{
//             console.log("complete")
//         })
//     })
// })

// promise.........

const getuserdata=()=>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve();
        },2000);
    })
}
const validuserdata=()=>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve();
        },2000);
    })
}
const updateuserdata=()=>{
    return  new Promise((resolve) =>{
        setTimeout(() => {
            resolve();
        },2000);
    })
}
getuserdata().then(validuserdata())
             .then(updateuserdata())
     .then(()=> console.log("completed"))