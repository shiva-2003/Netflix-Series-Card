export const EventHandle=()=>{
    const onclicked=(e)=>{
        console.log(e) 
        console.log(e.target) 
        console.log(e.type) 
        alert("You have clicked The button")
    }
    const onClicked=(user)=>{
        alert("Hey "+user+ " you have clicked The button")
    }
    return(
        <>
        <button onClick={onclicked}>Click Here</button>  
        <button onClick={(e)=>onclicked(e)}>Click Here 2</button>  
        <button onClick={()=>alert("thisis inline clicked")}>Click Here</button>
        <button onClick={()=>onClicked("Shiva")}>Click Here</button>
        </>
    )
}