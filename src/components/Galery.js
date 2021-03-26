import React, { useState } from 'react'

import tanya from '../img/image-tanya.jpg'
import john from '../img/image-john.jpg'


const Galery = () => {

    const [image] = useState([tanya, john])
    const [counterImage, setCounterImage] = useState(0)


    const handleNextImage = () => {
        ( counterImage >= image.length - 1 ) ? setCounterImage(0) : setCounterImage( counterImage + 1 )
    }

    const handleBackImage = () => {
        ( counterImage <= 0 ) ? setCounterImage(0) : setCounterImage( counterImage - 1 )
    }


    return(
        <div className=''>
            <p className='font-medium text-xl text-center mb-5'>GALERY</p>
            <img src={ image[counterImage] } alt='tanta' className='w-80 h-80 shadow rounded-md mb-5 animate__animated animate__fadeInRight' />
            
            <div className='grid grid-cols-2 gap-4 '>
                <button
                disabled={ counterImage <= 0 ? true : false}
                onClick={ handleBackImage } 
                className={`
                ${ counterImage <= 0 ? 'bg-gray-100 cursor-not-allowed' :'hover:bg-gray-300 bg-gray-200'}
                shadow-lg focus:outline-none rounded-md py-2  text-sm font-mediun uppercase font-medium `}>
                    Back
                </button>

                
                <button
                disabled={ counterImage >= image.length -1 ? true : false}
                onClick={ handleNextImage} 
                className=
                {`${ counterImage >= image.length - 1 ? 'bg-gray-100 cursor-not-allowed':'hover:bg-gray-300 bg-gray-200'} 
                shadow-lg focus:outline-none  rounded-md py-2  text-sm font-mediun uppercase font-medium`}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Galery