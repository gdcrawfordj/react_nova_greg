import React, { ChangeEvent, FC, FormEvent, Fragment, useEffect, useRef, useState } from 'react';

export const ComponenteConUseRef:FC<{}> = () => {
    const video = useRef<HTMLVideoElement>(null);

    return <Fragment>
        <div>
            <video width="320" height="240" ref={video}>
                <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4"/>
                <source src="https://www.w3schools.com/tags/movie.ogg" type="video/ogg"/>
                Your browser does not support the video tag.
            </video>
        </div>
        <div>
            <button onClick={()=> video.current!.play()}>play</button>
            <button onClick={()=> video.current!.pause()}>pause</button>
        </div>
    </Fragment>;
}

