import React, { useRef, useState } from 'react';
import VideoFooter from "./VideoFooter"
import "./Video.css";

function Video() {
    const [play, setPlay] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(play)
        {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
    }

    return (
        <div className="video">
            <video 
                className="video__player"
                loop
                onClick={onVideoPress}
                ref={videoRef} 
                src="https://v16m.tiktokcdn.com/aa230e168565524f19afb55a1f15d416/5f3d4b7c/video/tos/useast2a/tos-useast2a-pve-0068/f528593288cc4eb59f35ba3b78a11611/?a=1233&amp;br=4170&amp;bt=2085&amp;cr=0&amp;cs=0&amp;dr=0&amp;ds=3&amp;er=&amp;l=2020081715554001019020908451246533&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=M2o8eHlucm94dTMzZjczM0ApOzs6Nzk1ZTtkNzUzOGk8OGdnNm1iMi42X3FfLS0vMTZzcy9gYjQ2XjMtLjNiYF4tYC46Yw%3D%3D&amp;vl=&amp;vr="
            ></video>
             <VideoFooter />
            {/*<VideoFooter />*/}
            {/*<VideoSidebar />*/}


            
        </div>
    )
}

export default Video
