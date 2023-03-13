import React, { useEffect } from 'react'
import { getCatImages } from '../actions/actions';
import { CatRandom } from './CatRandom';
import { AddCat } from './AddCat';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

export const CatsList = () => {

  const {allCats} = useSelector((state) => state);
 
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getCatImages())
}, [dispatch])


const urlDel = "https://api.thecatapi.com/v1/images/"

const deleteCatImage = async(id) => {
    const url = `${urlDel}${id}`
    await axios({ method: 'DELETE', url, headers: {'x-api-key': 'live_Wf1BGm0EaUJ97JmS7FPhKAJert5wdXLSjWAfsWqJP7g7lggWCEC8ByTf29zqEYml'}})
    dispatch(getCatImages())
}


const RenderCats = () => allCats.map(cat => (
      
   
        <div key={cat.id} className="card" style={{ width: '18rem'}}>
            <img src={cat.url}
                className="card-img-top" 
                alt={cat.original_filename}/>
            
            
              <div className="card-body d-flex justify-content-center align-items-end ">
          
                      
                <button type="button" 
                className="btn btn-danger "
                onClick={(e) => deleteCatImage(cat.id) }
                >
                    Delete
                </button>
              
              </div>
        </div>

 ))

  return (
   
  <div className='container'>
 
      <CatRandom/>
      <AddCat/>

      <div className='d-flex justify-content-center w-100 gap-3 flex-wrap mt-4'>
          <RenderCats/>
      </div>      
  </div>
  )
}
