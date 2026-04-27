function FromForm({fname,lname,full}){
    return (
        <div>
            <p> this is from form page</p>
            <p> welcome {fname}</p>
            <p> your age is {full.age}</p>
        </div>
    )
}

export default FromForm ;