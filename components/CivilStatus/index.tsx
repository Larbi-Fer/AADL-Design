'use client'

import FeedbackIcon from '@icons/feedbackIcon'
import { Tooltip } from '@mui/material'
import Input from '@ui/Input'
import Image from 'next/image'
import React from 'react'
// import { Tooltip } from 'tooltip-react-component'

type CivilStatusProps = {
  flds: Fields,
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  setFlds: React.Dispatch<React.SetStateAction<Fields>>
}

const CivilStatus = ({ flds, handleChange, setFlds } : CivilStatusProps) => {
  const handleChangeIDC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (value.length < flds.IDCard.length) {
      setFlds(prev => ({ ...prev, IDCard: value }))
      return
    }

    if (isNaN(Number(value[value.length-1]))) return

    if (value.length > 18) return
    setFlds(prev => ({ ...prev, IDCard: value }))
  }

  const handleChangeSSCN = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target
    if (value.length < flds.SSCNum.length) {
      setFlds(prev => ({ ...prev, SSCNum: value }))
      return
    }
    if (isNaN(Number(value[value.length-1]))) return
    if (value.length > 15) return

    if (value.length == 2 || value.length == 7 || value.length == 12) value += ' '

    setFlds(prev => ({ ...prev, SSCNum: value }))
  }

  return (
    <div>
      <center>
        <h2>معلومات الحالة المدنية</h2>
      </center>
      <Input label='رقم بطاقة التعريف الوطني' placeholder='ex. 1110051548' suffix={
        <Tooltip title={ <Image alt='' src='/IDCard.png' width={300} height={180} /> } arrow>
          <div>
            <FeedbackIcon />
          </div>
        </Tooltip>
      } value={flds.IDCard} onChange={handleChangeIDC} name='IDCard' />
      <Input label='رقم بطاقة الضمان الإجتماعي' placeholder='ex. 74 0125 2356 32' suffix={
          <Tooltip title={<Image alt='' src='/ssc.jpg' width={300} height={180} />} arrow>
            <div>
              <FeedbackIcon />
            </div>
          </Tooltip>
        }
         value={flds.SSCNum} onChange={handleChangeSSCN} name='SSCNum'/>
    </div>
  )
}

export default CivilStatus