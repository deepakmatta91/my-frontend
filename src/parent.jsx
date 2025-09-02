import Child from "./child";

const Parent = () => {
    let deepak=[
        {
            firstname:"deepak",
            secondname:"matta",
            phonenumber:"9133472232"

        },
        {
            firstname:"anil",
            secondname:"polipalli",
            phonenumber:"799714795"
        },
        {
            firstname:"chaitanya",
            secondname:"pola",
            phonenumber:"7730801633"
        }
    ]
    return(
        <>
            <Child arr_detail = {deepak}/>
        </>
    )

};
export default Parent;