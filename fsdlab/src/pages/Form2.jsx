import { useState } from "react";
import FromForm from "./FromForm.jsx";

function Form() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    age: "",
    gender: "",
  });

  const [count, setCount] = useState(0);

  // handle all inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="fname"
          placeholder="enter your first name"
          value={formData.fname}
          onChange={handleChange}
        />

        <input
          type="text"
          name="lname"
          placeholder="last name"
          value={formData.lname}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="age"
          value={formData.age}
          onChange={handleChange}
        />

        <button type="button" onClick={() => setCount(count + 1)}>
          click to increase the count
        </button>

        <p>count is {count}</p>

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">GENDER</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>

        <input placeholder="uncontrolled component" />

        <FromForm
          fname={formData.fname}
          lname={formData.lname}
          full={formData}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Form;