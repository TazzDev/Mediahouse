import React from 'react';
import Print1 from '../../public/images/print1.jpeg';
import Print2 from '../../public/images/print2.jpeg';
import Print3 from '../../public/images/print3.jpeg';
import Print4 from '../../public/images/print4.jpeg';
import Print5 from '../../public/images/print5.jpeg';
import Print6 from '../../public/images/print6.jpeg';
import Print7 from '../../public/images/print7.jpeg';
import Print8 from '../../public/images/print8.jpeg';
import Print9 from '../../public/images/print9.jpeg';
import Print10 from '../../public/images/print10.jpg';
import Print11 from '../../public/images/print11.jpg';
import Print12 from '../../public/images/print12.jpg';


const scrollRight = (e) => {
    document.getElementById('pimagesection').scrollLeft += 500;
    //document.getElementById('vidContainer').scrollRight += 500;
}

const scrollLeft = (e) => {
    //document.getElementById('vidContainer').scrollLeft += 500;
    document.getElementById('pimagesection').scrollLeft -= 500;
}


const Print = () => {
    return (
    <div id="print">
        <h3 id="printtitle">Print Portfolio</h3>
        <div id="pimages">
            <div id="pleft" onClick={scrollLeft}>&lt;</div>
            <div id="pimagesection">
                {/* <img src={Print1} className="pimage"></img> */}
                <img src={Print2} className="pimage" loading="lazy"></img>
                {/* <img src={Print3} className="pimage"></img> */}
                <img src={Print4} className="pimage" loading="lazy"></img>
                <img src={Print5} className="pimage" loading="lazy"></img>
                <img src={Print6} className="pimage" loading="lazy"></img>
                {/* <img src={Print7} className="pimage"></img> */}
                {/* <img src={Print8} className="pimage"></img> */}
                <img src={Print9} className="pimage" loading="lazy"></img>
                <img src={Print10} className="pimage" loading="lazy"></img>
                <img src={Print11} className="pimage" loading="lazy"></img>
                <img src={Print12} className="pimage" loading="lazy"></img>
            </div>
            <div id="pright" onClick={scrollRight}>&gt;</div>
        </div>
    </div>
    )
}

export default Print;