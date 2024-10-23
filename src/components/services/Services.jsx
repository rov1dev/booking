import React from 'react'
import './Services.css'
import { services } from '../../data'
const Services = () => {
  return (
    <div className='services-container'>
        <h1 className='services-header'>Our services</h1>
        <div className='services'>
            {
               services.map(({id,image,title,description})=>(
                <div key={id} className='service-item'>
                    <img src={image} alt="404" className='service-image' />
                    <div className="service-content">
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </div>
               )) 
            }
        </div>
    </div>
  )
}

export default Services