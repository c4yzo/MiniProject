import React from 'react'
import './HomeScreen.css'
import Showcase from '../../Components/Showcase/Showcase.jsx'
import FeaturedShelf from '../../Components/FeaturedShelf/FeaturedShelf.jsx'

export default function HomeScreen() {
  return (
    <div className='home-screen'>
      <Showcase />
      <FeaturedShelf />
    </div>
  )
}
