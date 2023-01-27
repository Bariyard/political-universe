import AllPartiesSearch from './all-parties/AllPartiesSearch'
import Individual from './individual/Individual'

type Props = {}

const Section3 = (props: Props) => {
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