import * as Models from '../constants/models'
import * as Actions from '../constants/action-types'
import { itemsRef } from '../index'
import moment from 'moment'
import { connect } from 'react-redux'
import App from '../App'
import { bindActionCreators } from 'redux'

  
export const callFireBase = (reg) =>{
    return dispatch => {
        dispatch(toggleLoading())
        callFireBaseOrderByRegion(reg)
        .then(response => {
            console.log(`callFirebase = ${JSON.stringify(response)}`);
            dispatch(toggleLoading())
            dispatch(callFirebaseSuccess(response))
        })
        .catch(error => {

        })
    }
}

export const getDataByRegion = (region) => {
    return dispatch => {
        dispatch(toggleLoading())
        callFireBaseOrderByRegion(region)
        .then(response => {
            console.log(`getDataByRegion = ${JSON.stringify(response)}`);
            dispatch(toggleLoading())
            dispatch(callFirebaseSuccess(response))
            
        })
        .catch((err)=>{

        })
    }
}

function callFireBaseOrderByRegion(region){
    return itemsRef.orderByChild('region').equalTo(region).once('value', snap=>{
        return snap.val();
    })
}

function callWebService(){
    return itemsRef.once('value', (snap)=>{
        return snap.val()   
    })
}

export const toggleLoading = (state) =>{
    return ({
        type: Actions.FETCH_DATA_LOADING,
        state
    })
}

export const fetchData = (state) =>{
    return ({
        type: Actions.FETCH_DATA,
        state
    })
}

export const callFirebaseSuccess = (data) => ({
    type: Actions.FETCH_DATA_RECEIVED,
    data: data
})