import WvContainer from '@wevisdemo/ui/react/container';

type Props = {}

const Cover = (props: Props) => {
  return (
    <div className='relative w-screen h-screen 
      bg-[url("/design_assets/02_landing_items/bg.svg")]
      bg-cover bg-center bg-no-repeat
      flex flex-col justify-center items-center'>
      <WvContainer>
        <div className='text-center flex flex-col gap-y-[10px] mb-[41px] desktop:mb-auto'>
          <div className='wv-kondolar wv-h4 wv-black leading-[125%] '>
            “จักรวาล<br className='tablet:hidden' />
            การเมืองไทย”
          </div>
          <div className='wv-kondolar wv-h4 wv-black leading-[125%]'>
            ใครเป็นใคร <br className='tablet:hidden' />ทำอะไรกันไว้บ้าง ?
          </div>
          <div className='wv-kondolar wv-h7 leading-[140%]'>
            ส่องการเมืองไทย<br />ช่วง 10 กว่าปีที่ผ่านมา
          </div>
          <div className='wv-ibmplex wv-b4 leading-[150%]'>
            ข้อมูลระหว่างวันที่ 4 ก.ค. 56 - 01 ก.ย. 65
          </div>
        </div>
        <div className='flex flex-col justify-center items-center text-center gap-y-[9px] animate-bounce'>
          <span className='wv-kondolar wv-u1 wv-semibold'>ไปต่อ</span>
          <svg width={15} height={31} viewBox="0 0 15 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.79289 30.7071C7.18342 31.0976 7.81658 31.0976 8.20711 30.7071L14.5711 24.3431C14.9616 23.9526 14.9616 23.3195 14.5711 22.9289C14.1805 22.5384 13.5474 22.5384 13.1569 22.9289L7.5 28.5858L1.84315 22.9289C1.45262 22.5384 0.819458 22.5384 0.428933 22.9289C0.0384088 23.3195 0.0384088 23.9526 0.428933 24.3431L6.79289 30.7071ZM6.5 4.37114e-08L6.5 30L8.5 30L8.5 -4.37114e-08L6.5 4.37114e-08Z" fill="white" />
          </svg>
        </div>
      </WvContainer>
    </div>

  )
}

export default Cover