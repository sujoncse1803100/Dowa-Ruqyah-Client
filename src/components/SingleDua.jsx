import React, { useRef, useState } from "react";
import "./dua.css";

const SingleDua = ({ data }) => {
  const [viewAudio, setViewAudio] = useState(false);
  const {
    top_en,
    dua_arabic,
    translation_en,
    transliteration_en,
    refference_en,
    cat_id,
    dua_id,
    subcat_id,
    id,
    audio,
    dua_name_en,
  } = data;

  const element_id = cat_id + "" + subcat_id + "" + dua_id;

  const audioRef = useRef(null);
  const [isOnline, setIsOnline] = useState(true);

  const handleOnlineStatusChange = () => {
    setIsOnline(navigator.onLine);
  };

  // Add event listener for online/offline changes
  window.addEventListener("online", handleOnlineStatusChange);
  window.addEventListener("offline", handleOnlineStatusChange);

  const playPauseHandler = () => {
    setViewAudio(!viewAudio);
    const audRef = audioRef.current;

    if (audRef?.paused) {
      audRef.volume = 0.1;
      audRef?.play();
    } else {
      audRef?.pause();
    }
  };

  return (
    <div className="dua" id={element_id}>
      <div className="first">
        <img src="/icon/allah 1 (Traced).svg" alt="" />
        <div className="name">
          {dua_id}. {dua_name_en}
        </div>
      </div>
      <div className="second">
        <div className="desc items">{top_en}</div>
        {dua_arabic ? (
          <>
            {" "}
            <div className="arabic items">{dua_arabic}</div>
            <div className="transliteration items">
              <strong>Transliteration: </strong>
              {transliteration_en}
            </div>
            <div className="translation items">
              <strong>Translation: </strong>
              {translation_en}
            </div>
          </>
        ) : (
          ""
        )}
        <div className="reference items">
          <p className="ref">Reference : </p>
          {refference_en}
        </div>
      </div>
      <div className={`${audio ? "third" : "only-utils"}`}>
        {audio ? (
          <div className="play">
            <img
              src="/icon/Youtube.svg"
              className="playIcon"
              alt=""
              onClick={playPauseHandler}
            />
            {viewAudio &&
              (isOnline ? (
                <div className="audio">
                  <audio ref={audioRef} controls>
                    <source src={audio} type="audio/mpeg" />
                  </audio>
                </div>
              ) : (
                <p>No internet</p>
              ))}
          </div>
        ) : (
          <></>
        )}
        <div className="utils">
          <img src="/icon/copy.svg" alt="" />
          <img src="/icon/Bookmark 1.svg" alt="" />
          <img src="/icon/Light.svg" alt="" />
          <img src="/icon/Share.svg" alt="" />
          <img src="/icon/Report.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingleDua;
