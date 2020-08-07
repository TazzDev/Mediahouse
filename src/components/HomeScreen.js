import React from 'react';
import honeyanim from '../../public/images/honey_anim.gif';


const HomeScreen = () => {
    return (
        <div id="homescreen">
            <section id="home"></section>
            <h2 id="title"><span className="red">Heart</span> - The Hub of Emotions, Feelings, Happiness and Affections.<br/>
            <span className="red">Brain</span> - The Powerhouse of Thoughts, Dreams, Intelligence and Creative Ideas.</h2>

            <p id="subtext">
            Both are equally involved by us to SERVE YOU ever better. 
            </p> 

            <div id="beezone">
                <div id="psection">
                    <p id="onep"> BEES ARE INCREDIBLY INDUSTRIOUS, WORKING TIRELESSLY TO PRESERVE THE HIVE 
                    AND TO PRODUCE HONEY. WE ARE TRULY INSPIRED AND DELIVER AS EXPECTED.</p>

                    <p id="twop"> MEDIAHOUSE IS A BUZZ WITH SOLUTIONS THAT COMMUNICATE YOU, THE EDGE AND THE 
                    PRESENCE YOU HAVE ALWAYS ASPIRED FOR.</p>

                    <p id="threep"> WE REPRESENT A NEW WORLD OF CAPABILITIES AND OPPORTUNITIES TO SERVE ALL 
                    OUR CLIENTS. THIS IS A PART OF OUR CONTINUING STRATEGY OF ADDING MORE VALUE TO THE CLIENTS’ 
                    ADVERTISING BUDGETS.</p>
                </div>
                <img src={honeyanim} className="comb" loading="lazy" />

            </div>

            <div id="highlights">
                <p className="hlt">
                    <span className="bigger">Over 100+</span><br/> customers
                </p>
                <p className="hlt">
                <span className="bigger">Over 25+</span><br/>years of exposure
                </p>
                <p className="hlt">
                <span className="bigger">Global</span><br/>expertise
                </p>
            </div>

        </div>
    )
}

export default HomeScreen;