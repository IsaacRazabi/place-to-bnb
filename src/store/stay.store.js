
import { storageService } from '../services/async-storage.service';
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
    },
    actions: {
        async loadStayes({ commit }) {
            try {
                const stayes = await stayService.query();
                console.log(stayes);
                commit({ type: 'setStayes', stayes })
            } catch (err) {
                console.log('stayesStore: Error in loadStayes', err)
                throw err
            }
        },        
        async saveStay({stayToSave}){
            console.log(stayToSave);
            try{
                if(stayToSave._id){
                    await storageService.put('stayData',stayToSave)
                }
                await storageService.post('stayData',stayToSave)
                // dispatch({ type: 'loadStayes' })
            }
            catch {
                console.log('we have a problem');
            }
        }
    }
}

