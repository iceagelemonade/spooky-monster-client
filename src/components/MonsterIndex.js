import React, { useState, useEffect } from 'react'
import { monsterIndex } from '../api/monster'
import { Link } from 'react-router-dom'

const MonsterIndex = ({ user, msgAlert }) => {
  
  const [allMonsters, setAllMonsters] = useState([])

  // this will only run when the component is mounted, argo the empty dependency array
  useEffect(() => {
    monsterIndex(user)
    .then(res => {
      setAllMonsters(res.data.monsters)
    })
    .catch((error) => {
      msgAlert({
          heading: 'Failure',
          message: "Igor is having some difficulty getting all the monsters to cooperate..." + error,
          variant: 'danger'
      })
    })
  }, [])
  
  const allMonstersJsx = allMonsters.map(monster => {
    return (
      <Link to={monster._id} key={monster._id} style={{textDecoration: 'none', color: 'black'}}>
        <div className="card" style={{width: '18rem'}}>
          <h5 className='card-header'>{ monster.name }</h5>
          <div className='card-body'>
          <h5 className='card-title'>{ monster.type }</h5>
          <p className='card-text'>{ monster.funFacts }</p>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <div>
      {allMonstersJsx}
    </div>
  )
} 

export default MonsterIndex