import React from 'react'
import { Dish1 } from '../../components/MenuChileno.jsx/dish1'
import { Dish2 } from '../../components/MenuChileno.jsx/dish2'
import { Dish3 } from '../../components/MenuChileno.jsx/dish3'
import '../../components/CSS/stylesMenus.css'

export const AsadoChileno = () => {
  return (
    <div className='card-container'>
<Dish1/>
<Dish2/>
<Dish3/>
   </div>
  )
}

