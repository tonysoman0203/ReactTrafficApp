import * as Models from '../constants/models'
import * as Actions from '../constants/action-types'
import { itemsRef } from '../index'
import moment from 'moment'

const DataReducers = (state = {} ,action) =>{
    switch(action.type){
        case Actions.FETCH_DATA_RECEIVED: {
            var items = []
            action.data.forEach((child) => {
                
                items.push({
                  image: child,
                  key: child.key,
                  updatedAt: moment()
                });
                
            });
            return({
                ...state,
                items
            })

        }
        default: return state
    }
}

export default DataReducers