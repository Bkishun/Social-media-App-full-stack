import React from 'react';
import "../App.css"
import { NavLink } from 'react-router-dom';

const VideoCard = ({ thumbnail = "", title = "it is first video of this channel", views = "60k", channel = "bkishun", timestamp = "02-06-2025"  }) => {
    const thumbn = "https://i.ytimg.com/vi/VJov5QWEKE4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9I0fJZNqjNgdYIpBlbrrL8jCy0Q"
  
    return (
        
        <div className="bg-white rounded-md shadow-lg p-2 sm:w-full md:w-[45%] lg:w-[30%] xl:w-[24%]">
            <NavLink to='/player'>
            <img className='w-full h-[10rem] rounded-xl' src={thumbn} alt="thumbnail"/>
            <div className='flex items-start bg-slate-200 rounded-lg p-2 mt-2'>
                <div className='w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold'>
                    {channel.charAt(0)}
                </div>
                <div className='flex flex-col ml-3 w-[85%]'>
                    <span className='text-sm font-semibold clamp-2'>{title}</span>
                    <span className='text-gray-700 text-xs'>{channel}</span>
                    <span className='text-gray-600 text-xs'>{views} views • {timestamp}</span>
                </div>
            </div>
            </NavLink>
        </div>
    );
};

export default VideoCard;
