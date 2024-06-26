import React from 'react'
import faqsData from '../../content/faq.json'
import Faq from './Faq'

const Faqs = () => {
  return (
    <div>
      <h1 className='text-center text-2xl font-bold my-6'>Frequently Asked Questions</h1>
      {
        faqsData.map((faq) =>(
            <Faq key={faq.id} {...faq}/>
        ))
      }
    </div>
  )
}

export default Faqs
