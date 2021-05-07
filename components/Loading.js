import React from 'react'
import { Circle } from 'better-react-spinkit';
function Loading() {
    return (
        <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
            <div>
                <img 
                    src="https://i2.wp.com/pluspng.com/img-png/whatsapp-png-whatsapp-logo-png-1000.png"
                    alt="whatsapp.png"
                    height= {200}
                    style={{marginBottom: 10 }}
                />
                <Circle color="#3CBC28" size={60}  />
            </div>
        </center>
    )
}

export default Loading
