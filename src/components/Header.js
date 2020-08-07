import React from 'react';
import Logo from '../../public/images/logo.png';
import UpArrow from '../../public/images/uparrow.jpg';
import {slide as Menu} from 'react-burger-menu';


const scrollUp = () => {
    window.scrollTo(0,0);
}

const Header = () => {

    const styles = {
        bmBurgerButton: {
          position: 'absolute',
          width: '8vw',
          height: '5vh',
          right: '5vw',
          top: '3vh'
        },
        bmBurgerBars: {
          background: '#373a47'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '5vh',
          width: '8vw'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#373a47',
          //padding: '2.5em 1.5em 0',
          paddingTop: '15%',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          
          color: '#b8b7ad',
          //padding: '0.8em',
          margin: 0,
        },
        bmItem: {
          display: 'inline-block',
          margin: 0,
          padding: 0,
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }
    
      const onClickMenu = (e) => {
        e.preventDefault();
        //document.getElementById('mmenu').setAttribute('isopen',false)
        console.log( document.getElementById('mmenu'))
      }

    return(
        <React.Fragment>
        <header>
            <img src={Logo} id="logo" loading="eager"></img>
            <nav id="desktop-nav">
                <ul>
                    <li>
                        <a href="#home" className="linka">HOME</a>
                    </li>
                    <li>
                        <a href="#services" className="linka">SERVICES</a>
                    </li>
                    <li>
                        <a href="#about" className="linka">OUR STORY</a>
                    </li>
                    <li>
                        <a href="#secworks" className="linka">OUR WORKS</a>
                    </li>
                    <li>
                        <a href="#clients" className="linka">CLIENTS</a>
                    </li>
                    <li>
                        <a href="#contact" className="linka">CONTACT US</a>
                    </li>
                </ul>
            </nav>

            {/* Mobile level */}
            <div className="mobile">
            <Menu styles={styles} right id="mmenu">
          <div style={{display:"flex",flexDirection:"column",outline:"none",width:"90%"}}>
                <a href="#services" className="linkm">SERVICES</a>
                <a href="#about" className="linkm">OUR STORY</a>
                <a href="#secworks" className="linkm">OUR WORKS</a>
                <a href="#clients" className="linkm">CLIENTS</a>
                <a href="#contact" className="linkm">CONTACT US</a>
          </div>
        </Menu>
        </div>

            {/* End mobile level */}

        </header>
        <img src={UpArrow} id="stt" onClick={scrollUp}></img>
        </React.Fragment>
    )
}

export default Header;