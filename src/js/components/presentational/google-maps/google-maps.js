import React, { useEffect } from 'react';

const Map = (props) => {
 const onScriptLoad = () => {
    const map = new window.google.maps.Map(
      document.getElementById(props.id),
      props.options);
    props.onMapLoad(map)
  }
  useEffect(()=>{
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCMUuigySB40GguKe3jKJMoIHz1ErfMuqA`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      s.addEventListener('load', e => {
        onScriptLoad();
      })
    } else {
      onScriptLoad();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
    return (
      <div id={props.id} />
    );
}

export default Map;