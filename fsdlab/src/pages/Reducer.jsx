import { useReducer } from "react";

// initial state
const initialState = {
  name: "",
  email: "",
  checkedIn: false,
};

// reducer function
function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };

    case "SET_EMAIL":
      return { ...state, email: action.payload };

    case "CHECK_IN":
      return { ...state, checkedIn: true };

    default:
      return state;
  }
}

function CheckInForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Check-In Form</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Enter email"
        value={state.email}
        onChange={(e) =>
          dispatch({ type: "SET_EMAIL", payload: e.target.value })
        }
      />

      <button onClick={() => dispatch({ type: "CHECK_IN" })}>
        Check In
      </button>

      <hr />

      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Status: {state.checkedIn ? "Checked In ✅" : "Not Checked In ❌"}</p>
    </div>
  );
}

export default CheckInForm;