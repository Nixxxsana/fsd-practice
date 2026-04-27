function Temp() {

  const updateText = () => {
    const name = "Nidersana";
    const age = 20;

    document.getElementById("abc").innerHTML = `
      Hello ${name}, age is ${age}
    `;
  };

  return (
    <div>
      <h1>this is temp page</h1>

      <p id="abc">hello</p>

      <button onClick={updateText}>
        Update Text
      </button>
    </div>
  );
}

export default Temp;