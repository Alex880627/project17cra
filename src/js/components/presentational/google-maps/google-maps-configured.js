import Map from './google-maps';
import React from 'react';

const createInfoWindow = (e, map) => {
  const contentString = '<div id="content" style="line-height:0;text-align:center; ">'+
      '<p>Falk Miksa u. 17</p>'+
      '<p> Budapest, 1055 </p>'+
      '</div>';
  const InfoWindow = new window.google.maps.InfoWindow({
      content: contentString,
      position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
  })
  InfoWindow.addListener('domready', e => {
    // eslint-disable-next-line 
    return <InfoWindow />, document.getElementById('infoWindow');
  })
  InfoWindow.open(map)
}

const GoogleMapConfigured = () => {

  return (
    <Map
      id="map"
      options={{
        center: { lat: 47.512209, lng: 19.048778 },
        zoom: 16,
        streetViewControl: true,
        mapTypeControl: false,
        styles: styles
      }}
      onMapLoad={map => {
        var marker = new window.google.maps.Marker({
          position: { lat: 47.512209, lng: 19.048778 },
          map: map,
        });
        marker.addListener('click', e => {
          createInfoWindow(e, map)
        })
      }}
    />
  );
}

const styles = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#265C42'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#265C42'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}]
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}]
  }
]

export default GoogleMapConfigured;