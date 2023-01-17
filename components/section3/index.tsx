import React from 'react'
import AllPartiesSearch from './AllPartiesSearch'
import IndividualTimeline from './IndividualTimeline'

type Props = {}

const Section3 = (props: Props) => {
  return (
    <div>
      <div className='min-h-screen'>
        <IndividualTimeline />
      </div>
      <div className='min-h-screen'>
        <AllPartiesSearch />
      </div>
    </div>
  )
}

export default Section3