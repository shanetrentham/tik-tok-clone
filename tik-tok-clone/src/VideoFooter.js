import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";
import "./VideoFooter.css";

function VideoFooter() {
    return (
        <div className="VideoFooter">
            <div className="videoFooter__text">
                <h3>I am a footer</h3>
                <p>This is a description</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>YOOOOO whats popping g {index}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img
                className="videoFooter__record"
                src="https://static.thenounproject.com/png/934821-200.png"
                alt=""
            />
        </div>
    )
}

export default VideoFooter
