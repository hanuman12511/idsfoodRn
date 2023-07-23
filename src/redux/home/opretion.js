import * as action from './actions';
import {makeRequest,BASE_URL} from '../../api/ApiInfo';
export const UserProfile=params=>async dispatch=>{
     try {
       let res = await makeRequest(BASE_URL+'Vendors/getVendorProfile',params,true);
       dispatch(action.Profile(res))
      } catch (error) {
      console.log(error);}
}

export const UserGallery = params => async dispatch=>{

      try {
            let res = await makeRequest(BASE_URL+'Vendors/vendorGalleryListing',params,true);
            console.log('====================================');
            console.log("ga",res);
            console.log('====================================');
       dispatch(action.Gallery(res))
      } catch (error) {
            console.log(error);  
      }
}

export const UserMenu = params => async dispatch=>{

      try {
            let res = await makeRequest(BASE_URL+'Vendors/getMenuList',params,true);
       dispatch(action.Menu(res))
      } catch (error) {
            console.log("erro",error);  
      }
}