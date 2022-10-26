import React from "react"
import Form from 'react-bootstrap/Form'

const MonsterUpdate = ({ monster, handleChange, handleUpdateMonster }) => {
  return (

    <Form onSubmit={handleUpdateMonster}>
      <Form.Group controlId='name'>
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

      <Form.Group controlId='type'>
        <Form.Label>Type of Monster</Form.Label>
        <Form.Control
          type='text'
          value={monster.type}
          name='type'
          onChange={handleChange}
          placeholder="Is it a ghoul? Perhaps a specter?"

        />
      </Form.Group>
      <Form.Group controlId='funFacts'>
        <Form.Label>Any fun facts to share?</Form.Label>
        <Form.Control
          type='text'
          value={monster.funFacts}
          name='funFacts'
          onChange={handleChange}
          placeholder="Anything to add? Perhaps this spooky creatures origin?"

        />
      </Form.Group>
      <button className="btn btn-warning" type="submit">PULL THE LEVER!</button>
    </Form>

  )
}

export default MonsterUpdate