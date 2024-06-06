import React, { useEffect, useContext} from 'react';
import SearchBar from './SearchBar';
import VideoCard from './VideoCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import LoginContext from '../context/loginContext';

function Home() {
  const navigate = useNavigate();
  const {loginStatus, setLoginStatus} = useContext(LoginContext)

  useEffect( () => {
    const handleLoginStatus = async () => {
      try {
        console.log("inner block");
        const response = await fetch('/api/v1/users/current-user', {
          method: 'GET',
          credentials: 'include', // Include credentials (cookies) in the request
        });
        console.log(response);
        if (response.ok) {
          const data = await response.json();
          setLoginStatus(true);
          console.log("login hai");
        } else {
          // Handle other status codes if needed
          console.log("user not logged in");
          setLoginStatus(false);
        }
      } catch (error) {
        setLoginStatus(false);
        console.log("something went wrong : ERR ==" + error.message);
      }
    };

    handleLoginStatus();
  }, [])
  // const handleLoginStatus = async () => { // Mark function as async
  //   try {
  //     console.log("inner block")
  //     const response = await axios.get('/api/v1/users/current-user');
  //     if (response.status === 200) {
  //       setLoginStatus(true);
  //       console.log("login hai")
  //     } else {
  //       // Handle other status codes if needed
  //       console.log("user not logged in")
  //       setLoginStatus(false)
  //     }
  //   } catch (error) {
  //     console.log("something went wrong : ERR ==" + error.message);
  //   }
  // };

  // useEffect(() => {
  //   handleLoginStatus();
  // }, []);

  useEffect(() => {
    console.log(loginStatus)
    if (!loginStatus) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      
      <div className='bg-gray-400 w-full min-h-[500px]'>
        <div className='p-4'>
          <SearchBar />
        </div>
        <div className='flex p-4 justify-start gap-[15px] w-full flex-wrap'>
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </>
  );
}

export default Home
