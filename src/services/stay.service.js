import {storageService } from './async-storage.service.js'
import {defaultStayes } from '../data/airbnb.js';



export const stayService = {
  query,
  getById,
  getEmptyStay
};

const STAY_KEY = 'stayData';
const gStayes = defaultStayes.stay;



function query() {
  return storageService.query(STAY_KEY)
      .then(stayes => {
          if (!stayes.length) { 
              const initialstayList =  gStayes;
              storageService.postMany(STAY_KEY, initialstayList) 
              return initialstayList;
          }
          return stayes;
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
    loc:'',
    type: "",
    createdAt: Date.now(),
    inStock: true,
    imgs:[]
  };
}
