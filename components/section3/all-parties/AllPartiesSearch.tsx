import React from 'react'
import { CATEGORY_INFO } from '../../utils'
import AllPartiesDataTable from './AllPartiesDataTable'

type Props = {}

const AllPartiesSearch = (props: Props) => {
  const [searchText, setSearchText] = React.useState("")
  const FILTER_LIST = [
    { title: 'ทั้งหมด', bgcolor: 'white' },
    { ...CATEGORY_INFO[0], },
    { ...CATEGORY_INFO[1], },
    { ...CATEGORY_INFO[2], },
    { ...CATEGORY_INFO[3], },
  ]

  const [selectedFilter, setSelectedFilter] = React.useState(FILTER_LIST[0].title)
  const [orderBy, setOrderBy] = React.useState<'NUM_EVENT' | 'ALPHABETICAL'>('NUM_EVENT')

  return (
    <div className='max-w-[1189px] mx-auto'>
      <div>

      </div>

      <div className='max-w-[480px] '>
        <div className='relative flex flex-row justify-center items-center rounded-[10px] px-[10px] border-white border-[1px]'>
          <div className='inline-flex items-center gap-x-[10px]'>
            <svg className='w-[24px] h-[25px] ml-auto' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.0748 10.5578C14.0748 12.8071 12.259 14.6157 10.0374 14.6157C7.8158 14.6157 6 12.8071 6 10.5578C6 8.30855 7.8158 6.5 10.0374 6.5C12.259 6.5 14.0748 8.30855 14.0748 10.5578ZM13.81 16.5169C12.7197 17.2126 11.4255 17.6157 10.0374 17.6157C6.15075 17.6157 3 14.4558 3 10.5578C3 6.6599 6.15075 3.5 10.0374 3.5C13.924 3.5 17.0748 6.6599 17.0748 10.5578C17.0748 11.9764 16.6575 13.2973 15.9393 14.4036L20.5006 18.9967L18.3867 21.1254L13.81 16.5169Z" fill="white" />
            </svg>
            <input type="text" placeholder='ตรวจสอบรายบุคคล' className='text-white wv-kondolar wv-bold text-[32px] leading-[140%] bg-transparent border-transparent focus:border-transparent focus:ring-0'
              value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          </div>
          <svg className='w-[24px] h-[24px] absolute right-[12.5px] cursor-pointer' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"
            onClick={() => setSearchText("")}>
            <g clipPath="url(#clip0_1121_462062)">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 0.5C2.20435 0.5 1.44129 0.816071 0.87868 1.37868C0.316071 1.94129 0 2.70435 0 3.5L0 21.5C0 22.2956 0.316071 23.0587 0.87868 23.6213C1.44129 24.1839 2.20435 24.5 3 24.5H21C21.7956 24.5 22.5587 24.1839 23.1213 23.6213C23.6839 23.0587 24 22.2956 24 21.5V3.5C24 2.70435 23.6839 1.94129 23.1213 1.37868C22.5587 0.816071 21.7956 0.5 21 0.5L3 0.5ZM17.781 7.781C17.9218 7.64017 18.0009 7.44916 18.0009 7.25C18.0009 7.05084 17.9218 6.85983 17.781 6.719C17.6402 6.57817 17.4492 6.49905 17.25 6.49905C17.0508 6.49905 16.8598 6.57817 16.719 6.719L12 11.4395L7.281 6.719C7.21127 6.64927 7.12848 6.59395 7.03738 6.55621C6.94627 6.51848 6.84862 6.49905 6.75 6.49905C6.65138 6.49905 6.55373 6.51848 6.46262 6.55621C6.37152 6.59395 6.28873 6.64927 6.219 6.719C6.14927 6.78873 6.09395 6.87152 6.05621 6.96262C6.01848 7.05373 5.99905 7.15138 5.99905 7.25C5.99905 7.34862 6.01848 7.44627 6.05621 7.53738C6.09395 7.62848 6.14927 7.71127 6.219 7.781L10.9395 12.5L6.219 17.219C6.07817 17.3598 5.99905 17.5508 5.99905 17.75C5.99905 17.9492 6.07817 18.1402 6.219 18.281C6.35983 18.4218 6.55084 18.5009 6.75 18.5009C6.94916 18.5009 7.14017 18.4218 7.281 18.281L12 13.5605L16.719 18.281C16.7887 18.3507 16.8715 18.406 16.9626 18.4438C17.0537 18.4815 17.1514 18.5009 17.25 18.5009C17.3486 18.5009 17.4463 18.4815 17.5374 18.4438C17.6285 18.406 17.7113 18.3507 17.781 18.281C17.8507 18.2113 17.906 18.1285 17.9438 18.0374C17.9815 17.9463 18.0009 17.8486 18.0009 17.75C18.0009 17.6514 17.9815 17.5537 17.9438 17.4626C17.906 17.3715 17.8507 17.2887 17.781 17.219L13.0605 12.5L17.781 7.781Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_1121_462062">
                <rect width={24} height={24} fill="white" transform="translate(0 0.5)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className='mt-[8px] overflow-y-scroll bg-white text-neutral-super-black rounded-[10px] py-[20px] px-[12px]
          flex flex-col gap-y-[10px] justify-center items-center'>
          <div className='flex flex-row gap-x-[8px] items-center w-full'>
            <div className='flex-shrink-0 wv-ibmplex wv-semibold wv-u3'>เลือกกลุ่ม</div>
            <div className='mx-auto overflow-x-scroll w-10/12'>
              <div className='flex flex-row flex-grow gap-x-[6px]'>
                {FILTER_LIST.map((data) => (
                  <button key={`filter-${data.title}`}
                    className='flex-grow inline-flex items-center py-[8px] px-[12px] gap-x-[6px] bg-neutral-super-white rounded-[4px]
                      border-black border-[2px]'
                    onClick={() => setSelectedFilter(data.title)}>
                    <div className='flex-shrink-0 w-[20px] h-[20px] border-[2px] border-neutral-super-black rounded-full flex'>
                      {selectedFilter === data.title &&
                        <div className='w-[10px] h-[10px] m-auto bg-neutral-super-black rounded-full' />
                      }
                    </div>
                    <div className='whitespace-nowrap text-neutral-super-black wv-ibmplex wv-u3 wv-semibold
                inline-flex items-center gap-x-1'>
                      <div className={`w-[12px] h-[12px] rounded-full ${data.bgcolor}`} />
                      {data.title}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-x-[8px] items-center'>
            <div className='flex-shrink-0 wv-ibmplex wv-semibold wv-u3'>เรียงตาม</div>
            <div className=' mx-auto overflow-x-scroll'>
              <div className='flex flex-row flex-grow gap-x-[6px]'>
                <button
                  className='flex-grow inline-flex items-center py-[8px] px-[12px] gap-x-[6px] bg-neutral-super-white rounded-[4px]
                      border-black border-[2px]'
                  onClick={() => setOrderBy('NUM_EVENT')}>
                  <div className='flex-shrink-0 w-[20px] h-[20px] border-[2px] border-neutral-super-black rounded-full flex'>
                    {orderBy === 'NUM_EVENT' &&
                      <div className='w-[10px] h-[10px] m-auto bg-neutral-super-black rounded-full' />
                    }
                  </div>
                  <div className='whitespace-nowrap text-neutral-super-black wv-ibmplex wv-u3 wv-semibold
                inline-flex items-center gap-x-1'>
                    จำนวนเหตุการณ์ที่เกี่ยวข้อง
                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 8H12" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1.5 5H14.5" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.5 11H9.5" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>
                <button
                  className='flex-grow inline-flex items-center py-[8px] px-[12px] gap-x-[6px] bg-neutral-super-white rounded-[4px]
                      border-black border-[2px]'
                  onClick={() => setOrderBy('ALPHABETICAL')}>
                  <div className='flex-shrink-0 w-[20px] h-[20px] border-[2px] border-neutral-super-black rounded-full flex'>
                    {orderBy === 'ALPHABETICAL' &&
                      <div className='w-[10px] h-[10px] m-auto bg-neutral-super-black rounded-full' />
                    }
                  </div>
                  <div className='whitespace-nowrap text-neutral-super-black wv-ibmplex wv-u3 wv-semibold
                inline-flex items-center gap-x-1'>
                    ตัวอักษร
                    <svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.61212 15.443C3.22612 15.641 2.78812 15.294 2.86612 14.851L3.69612 10.121L0.173118 6.76501C-0.155882 6.45101 0.0151183 5.87701 0.456118 5.81501L5.35412 5.11901L7.53812 0.792012C7.73512 0.402012 8.26812 0.402012 8.46512 0.792012L10.6491 5.11901L15.5471 5.81501C15.9881 5.87701 16.1591 6.45101 15.8301 6.76501L12.3071 10.121L13.1371 14.851C13.2151 15.294 12.7771 15.641 12.3911 15.443L8.00012 13.187L3.61112 15.443H3.61212Z" fill="black" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className='px-[16px] py-[10px] inline-flex gap-x-[10px] items-center border-[1px] rounded-[4px] border-black w-full'>
            <input type='text' className=' border-transparent focus:border-transparent focus:ring-0 p-0 flex-grow
              wv-ibmplex wv-h11'
              placeholder='พิมพ์รายชื่อกลุ่มคน, บุคคลที่คุณสนใจ' />
            <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.0748 10.5578C14.0748 12.8071 12.259 14.6157 10.0374 14.6157C7.8158 14.6157 6 12.8071 6 10.5578C6 8.30855 7.8158 6.5 10.0374 6.5C12.259 6.5 14.0748 8.30855 14.0748 10.5578ZM13.81 16.5169C12.7197 17.2126 11.4255 17.6157 10.0374 17.6157C6.15075 17.6157 3 14.4558 3 10.5578C3 6.6599 6.15075 3.5 10.0374 3.5C13.924 3.5 17.0748 6.6599 17.0748 10.5578C17.0748 11.9764 16.6575 13.2973 15.9393 14.4036L20.5006 18.9967L18.3867 21.1254L13.81 16.5169Z" fill="black" />
            </svg>
          </div>
          <AllPartiesDataTable />
        </div>
      </div>
    </div>
  )
}

export default AllPartiesSearch