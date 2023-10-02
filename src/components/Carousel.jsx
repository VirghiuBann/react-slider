import { useState } from 'react'
import { shortList } from '../data.js'

const Carousel = () => {
  const [peoples, setPeoples] = useState([...shortList])
  return (
    <section>
      <div className='container'>
        {peoples.map((people) => {
          const { id, name, title, image, quote } = people
          return (
            <section key={id}>
              <div>
                <img src={image} alt={name} />
              </div>
              <h4>{title}</h4>
              <p>{quote}</p>
            </section>
          )
        })}
      </div>
      <button>prev</button>
      <button>next</button>
    </section>
  )
}

export default Carousel
