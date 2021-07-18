import {storageService } from './async-storage.service.js'
import {defaultStayes } from '../data/airbnb.js';
// import { userService } from './user.service.js';



export const stayService = {
  query,
  getById,
  getEmptyStay,
  remove,
add
};

const STAY_KEY = 'stayData';
const gStayes = defaultStayes.stay;



function query(filterBy) {
  return storageService.query(STAY_KEY)
  .then(stayes => {
    if (!stayes.length) { 
        const initialstayList =  gStayes;
        storageService.postMany(STAY_KEY, initialstayList) 
        return initialstayList;
    }


    let cheakedAmenities = [];
    if(cheakedAmenities.length) {
     Object.entries(filterBy.amenities).forEach(
      ([key, value]) => { if (value) {cheakedAmenities.push(key)}}
  );
     }
  if (cheakedAmenities.includes('Smokingallowed')) {
    let idx = cheakedAmenities.findIndex(name=> name === 'Smokingallowed');
    cheakedAmenities.splice(idx,1,'Smoking allowed')
  } 
  if (cheakedAmenities.includes('Cookingbasics')) {
    let idx = cheakedAmenities.findIndex(name=> name === 'Cookingbasics');
    cheakedAmenities.splice(idx,1,'Cooking basics')
  } 
  if (cheakedAmenities.includes('Petsallowed')) {
    let idx = cheakedAmenities.findIndex(name=> name === 'Petsallowed');
    cheakedAmenities.splice(idx,1,'Pets allowed')
  } 


    let regex = new RegExp(filterBy.loc, 'i')
    let filteredStayes=stayes.filter((stay) =>regex.test(stay.loc.address)) 
    .filter(stay=> stay.price>filterBy.priceStart && stay.price < filterBy.priceEnd )

    if(cheakedAmenities.length) {
    return filteredStayes.filter(stay=>stay.amenities.some(sta=>cheakedAmenities.includes(sta)))
    } 

     return filteredStayes;
    })
}

function getById(stayId) {
  return storageService.get(STAY_KEY, stayId);
}

function getEmptyStay() {
  return {
    _id: "",
    name: "",
    summary: "",
    price: null,
    loc:{address:''},
    type: "",
    createdAt: Date.now(),
    imgUrls: [],
    reviews:[{rate:4.2}]
  };
}

function remove(stayId) {
  // return httpService.delete(`stay/${stayId}`)
  return storageService.delete('stayData', stayId)

}


async function add(stay) {
  // const addedStay = await httpService.post(`stay`, stay)
 if (stay._id){
  // stay.byUser = userService.getLoggedinUser()
  // stay.aboutUser = await userService.getById(stay.aboutUserId)
  const addedStay = storageService.put(STAY_KEY, stay)
  return addedStay
 }
 else{
  //  stay.byUser = userService.getLoggedinUser()
  //  stay.aboutUser = await userService.getById(stay.aboutUserId)
   const addedStay = storageService.post(STAY_KEY, stay)
   return addedStay
 }
}

