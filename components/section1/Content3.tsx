import EventCard from "../EventCard"
import { NEGATIVE_ICON_TITLE, POSITIVE_ICON_TITLE } from "../utils"

type Props = {}

const Content3 = (props: Props) => {
  const CONTENT = [
    {
      title: <div className="inline-flex items-center gap-[8px]">เหตุการณ์
        <POSITIVE_ICON_TITLE />
      </div>,
      content:
        <div>
          ตัวละครการเมืองไทยที่ถูกคัดเลือกมาทำสิ่งที่สร้างผลดีต่อรัฐบาลในช่วงเวลานั้น หรือชื่อตัวละครการเมืองไทยที่ถูกคัดเลือกมา ถูกใช้เพื่อสร้างผลดีต่อรัฐบาลในช่วงเวลานั้น
        </div>,
      example: [
        {
          "date_time": "2017-09-13 13:32:00",
          "title": "“บิ๊กแดง” ขออย่าด่วนสรุปโยงการเมือง เหตุบึ้มตู้ ATM โลตัสกรุงเทพกรีฑา",
          "link": "https://mgronline.com/politics/detail/9600000093920",
          "person": "พลเอก อภิรัชต์ คงสมพงษ์,พลเอก อภิรัชต์ คงสมพงษ์,",
          "groups": "ผบ. ทบ.,ส.ว. ชุดที่ 12,",
          "sub_categories": "สายทหาร,สายกลุ่มการเมือง,",
          "categories": "ตำรวจ & ทหาร,พรรคการเมือง & กลุ่มการเมือง,",
          "score": 1,
          "year": 2017,
          "month": 9
        },
        {
          "date_time": "2017-08-19 15:02:00",
          "title": "โผทหารปี 60 น้องรัก “ประยุทธ์ - ประวิตร” พรึ่บ “บิ๊กเข้” นั่งปลัด กห.“ลูกบิ๊กจ๊อด” ขึ้น ผช.ผบ.ทบ.",
          "link": "https://mgronline.com/politics/detail/9600000084971",
          "person": "พลเอก อภิรัชต์ คงสมพงษ์,พลเอก ประยุทธ์ จันทร์โอชา,พลเอก ประวิตร วงษ์สุวรรณ,พลเอก อภิรัชต์ คงสมพงษ์,",
          "groups": "ผบ. ทบ.,ครม. ชุดที่ 62,ครม. ชุดที่ 62,ส.ว. ชุดที่ 12,",
          "sub_categories": "สายทหาร,สายพรรคการเมือง,สายพรรคการเมือง,สายกลุ่มการเมือง,",
          "categories": "ตำรวจ & ทหาร,พรรคการเมือง & กลุ่มการเมือง,พรรคการเมือง & กลุ่มการเมือง,พรรคการเมือง & กลุ่มการเมือง,",
          "score": 1,
          "year": 2017,
          "month": 8
        },
        {
          "date_time": "2014-01-29 15:04:00",
          "title": "ศรส.ตั้ง “จักรทิพย์” นำเจรจา กปปส.ศุกร์นี้ ตั้งทีมฟันท่อน้ำเลี้ยง บี้ยันต่างด้าว รถขน ปชช.",
          "link": "https://mgronline.com/politics/detail/9570000011186",
          "person": "พลตำรวจเอก จักรทิพย์ ชัยจินดา,พลตำรวจเอก จักรทิพย์ ชัยจินดา,",
          "groups": "ผบ. ตร.,ส.ว. ชุดที่ 12,",
          "sub_categories": "สายตำรวจ,สายกลุ่มการเมือง,",
          "categories": "ตำรวจ & ทหาร,พรรคการเมือง & กลุ่มการเมือง,",
          "score": 1,
          "year": 2014,
          "month": 1
        }
      ]
    }, {
      title: <div className="inline-flex items-center gap-[8px]">เหตุการณ์
        <NEGATIVE_ICON_TITLE />
      </div>,
      content:
        <div>ตัวละครการเมืองไทยที่ถูกคัดเลือกมา ทำสิ่งที่สร้างผลลบต่อรัฐบาลในช่วงเวลานั้น หรือชื่อตัวละครการเมืองไทยที่ถูกคัดเลือกมา ถูกใช้เพื่อสร้างผลลบต่อรัฐบาลในช่วงเวลานั้น
        </div>,
      example: [
        {
          "date_time": "2014-04-03 12:13:00",
          "title": "“ลูกบิ๊กจ๊อด” รับตำแหน่ง ผบ.พล.1 รอ. ไม่หนักใจชุมนุมใหญ่ ชี้พวกล้มเจ้าคนไทยหรือเปล่า",
          "link": "https://mgronline.com/politics/detail/9570000037536",
          "person": "พลเอก อภิรัชต์ คงสมพงษ์,พลเอก อภิรัชต์ คงสมพงษ์,",
          "groups": "ผบ. ทบ.,ส.ว. ชุดที่ 12,",
          "sub_categories": "สายทหาร,สายกลุ่มการเมือง,",
          "categories": "ตำรวจ & ทหาร,พรรคการเมือง & กลุ่มการเมือง,",
          "score": -1,
          "year": 2014,
          "month": 4
        },
      ]
    }
  ]

  return (
    <div className='flex flex-col items-center text-center
    p-[10px]
    max-w-[740px] mx-auto tablet:mb-[140px]'>
      <div className='flex flex-col gap-y-[30px]'>
        <div className='wv-kondolar wv-h4 wv-black leading-[125%]'>
          เหตุการณ์ +/- คืออะไร
        </div>
        <div className='wv-ibmplex wv-b3 leading-[150%] max-w-[487px] !mx-auto'>
          ข้อมูลที่แสดงว่าตัวละครการเมืองไทยที่ถูกคัดเลือกมา มีการกระทำ หรือถูกพาดพิงในการกระทำที่สร้างผลดีหรือผลลบต่อสมัยรัฐบาลช่วงเวลานั้น ๆ โดยสามารถอธิบายได้ดังนี้
        </div>
        <div className='flex flex-row gap-[20px] text-neutral-super-black overflow-x-scroll w-screen 
          tablet:w-auto tablet:justify-center'>
          {CONTENT.map((data, index) => (
            <div key={`desc-${index}`}
              className='bg-white rounded-[10px] px-[15px] py-[20px] w-[260px] flex-shrink-0
              tablet:w-[45%] 
                flex flex-col items-center desktop:w-1/2 desktop:flex-shrink h-fit'>
              <div className='wv-kondolar wv-h7 wv-black 
                 !mb-[8px] text-center'>
                {data.title}
              </div>
              <div className='wv-ibmplex wv-b5 leading-[150%] text-left'>
                {data.content}
              </div>
              <div className="wv-kondolar wv-h9 wv-black !mb-[14px] !mt-[8px]">
                ตัวอย่างเหตุการณ์
              </div>
              <div className="flex flex-col  gap-y-[14px]">
                {data.example.map((item, index) => (
                  <EventCard key={`sample-${index}`} {...item} />
                ))}
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>
  )
}

export default Content3 