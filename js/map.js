import {disabledForm, EnabledForm} from './state.js';
import {createSimilarAdd} from './data.js';
import { renderPopup } from './markup-generation.js';
const similarAdds = createSimilarAdd(10);
disabledForm();
const address = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');
const form = document.querySelector('.ad-form');
const START_LATITUDE = 35.6895;
const START_LONGITUDE = 139.692;

const map = L.map('map-canvas')
  .on('load', () => {
    address.value = `${START_LATITUDE  } ,${ START_LONGITUDE}`;
    EnabledForm();
  })
  .setView({
    lat: START_LATITUDE,
    lng: START_LONGITUDE,
  }, 8);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const adsPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});


const mainPinMarker = L.marker(
  {
    lat: START_LATITUDE,
    lng: START_LONGITUDE,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (point) => {
  const lat = point.location.lat;
  const lng = point.location.lng;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: adsPinIcon,
    },
  );
  marker.addTo(markerGroup)
    .bindPopup(renderPopup(point));
};

similarAdds.forEach((point)=>{
  createMarker(point);
});

resetButton.addEventListener('click',()=>{
  mainPinMarker.setLatLng({
    lat: START_LATITUDE,
    lng: START_LONGITUDE,
  });
  map.setView({
    lat: START_LATITUDE,
    lng: START_LONGITUDE,
  }, 8);
});

form.addEventListener('sumbit',()=>{
  mainPinMarker.setLatLng({
    lat: START_LATITUDE,
    lng: START_LONGITUDE,
  });
  map.setView({
    lat: START_LATITUDE,
    lng: START_LONGITUDE,
  }, 8);
});

mainPinMarker.on('moveend', (evt) => {
  const markerAddress = evt.target.getLatLng();
  address.value = `${markerAddress.lat  }, ${markerAddress.lng}`;
});

