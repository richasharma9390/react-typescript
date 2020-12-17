// import React, { useEffect, useState } from 'react'

// const Demo =(props) => {
//   const [time, setTime] = useState(props.timer);
//   useEffect(() => {
//     setInterval(() => {
        
//            setTime((t) => t -1);
        
      
//     }, 1000)
//     return () => {
     
//     }
//   }, []);
  
//   return (
    
//     <div>
//       {time}
    
//     </div>
//   )
// }

// export default Demo;




import React, { Component } from 'react'

export default class Timer extends Component {
    state = {
        minutes: 3,
        seconds: 0,
    }

     printMinutes(){
      console.log('Hello',this)
      this.setState({minutes: 7})
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
       
    }

    getName(name){
        return name;
    }
    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

   
    render() {
        const { minutes, seconds } = this.state
        return (
          <>
            <div>
                { minutes === 0 && seconds === 0
                    ? <h1>Busted!</h1>
                    : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
              
            </div>
            <h1>this is {0+1}</h1>
            <button onClick={(this.printMinutes.bind(this))}>click</button>
            </>
        )
    }
}