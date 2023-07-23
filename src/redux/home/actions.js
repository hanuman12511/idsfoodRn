import * as type from './types';

export const Profile = payload =>{
      return{
            type:type.profile,
            payload
      }
}


export const Gallery =payload =>{
      return{
            type:type.gallery,
            payload
      }
}

export const Menu = payload=>{
      return{
            type:type.menu,
            payload
      }
}