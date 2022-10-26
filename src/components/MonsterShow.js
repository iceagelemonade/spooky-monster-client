import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { monsterShow, monsterUpdate, monsterDestroy } from '../api/monster'
import MonsterUpdate from './MonsterUpdate'

const MonsterShow = ({ user, msgAlert }) => {
  
  const [monster, setMonster] = useState({})

  const[isUpdateShown, setIsUpdateShown] = useState(false)
  
  const { id } = useParams()
  
  const navigate = useNavigate()

  useEffect(() => {
    monsterShow(user, id)
      .then((res) => {
        setMonster(res.data.monster)
      })
    .catch((error) => {
      msgAlert({
          heading: 'Failure',
          message: 'Uh, oh... where did that monster go?' + error,
          variant: 'danger'
      })
    })
  }, [])

  const handleChange = (evt) => {
    setMonster({ ...monster, [evt.target.name]: evt.target.value })
}

  const handleUpdateMonster = () => {
    monsterUpdate(monster, user, id)
      .then(() => {
        msgAlert({
          heading: 'Success',
          message: 'This monster has been re-formed',
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Failure',
          message: 'Failed to re-form monster' + error,
          variant: 'danger'
        })
      })

  }
  
  const destroyMonster = () => {
    monsterDestroy(user, id)
      .then(() => {
        msgAlert({
          heading: 'Success',
          message: `Laid ${monster.name} to rest`,
          variant: 'success'
        })
        navigate("/monsters")
      })
      .catch((error) => {
        msgAlert({
          heading: 'Failure',
          message: "Oh No! We couldn't destroy this monster!" + error,
          variant: 'danger'
        })
      })

  }  

  const toggleShowUpdate = () => {
    setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
  }

  return (
    <>
      <h3>Name: {monster.name}</h3>
      <h5>Type: {monster.type}</h5>
      <p>Some interesting things: {monster.funFacts}</p>
      {monster.owner == user._id &&
      <button className="btn btn-warning" onClick={toggleShowUpdate}>Re-form the Beast!</button>
      }
      {isUpdateShown && (<MonsterUpdate monster={monster} handleChange={handleChange} handleUpdateMonster={handleUpdateMonster}/>)}
      {monster.owner == user._id && !isUpdateShown &&
      <button className="btn btn-danger" onClick={destroyMonster}>Destroy this Foul Creation!</button>
      }
    </>
  )
}

export default MonsterShow