
// import { storageService } from '../services/async-storage.service';
// import { socketService, SOCKET_EMIT_USER_WATCH, SOCKET_EVENT_USER_UPDATED } from '../services/socket.service'
import { stayService } from '../services/stay.service';


export const stayStore = {
    state: {
       stayes: []
    },
    getters: {
        stayesToDisplay( state ) {
             return  state.stayes 
            }
    },
    mutations: {
        setStayes(state, { stayes }) {
            state.stayes = stayes;
        },
        addStay(state, { stay }) {
            state.stayes.push(stay)
        },
        removeStay(state, { stayId }) {
            state.stayes = state.stayes.filter(stay => stay._id !== stayId)
        },
    },
    actions: {
        async loadStayes({ commit }) {
            try {
                const stayes = await stayService.query();
                commit({ type: 'setStayes', stayes })
            } catch (err) {
                console.log('stayesStore: Error in loadStayes', err)
                throw err
            }
        },        

 

        async saveStay({commit}, { stay }){
            
            try{
                await stayService.add(stay)
                .then(savedStay => {
                    commit({type: 'addStay', savedStay });
                      return savedStay;
                    })
              
            }
            catch {
                console.log('we have a problem');
            }
        }
    }
}

