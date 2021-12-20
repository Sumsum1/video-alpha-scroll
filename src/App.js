import logo from './logo.svg';
import './App.css';
import React, { useRef, useEffect, useCallback, useState } from "react";
import hub from './Back_lines.png';





function App() {

  //const refDiv = useRef();


    const [scrollY, setScrollY] = useState(0);
    const [scrollX, setScrollX] = useState(0);

    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);

    const onMouseMove = (e) => {
      const currentYPos = e.clientY;
      const currentXPoS = e.clientX;
      setPosY(currentYPos);
      setPosX(currentXPoS )
      window.scrollTo(posX, posY);
      console.log('posY: ', posY);
    }

    const watchScroll = () => {
      window.addEventListener("scroll", logit);
    }
  
    function logit() {
      setScrollY(window.pageYOffset);
      setScrollX(window.pageXOffset);
      //console.log('scrollY: ', scrollY)
    }
  
    useEffect(() => {
      watchScroll();
      return () => {
        window.removeEventListener("scroll", logit);
      };
      
    }, [scrollY, scrollX]);

    // useEffect(() => {
      
    //   setScrollY(setPosY)
    // })


  return (



    <div onMouseMove={onMouseMove}>
      <img src={hub}/>
      <div className="fixed-center">Scroll position: {scrollY}px</div>
    </div>

  );
}

export default App;
