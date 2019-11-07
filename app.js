//Instantiate Current Location
const currentLocation = new GeoLocator();

console.log(currentLocation); 

currentLocation.getCurrentLocation(data => {
     return data});



//currentLocation.getUserAddressBy(data.coords.latitude, data.coords.longitude)
//    .then(data => {console.log(data.city, data.country);