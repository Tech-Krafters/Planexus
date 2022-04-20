import React,{ Component } from 'react';
import './Banner.css'

class Banner extends Component {
    state = {  } 
    render() { 
        return (<>
            <div className="banner">
                <div className="row">
                <h2 className="bt column">Hi There! Abhinandhan S</h2>
                <h3 className="bd column">It's A Wonderful Saturday,  15:12 @ 16th April 2022 </h3>
                
                </div>
                
            </div>
        </>);
    }
}
 
export default Banner;