import React from 'react'
import { Dish1 } from '../../components/MenuArgentino.jsx/dish1'
import { Dish2 } from '../../components/MenuArgentino.jsx/dish2'
import { Dish3 } from '../../components/MenuArgentino.jsx/dish3'
import '../../components/CSS/stylesMenus.css'

export const AsadoArgentino = () => {
  return (
    <div className='card-container'>
      <Dish1 className="card-size" />
      <Dish2 className="card-size" />
      <Dish3 className="card-size" />
    </div>
  )
}

