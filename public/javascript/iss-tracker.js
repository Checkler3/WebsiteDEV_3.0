//Initizalizing map
const mymap = L.map('issMap').setView([0, 0], 1);

//Making a map and tiles
const attribution =
	"&copy; <a href='https://www.openstreetmap.org/copyright'> OpenStreetMap</a> contributors";
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);
const apiUrl = 'https://api.wheretheiss.at/v1/satellites/25544';

//Making a custom iss icon.
const issIcon = L.icon({
	iconUrl: '/images/icons/iss200.png',
	iconSize: [50, 32],
	iconAnchor: [25, 16]
});

//Add Icon to Map
const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

//Initialize checkbox to a variable
const checkBox = document.getElementById('center');

//First time variable
let firstTime = true;

//Go fetch the data from the website
async function getData() {
	const response = await fetch(apiUrl);
	const data = await response.json();
	const { latitude, longitude, altitude, velocity } = data;

	//Set maker to ISS Location
	marker.setLatLng([latitude, longitude]);
	if (firstTime) {
		mymap.setView([latitude, longitude], 3);
		firstTime = false;
	}

	//Lock screen to ISS location
	if (checkBox.checked == true) {
		mymap.setView([latitude, longitude]);
	}

	//Set text for printout on page
	document.getElementById('lat').textContent = latitude.toFixed(2);
	document.getElementById('lon').textContent = longitude.toFixed(2);

	//Convert km to miles
	const height = altitude * 1.609;
	document.getElementById('alt').textContent = height.toFixed(2);

	//Converty kph to mph
	const mph = velocity * 0.6213711922;
	const speed = mph.toFixed(2);
	document.getElementById('vel').textContent = speed;

	//Logs to latitude and longitude to the console
	console.log(latitude);
	console.log(longitude);
}

//Run getData as soon as page loads
getData();

//Run getData every 1 second
setInterval(getData, 1000);
