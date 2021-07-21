// import {storageService } from './async-storage.service.js'
// import {defaultOrderes } from '../data/airbnb.js';
import { userService } from './user.service.js';
import { httpService } from './http.service.js';



export const orderService = {
  query,
  getById,
//   getEmptyOrder,
  remove,
add
};

// const ORDER_KEY = 'orderData';
// const gOrderes = defaultOrderes.order;



function query(filterBy='') {
  return httpService.get("order", { params: { filterBy } });

  // return storageService.query(ORDER_KEY)
  // .then(orders => {
  //   // if (!orderes.length) { 
  //   //     const initialorderList =  gOrderes;
  //   //     storageService.postMany(ORDER_KEY, initialorderList) 
  //       return orders;
  //   })
}

function getById(orderId) {
  // return storageService.get(ORDER_KEY, orderId);
  return httpService.get("order/"+ orderId);
}

// function getEmptyOrder() {
//   return {
//     _id: "",
//     name: "",
//     summary: "",
//     price: null,
//     loc:{address:''},
//     type: "",
//     createdAt: Date.now(),
//     imgUrls: [],
//     reviews:[{rate:4.2}]
//   };
// }

function remove(orderId) {
  return httpService.delete(`order/${orderId}`)
  // return storageService.delete('orderData', orderId)

}


async function add(order) {
  if (order._id){
    order.byUser = userService.getLoggedinUser()
    order.aboutUser = await userService.getById(order.aboutUserId)
    const addedOrder = await httpService.put(`order`, order)
    return addedOrder
  }
  else{
    order.byUser = userService.getLoggedinUser()
    order.aboutUser = await userService.getById(order.aboutUserId)
    
    const addedOrder = await httpService.post(`order`, order)
  //  const addedOrder = storageService.post(ORDER_KEY, order)
   return addedOrder
 }
}

