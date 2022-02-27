import React,{useState} from 'react';

import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

const Maps = props => {
 const [isOpen,setIsOpen] = useState(false);
 const [coords,setCoords] = useState({lat: 40.756795, lng: -73.954298});
 const [address,setAddress] = useState('');

 const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng =>
        setCoords({
          coords: latLng
        })
      )
      .catch(error => console.error('Error', error));
  };

 const handleChange = address => {
    setAddress(address);
  };

  const handleToggleOpen = () => {
    setIsOpen(true)
  };

  const handleToggleClose = () => {
    setIsOpen(false)
  };

  const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap defaultCenter={coords} defaultZoom={13}>
              <Marker
                key={props.index}
                position={coords}
                onClick={() => handleToggleOpen()}
              >
                {isOpen && (
                  <InfoWindow
                    onCloseClick={props.handleCloseCall}
                    options={{ maxWidth: 100 }}
                  >
                    <span>This is InfoWindow message!</span>
                  </InfoWindow>
                )}
              </Marker>
            </GoogleMap>
      ))

    return (
        <div>
          <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading
            }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input'
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style
                        })}
                        key={suggestion.placeId}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
          <GoogleMapExample
            containerElement={<div style={{ height: `500px`, width: '500px' }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      );
            
}

export default Maps;