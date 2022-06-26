import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoList } from "../../app/features/youtubeSlice";
import { HTTP_STATUS } from "../../app/utils/constants";
import { PrimaryButton } from "../../components";

const VideoTutorial = ({ cocktail, loading }) => {
  const dispatch = useDispatch();
  const videosList = useSelector((state) => state.youtube.videos);
  const [videoIndex, setVideoIndex] = useState(0);

  const youtubeLoading = useSelector((state) => state.youtube.loading);

  const onSkipVideo = () => {
    videoIndex >= 9 ? setVideoIndex(0) : setVideoIndex(videoIndex + 1);
  }

  useEffect(() => {
    if (loading === HTTP_STATUS.FULFILLED) {
      dispatch(fetchVideoList(cocktail.drink));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  return (
    <section id="video-guide">
      <div className="px-32 my-8 w-full flex justify-center">
        {loading === HTTP_STATUS.FULFILLED &&
          youtubeLoading === HTTP_STATUS.FULFILLED && (
            <div className="flex flex-col justify-center items-center">
              <ReactPlayer
                className="w-full h-full p-4 mb-4 drop-shadow-lg bg-white rounded-xl"
                controls={true}
                url={`https://www.youtube.com/watch?v=${videosList[videoIndex]}`}
              />
              <div className="w-full p-4 flex justify-center gap-2 items-center">
                <p className="text-app-cadet font-app-heading text-xl font-bold text-center">Video Guide Not Relevant?</p>
                <PrimaryButton onClick={onSkipVideo} text="Next Video"/>
              </div>
            </div>
          )}
        {youtubeLoading === HTTP_STATUS.REJECTED && (
          <div className="w-full p-4">
            <p className="text-app-flame font-app-heading text-xl font-bold text-center">
              Youtube API Quota Exceeded! Try Again Later
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTutorial;
