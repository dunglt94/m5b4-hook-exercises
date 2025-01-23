import {useState, useEffect} from "react";

function Timer(){
    const [time,setTime] = useState(10);

    useEffect(()=>{
        const interval = setInterval(() => {
           setTime(prevTime => {
               if(prevTime > 0){
                   return prevTime + -1;
               } else {
                   clearInterval(interval);
                   return 0;
               }
           });
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <>
            <p>Count down form {time}</p>
        </>
    )
}

export default Timer;