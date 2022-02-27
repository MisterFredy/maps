import logo from './logo.svg';
import './App.css';
import Maps from './Component/Maps';
import withScriptjs from 'react-google-maps/lib/withScriptjs';

function App() {
  const MapLoader = withScriptjs(Maps);

  return (
   <MapLoader 
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDgbAWfq5T1O12EPpZrGSiJv-vM592Nihs&libraries=places"
    loadingElement={<div style={{ height: `100%` }} />}
   />
  );
}

export default App;
