import { useState } from 'react'
import { FaQuoteRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { longList } from '../data.js'

const Carousel = () => {
  const [people, setPeople] = useState([...longList])
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((oldIndex) => {
      const result = (oldIndex - 1 + people.length) % people.length
      return result
    })
  }

  const nextSlide = () => {
    setCurrentIndex((oldIndex) => {
      const result = (oldIndex + 1) % people.length
      return result
    })
  }

  return (
    <section>
      <div className='slider-container'>
        {people.map((item, index) => {
          const { id, name, title, image, quote } = item
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
        <button className='prev' onClick={() => prevSlide()}>
          <FaAngleLeft />
        </button>
        <button className='next' onClick={() => nextSlide()}>
          <FaAngleRight />
        </button>
      </div>
    </section>
  )
}

export default Carousel
