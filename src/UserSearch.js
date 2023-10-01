import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsFillMoonFill, BsFillSunFill, BsTwitter } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { ImLocation } from 'react-icons/im';
import { HiMiniBuildingOffice2 } from 'react-icons/hi2';
import Bitmap from './images/Bitmap.jpg';
import chain from './images/chain.jpg';


const UserSearch = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('light');

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setError(null);
    } catch (error) {
      setUserData(null);
      setError('No results');
    }
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const formatJoinDate = (date) => {
    const joinedDate = new Date(date);
    const day = joinedDate.getDate();
    const month = joinedDate.toLocaleString('default', { month: 'short' });
    const year = joinedDate.getFullYear();
    return `${day} ${month} ${year}`;
  };


  return (
    <div
      className={`mobile h-screen w-full md:w-full px-70 p-4 flex justify-center ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-697C9A'
      }`}
    >
      <div className="hey w-[573px] md:w-[700px] mt-6 md:my-16">
        <div className="mode flex justify-between mb-5">
          <h4 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-222731'} text-[26px]`}>devfinder</h4>
          <button
            className={`flex gap-2 pt-3 ${theme === 'dark' ? 'text-white' : 'text-222731'} text-[13px]`}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? 'LIGHT' : 'DARK'}{' '}
            {theme === 'dark' ? <BsFillSunFill size={20} /> : <BsFillMoonFill size={20} />}
          </button>
        </div>

        <div
          className={`search flex justify-between rounded-2xl py-4 ${
            theme === 'dark' ? 'bg-1E2A47' : ''
          }`}
        >
          <div className="flex gap-5 px-4">
            <span>
              <BiSearch size={24} className="text-[#0079FF] my-2" />
            </span>
            <span>
              <input
                className={`w-[250px] focus:outline-none my-2 text-${
                  theme === 'dark' ? 'white' : '#4B6A9B'
                } ${theme === 'dark' ? 'bg-1E2A47' : ''}`}
                type="text"
                placeholder="Search GitHub username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </span>
          </div>
          {error && <p className="text-red-500 my-2 ml-32">{error}</p>}
          <button className="my-btn bg-[#0079FF] text-white rounded-lg py-2 px-4 mr-4" onClick={fetchUserData}>
            Search
          </button>
        </div>

        {userData ? (
          <div
            className={`flex my-8 py-10 pl-8 pr-4 avatar rounded-2xl ${
              theme === 'dark' ? 'bg-1E2A47' : ''
            }`}
          >
            <img src={userData.avatar_url} className="w-[117px] h-[117px] rounded-full md:block hidden" alt="avatar" />
            <div className='md:px-2'>
              <div className="flex justify-between items-center">
                <img src={userData.avatar_url} className="w-[117px] h-[117px] rounded-full md:hidden" alt="avatar" />
                <div className="ml-4">
                  <div className="flex gap-10">
                    <p className="oct font-bold text-[26px]">{userData.name}</p>
                    <p className={`join text-[15px] pt-3 hidden md:block ${theme === 'dark' ? 'text-white' : 'text-697C9A'}`}>
                      Joined {formatJoinDate(userData.created_at)}
                    </p>
                  </div>
                  <p className="text-[16px] text-[#0079FF]">@{userData.name}</p>
                  <p className={`join-2 text-[15px] md:hidden ${theme === 'dark' ? 'text-white' : 'text-697C9A'}`}>
                      Joined {formatJoinDate(userData.created_at)}
                  </p>
                </div>
              </div>

              <p className={`bio text-[15px] leading-6 my-5 md:ml-5 ${theme === 'dark' ? 'text-white' : 'text-4B6A9B'}`}>
                {userData.bio}
              </p>

              <div
                className={`repo flex md:flex-row gap-32 md:mx-2 rounded-lg pl-8 p-4 mt-6 ${
                  theme === 'dark' ? 'bg-141D2F text-white' : 'bg-gray-300 text-black'
                }`}
              >
                <div className="flex-col">
                  <p className={`text-[13px] ${theme === 'dark' ? 'text-white' : 'text-4B6A9B'}`}>Repos</p>
                  <p className="text-[22px] font-bold">{userData.public_repos}</p>
                </div>
                <div className="text-center">
                  <p className={`text-[13px] ${theme === 'dark' ? 'text-white' : 'text-4B6A9B'}`}>Followers</p>
                  <p className="text-[22px] font-bold">{userData.followers}</p>
                </div>
                <div className="text-center pr-6">
                  <p className={`text-[13px] ${theme === 'dark' ? 'text-white' : 'text-4B6A9B'}`}>Following</p>
                  <p className="text-[22px] font-bold">{userData.following}</p>
                </div>
              </div>

              <div className="mt-8 md:pl-4">
                <div className="flex flex-col md:flex-row md:justify-between md:pr-20">
                  {userData.location ? (
                    <span className={`flex gap-3 font-[14px] mb-3 ${theme === 'dark' ? 'text-white' : 'text-4B6A9B'}`}>
                      <ImLocation size={20} /> {userData.location}
                    </span>
                  ) : (
                    <span className={`flex gap-3 font-[14px] mb-3 text-4B6A9B`}>
                      <ImLocation size={20} /> Not Available
                    </span>
                  )}
                  {userData.twitter_username ? (
                    <span className={`flex gap-3 font-[14px] mb-3 ${theme === 'dark' ? 'text-white' : 'text-4B6A9B'}`}>
                      <BsTwitter size={20} className="text-[#4B6A9B]" />
                      <a href={`https://twitter.com/${userData.twitter_username}`} target="_blank" rel="noopener noreferrer">
                        {userData.twitter_username}
                      </a>
                    </span>
                  ) : (
                    <span className={`flex gap-3 font-[14px] mb-3 text-4B6A9B`}>
                      <BsTwitter size={20} className="text-[#4B6A9B]" /> Not Available
                    </span>
                  )}
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:pr-36 md:mt-5">
                  <span className={`flex gap-3 font-[14px] mb-3 ${theme === 'dark' ? 'text-white' : 'text-4B6A9B'}`}>
                    <img src={chain} alt="" /> <a href={userData.html_url} className="hover:underline">
                      https://github.blog
                    </a>
                  </span>
                  <span className={`flex gap-3 font-[14px] mb-3 ${theme === 'dark' ? 'text-white' : 'text-4B6A9B'}`}>
                  <HiMiniBuildingOffice2 size={20} /> <a href="https://github.com">@github</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`my-box flex my-8 md:gap-4 py-10 px-8 avatar rounded-2xl ${theme === 'dark' ? 'bg-1E2A47' : ''}`}
          >
            <img src={Bitmap} className="w-[117px] h-[117px] rounded-full md:block hidden" alt="avatar" />
            <div>
              <div className="flex justify-between items-center">
                <img src={Bitmap} className="w-[117px] h-[117px] rounded-full md:hidden" alt="avatar" />
                <div className="ml-4">
                  
                  <span className="oct font-bold text-[26px] mr-20">The Octocat</span>
                  <span className={`join text-[15px] ml-16 ${theme === 'dark' ? 'text-white' : 'text-4B6A9B'}`}>
                    Joined 25 Jan 2011
                  </span>
                  <p className="text-[16px] text-[#0079FF]">@octocat</p>
                  <span className={`join-2 md:hidden text-[15px] ml-16 ${theme === 'dark' ? 'text-white' : 'text-4B6A9B'}`}>
                    Joined 25 Jan 2011
                  </span>
                </div>
              </div>
              <p className={`bio text-[15px] leading-6 my-5 mx-5 ${theme === 'dark' ? 'text-white' : 'text-4B6A9B'}`}>
                This profile has no bio
              </p>
              <div
                className={`repo flex gap-32 rounded-lg pl-8 p-4 mt-6 ${
                  theme === 'dark' ? 'bg-141D2F text-white' : 'bg-gray-300 text-black'
                }`}
              >
                <div className="text-center">
                  <p className={`text-[13px] ${theme === 'dark' ? 'text-white' : 'text-4B6A9B'}`}>Repos</p>
                  <p className="text-[22px] font-bold">8</p>
                </div>
                <div className="text-center">
                  <p className={`text-[13px] ${theme === 'dark' ? 'text-white' : 'text-4B6A9B'}`}>Followers</p>
                  <p className="text-[22px] font-bold">3938</p>
                </div>
                <div className="text-center">
                  <p className={`text-[13px] ${theme === 'dark' ? 'text-white' : 'text-4B6A9B'}`}>Following</p>
                  <p className="text-[22px] font-bold">9</p>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex flex-col md:flex-row md:gap-32">
                  <span className={`flex gap-3 font-[14px] mb-3 ${theme === 'dark' ? 'text-white' : 'text-4B6A9B'}`}>
                    <ImLocation size={20} /> San Francisco
                  </span>
                  <span className={`flex gap-3 font-[14px] mb-3 text-4B6A9B`}>
                    <BsTwitter size={20} /> Not Available
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:gap-[70px] md:mt-5">
                  <span className={`flex gap-3 font-[14px] mb-3 ${theme === 'dark' ? 'text-white' : 'text-4B6A9B'}`}>
                    <img src={chain} alt="" /> <a href="http://github.com">https://github.blog</a>
                  </span>
                  <span className={`flex gap-3 font-[14px] mb-3 ${theme === 'dark' ? 'text-white' : 'text-4B6A9B'}`}>
                  <HiMiniBuildingOffice2 size={20} /> <a href="http://github.com">@github</a>
                  </span>
                </div>
              </div> 
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
