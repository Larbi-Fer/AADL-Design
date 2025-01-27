import Image from 'next/image'
import './style.css'

const Header = () => {
  return (
    <div className='header'>
      <div>
        <b>
      الجمهورية الجزائرية الديمقراطية الشعبية
        </b>
      </div>

      <div>
      وزارة الإسكان والتخطيط العمراني والمدينة
      </div>

      <div className='aadl'>
        <div>عدل</div>
        <div>AADL</div>
      </div>

      <div className="logo">
        <Image alt='' src='/aadl-logo.png' width={50} height={50} />
      </div>

    </div>
  )
}

export default Header
