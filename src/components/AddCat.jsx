import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCatImages, sendCatImage } from '../actions/actions';


export const AddCat = () => {

  const [catFile, setCatFile] = useState('')
  const dispatch = useDispatch()

  const onFileChange = async (e) => {
      const file = e.target.files[0];
      setCatFile(file)
  };

  const sendDispatch = () =>{
      dispatch(sendCatImage(catFile));
  }

  
  return (
    <div className='container background-crud p-2 text-white bg-opacity-75'>
    
    <div className='d-flex justify-content-center m-4'>
        <h2> 
            ADD AND DELETE YOUR OWN PICTURES OF CATS 
        </h2>
    </div>
    <div className='d-flex flex-column align-items-center '> 

     <div className="mb-3">
      <label for="formFile" className="form-label">Select a cat image from your computer </label>
      <input 
          className="form-control" 
          type="file" 
          id="formFile"
          name="image"
          onChange={(e)=> onFileChange(e)}
      />
      </div>
      {/* <div className='m-4'>
         
          <input
            className=""
            type="file"
            id='files'
           
            
            />
      </div> */}

        <div>
            <button type='button'
              onClick={()=> sendDispatch()}
              className='btn btn-info text-white'
            >
              Submit 
            </button>
        </div>
      </div>
    </div>
  )
  }
