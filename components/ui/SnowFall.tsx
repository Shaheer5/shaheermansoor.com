'use client'
import React from 'react'
import { Snowfall } from 'react-snowfall'

const SnowFall = () => {
  return (
    <Snowfall
      color="#a2eaff"
      wind={[0.2, 0.1]}
      style={{ background: 'rgba(0, 0, 0, 0)' }}
      snowflakeCount={80}
    />
  )
}

export default SnowFall
