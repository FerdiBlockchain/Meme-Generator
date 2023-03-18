import React from "react";
import "../styles/Signup.css";

function Signup() {
  // useState
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [joinNewsLetter, setJoinNewsLetter] = React.useState(false);

  // onChange için fonksiyon
  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPassword(event) {
    setPasswordConfirm(event.target.value);
  }

  function handleNewsLetter(event) {
    event.preventDefault();
    setJoinNewsLetter(event.target.value);
  }

  function handleSubmit(event) {
    if(password === passwordConfirm){
        alert("Successfully registered");
    }
    else{
        alert("Pa ssword do not match");
    }
  }

  return (
    <>
      <div className="form-container">
        <form className="from" onSubmit= {handleSubmit} >
          <input
            type="email"
            placeholder="Email address"
            className="from--input"
            onChange={handleEmail}
            value={email}
            name="email"
          />

          <input
            type="password"
            placeholder="Password"
            className="from--input"
            onChange={handlePassword}
            value={password}
            name="password"
          />

          <input
            type="password"
            placeholder="Password Confirm"
            className="from--input"
            onChange={handleConfirmPassword}
            value={passwordConfirm}
            name="passwordConfirm"
          />

          {/* Checkbox, 
          I want to join newsletter, 
          State degiskenleri, 
          onChange fonksiyonu, 
          Input HTML/JSX bölümü */}
          <input
            type="checkbox"
            onChange={handleNewsLetter}
            checked={joinNewsLetter}
            name="newsletter"
          />
          <label>I want to join newsletter</label>
          <button className="form--submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
