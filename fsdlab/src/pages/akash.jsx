import { useState } from "react";

function Form (){
    const [fname , setfname] = useState("");
    const [lname , setlname] = useState("");
    const [email , setemail] = useState("");
    const [age , setage] = useState("");

    const full_details = { fname, lname, email, age };

const handlesubmit = (e) => {


    const full_details = { fname, lname, email, age };

    fetch("http://localhost:5000/form", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(full_details)
    })
    .then(res => res.json())
    .then(data => console.log(data));
};

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="enter your first name" value={fname} onChange={(e)=>setfname(e.target.value)}/>
                <input type="text" placeholder="last name" value={lname} onChange={(e)=>setlname(e.target.value)}/>
                <input type="email" placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                <input type="number" placeholder="age" value={age} onChange={(e)=>setage(e.target.value)}/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Form;




import express from "express";

const app = express();
app.use(express.json()); // important!

app.post("/form", (req, res) => {
    console.log("Received data:", req.body);

    res.json({ message: "Form submitted successfully" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});