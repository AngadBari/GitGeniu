import React, { useState } from 'react';
import geniusLogo from '../../assets/images/Einstein.png';
import axios from 'axios';

const Searchbox = () => {
  const [username, setuserName] = useState("");
  const [userData, setUserdata] = useState(null);
  const [error, setError] = useState("");

  const searchUser = async () => {
    if (!username) {
      setError(" Please enter a username.");
      setUserdata(null);
      return;
    }

    try {
      const githubResponse = await axios.get(
        `https://api.github.com/users/${username}`
      );

      setUserdata(githubResponse.data);
      setError("");
    } catch (error) {
      setUserdata(null);
      setError(" User not found!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen gap-20 flex-col">
      
     
      <div className="relative flex flex-col items-center bg-white shadow-md rounded-lg border border-gray-300 w-full max-w-md sm:max-w-lg md:max-w-xl p-6">
        
        <img className="h-40 w-32 sm:h-50" src={geniusLogo} alt="Logo" />

        <p className="font-mono text-2xl mb-4 text-center">
          Enter Your GitHub Username
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          
          <input
            className="w-[280px] sm:w-[350px] md:w-[400px] text-center h-10 text-sm border rounded-md outline-none focus:ring-1 focus:ring-blue-500"
            type="text"
            placeholder="Enter Your GitHub Username"
            onChange={(e) => setuserName(e.target.value)}
          />

          <button
            onClick={searchUser}
            className="bg-black text-white rounded-sm px-4 py-2 md:px-4 md:py-2"
          >
            <i className="ri-send-plane-fill"></i>
          </button>
        </div>

        
        {error && (
          <p className="font-semibold font-mono md:text-2xl mt-3">{error}</p>
        )}
      </div>

    
      {userData && (
        <div className="relative flex flex-col items-center bg-white shadow-md rounded-lg border border-gray-300 max-w-md sm:max-w-lg md:max-w-xl p-6 w-[300px] text-center">
          <img
            src={userData.avatar_url}
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto mb-3"
          />
          <h2 className="text-xl font-bold font-mono">{userData.name}</h2>
          <p className=' text-sm font-bold font-mono'>@{userData.login}</p>
          <p className="text-gray-600 font-mono mt-2">{userData.bio}</p>
          <p className="mt-3 font-semibold font-mono">
            Followers:{userData.followers} | Following:{userData.following}
          </p>
          <p className="mt-1  font-semibold font-mono">Repos: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default Searchbox;
