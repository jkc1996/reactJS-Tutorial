import React from 'react';

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


// bllow code explains the async nature of setState()
        constructor() {
                super()
                this.state = {
                        quantity: 0,
                        price:0
                }
        }
         update = () => {
                this.setState({quantity:5},()=>{
                        if(this.state.quantity == 5) {
                                this.setState({price:2000-100})
                        }
                })
        }

        render() {
               return(<React.Fragment>
                        <h1>{this.state.quantity}</h1>
                        <h1>{this.state.price}</h1>
                        <button onClick={this.update}>Update</button>
                </React.Fragment>)}
               
}

export default Timer;