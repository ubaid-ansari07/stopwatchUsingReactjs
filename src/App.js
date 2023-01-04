import React, { useEffect, useRef, useState } from 'react'

export default function App() {
  const [timer,setTimer] = useState(0);
  const [isActive,setIsActive] = useState(false);
  const [isStop,setIsStop] = useState(true);
  const [lap,setlap] = useState([]);
  let interval = useRef(null);
    const showTimer=()=>{
    let sec = `0${timer%60}`.slice(-2);
    let min = `0${parseInt(timer/60)%60}`.slice(-2);
    let hr = `0${parseInt(timer/3600)}`.slice(-2);

    return `${hr} : ${min} : ${sec} `
  }
  const start = ()=>{
    setIsActive(true);
    setIsStop(false);
    interval.current = setInterval(()=>{
      setTimer((timer)=>timer+1);
    },1000)
  }
  const stop = ()=>{
    setIsActive(false);
    setIsStop(true)
    clearInterval(interval.current)
  }
  const lapShow = ()=>{
    setlap([...lap,showTimer()])
  }
  const reset = ()=>{
    clearInterval(interval.current)
    setTimer(0);
    setlap([])
  }
  let styleObj={
    backgroundColor : '#5F4B8BFF',
    color : 'white',
    padding : '10px',
    borderRadius :'25px'
  }
  return (
    <div className='container mt-5' style={{background:'linear-gradient(45deg,#EA738DFF,#CBCE91FF)',padding:'20px'}}>
      <div className='row mt-5 text-center'>
          <div className='col-md-3 m-auto' style={{backgroundColor:'#00203FFF',color:'white' ,padding:'15px',borderRadius:'20px'}}>
              <div className='row d-flex justify-content-center'>
                <div className='col-md-4'>{showTimer()}</div>
              </div>
          </div>
      </div>
      <div className='row mt-5 text-center'>
        <div className='col-md-4 m-auto d-flex justify-content-around'>
          <button type="" className='btn btn-success' disabled={isActive} onClick={start}>Start</button>
          <button type="" className='btn btn-danger' disabled={isStop} onClick={stop}>Stop</button>
          <button type="" className='btn btn-warning' onClick={lapShow}>Lap</button>
          <button type="" className='btn btn-info' onClick={reset}>Reset</button>
        </div>
      </div>
      <div className='row mt-5 text-center'>
        <div className='col-md-6 m-auto'>
        {lap.map((obj,index)=><p key={index} style={styleObj}>{obj}</p>)}
        </div>
      </div>
    </div>
  )
}
