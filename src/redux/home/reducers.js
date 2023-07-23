import { combineReducers } from 'redux';
import * as type from './types';
export const reducer1= (state=[],action)=>{

      switch(action.type){

            case type.profile:{
                  return{
                        ...state,
                        payload:action.payload
                  }
            }
           

            default : return state
      }
}
export const reducer2= (state=[],action)=>{

      switch(action.type){

            
            case type.gallery:
                  return{
                        ...state,
                        payload:action.payload
                  }
           

            default : return state
      }
}
export const reducer3= (state=[],action)=>{

      switch(action.type){

            case type.menu:
                  return{
                        ...state,
                        payload:action.payload
                  }

            default : return state
      }
}
const root = combineReducers({getProfile:reducer1,getGallery:reducer2,getMenu:reducer3});
export default root;