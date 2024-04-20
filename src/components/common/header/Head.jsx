import React from "react";
import { useHistory } from "react-router-dom";

const Head = () => {
  const history = useHistory();

  const authStyle = {
    height: "4rem",
    width: "4rem",
    display: 'flex',
    marginRight: "-500px",
    justifyContent: 'flex-end', // Move content to the right
    alignItems: 'flex-start', // Move content up
  };
  
  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '20px', // Make the buttons round
    margin: '0 10px', // Add margin between the buttons
  };

  const handleLoginClick = () => {
    // Navigate to the Login page
    history.push("/login");
  };

  const handleSignupClick = () => {
    // Navigate to the Signup page
    history.push("/signup");
  };

  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>CIVIQ</h1>
            <span> Empowering young minds</span>
          </div>
          <div style={authStyle}>
            {/* Your code for displaying user's name */}
            <button style={buttonStyle} onClick={handleLoginClick}>
              Login
            </button>
            <button style={buttonStyle} onClick={handleSignupClick}>
              Signup
            </button>
          </div>
          <div className='social'>
            {/* Your social icons */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
