import React from "react";

const Home = () => {
    let firstName = "Daniel"
    let lastName = "Brown"
    return (
        <div style={{ backgroundColor : "yellow", padding : 40 }}>
            <h2>Hello from functional component.</h2>
            <h2>{firstName + " " + lastName}</h2>    
        </div>
    )
};



// class Home extends React.Component {

    
//     render() {
//         return (
//             <div>
//                 <h2>Hello from class component.</h2>
                
//             </div>
//         )
//     }
// }

export default Home;