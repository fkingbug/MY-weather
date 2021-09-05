import React from 'react'

const DaysContent = ({ actuale }) => {
  const getDay = () => {
    return new Date(actuale.dt_txt).toString().split(' ')[0]
  }
  console.log(getDay())
  return (
    <>
      <p>{getDay()}</p>

      <p>{actuale.main.temp}</p>
    </>
  )
}

export default DaysContent
