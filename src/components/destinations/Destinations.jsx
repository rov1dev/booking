import './Destinations.css'
import {destinations} from '../../data'
const Destinations = () => {
  return (
    <div className='destinations-container'>
        <h1 className="destinations-hedaer">Best Destinations</h1>
        <div className="destinations">
            {
                destinations.map(({image,id,title})=>(
                    <div key={id} className='destinations-item'>
                        <img src={image} alt="error" className='destinations-img' /> 
                        <div className='destinations-title'>
                            <h1>{title}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Destinations