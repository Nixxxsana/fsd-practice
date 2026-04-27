import {  useState } from "react";
import FromForm from './FromForm.jsx'


function Form (){
    const [fname , setfname] = useState("");
    const [lname , setlname] = useState("");
    const [email , setemail] = useState("");
    const [age , setage] = useState(0);
    const [gender , setgender] = useState("");
    const [count, setcount] = useState(0);


    const full_details={
        fname,
        lname,
        email,
        age,
        gender
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(full_details);
    };

    return (
        <div>
            <form onSubmit={handlesubmit}>

                <input type="text" placeholder="enter your first name" value={fname} onChange={(e)=>setfname(e.target.value)}/>
                <input type="text" placeholder="last name" value={lname} onChange={(e)=>setlname(e.target.value)}/>
                <input type="email" placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                <button onClick={()=>{setcount(count+1)}}> click to increase the count</button>
                <p>count is {count}</p>
    
                <select value={gender} onChange={(e)=>setgender(e.target.value)}>
                    <option value="">GENDER</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                </select>
                <input placeholder="uncontrolled component" />
    
                <FromForm fname={fname} lname={lname} full={full_details}/>


                <button type="submit">submit</button>
    
    
            </form>

        </div>

    )
}

export default Form;