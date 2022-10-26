import React, { useState } from 'react'
import { monsterCreate } from '../api/monster'
import { useNavigate } from 'react-router-dom'

const MonsterCreate = ({ user, msgAlert }) => {

  const defaultMonster = {
    name: '',
    type: '',
    funFacts: ''
  }

  const [monster, setMonster] = useState(defaultMonster)
  const navigate = useNavigate()


  const handleChange = (evt) => {
    setMonster({ ...monster, [evt.target.name]: evt.target.value })
  }

  const handleCreateMonster = () => {
    monsterCreate(monster, user)
      .then(() => {
        navigate("/monsters")
        msgAlert({
          heading: 'Spooky Success',
          message: "IT'S ALIVE!!!",
          variant: 'success'
        })
      })
      .catch((error) => {
        msgAlert({
          heading: 'Failure',
          message: 'Something has gone terribly wrong!' + error,
          variant: 'danger'
        })
      })
  }

  return (
    <>
      <input
        type='text'
        value={monster.name}
        name='name'
        onChange={handleChange}
        placeholder="Enter The Creation's Name..."
      />
      <input
        type='text'
        value={monster.type}
        name='type'
        onChange={handleChange}
        placeholder="Is it a ghoul? Perhaps a specter?"
      />
      <input
        type='text'
        value={monster.funFacts}
        name='funFacts'
        onChange={handleChange}
        placeholder="Anything to add? Perhaps this spooky creatures origin?"
      />
      <button className="btn btn-warning" onClick={handleCreateMonster}>Pull the Lever!</button>
    </>
  )
}

export default MonsterCreate