import { useState } from "react";
import { useHMSActions } from "@100mslive/react-sdk";

function SignIn() {

  const hmsActions = useHMSActions();
  const [inputValues, setInputValues] = useState({
    name: "",
    token: ""
  });
  const handleInputChange = (e) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    hmsActions.join({
      userName: inputValues.name,
      authToken: inputValues.token
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="meeting-title">Join Meeting</h2>
      <div className="input-container">
        <input
          required
          value={inputValues.name}
          onChange={handleInputChange}
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
        />
      </div>
      <div className="input-container">
        <input
          required
          value={inputValues.token}
          onChange={handleInputChange}
          id="token"
          type="text"
          name="token"
          placeholder="Auth token"
        />
      </div>
      <button className="btn-signin">Join</button>
    </form>
  )
}
export default SignIn;