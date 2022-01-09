// import './App.css';
import './Test.css';
import React, { useEffect, useState, useRef } from "react";
import hub from './Back_lines.png';
import * as Images from './Anim_png';
import a  from './2900_CMYK.png';
import { images } from './Anim_png';
import movie from './Bathroom.mp4';

import ppr1 from './Anim_png/first0001.png'
import ppr2 from './Anim_png/first0002.png'
import ppr3 from './Anim_png/first0003.png'
import ppr4 from './Anim_png/first0004.png'
import ppr5 from './Anim_png/first0005.png'
import ppr6 from './Anim_png/first0006.png'
import ppr7 from './Anim_png/first0007.png'
import ppr8 from './Anim_png/first0008.png'
import ppr9 from './Anim_png/first0009.png'
import ppr10 from './Anim_png/first0010.png'
import ppr11 from './Anim_png/first0011.png'
import ppr12 from './Anim_png/first0012.png'
import ppr13 from './Anim_png/first0013.png'
import ppr14 from './Anim_png/first0014.png'
import ppr15 from './Anim_png/first0015.png'
import ppr16 from './Anim_png/first0016.png'
import ppr17 from './Anim_png/first0017.png'
import ppr18 from './Anim_png/first0018.png'
import ppr19 from './Anim_png/first0019.png'
import ppr20 from './Anim_png/first0020.png'
import ppr21 from './Anim_png/first0021.png'
import ppr22 from './Anim_png/first0022.png'
import ppr23 from './Anim_png/first0023.png'
import ppr24 from './Anim_png/first0024.png'
import ppr25 from './Anim_png/first0025.png'

const ImagesSeq = [ ppr1, ppr2, ppr3, ppr4, ppr5, ppr6, ppr7, ppr8, ppr9, ppr10,
                    ppr11, ppr12, ppr13, ppr14, ppr15, ppr16, ppr17, ppr18, ppr19, ppr20,
                    ppr21, ppr22, ppr23, ppr24, ppr25 ]


function App() {
  
    // const [index, setIndex] = useState(0);
    // const [currentImage, setCurrentImage] = useState(ImagesSeq[0]);
    // const [arrLegth, setArrLength] = useState(ImagesSeq.length)
    
    // console.log(index)
    // console.log(currentImage)



    // useEffect(() => {
    //   const interval = setInterval(() => {
    //       if (index < arrLegth) {
    //         setIndex(index + 1);
    //         setCurrentImage(ImagesSeq[index]);

    //         console.log(ImagesSeq[index]);
    //       }
    //   }, 30);
    //   return () => clearInterval(interval);
    // }, [currentImage, index])

    const [currentTime, setCurrentTime] = useState(0);
    const [stop1, setSop1]  =useState(false);
    const [reverse, setReverse] = useState(false);
    const movieRef = useRef();
    
    // useEffect(() => {
    //   console.log(movieRef.current.currentTime);
    // }, [])


    const getCurrentTime = () => {
      setCurrentTime(7);
      //movieRef.current.currentTime = currentTime;
      console.log(movieRef.currentTime)
    }

    useEffect(() => {
      
    },)

    // const startInterval = ((number) => {
    //     setCurrentTime
    // }, 500)

    const onTimeUpdate = (e) => {
        if (e.target.currentTime >= 9) {
          // setInterval(() => {
          //   const c = movieRef.current.currentTime;
          //   console.log(movieRef.current.currentTime)
          //   movieRef.current.currentTime = c - 0.01
          // }, 100)
          setReverse(true);
        }
        if (reverse) {
          const c = movieRef.current.currentTime;
          movieRef.current.currentTime = c - 0.05;
        }
          
    }

    setInterval(() => {

      //console.log(movieRef.current.currentTime)
    }, 1000)
  
    
    return (
      // <div >
      //     <h1>gerg</h1>
      //     <img src={currentImage} />
      // </div>

      //type='"video/mp4;codecs="avc1.42E01E, mp4.40.2"'
      <div className='container'>
          <video onWheel={(e) => console.log(e)}   controls  ref={movieRef} src={movie} onTimeUpdate={(e) => onTimeUpdate(e)}>
            
          </video>
      </div>
      
      
  )
}

export default App;
