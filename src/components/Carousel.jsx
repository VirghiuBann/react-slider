import { useState } from 'react'
import { FaQuoteRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { shortList } from '../data.js'

const Carousel = () => {
  const [peoples, setPeoples] = useState([...shortList])
  return (
    <section>
      <div className='slider-container'>
        {peoples.map((people) => {
          const { id, name, title, image, quote } = people
          return (
            <section key={id} className='slide'>
              <div>
                <img className='person-img' src={image} alt={name} />
              </div>
              <h5 className='name'>{name}</h5>
              <h5 className='title'>{title}</h5>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </section>
          )
        })}
        <button className='prev'>
          <FaAngleLeft />
        </button>
        <button className='next'>
          <FaAngleRight />
        </button>
      </div>
    </section>
  )
}

export default Carousel
