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
    let regex = new RegExp(filterBy.loc, 'i')
    let filteredStayes=stayes.filter((stay) => regex.test(stay.loc.address));
    console.log(stayes);
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

