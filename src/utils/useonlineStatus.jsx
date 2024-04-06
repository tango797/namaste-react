import React from 'react';
import { useEffect,useState } from "react";
const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
       window.addEventListener('offline',()=>{
        setOnlineStatus(true);
       }) 
       window.addEventListener('online',()=>{
        setOnlineStatus(false);
       }) 
        
    }, []);
  

    return onlineStatus;
}

export default useOnlineStatus;
