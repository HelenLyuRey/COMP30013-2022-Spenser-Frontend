import TopNav from './TopNav'
import React from 'react'

const LoginToUseMessage = () => {        
   
    return (
        <div>
            <TopNav/>
            <div style={{
                    position: "absolute",
                    top: "30vh",
                    right: "0",
                    left: "0",
                    color: "black",
                    fontSize: "150%",
                    textAlign: "center"
            }}>Please login to track your expenses</div>
        </div>
    );

}

export default LoginToUseMessage;
