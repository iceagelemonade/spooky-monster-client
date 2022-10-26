import React from "react"


const MonsterUpdate = ({ monster, handleChange, handleUpdateMonster }) => {
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
      <button className="btn btn-warning" onClick={handleUpdateMonster}>PULL THE LEVER!</button>
    </>
  )
}

export default MonsterUpdate