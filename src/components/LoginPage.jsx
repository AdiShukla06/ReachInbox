import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Simulate Google sign-in popup
    const googleAuthWindow = window.open(
      'https://accounts.google.com/signin/v2/identifier', 
      'GoogleSignIn', 
      'width=500,height=600'
    );

    // Mock a delay to simulate the user selecting an account
    setTimeout(() => {
      // Close the popup
      if (googleAuthWindow) {
        googleAuthWindow.close();
      }
      // Redirect to OneboxPage
      navigate('/onebox');
    }, 2000); // Adjust the delay as needed
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="p-10 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-white mb-4">Create a new account</h1>
        <button 
          onClick={handleGoogleSignIn} 
          className="w-full py-2 mb-4 text-white bg-black border border-white rounded"
        >
          <img 
            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" 
            alt="Google logo" 
            className="inline w-5 h-5 mr-2" 
          />
          Sign Up with Google
        </button>
        <button className="w-full py-2 mb-4 text-white bg-blue-500 rounded">Create an Account</button>
        <p className="text-center text-gray-400">
          Already have an account? <a href="#" className="text-white">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
