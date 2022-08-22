import React from 'react'

const NormalChoose = ({ options, questionID, handleChange, value }) => {
  return (
    <>
      {options && options?.length > 0 && (
        <select
          name='select options'
          onChange={(e) => handleChange(questionID, e)}
          defaultValue={value}
          className='input'
          style={{ width: '200px' }}
        >
          <option value='None'>Choose</option>

          {options.map((option, idx) => (
            <option key={idx}>{option}</option>
          ))}
        </select>
      )}
    </>
  )
}

export default NormalChoose
