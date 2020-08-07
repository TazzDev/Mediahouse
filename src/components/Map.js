import React from 'react';



class Map extends React.Component{

    componentDidMount() {
        let URL = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY';
        let uluru = {lat: -25.344, lng: 131.036};
        fetch(URL)
        .then(response => {
            console.log(response);
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 4,
                center: myLatLng
              });
            
              var marker = new google.maps.Marker({
                position: uluru,
                map: map,
                title: "Hello World!"
              });
            
        })
    }


    render() {
    return(
        <div id="map">
            
        </div>
    )
    }
}

export default Map;