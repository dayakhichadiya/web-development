
const Event = () => {

    const handleCLick = () => {
        return alert("hello React!!!")
    }

    return(
        <div>
            {/* <button onClick={handleCLick}>click here</button> */}
            {<button onClick={() => alert('hello world!!!')}>clcik me</button>}
            {<button onClick={alert('hello React')}></button>}
        </div>
    )
}

export default Event