import React from 'react'
import { useIndividualStore } from '../../store/store'
import AllPartiesSearch from './all-parties/AllPartiesSearch'
import Individual from './individual/Individual'
import * as d3 from 'd3'
import { IMG_LIST, VIZ6_RAW } from '../../models/individual'
import { CATEGORY_INFO } from '../utils'
type Props = {}

const Section3 = (props: Props) => {
  const setAllPerson = useIndividualStore((state) => state.setAllPerson)
  const fetchViz6 = React.useCallback(
    async () => {
      const csv = await d3.csv<VIZ6_RAW>(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz6-individual-sumary-and-period-percentage.csv`, d3.autoType)
      let viz6Object: VIZ6_RAW[] = []
      csv.map((data) => {
        let findIndex = viz6Object.findIndex((item) => item.person === data.person)
        if (findIndex !== -1) {
          // remove duplicate person
          let o = viz6Object[findIndex]
          viz6Object[findIndex] = {
            ...o,
            groups: `${o.groups},${data.groups}`,

          }
        } else {
          let img = `bg-${data.person.replaceAll(' ', '-')} grayscale `
          if (IMG_LIST.indexOf(data.person.replaceAll(' ', '-')) > -1) {
            console.log(img)
          } else {
            switch (data.categories) {
              case CATEGORY_INFO[0].title:
                img = 'bg-person-01'; break;
              case CATEGORY_INFO[1].title:
                img = 'bg-person-02'; break;
              case CATEGORY_INFO[2].title:
                img = 'bg-person-03'; break;
              case CATEGORY_INFO[3].title:
                img = 'bg-person-04'; break;
            }
          }
          viz6Object.push({ ...data, img })
        }
        setAllPerson(viz6Object)
        // console.log(viz6Object)
      })
    },
    [setAllPerson],
  )

  React.useEffect(() => {
    fetchViz6()
  }, [fetchViz6])

  return (
    <div>
      <div className='hidden bg-person-01' />
      <div className='hidden bg-person-02' />
      <div className='hidden bg-person-03' />
      <div className='hidden bg-person-04' />
      <Individual />
      <div className='min-h-screen'>
        <AllPartiesSearch />
      </div>
    </div>
  )
}

export default Section3