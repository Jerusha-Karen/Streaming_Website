import React from 'react'
import disney from './../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import nationalG from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import netflix from './../assets/images/netflix-logo.jpg'
 
import netflixV from './../assets/Videos/netflix.mp4'
import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalGeographicV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'


function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:netflix,
            video:netflixV
            
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:disney,
            video:disneyV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        },

    ]
    return (
      <div className='flex gap-2 md:gap-5 p-2 mt-20 px-5 md:px-16 '>
          {productionHouseList.map((item)=>(
              <div className='border-[2px] border-gray-600
              rounded-lg hover:scale-110 transition-all duration-300
              ease-in-out cursor-pointer relative shadow-xl 
              shadow-gray-800
              '>
                   <video key={item.id} src={item.video} autoPlay loop playsInline muted disablePictureInPicture
              className='absolute z-0  top-0 rounded-md 
              opacity-0 hover:opacity-50 w-full h full object-cover'/> 
                  <img  key={item.id} src={item.image} className='w-full z-[1] opacity-100' /> 
                 
              </div>
          ))}
      </div>
    )
}

export default ProductionHouse