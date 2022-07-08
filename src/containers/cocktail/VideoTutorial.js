import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoList } from "../../app/features/youtubeSlice";
import { HTTP_STATUS } from "../../app/utils/constants";
import { calcVideoWidth } from "../../app/utils/helpers";
import { PrimaryButton } from "../../components";
import useWindowSize from "../../hooks/useWindowSize";

const VideoTutorial = ({ cocktail, loading }) => {
  const dispatch = useDispatch();
  const size = useWindowSize();
  const videosList = useSelector((state) => state.youtube.videos);
  const [videoIndex, setVideoIndex] = useState(0);

  const youtubeLoading = useSelector((state) => state.youtube.loading);

  const onSkipVideo = () => {
    videoIndex >= 5 ? setVideoIndex(0) : setVideoIndex(videoIndex + 1);
  };

  useEffect(() => {
    if (loading === HTTP_STATUS.FULFILLED) {
      const promise = dispatch(fetchVideoList(cocktail.drink));
      return () => {
        promise.abort();
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);
  return (
    <section id="video-guide">
      <div className="px-4 md:px-10 lg:px-20 my-6 md:my-8 w-full flex justify-center">
        {loading === HTTP_STATUS.FULFILLED &&
          youtubeLoading === HTTP_STATUS.FULFILLED && (
            <div className="flex flex-col justify-center items-center">
              <ReactPlayer
                width={calcVideoWidth(size?.width) ?? "100%"}
                height="100%"
                className="w-full h-auto aspect-video p-[6px] md:p-2 lg:p-3 xl:p-4 mb-4 drop-shadow-lg bg-white rounded-md lg:rounded-xl"
                controls={true}
                url={`https://www.youtube-nocookie.com/embed/${videosList[videoIndex]}`}
              />
              <div className="w-full p-4 flex justify-center gap-2 items-center">
                <p className="text-app-cadet font-app-heading text-[16px] md:text-[18px] lg:text-[20px] font-bold text-center">
                  Video Guide Not Relevant?
                </p>
                <PrimaryButton onClick={onSkipVideo} text="Next Video" />
              </div>
            </div>
          )}
        {youtubeLoading === HTTP_STATUS.REJECTED && (
          <div className="w-full p-4">
            <p className="text-app-flame font-app-heading text-[16px] md:text-[18px] lg:text-[20px] font-bold text-center">
              Youtube API Quota Exceeded! Try Again Later
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTutorial;
