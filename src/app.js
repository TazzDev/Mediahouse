//import 'reset-css';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Works from './components/Works';
import Footer from './components/Footer';
import Print from './components/Print';


import Intro from '../public/assets/Intro_video.mp4';
import './styles/styles.scss';


class App extends React.Component {

    constructor(props) {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        super(props);
        this.videoEndedTrue = this.videoEndedTrue.bind(this);
        if (vw > 800) {
        this.state = {
            videoEnded: false,
        }
        } else {
            this.state = {
                videoEnded: true,
            }
        }
    }
    
    videoEndedTrue() {
        this.setState({videoEnded: true})
    }

    unmute() {  
        if (document.getElementById('intro').muted) {
        document.getElementById('intro').muted = false;
        document.getElementById('unmute').innerHTML = 'MUTE';
        } else {
            document.getElementById('intro').muted = true;
            document.getElementById('unmute').innerHTML = 'UNMUTE';
        }

    }

    UNSAFE_componentWillMount() {
        if (window.innerHeight > window.innerWidth) {
            this.setState(({
                videoEnded: true,
            }))
        }
    }

   
    render () {
    return (

        
        <React.Fragment>
                {
                 this.state.videoEnded ?  

                <div>
                    <div className="background"></div>
                    <Header/>
                    <HomeScreen/>
                    <Services />
                    <About/>
                    <Works/>
                    <Print/>
                    <Clients/>
                    <Contact/>
                    <Footer/>
                </div>  

                      : 	        <div><button id="unmute" onClick={this.unmute}>UNMUTE</button><video id="intro" src={Intro} width='100vw' muted autoPlay onEnded={this.videoEndedTrue}></video></div>
                 }      


        </React.Fragment>
    )
    }
}


ReactDOM.render(<App/>,document.getElementById('app'));