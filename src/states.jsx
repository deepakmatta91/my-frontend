// import { useState } from "react";

import { useState } from "react";


// const Parent =() => {
//     const [test, setTest] =useState(0);

//     const Change =((a) =>{
//         if(a==1){
//             setTest(test=>test+1);
//         }
//         if(a==0){
//             setTest(0);
//         }
//         if(a==2){
//             if(test<=0){
//                 setTest(0);
//             }else{
//                 setTest(test=>test-1);
//             }
//         }
//     })
    
//     return(
//         <>
        
//         <h1>{test}</h1>
//         <button onClick={()=> Change(1)}>increment</button>
//         <button onClick={()=> Change(0)}>reset</button>
//         <button onClick={()=> Change(2)}>decrement</button>

//         </>
//     )
// }
// export default Parent;


// import { useState } from "react";


// const Parent =() => {
//     const [test, setTest] =useState(0);

//     const Change =((a) =>{
//         if(a==1){
//             setTest(test=>test+1);
//         }
//         if(a==0){
//             setTest(0);
//         }
//         if(a==2){
//             if(test<=0){
//                 setTest(0);
//             }else{
//                 setTest(test=>test-1);
//             }
//         }
//     })
    
//     return(
//         <>
        
//         <h1>{test}</h1>
//         <button onClick={()=> Change(1)}>increment</button>
//         <button onClick={()=> Change(0)}>reset</button>
//         <button onClick={()=> Change(2)}>decrement</button>

//         </>
//     )
// }
// import { useState } from "react";

const Deepak = () => {
  const [Yellow, setYellow] = useState(false);
  const [Orange, setOrange] = useState(false);

  const Change = () => {
    setYellow(true);
    setOrange(false);
  };

  const Reset = () => {
    setYellow(false);
    setOrange(true);
  };

  return (
    <div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: Yellow ? "yellow" : Orange ? "orange" : "black",
          border:"2px solid black",
        
        }}
        
      ></div>
      <br />
      <button onClick={Change}>Change</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default Deepak;


// import { useState } from "react";

// const Button = () => {
//   const [deepak, setDeepak] = useState(0);
//   const increment =() =>{
//     // if(true)
//       setDeepak(deepak+1)
//   }
//   const reset=() => {
//     // if(true)
//       setDeepak(0)
//   }
//   const decrement=() => {
//     if(deepak>0)
//       setDeepak(deepak-1)
//   }
//   return(
//     <>
//     <h1>{deepak}</h1>
//     <button onClick={increment}>increment</button>
//     <button onClick={reset}>reset</button>
//     <button onClick={decrement}>decrement</button>
//     </>


//   )

// }
// export default Button;


