// import React, { useState } from 'react'
// import ReactGlobe from 'react-globe';

// // import optional tippy styles for tooltip support
// import 'tippy.js/dist/tippy.css';
// import 'tippy.js/animations/scale.css';

// function ReactGlobes() {
//     const markers = [
//         {
//             id: 'marker1',
//             city: 'Singapore',
//             color: 'red',
//             coordinates: [1.3521, 103.8198],
//             value: 50,
//         },
//         {
//             id: 'marker2',
//             city: 'New York',
//             color: 'blue',
//             coordinates: [40.73061, -73.935242],
//             value: 25,
//         },
//         {
//             id: 'marker3',
//             city: 'San Francisco',
//             color: 'orange',
//             coordinates: [37.773972, -122.431297],
//             value: 35,
//         },
//         {
//             id: 'marker4',
//             city: 'Beijing',
//             color: 'gold',
//             coordinates: [39.9042, 116.4074],
//             value: 135,
//         },
//         {
//             id: 'marker5',
//             city: 'London',
//             color: 'green',
//             coordinates: [51.5074, 0.1278],
//             value: 80,
//         },
//         {
//             id: 'marker6',
//             city: 'Los Angeles',
//             color: 'gold',
//             coordinates: [29.7604, -95.3698],
//             value: 54,
//         },
//     ];

//     const options = {
//         ambientLightColor: 'red',
//         cameraRotateSpeed: 0.5,
//         focusAnimationDuration: 2000,
//         focusEasingFunction: ['Linear', 'None'],
//         pointLightColor: 'gold',
//         pointLightIntensity: 1.5,
//         globeGlowColor: 'blue',
//         markerTooltipRenderer: marker => `${marker.city} (${marker.value})`,
//     };

//     const [globe, setGlobe] = useState(null);
//     console.log(globe); // captured globe instance with API methods

//     return (
//         <ReactGlobe
//             height="100vh"
//             globeBackgroundTexture="https://media1.thehungryjpeg.com/thumbs2/ori_3524085_55b822c5504991067a63d33246cfea44d557c5d5_polygonal-map-digital-globe-map-blue-polygons-earth-maps-and-world-i.jpg"
//             globeCloudsTexture={null}
//             globeTexture="https://ak.picdn.net/shutterstock/videos/7153285/thumb/1.jpg"
//             initialCoordinates={[1.3521, 103.8198]}
//             markers={markers}
//             options={options}
//             width="100%"
//             onClickMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
//             onGetGlobe={setGlobe}
//             onMouseOutMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
//             onGlobeTextureLoaded={() => console.log('globe loaded')}
//             onMouseOverMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
//         />
//     )
// }

// export default ReactGlobes