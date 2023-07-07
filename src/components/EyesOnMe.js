// Code EyesOnMe Component Here

function EyesOnMe(){
    function handleClick(event) {
        console.log(event)
    }
    return (
        <div>
            <button onClick={handleClick} 
            onBlur={(e) =>
                    console.log('Hey! Eyes on me!')}
            onFocus={(e) => 
                    console.log('Good!')}
            >Eyes on me</button>
            {/* <input 
                onFocus={(e) => 
                console.log('Good!')}
            /> */}
        </div>
    )
}


export default EyesOnMe;