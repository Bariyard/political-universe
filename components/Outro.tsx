import WvSharer from '@wevisdemo/ui/react/sharer'

type Props = {}

const Outro = (props: Props) => {
  return (
    <div className='relative w-screen h-screen 
      bg-[url("/design_assets/02_landing_items/end.svg")]
      bg-cover bg-center bg-no-repeat
      flex flex-col justify-center items-center'>
      <div className='flex flex-col gap-y-[30px] text-center items-center
        max-w-[987px] mx-auto'>
        <div className='wv-kondolar wv-h6 wv-bold leading-[140%] '>
          จักรวาลการเมืองไทย” คือความเชื่อมโยงของตัวละคร<br />
          ที่มีบทบาทต่อการเมืองไทยในช่วงเวลานั้น ๆ
        </div>
        <div className='wv-kondolar wv-h8 leading-[140%] '>
          ซึ่งความเชื่อมโยงเหล่านี้สะท้อนถึงผลกระทบจากตัวละครที่มี
          ต่อการเมืองไทยรวมถึงความสัมพันธ์ของชื่อตัวละครที่มีต่อ
          ยุครัฐบาลนั้น ๆ
        </div>
        <div className='wv-kondolar wv-h8 leading-[140%] '>
          นำมาสู่เรื่องที่ว่า ตัวละครในการเมืองไทยควรที่จะถูกจดจำ หรือรับรู้อย่างไร
          Share
        </div>
        <WvSharer light outline url={`${process.env.BASE_URL}${process.env.BASE_PATH}`} />
      </div >
    </div >
  )
}

export default Outro