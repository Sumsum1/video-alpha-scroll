// import './App.css';
import './Test.css';
import React, { useEffect, useState, useRef } from "react";
import hub from './Back_lines.png';
import * as Images from './Anim_png';
import a  from './2900_CMYK.png';
import { images } from './Anim_png';
import movie from './profile.webm';

function App() {

    const [currentTime, setCurrentTime] = useState(0);
    const [stop1, setSop1]  =useState(false);
    const [reverse, setReverse] = useState(false);
    const [forward, setForward] = useState(true);
    const [play1, setPlay1] = useState(false);
    const movieRef = useRef();

    // useEffect(() => {
    //   if (play1) {
    //     movieRef.current.play();

    //     //Pause
    //     // setTimeout(() => {
    //     //   movieRef.current.pause();
    //     // })
    //   }
         
    // }, [play1])



    // const onTimeUpdate = (e) => {
      
    //     if (e.target.currentTime >= 8.8) {
    //       setReverse(true);
    //     }
    //     if (reverse) {
    //       const c = movieRef.current.currentTime;
    //       movieRef.current.currentTime = c - 0.05;
    //     }
    //     if (movieRef.current.currentTime <= 0) {
    //       setReverse(false);
    //       const c = movieRef.current.currentTime;
    //       movieRef.current.currentTime = c + 0.05;
    //     } 
    // }

    const onTimeUpdate = (e) => {
        const c = movieRef.current.currentTime;
        movieRef.current.currentTime = c + 0.104;
  }


    // const onScrollDirection = (e) => {
    //   if (e.deltaY > 0) {
    //     onTimeUpdate();
    //     //setPlay1(true);
    //     console.log('up')
    //     console.log(play1)
    //   }
    //   if (e.deltaY < 0) {
    //     console.log('down')
    //   }
    // }



    
    return (
      <div className='container-video'>
          <video 
            className='video-room' 
            onWheel={onTimeUpdate}  
            muted={true} 
            ref={movieRef} 
            src={movie} 
            //onTimeUpdate={onTimeUpdate}
            
            
      >
            
          </video>
          {/* <h1>dfgdrtgstybhryrtnrshsrty</h1> */}
      </div>
  )
}

export default App;



































// // import './App.css';
// import './Test.css';
// import React, { useEffect, useState, useRef } from "react";
// import ReactPlayer from 'react-player';
// import movie from './Bathroom.mp4';

// function App() {

//     const [currentTime, setCurrentTime] = useState(0);
//     const [stop1, setSop1]  =useState(false);
//     const [reverse, setReverse] = useState(false);
//     const [forward, setForward] = useState(true);
//     const movieRef = useRef();
    


//     const getCurrentTime = () => {
//       setCurrentTime(7);

//       console.log(movieRef.currentTime)
//     }

//     useEffect(() => {

//     },)



//     const onTimeUpdate = (e) => {
      
//         if (e.target.currentTime >= 8.8) {
//           setReverse(true);
//         }
//         if (reverse) {
//           const c = movieRef.current.currentTime;
//           movieRef.current.currentTime = c - 0.05;
//         }
//         if (movieRef.current.currentTime <= 0) {
//           setReverse(false);
//           const c = movieRef.current.currentTime;
//           movieRef.current.currentTime = c + 0.05;
//         } 
//     }


//     const onScrollDirection = (e) => {
//       if (e.deltaY > 0) {
//         console.log('up')

//       }
//       if (e.deltaY < 0) {
//         console.log('down')
//       }
//     }


//     const onClick = () => {
//       console.log('Start');
//     }

//     const onWheel = (e) => {
//       e.target.play();
//     }
    
//     return (
//       <div className='video-room'>
//           <ReactPlayer
//              url={movie} 
//              muted={false}
//              playing={true}
       
//              onClick={onClick}
//              width={'100wh'} 
//              height={'900px'}  
//              onWheel={onWheel}   
//              controls  
//              ref={movieRef} 
//              onTimeUpdate={onTimeUpdate} 

//       />
//       </div>
//   )
// }

// export default App;