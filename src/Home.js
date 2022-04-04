import { useState } from "react";
const Home=()=>{
///var name='mario';
const [name,setName]=useState('Naseem');
const [age, setAge]=useState(30);
const [increase,setIncrease ]=useState(0);

    const handleClick=()=>
    {
         setName('Amin');
         setAge(20);
    }
    const increament=()=>
    {
        setIncrease(increase+1);
    }
    const decreament=()=>
    {
       setIncrease(increase-1);
    }
    return(
        <div className="home">
           <h2>Homepage</h2>
           <p>{name} is {age} years old</p>
           <button onClick={handleClick}>Click me</button><br/>
           <button onClick={increament}>+</button>
           <h1>{increase}</h1>
           <button onClick={decreament}>-</button>
    </div>
    );
}
export default Home;