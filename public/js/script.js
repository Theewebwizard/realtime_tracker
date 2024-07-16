const socket = io(); // Send connection request - step 2

if (navigator.geolocation) { // Checking if the browser supports geolocation-step 3
    navigator.geolocation.watchPosition((position) => { // Watching position
        const { latitude, longitude } = position.coords;
        socket.emit('send-location', { latitude, longitude }); // Emitting the location data to server
    }, (error) => {
        console.error(error); // Log error if unable to get position
    },
    {
        enableHighAccuracy: true, // Use the most accurate position data
        timeout: 1000, // Don't wait more than 5 seconds to get a position
        maximumAge: 0 // Don't use cached data
    });
}

const map = L.map('map').setView([0, 0], 16); // Initialize map-step 4

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { // Add a tile layer, this is actually for displaying the map step-5
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const markers = {}; //initialize markers step 8

socket.on("receive-location", (data)=>{ //step-7
    const { latitude, longitude, id } = data;
    map.setView([latitude,longitude]); //from here your cureent location would be displayed 

    if(markers[id]){
        markers[id].setLatLng([latitude,longitude]);
        console.log('Updating marker position:', latitude, longitude);
    }
    else{
        markers[id] = L.marker([latitude,longitude]).addTo(map);
        console.log(latitude,longitude);
    }   
});

socket.on("user-disconnected", (id) => { 
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id]; 
        }
});