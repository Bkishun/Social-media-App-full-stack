import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoById, clearVideoDetails } from '../redux/slice/videoSlice';
import ReactPlayer from 'react-player';

const Player = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const video = useSelector(state => state.video.videoDetails);

  useEffect(() => {
    dispatch(clearVideoDetails());
    if (videoId) {
      dispatch(fetchVideoById(videoId));
    }
  }, [videoId, dispatch]);

  return (
    <div className="bg-gray-900 min-h-[400px] flex flex-col items-center justify-center p-4">
      {video && video.length > 0 ? (
        <div className="relative w-full max-w-[800px] h-full max-h-full flex items-center justify-center">
          <div className="relative w-full max-w-full" style={{ paddingTop: '56.25%' }}>
            <ReactPlayer
              url={video[0].videoFile.url}
              controls={true}
              playing={true}
              // playbackRate={playbackRate}
              width="100%"
              height="100%"
              className="absolute top-0 left-0"
              style={{
                maxWidth: '85%',
                maxHeight: '85%',
                objectFit: 'contain',
              }}
            />
          </div>
          
        </div>
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </div>
  );
};

export default Player;
