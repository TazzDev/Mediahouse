import React from 'react';

import ClientsMain from '../../public/images/clients.png';

const Clients = () => {
    return(
        <div id="clients">
            <h3>Clients</h3>

            <img src={ClientsMain} alt="cleints" id="climage"></img>

        </div>
    )
}

export default Clients;