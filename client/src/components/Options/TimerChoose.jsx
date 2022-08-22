import React from 'react'

const TimerChoose = ({ questionID, handleChange, value }) => {
  return (
    <div>
      <input
        type='time'
        onChange={(e) => handleChange(questionID, e)}
        required
        className='input'
        style={{ width: '200px' }}
        defaultValue={value}
        step={3600}
      />
    </div>
  )
}

export default TimerChoose
