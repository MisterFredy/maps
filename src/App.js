import logo from './logo.svg';
import './App.css';
import Maps from './Component/Maps';
import Navbar from './Component/AppBar';
import withScriptjs from 'react-google-maps/lib/withScriptjs';
import banner from './Assets/background.png';
import TripList from './Component/TripList';

function App() {
  const MapLoader = withScriptjs(Maps);
  const SizeBanner = {
    width: '100vw'
  }

  return (
    <>
    <Navbar/>
    <div>
      <img style={SizeBanner} src={banner}/>
    </div>
    <MapLoader 
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDgbAWfq5T1O12EPpZrGSiJv-vM592Nihs&libraries=places"
      loadingElement={<div style={{ height: `100%` }} />}
    />
    <TripList />
    </>
   
  );
}

export default App;
