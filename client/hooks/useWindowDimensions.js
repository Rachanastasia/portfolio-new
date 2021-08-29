import React, { useState, useEffect } from "react"


export function useWindowDimensions(){
    
      
    const [windowDimensions, setWindowDimensions] = useState({width: null, height: null});
    
      useEffect(() => {
        const {width, height} = getWindowDimensions()
        setWindowDimensions({width, height})
    
      }, [])
    
      return windowDimensions
}

function getWindowDimensions(){
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    }
  }
