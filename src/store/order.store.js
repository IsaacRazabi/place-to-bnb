// import { storageService } from '../services/async-storage.service';
// import { socketService, SOCKET_EMIT_USER_WATCH, SOCKET_EVENT_USER_UPDATED } from '../services/socket.service'
import { orderService } from "../services/order.service.js";



export const orderStore = {
    state: {
       orders: [],
    },
    getters: {
        ordersToDisplay( state ) {
             return  state.orders 
            }
    },
    mutations: {
        setOrders(state, { orders }) {
            state.orders = orders;
        },
        addOrder(state, { order }) {
            state.orders.push(order)
        },
        // filterStayes(state, { filterBy }) {
        //     state.filterBy = filterBy
        // },
        removeOrder(state, { orderId }) {
            state.orders = state.orders.filter(order => order._id !== orderId)
        },
    },
    actions: {
        async loadOrders(context) {
            try {
                const orders = await orderService.query();
                context.commit({ type: 'setOrders', orders })
            } catch (err) {
                console.log('orderStore: Error in loadOrders', err)
                throw err
            }
        },        
        async saveOrder({commit}, { order }){
            try{
                await orderService.add(order)
                .then(savedOrder => {
                    commit({type: 'addOrder', savedOrder });
                      return savedOrder;
                    })
              
            }
            catch {
                console.log('we have a problem');
            }
        
    },
async updateOrderStatus(context, {order}){
    try {
        order = await orderService.add(order)
        // context.dispatch({type: 'increaseScore'})
        return order;
    } catch (err) {
        console.log('orderStore: Error in addReview', err)
        throw err
    }}

// async removeReview(context, { reviewId }) {
//     try {
//         await reviewService.remove(reviewId);
//         context.commit({ type: 'removeReview', reviewId })
//     } catch (err) {
//         console.log('reviewStore: Error in removeReview', err)
//         throw err
//     }
// },
//     }
// }


// order: [
//     {
//       _id: "o1225",
//       hostId: "u102",
//       createdAt: 9898989,
//       buyer: {
//         _id: "u101",
//         fullname: "User 1",
//       },
//       totalPrice: 160,
//       startDate: "2025/10/15",
//       endDate: "2025/10/17",
//       guests: {
//         adults: 2,
//         kids: 1,
//       },
//       stay: {
//         _id: "h102",
//         name: "House Of Uncle My",
//         price: 63.0,
//       },
//       status: "pending",
//     },
//   ],
}}