import AllPartiesSearch from './all-parties/AllPartiesSearch'
import Individual from './individual/Individual'

type Props = {}

const Section3 = (props: Props) => {
  return (
    <div>
      <Individual />
      <div className='min-h-screen'>
        <AllPartiesSearch />
      </div>
    </div>
  )
}

export default Section3