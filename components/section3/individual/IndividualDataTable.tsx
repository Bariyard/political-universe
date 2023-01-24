import React from 'react'
import EventCard from '../../EventCard'

type Props = {}


const DATA = [
  {
    "date_time": "2022-10-04 14:00:00",
    "title": "“ประยุทธ์” เผยยังไม่ได้คิดวางทายาทการเมือง ปัดตอบกระแสข่าว “จักรทิพย์” เป็นทายาท 3 ป.",
    "link": "https://mgronline.com/politics/detail/9650000095166",
    "person": "พลตำรวจเอก จักรทิพย์ ชัยจินดา,พลเอก ประยุทธ์ จันทร์โอชา,พลตำรวจเอก จักรทิพย์ ชัยจินดา,",
    "groups": "ผบ. ตร.,ครม. ชุดที่ 62,ส.ว. ชุดที่ 12,",
    "sub_categories": "สายตำรวจ,สายพรรคการเมือง,สายกลุ่มการเมือง,",
    "categories": "ตำรวจ & ทหาร,พรรคการเมือง & กลุ่มการเมือง,พรรคการเมือง & กลุ่มการเมือง,",
    "score": 1,
    "year": 2022,
    "month": 10
  },
  {
    "date_time": "2022-02-24 19:52:00",
    "title": "โปรดเกล้าฯ แต่งตั้ง “สุวัฒน์-จรุงวิทย์” เป็น ส.ว.แทนตำแหน่งที่ว่าง",
    "link": "https://mgronline.com/politics/detail/9650000018933",
    "person": "พลตำรวจเอก สุวัฒน์ แจ้งยอดสุข,พลตำรวจเอก สุวัฒน์ แจ้งยอดสุข,พรรคกล้า,",
    "groups": "ผบ. ตร.,ส.ว. ชุดที่ 12,พรรคการเมือง,",
    "sub_categories": "สายตำรวจ,สายกลุ่มการเมือง,สายพรรคการเมือง,",
    "categories": "ตำรวจ & ทหาร,พรรคการเมือง & กลุ่มการเมือง,พรรคการเมือง & กลุ่มการเมือง,",
    "score": 1,
    "year": 2022,
    "month": 2
  },
  {
    "date_time": "2021-11-16 15:09:00",
    "title": "“บิ๊กป้อม” ปัดตอบ “บิ๊กแป๊ะ” ช่วยงานพรรคด้านไหน? หลังโผล่ลงพื้นที่สกลนคร",
    "link": "https://mgronline.com/politics/detail/9640000113649",
    "person": "พลตำรวจเอก จักรทิพย์ ชัยจินดา,พลเอก ประวิตร วงษ์สุวรรณ,พลตำรวจเอก จักรทิพย์ ชัยจินดา,",
    "groups": "ผบ. ตร.,ครม. ชุดที่ 62,ส.ว. ชุดที่ 12,",
    "sub_categories": "สายตำรวจ,สายพรรคการเมือง,สายกลุ่มการเมือง,",
    "categories": "ตำรวจ & ทหาร,พรรคการเมือง & กลุ่มการเมือง,พรรคการเมือง & กลุ่มการเมือง,",
    "score": 1,
    "year": 2021,
    "month": 11
  },
  {
    "date_time": "2021-11-16 11:59:00",
    "title": "“วิษณุ” กาง กม. ชี้ “บิ๊กแป๊ะ” เป็นสมาชิกพรรคการเมืองไม่ได้ กำชับ รมต.ใช้สิทธิเลือกตั้ง อบต.",
    "link": "https://mgronline.com/politics/detail/9640000113538",
    "person": "พลตำรวจเอก จักรทิพย์ ชัยจินดา,วิษณุ เครืองาม,พลตำรวจเอก จักรทิพย์ ชัยจินดา,",
    "groups": "ผบ. ตร.,ครม. ชุดที่ 62,ส.ว. ชุดที่ 12,",
    "sub_categories": "สายตำรวจ,สายพรรคการเมือง,สายกลุ่มการเมือง,",
    "categories": "ตำรวจ & ทหาร,พรรคการเมือง & กลุ่มการเมือง,พรรคการเมือง & กลุ่มการเมือง,",
    "score": 1,
    "year": 2021,
    "month": 11
  },
  {
    "date_time": "2021-11-15 19:43:00",
    "title": "“วิษณุ” คอนเฟิร์ม “บิ๊กแป๊ะ” เป็นสมาชิกพรรคได้ แม้พ้น ส.ว.ไม่เกิน 2 ปี แต่รับตำแหน่งการเมืองไม่ได้",
    "link": "https://mgronline.com/politics/detail/9640000113354",
    "person": "พลตำรวจเอก จักรทิพย์ ชัยจินดา,วิษณุ เครืองาม,พลตำรวจเอก จักรทิพย์ ชัยจินดา,",
    "groups": "ผบ. ตร.,ครม. ชุดที่ 62,ส.ว. ชุดที่ 12,",
    "sub_categories": "สายตำรวจ,สายพรรคการเมือง,สายกลุ่มการเมือง,",
    "categories": "ตำรวจ & ทหาร,พรรคการเมือง & กลุ่มการเมือง,พรรคการเมือง & กลุ่มการเมือง,",
    "score": 1,
    "year": 2021,
    "month": 11
  },
  {
    "date_time": "2021-11-02 10:59:00",
    "title": "“บิ๊กแป๊ะ” ถอนตัวชิงผู้ว่าฯ กทม. ไม่ได้มาปรึกษา “บิ๊กป้อม”",
    "link": "https://mgronline.com/politics/detail/9640000108457",
    "person": "พลตำรวจเอก จักรทิพย์ ชัยจินดา,พลเอก ประวิตร วงษ์สุวรรณ,พลตำรวจเอก จักรทิพย์ ชัยจินดา,",
    "groups": "ผบ. ตร.,ครม. ชุดที่ 62,ส.ว. ชุดที่ 12,",
    "sub_categories": "สายตำรวจ,สายพรรคการเมือง,สายกลุ่มการเมือง,",
    "categories": "ตำรวจ & ทหาร,พรรคการเมือง & กลุ่มการเมือง,พรรคการเมือง & กลุ่มการเมือง,",
    "score": 1,
    "year": 2021,
    "month": 11
  },
  {
    "date_time": "2021-11-01 17:33:00",
    "title": "ด่วน! “บิ๊กแป๊ะ” ยอมถอยไม่ลงชิงผู้ว่าฯ กทม.คาดเปิดทาง “อัศวิน” อยู่ต่อ",
    "link": "https://mgronline.com/politics/detail/9640000108259",
    "person": "พลตำรวจเอก จักรทิพย์ ชัยจินดา,พลตำรวจเอก จักรทิพย์ ชัยจินดา,",
    "groups": "ผบ. ตร.,ส.ว. ชุดที่ 12,",
    "sub_categories": "สายตำรวจ,สายกลุ่มการเมือง,",
    "categories": "ตำรวจ & ทหาร,พรรคการเมือง & กลุ่มการเมือง,",
    "score": 1,
    "year": 2021,
    "month": 11
  },
  {
    "date_time": "2021-05-12 20:15:00",
    "title": "“บิ๊กแป๊ะ” เปิดหน้าซัด “อัศวิน” หาเสียงล่วงหน้าผู้ว่าฯ กทม.",
    "link": "https://mgronline.com/politics/detail/9640000045785",
    "person": "พลตำรวจเอก จักรทิพย์ ชัยจินดา,พลตำรวจเอก จักรทิพย์ ชัยจินดา,",
    "groups": "ผบ. ตร.,ส.ว. ชุดที่ 12,",
    "sub_categories": "สายตำรวจ,สายกลุ่มการเมือง,",
    "categories": "ตำรวจ & ทหาร,พรรคการเมือง & กลุ่มการเมือง,",
    "score": -1,
    "year": 2021,
    "month": 5
  },
]

