import React from 'react';
class App extends React.Component {
  render() {

    // jsx syntax writing

    // return( <form> <h2>Login</h2>
    //       <input type="text" placeholder="Name" /><br/><br/>
    //       <input type="password" placeholder="password" /> <br/><br/>
    //       <input type="submit" nvalue="log" />
    //       </form>
    //       )
    // --------------------------------------------------------------
    
    // javascript expression in JSX

    //  let highlight = {
    //                    color: 'green',backgroundColor:'grey'
    //             }
    //            return(<React.Fragment>
    //                   <h1 style={highlight}>Welcome to React</h1> 
    //            </React.Fragment>)

    //-------------------------------------------------------------

    // conditional rendering of element using if-else

  //    let isLoggedIn = true
  //              if(isLoggedIn) {
  //                      return <h2>Welcome Admin</h2>
  //               }
  //              else{
  //                       return <h2>Please Login</h2>
  //              }  

  // }

  // -------------------------------------------------------------

  // conditional rendering of element using if-else 2

  // let element = null;
  // let isLoggedIn = false
  // if(isLoggedIn) {
  //         element = <h2>Welcome Admin</h2>
  // }
  // else {
  //         element = <h2>Please Login</h2>
  // }  
  // return (<React.Fragment>
  //         {element}
  // </React.Fragment>)
  // } 

// -------------------------------------------------------------

// conditional rendering of element using turnery

// let element = null;
//   let isLoggedIn = false;

//   (isLoggedIn) ?  element = <h2>Welcome Admin</h2> : element = <h2>Please Login</h2>;
          
//   return (<React.Fragment>
//           {element}
//   </React.Fragment>)
//   } 

// --------------------------------------------------------------
}
export default App;