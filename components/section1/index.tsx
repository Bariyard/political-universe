import dynamic from 'next/dynamic'
import React from 'react'
import Chart from './Chart'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'
import Content4 from './Content4'
import Cover from './Cover'

type Props = {}

const Section1 = (props: Props) => {
  return (
    <div>
      <Cover />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      {/* <Chart /> */}
    </div >
  )
}

export default Section1