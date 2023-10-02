import { useState } from 'react'
import { FaQuoteRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { longList } from '../data.js'

const Carousel = () => {
  const [peoples, setPeoples] = useState([...longList])
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <section>
      <div className='slider-container'>
        {peoples.map((people, index) => {
          const { id, name, title, image, quote } = people
          return (
            <article
              style={{
                transform: `translateX(${100 * (index - currentIndex)}%)`,
                opacity: index === currentIndex ? 1 : 0,
                visibility: index === currentIndex ? 'visible' : 'hidden',
              }}
              key={id}
              className='slide'
            >
              <div>
                <img className='person-img' src={image} alt={name} />
              </div>
              <h5 className='name'>{name}</h5>
              <h5 className='title'>{title}</h5>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
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
