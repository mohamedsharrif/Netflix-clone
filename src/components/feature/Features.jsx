import React from 'react'
import featureData from "../../content/features.json"
import Feature from './Feature'

const Features = () => {
  return (
    <div>
      
      {
        featureData.map((feature) =>(
          <Feature key={featureData.id} 
          title={feature.title} 
          description={feature.description} 
          image={feature.image}
          video={feature.video}
          id={feature.id}/>
        ))
        
      }
       
      
   
    </div>
  )
}

export default Features
