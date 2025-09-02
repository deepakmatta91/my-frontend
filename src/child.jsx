const Child = (props) => {
    const {arr_detail} = props;
    return(
        <>{
        arr_detail.map((deepu) => {
            return (
                <div>
                    <h1>name:{deepu.firstname}</h1>
                    <h3>name:{deepu.secondname}</h3>
                    <h3>phonenumber:{deepu.phonenumber}</h3>
                </div>
            )

            

        } 
        )}
            
            {/* <h1>name={arr_detail[0].firstname} </h1>
            <h1>name={arr_detail[0].secondname}</h1>
            <h1>number={arr_detail[0].phonenumber}</h1>
            <h1>name={arr_detail[1].firstname} </h1>
            <h1>name={arr_detail[2].firstname} </h1> */}
        </>
    )
};
export default Child;