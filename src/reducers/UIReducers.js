import * as Models from '../constants/models'
import * as Actions from '../constants/action-types'

const UIReducers = (state = Models.UIState, action) =>{
    switch(action.type){
        case Actions.FETCH_DATA_LOADING:{
            return state.set('isLoading',!state.get(`isLoading`))
        }
        default: return state;
    }
}


export default UIReducers