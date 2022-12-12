//your code here
setInterval(() =>{
    h = new Date ();
    hTime = h.getHours();
    mTime = h.getMinutes();
    sTime = h.getSeconds();
    hRotetaion = 30*hTime + mTime/2;
    mRotetaion = 6*mTime;
    sRotetaion = 6*sTime;

    handI.style.transform =  `rotate(${hTime}deg)`;
    handII.style.transform = `rotate(${mTime}deg)` ;
    handIII.style.transform = `rotate(${sTime}deg)` ;
}, 1000);