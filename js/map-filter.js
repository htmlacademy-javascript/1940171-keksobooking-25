import {getChekedInputValues} from './util.js';


const mapFilters = document.querySelector('.map__filters');
const similarAdRank = (similarAd) => {
  const filterType = document.querySelector('#housing-type');
  const filterPrice = document.querySelector('#housing-price');
  const filterRooms = document.querySelector('#housing-rooms');
  const filterGuests = document.querySelector('#housing-guests');

  let rank = 0;

  if(similarAd.offer.type === filterType.value){
    rank += 4;
  }
  if(filterPrice.value !== 'any'){
    if(filterPrice.value === 'low' && similarAd.offer.price < 10000){
      rank += 3;
    }else if(filterPrice.value === 'high' && similarAd.offer.price > 50000){
      rank += 3;
    }else if(filterPrice.value === 'middle' && similarAd.offer.price >= 10000 && similarAd.offer.price <= 50000){
      rank += 3;
    }
  }
  if(similarAd.offer.rooms === Number(filterRooms.value)){
    rank += 2;
  }
  if(similarAd.offer.guests === Number(filterGuests.value)){
    rank += 2;
  }
  if(similarAd.offer.features){
    getChekedInputValues('.map__checkbox:checked').forEach((feauture) => {
      if(similarAd.offer.features.includes(feauture)){
        rank += 1;
      }
    });
  }
  return rank;
};

const compareAds = (adA, adB) => {
  const rankA = similarAdRank(adA);
  const rankB = similarAdRank(adB);

  return rankB - rankA;
};

const adsFilter = (cb) => {
  mapFilters.addEventListener('change', () => {
    cb();
  });
};

export {adsFilter, compareAds};
