import React, { useState } from 'react'
import { monsterCreate } from '../api/monster'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'

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

  const handleCreateMonster = (event) => {
    event.preventDefault()
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

    <Form onSubmit={handleCreateMonster}>
      <Form.Group>
        <Form.Label>Monster's Name</Form.Label>
        <Form.Control
          required
          type='text'
          value={monster.name}
          name='name'
          onChange={handleChange}
          placeholder="Enter The Creation's Name..."
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Type of Monster</Form.Label>
        <Form.Control
          type='text'
          value={monster.type}
          name='type'
          onChange={handleChange}
          placeholder="Is it a ghoul? Perhaps a specter?"
          default="UNKNOWN"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Any fun facts to share?</Form.Label>
        <Form.Control
          type='text'
          value={monster.funFacts}
          name='funFacts'
          onChange={handleChange}
          placeholder="Anything to add? Perhaps this spooky creatures origin?"
          default="There is nothing fun about this monster."
        />
      </Form.Group>
      <button className="btn btn-warning" type="submit">PULL THE LEVER!</button>
    </Form>
  )
}

export default MonsterCreate