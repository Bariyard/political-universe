import React from 'react'
import IndividualInfo from './IndividualInfo'
import IndividualTimeline from './IndividualTimeline'

type Props = {}

const Individual = (props: Props) => {
  return (
    <div className='min-h-screen flex flex-row gap-x-[66px] max-w-[1170px] mx-auto'>
      <IndividualInfo />
      <IndividualTimeline />
    </div>

  )
}

export default Individual