import React, { useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoList } from "../../app/features/youtubeSlice";
import { HTTP_STATUS } from "../../app/utils/constants";

const VideoTutorial = ({ cocktail, loading }) => {
  const dispatch = useDispatch();
  const videosList = useSelector((state) => state.youtube.videos);
  const currentVideoIndex = useSelector(
    (state) => state.youtube.currentVideoIndex
  );
  const youtubeLoading = useSelector((state) => state.youtube.loading);

  useEffect(() => {
    if (loading === HTTP_STATUS.FULFILLED) {
      dispatch(fetchVideoList(cocktail.drink));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, currentVideoIndex]);
  return (
    <section>
      <div className="px-32 my-8 w-full flex justify-center">
        {loading === HTTP_STATUS.FULFILLED &&
          youtubeLoading === HTTP_STATUS.FULFILLED && (
            <ReactPlayer
              className="w-full h-full"
              controls={true}
              url={`https://www.youtube.com/watch?v=${videosList[currentVideoIndex]}`}
            />
          )}
        {youtubeLoading === HTTP_STATUS.REJECTED && (
          <div className="w-full p-4">
            <p className="text-app-flame font-app-heading text-xl font-bold text-center">
              API Quota Exceeded! Try Again Later
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTutorial;
