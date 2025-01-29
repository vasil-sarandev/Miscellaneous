import { STATIC_ROUTES } from '@routes'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import './homepage.scss'

export const HomePage: FC = () => (
  <div className='homepage'>
    <div className='homepage__title'>
      <h2>
        <Link to={STATIC_ROUTES.products}>Products</Link>
      </h2>
    </div>
    <div className='homepage__content'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui nisi, cursus in laoreet quis,
      faucibus ut enim. Praesent ac feugiat nunc, vel laoreet felis. In rhoncus vitae ipsum eget
      mollis. Aliquam sit amet dolor sit amet libero ultrices pellentesque ac vitae eros.
      <div className='homepage__banner'>
        <img src='https://i.ibb.co/7pwJbqw/ezgif-com-gif-maker-2.webp' alt='sandy beach' />
        <div className='homepage__image-credit'>
          <a href='https://unsplash.com/photos/4o7f9_Z73a4' target='blank' rel='noreferrer'>
            Image credit: Brandon Burridge @ Unsplash
          </a>
        </div>
      </div>
    </div>
  </div>
)
