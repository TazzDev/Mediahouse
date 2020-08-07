import React from 'react';


const playVideo = (e) => {
    console.log(e.target);
    e.target.play();
}

const pauseVideo = (e) => {
    e.target.pause();
}

const scrollRight = (e) => {
    if (window.matchMedia("(max-width: 768px)")) {
        document.getElementById('vidContainer').scrollLeft += 100;
    }
    document.getElementById('vidContainer').scrollLeft += 500;
    //document.getElementById('vidContainer').scrollRight += 500;

}

const scrollLeft = (e) => {
    if (window.matchMedia("(max-width: 768px)")) {
        document.getElementById('vidContainer').scrollLeft -= 100;
    }
    //document.getElementById('vidContainer').scrollLeft += 500;
    document.getElementById('vidContainer').scrollLeft -= 500;


}

const Works = () => {
    return (
        <div id="works">
            <section id="secworks"></section>
            <h3 style={{textDecoration:"underline"}}>OUR WORKS</h3>
            <h3 id="subt">TV COMMERCIALS</h3>
            <div id="vidSection">
                <div id="left" onClick={scrollLeft}>&lt;</div>
                <div id="vidContainer">

                    {/* <video controls width="30%" className="vid" onMouseOver={playVideo} onMouseOut={pauseVideo}>
                        <source src={Work1} type="video/mp4" />       
                    </video>  */}
                    <iframe className="vid" src="https://www.youtube.com/embed/yZktZTwLUS0?rel=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;" >

                    </iframe>

                    {/* <video controls width="30%" className="vid" onMouseOver={playVideo} onMouseOut={pauseVideo}>
                        <source src={Work2} type="video/mp4" />       
                    </video>  */}
                    <iframe className="vid" src="https://www.youtube.com/embed/lGFbVIGjMzw?rel=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;">

                    </iframe>

                    {/* <video controls width="30%" className="vid" onMouseOver={playVideo} onMouseOut={pauseVideo}>
                        <source src={Work3} type="video/mp4" />       
                    </video> */}


                    {/* <video  controls width="30%" className="vid" onMouseOver={playVideo} onMouseOut={pauseVideo}>
                        <source src={Work4} type="video/mp4" />       
                    </video>  */}
                    <iframe className="vid" src="https://www.youtube.com/embed/LKCU7fOYtyQ?rel=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;">

                    </iframe>
                    
                    {/* <video controls width="30%" className="vid" onMouseOver={playVideo} onMouseOut={pauseVideo}>
                        <source src={Work5} type="video/mp4" />       
                    </video>  */}
                    <iframe className="vid" src="https://www.youtube.com/embed/tHuAXTAqcVA?rel=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;">

                    </iframe>

                    {/* <video controls width="30%" className="vid" onMouseOver={playVideo} onMouseOut={pauseVideo}>
                        <source src={Work6} type="video/mp4" />       
                    </video> */}
                    <iframe className="vid" src="https://www.youtube.com/embed/cAAoz-5KlrY?rel=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;">

                    </iframe>

                    {/* <video controls width="30%" className="vid" onMouseOver={playVideo} onMouseOut={pauseVideo}>
                        <source src={Work7} type="video/mp4" />       
                    </video> */}
                    <iframe className="vid" src="https://www.youtube.com/embed/F8zO4hiY4Ys?rel=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;">

                    </iframe>

                    {/* <video controls width="30%" className="vid" onMouseOver={playVideo} onMouseOut={pauseVideo}>
                        <source src={Work8} type="video/mp4" />       
                    </video> */}
                    <iframe className="vid" src="https://www.youtube.com/embed/0QyjoiHlYms?rel=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;">

                    </iframe>

                    {/* <video controls width="30%" className="vid" onMouseOver={playVideo} onMouseOut={pauseVideo}>
                        <source src={Work9} type="video/mp4" />       
                    </video> */}
                    <iframe className="vid" src="https://www.youtube.com/embed/XIA6g5Vteb8?rel=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;">

                    </iframe>

                    {/* <video controls width="30%" className="vid" onMouseOver={playVideo} onMouseOut={pauseVideo}>
                        <source src={Work10} type="video/mp4" />       
                    </video> */}
                    <iframe className="vid" src="https://www.youtube.com/embed/1f2BgS7w2ag?rel=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;">

                    </iframe>

                    {/* <video controls width="30%" className="vid" onMouseOver={playVideo} onMouseOut={pauseVideo}>
                        <source src={Work11} type="video/mp4" />       
                    </video> */}
                    <iframe className="vid" src="https://www.youtube.com/embed/cTaCXBBwfM0?rel=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;">

                    </iframe>

                    {/* <video controls width="30%" className="vid" onMouseOver={playVideo} onMouseOut={pauseVideo}>
                        <source src={Work12} type="video/mp4" />       
                    </video>


                    <video controls width="30%" className="vid" onMouseOver={playVideo} onMouseOut={pauseVideo}>
                        <source src={Work13} type="video/mp4" />       
                    </video>


                    <video controls width="30%" className="vid" onMouseOver={playVideo} onMouseOut={pauseVideo}>
                        <source src={Work14} type="video/mp4" />       
                    </video> */}

                </div>
                <div id="right" onClick={scrollRight}>&gt;</div>

            </div>
        </div>
    )
}

export default Works;