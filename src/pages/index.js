import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';
//import styles from "../styles/Home.module.css";

//import Link from 'next/link';

import { useRouter, withRouter } from 'next/router';

const HomeContainer = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/welcome');
  };

  const containerStyle = {
    height: '100vh',
    backgroundImage: `url('/2791826.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    
    textAlign: 'center',
  };

  const boxStyle = {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Optional shadow
  };

  const buttonStyle = {
    backgroundColor: '#EOBOFF', // Match the button color from your styles
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#b0c4de', // Lighter shade on hover
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1>Welcome to Chatterify</h1>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
          onClick={handleButtonClick}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default HomeContainer;