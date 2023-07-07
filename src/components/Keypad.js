// Code Keypad Component Here

function Keypad (){
    function handleChange(event){
        console.log("Entering password...", `${event.target.name}: ${event.target.value}`)
    }
    return (
        <div>
            <input 
            type="password"
            name="search"
            onChange={handleChange}
            placeholder="Enter Search Term"
            />
        </div>
    )
}



export default Keypad;