import logo from './logo.svg';
import './App.css';
import React, { useRef, useEffect, useCallback, useState } from "react";
import hub from './Back_lines.png';





function App() {

  const refDiv = useRef();

  const [scrollPos, setScrollPos] = useState({scrollX: 0, scrollY: 0});
  const [mousePos, setMousePos] = useState({posX: 0, posY: 0});

  

  const handleScroll = (e) => {  //Temporary name!!
    const x = e.scrollX;
    const y = e.scrollY;
    setScrollPos({...scrollPos ,scrollX: window.pageXOffset, scrollY: window.pageYOffset});
    console.log(scrollPos)
  }

  const onMouseDown = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setMousePos({...mousePos, posX: x, posY: y})
    console.log(mousePos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(scrollPos);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (



    <div ref={refDiv} onClick={onMouseDown} onScroll={handleScroll}>
      <img src={hub}/>
    </div>

  );
}

export default App;