const IndividualDataTable = (props: Props) => {
  const numItemsPerPage = 50;

  const [currentPage, setCurrentPage] = React.useState(0)
  const [numPage, setNumPage] = React.useState(Math.ceil(DATA.length / numItemsPerPage))
  const renderPagination = () => {


    let content = [];
    for (let i = 0; i < numPage; i++) {
      content.push(<button key={`page-${i}`} className={`border-black border-[1px] rounded-[2px] w-[24px] h-[24px]
      inline-flex justify-center items-center
      wv-ibmplex wv-semibold wv-u5 ${currentPage === i ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => setCurrentPage(i)}>{i + 1}</button>);
    }
    return content;
  }

  return (
    <div>
      <div className='flex flex-row justify-between items-center p-[10px] mb-[6px]'>
        <div className='wv-ibmplex wv-b4'>{`- ${DATA.length} เหตุการณ์ -`}</div>
        <div className='flex flex-row  gap-x-[2px]'>
          <button className='border-black border-[1px] rounded-[2px] w-[24px] h-[24px]
            inline-flex justify-center items-center disabled:opacity-20' disabled={currentPage === 0}
            onClick={() => setCurrentPage((prev) => prev - 1)}>
            <svg width={9} height={12} viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.15991 1.41L3.57991 6L8.15991 10.59L6.74991 12L0.749912 6L6.74991 0L8.15991 1.41Z" fill="black" />
            </svg>
          </button>
          {renderPagination()}
          <button className='border-black border-[1px] rounded-[2px] w-[24px] h-[24px]
          inline-flex justify-center items-center disabled:opacity-20' disabled={currentPage === numPage - 1}
            onClick={() => setCurrentPage((prev) => prev + 1)}>
            <svg width={9} height={12} viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.840088 1.41L5.42009 6L0.840088 10.59L2.25009 12L8.25009 6L2.25009 0L0.840088 1.41Z" fill="black" />
            </svg>
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-y-[6px] max-h-[45vh] overflow-y-scroll'>
        {DATA.slice(numItemsPerPage * currentPage, numItemsPerPage * currentPage + numItemsPerPage).map((data, index) => (
          <div key={`filter-data-${index}`}><EventCard {...data} /></div>
        ))}
      </div>
    </div>
  )
}

export default IndividualDataTable