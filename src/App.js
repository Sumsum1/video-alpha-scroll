import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState, useRef } from "react";
import hub from './Back_lines.png';
import ReactPlayer from 'react-player'
import { Video } from 'remotion';
import ScrollContainer from "react-indiana-drag-scroll";
import  useDraggableScroll from 'use-draggable-scroll';
//import intro from './public/Bathroom_1_PP-R_all.mp4';



function App() {

    const backgroundRef = useRef(null);

    const { onMouseDown } = useDraggableScroll(backgroundRef);

    return (
      <div>
        <ScrollContainer className="container">
            <img className='backgroundImage'  src={hub} />
        </ScrollContainer>
      </div>
    );


}

export default App;
