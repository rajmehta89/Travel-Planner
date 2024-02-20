import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Event from './Components/Event/Event';
import Profile from './Components/Profile/Profile';
import EventDetails from './Components/EventDetails/EventDetails';

function App() {
    return (
        <>
        <Router>
        <Routes>
        <Route path="/" element={<Login/>} />  
        <Route path="/login" element={<Login/>} />
        <Route path="/EventDetails" element={<EventDetails/>}/>
        <Route path="/Event" element={<Event/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        </Routes>
      </Router>  

      

      {/* <Test/> */}
  
      </>    
    );
}

export default App;



// import React, { useState, useEffect } from 'react';
// import { CssBaseline, Grid } from '@material-ui/core';
// import { getPlacesData, getWeatherData } from './api/travelAdvisorAPI';
// import Header from './Components/Header/Header';
// import List from './Components/List/List';
// import Map from './Components/Map/Map';

// const App = () => {
//   console.log(getWeatherData);
//   const [type, setType] = useState('restaurants');
//   const [rating, setRating] = useState('');

//   const [coords, setCoords] = useState({});
//   const [bounds, setBounds] = useState(null);

//   const [weatherData, setWeatherData] = useState([]);
//   const [filteredPlaces, setFilteredPlaces] = useState([]);
//   const [places, setPlaces] = useState([]);

//   const [autocomplete, setAutocomplete] = useState(null);
//   const [childClicked, setChildClicked] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
//       setCoords({ lat: latitude, lng: longitude });
//     });
//   }, []);

//  // ... (previous code)

// useEffect(() => {
//     const filtered = places?.filter((place) => Number(place.rating) > rating);
//     setFilteredPlaces(filtered || []);
//   }, [rating, places]);
  
//   useEffect(() => {
//     if (bounds && coords.lat && coords.lng) {
//       setIsLoading(true);
  
//       getWeatherData(coords.lat, coords.lng).then((data) => setWeatherData(data));
  
//       getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
//         const validPlaces = data.filter((place) => place.name && place.num_reviews > 0);
//         setPlaces(validPlaces);
//         setFilteredPlaces([]);
//         setRating('');
//         setIsLoading(false);
//       });
//     }
//   }, [bounds, type, coords]);
  
//   // ... (remaining code)
  
//   const onLoad = (autoC) => setAutocomplete(autoC);

//   const onPlaceChanged = () => {
//     const lat = autocomplete.getPlace().geometry.location.lat();
//     const lng = autocomplete.getPlace().geometry.location.lng();
//     setCoords({ lat, lng });
//   };

//   return (
//     <>
//       <CssBaseline />
//       <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
//       <Grid container spacing={3} style={{ width: '100%' }}>
//         <Grid item xs={12} md={4}>
//           <List
//             isLoading={isLoading}
//             childClicked={childClicked}
//             places={filteredPlaces.length ? filteredPlaces : places}
//             type={type}
//             setType={setType}
//             rating={rating}
//             setRating={setRating}
//           />
//         </Grid>
//         <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           <Map
//             setChildClicked={setChildClicked}
//             setBounds={setBounds}
//             setCoords={setCoords}
//             coords={coords}
//             places={filteredPlaces.length ? filteredPlaces : places}
//             weatherData={weatherData}
//           />
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default App;
