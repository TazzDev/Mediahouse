import React from 'react';

const Contact = () => {
    return (
        <React.Fragment>
            <h3 id="ctitle">CONTACT US</h3>
        <div id="contact">
            <div className="contact-details">
                <span>
                <p className="cthead">Corporate Office</p>
                    <p>
                    402-A, 4th Floor, Dharam Karan Road,<br/>
                    Ameerpet, Hyderabad-500016, Telangana<br/>
                    Tel: +9140-66254480, 66254486 
                    </p>
                </span>
                </div>
                <div className="contact-details">
                    
                <span className='flexexp'>
                <p className="cthead">BANGALORE</p>
                    <p>
                    Flat No : 303, III Floor<br/>
                    Plot No : 387, Vysya Bank Colony<br/>
                    Shanthinikethan Layout<br/>
                    Bannerghatta Road<br/>
                    Bangalore - 560076<br/>
                    Mobile : +91 9704307000<br/>
                    </p>
                </span>

                <span className='flexexp'>
                <p className="cthead">CHENNAI</p>
                    <p>
                    No : 4 B, IV Floor<br/>
                    Palace Manoor<br/>
                    32, Balfour Road
                    Kellys, Chennai - 600010<br/>
                    Phone : 26448753, 26601068.
                    </p>
                </span>
                </div>
                <div className="contact-details">

                <span className='flexexp'>
                <p className="cthead">NEW DELHI</p>
                    <p>
                    Plot No : 66<br/>
                    Road No : U - 22<br/>
                    Pink Town House<br/>
                    DLF City, Phase III<br/>
                    Gurgaon - 122002.<br/>
                    Moblile : 9910594567
                    </p>
                </span>

                <span className='flexexp'>
                <p className="cthead">MUMBAI</p>    
                    <p>
                    A2 - 71, Gagan Apartments<br/>
                    Krishna Vatika Road<br/>
                    Gokuldhaam, Goregaon - East<br/>
                    Mumbai - 400062
                    </p>
                </span>

            </div><hr/>
            <form id="contact-form" method="POST" action="https://formsubmit.co/family@mediahouse.in" target="hForm">
            <iframe name="hForm" style={{display:"none"}}/>
            <h3 id="form-title">Enquire</h3>

                <span className="formg">
                <label>Name</label>

                <input type="text" />
                </span>

                <span className="formg">
                <label>Email</label>

                <input type="text" />
                </span>

                <span className="formg">
                <label>Phone</label>

                <input type="text" />
                </span>

                <span className="formg">
                <label>Message</label>

                <input type="text" />
                </span>


                <input type="submit" value="SUBMIT" id="submitBtn"/>

            </form>
        </div>
        <p id="endemail">E-mail: family@mediahouse.in</p>
        </React.Fragment>
    )
}

export default Contact;