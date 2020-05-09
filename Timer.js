import React from 'react';
 import Resultant from './Resultant';

class Timer extends React.Component {
//     constructor() {
//         super ()
//         this.state = {
//             counter: 0
//         }
//     }
//     handleClick = (e) => {
//     this.setState({counter:this.state.counter+1})
// }

//     render() {
//         return(<React.Fragment>
//             <h2> Seconds Elapsed: {this.state.counter} </h2>
//             <button onClick = {this.handleClick}> Increment Counter </button>
//         </React.Fragment>)
//     }


// bllow code explains the async nature of setState()----------------
        // constructor() {
        //         super()
        //         this.state = {
        //                 quantity: 0,
        //                 price:0
        //         }
        // }
        //  update = () => {
        //         this.setState({quantity:5},()=>{
        //                 if(this.state.quantity == 5) {
        //                         this.setState({price:2000-100})
        //                 }
        //         })
        // }

        // render() {
        //        return(<React.Fragment>
        //                 <h1>{this.state.quantity}</h1>
        //                 <h1>{this.state.price}</h1>
        //                 <button onClick={this.update}>Update</button>
        //         </React.Fragment>)}


      // another example of state--------------------------------

        // constructor() {
        //     super();
        //     this.state = {
        //         secondsElapsed: 0
        //     };
        // }
        // start = () => {
        //     this.setState({
        //         secondsElapsed: this.state.secondsElapsed + 1
        //     });
        // }
        // handleClick = (e) => {
        //     this.interval = setInterval(this.start, 1000);
        // }
        // render() {
        //     return ( <React.Fragment><br/><br/>
        //         <button onClick = {this.handleClick}>Start timer</button><br/><br/>
        //         <h2> Seconds Elapsed: 
        //             {this.state.secondsElapsed} 
        //         </h2> 
        //         </React.Fragment>);
        //     }

  // below is the example of props, timer is the parent componet and Resultant is child component--------------------------------------

    constructor() {
    super();
    this.state = {
            secondsElapsed: 0
        };
    }
    start = () => {
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    }
    handleClick = (e) => {
        this.interval = setInterval(this.start, 1000);
    }
    render() {
        return ( <React.Fragment><br/>
                    <button onClick = {this.handleClick}>
                        Start Timer 
                    </button><br/><br/>
                    <Resultant new = {this.state.secondsElapsed}/> 
                </React.Fragment>);
            }

}

export default Timer;