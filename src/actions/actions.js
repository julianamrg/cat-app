import axios from "axios";
import axiosHelpers, { axiosMethods } from "../helpers/axiosHelpers";
import { types } from "../types/types"


export const getCatImages = () => {
    
    return async( dispatch ) => {

        const dataCat = await axiosMethods();
       
        dispatch(manyCats(dataCat.data))      
    }
}

const manyCats = ( cats ) => ({
    type: types.getAllCats,
    payload: cats
})


export const sendCatImage = (catFile) => {

    return async( dispatch ) => {

      const data = new FormData();
      data.append("file", catFile);
      try {
         
          await axiosMethods(data, 'POST');
          dispatch(getCatImages())       
      } catch (error) {
          console.log(error)
      }
   }
}

export const  getOneCat = () => {
      
    return async( dispatch ) => {
      
        try {
            const resp =  await axiosHelpers(); 
            
            
            const cat = await resp.data;
            
            if (cat) {
                console.log(cat)
                dispatch(oneCat(cat));
            } 
            
        } catch (error) {
            // Swal.fire('Error', error.response.data.msg , 'error', );
            console.log('Error', error.response.data.msg)
        }

    }
}

const oneCat = ( cat ) => ({
    type: types.getCat,
    payload: cat
})

