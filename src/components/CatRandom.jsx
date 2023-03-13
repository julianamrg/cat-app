import React from 'react'
import { useSelector } from 'react-redux';
import Button from './Button'

export const CatRandom = () => {

const {randomCat} = useSelector((state) => state);
// console.log(randomCat);

return (
           
<>
     
      <div className='container background-color p-2 text-white bg-opacity-75'>

        <div className='d-flex justify-content-center'> 
            <h2>
            TO SEE A CAT
          </h2>
        </div>
       
       <div className='d-flex flex-column align-items-center'> 

        <div className='m-2'>
        <Button> Click here to see a random cat </Button> 
        </div>

        <div className='m-4'>
            <div className="card" style={{ width: '18rem', height: '20rem'}}>
              <img src={randomCat[0].url}
                  className="card-img-top" 
                  alt="gato"
                  style={{ height: '100%'}} 
                />       
            </div>
          </div>
          </div>
        </div>      
  </>
  )
}
