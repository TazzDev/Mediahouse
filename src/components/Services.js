import React from 'react';
import Service from '../../public/images/service.png';
import Service2 from '../../public/images/service2.png';
import Service3 from '../../public/images/pubblisher_logo.png';


const Services = () => {
    return(
        <div id="services">
            <section id="services"></section>
                        <h3>Services</h3>

            <div id="sbox">
            <div className="service">
                <p>Print Media</p> 
                    Branding &nbsp; &#10148;<br/><div className="desc">Branding is managing your company image, 
                                                        identity and market position, as perceived by the market, 
                                                        across digital networks.
                                </div>
                    <br/>
                    Brochure&nbsp; &#10148;<br/><div className="desc">Brochures are promotional documents, primarily used 
                                                                to introduce a company, organization, products or services
                                                                and inform members of the public of 
                                                                the benefits.
                                </div>
                    <br/>
                    Catalogues&nbsp; &#10148;<br/><div className="desc">Catalogue is a book or magazine containing details and 
                                                                pictures of items currently being offered for sale.

                                </div>
                    <br/>
                    Magazines<br/>
                    Press Ad campaigns
            </div>
            <hr style={{color: "white"}}/>
            <div className="service">
            <p>Electronic Media</p>
                Ad Films&nbsp; &#10148;<br/><div className="desc">It conveys a message promoting, and aiming to market, 
                                                                    a product or service.
 
                                </div>
                <br/>
                <a href="https://www.acfilms.in/" target="_blank">
                <img src={Service2} className="serv-image"></img></a><div className="desc">South India's largest Ad Film Production House in
                                                                                            Chennai having done over 1000+ films.</div>
                <br/>
                Corporate Films&nbsp; &#10148;<br/><div className="desc">Corporate films are video coverage of a Company's story, 
                                                                    its products, or services. 
                                </div>
                <br/>
                Short Films&nbsp; &#10148;<br/><div className="desc">A short film is any motion picture not long enough in running 
                                                                time to be considered a feature film. 
                                </div>
                <br/>
                Documentaries&nbsp; &#10148;<br/><div className="desc">A documentary is a broad term to describe a non-fiction 
                                                                movie that in some way "documents" or captures reality
 
                                </div>
            </div>
            <hr style={{color: "white"}}/>
            <div className="service">
            <p>Web Development</p>

            <div id="web-dev-content">
            Pubblisher Media is a global publishing company setting a new standard for digital media. 
            We're here to help you increase leads and sales through the use of social media, influencers and digital tools.
            </div>

            <a href="https://www.pubblisher.com/" target="_blank">
                <img src={Service3} className="serv-image"></img></a><br/>
                E-Commerce Portal Development&nbsp; &#10148;<br/><div className="desc">Portals are online platforms that allow 
                                                                businesses to conduct transactions with customers 
                                                                and suppliers instantly, facilitating an intuitive and connected 
                                                                operation.
                                </div><br/>
                                
                Banner Advertising&nbsp; &#10148;<br/><div className="desc">The purpose of banner advertising is to promote a 
                                                                brand and/or to get visitors from the host website to go to the 
                                                                advertiser's website.
                                </div><br/>
                SEO/SEM services&nbsp; &#10148;<br/><div className="desc">SEO / SEM is a form of Internet 
                                                                marketing that involves the promotion of websites by increasing 
                                                                their visibility in search engine results pages primarily 
                                                                through paid advertising.
                                </div>
            </div>
            <hr style={{color: "white"}}/>

            <div className="service">
            <p>Other Services</p>
            <a href="https://www.flynettours.com" target="_blank">
            <img src={Service} className="serv-image"></img>
            </a>
            <ul className="flynetul">
                <li className="flynetli desc">
                    We are an IATA accredited travel agent since 2012 authorized by Telangana Tourism and approved by Ministry of External
                    Affairs.
                </li>
                <li className="flynetli desc">
                    We specialize in offering domestic, international & customized tour packages based on the requirement.
                </li>
                <li className="flynetli desc">
                    We don't simply assist in booking your tickets & hotels but provide you with options to maximize your experience during
                    your entire trip.
                </li>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default Services;