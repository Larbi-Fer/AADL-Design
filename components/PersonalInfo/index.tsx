'use client'

import Input from '@ui/Input'
import { useState } from 'react'
// import { CustomAlert } from 'alerts-react'
// import { Tooltip } from 'tooltip-react-component'

import './style.css'
import Button from '@ui/Button'
import { Tooltip } from '@mui/material'
import Rules from '@components/Rules'

import CheckIcon from '@mui/icons-material/Check';

type PersonalInfoProps = {
  flds: Fields,
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  setFlds: React.Dispatch<React.SetStateAction<Fields>>
}

const PersonalInfo = ({ flds, onChange, setFlds } : PersonalInfoProps) => {
  // const [phone, setPhone] = useState('+213 ')
  const [openRules, setOpenRules] = useState(false)

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value

    if (v.length > 17 || v.length <= 4) return
    // is backspace
    if (v.length < flds.phone.length) {
      setFlds(prev => ({...prev, phone: e.target.value}))
      return
    }
    if (v.length > 5 && v[5] != '5' && v[5] != '6' && v[5] != '7') return
    // is number
    if (isNaN(Number(v[v.length-1]))) return

    if (v.length == 5 || v.length == 8 || v.length == 11 || v.length == 14) {
      v += ' '
    }
    setFlds(prev => ({...prev, phone: v}))
  }

  return (
    <div>
      <center>
        <h2>المعلومات الشخصية</h2>
      </center>
      <div className="wilaya">
        <label htmlFor="wilaya">الولاية</label>
        <select name="wilaya" id="wilaya" value={flds.wilaya} onChange={onChange}>
          <option value="00">-------------</option>
          <option value="01">01 - Adrar - أدرار</option>
          <option value="02">02 - Chlef - الشلف</option>
          <option value="03">03 - Laghouat - الأغواط</option>
          <option value="04">04 - Oum El Bouaghi - أم البواقي</option>
          <option value="05">05 - Batna - باتنة</option>
          <option value="06">06 - Béjaïa - بجاية</option>
          <option value="07">07 - Biskra - بسكرة</option>
          <option value="08">08 - Béchar - بشار</option>
          <option value="09">09 - Blida - البليدة</option>
          <option value="10">10 - Bouïra - البويرة</option>
          <option value="11">11 - Tamanrasset - تمنراست</option>
          <option value="12">12 - Tébessa - تبسة</option>
          <option value="13">13 - Tlemcen - تلمسان</option>
          <option value="14">14 - Tiaret - تيارت</option>
          <option value="15">15 - Tizi Ouzou - تيزي وزو</option>
          <option value="16">16 - Algiers - الجزائر</option>
          <option value="17">17 - Djelfa - الجلفة</option>
          <option value="18">18 - Jijel - جيجل</option>
          <option value="19">19 - Sétif - سطيف</option>
          <option value="20">20 - Saïda - سعيدة</option>
          <option value="21">21 - Skikda - سكيكدة</option>
          <option value="22">22 - Sidi Bel Abbès - سيدي بلعباس</option>
          <option value="23">23 - Annaba - عنابة</option>
          <option value="24">24 - Guelma - قالمة</option>
          <option value="25">25 - Constantine - قسنطينة</option>
          <option value="26">26 - Médéa - المدية</option>
          <option value="27">27 - Mostaganem - مستغانم</option>
          <option value="28">28 - M'Sila - المسيلة</option>
          <option value="29">29 - Mascara - معسكر</option>
          <option value="30">30 - Ouargla - ورقلة</option>
          <option value="31">31 - Oran - وهران</option>
          <option value="32">32 - El Bayadh - البيض</option>
          <option value="33">33 - Illizi - إليزي</option>
          <option value="34">34 - Bordj Bou Arréridj - برج بوعريريج</option>
          <option value="35">35 - Boumerdès - بومرداس</option>
          <option value="36">36 - El Taref - الطارف</option>
          <option value="37">37 - Tindouf - تندوف</option>
          <option value="38">38 - Tissemsilt - تيسمسيلت</option>
          <option value="39">39 - El Oued - الوادي</option>
          <option value="40">40 - Khenchela - خنشلة</option>
          <option value="41">41 - Souk Ahras - سوق أهراس</option>
          <option value="42">42 - Tipaza - تيبازة</option>
          <option value="43">43 - Mila - ميلة</option>
          <option value="44">44 - Aïn Defla - عين الدفلى</option>
          <option value="45">45 - Naâma - النعامة</option>
          <option value="46">46 - Aïn Témouchent - عين تموشنت</option>
          <option value="47">47 - Ghardaïa - غرداية</option>
          <option value="48">48 - Relizane - غليزان</option>
          <option value="49">49 - Timimoun - تيميمون</option>
          <option value="50">50 - Bordj Badji Mokhtar - برج باجي مختار</option>
          <option value="51">51 - Ouled Djellal - أولاد جلال</option>
          <option value="52">52 - Béni Abbès - بني عباس</option>
          <option value="53">53 - In Salah - عين صالح</option>
          <option value="54">54 - Ain Guezzam - عين قزام</option>
          <option value="55">55 - Touggourt - تقرت</option>
          <option value="56">56 - Djanet - جانت</option>
          <option value="57">57 - El M'Ghair - المغير</option>
          <option value="58">58 - El Menia - المنيعة</option>
        </select>
      </div>

      <Input label='رقم الهاتف' onChange={handleChangePhone} value={flds.phone} />

      <Tooltip title={ <div>إضغط على الزر من أجل رؤية على الشروط</div> } arrow>
        <div style={{marginTop: '10px'}}>
          <Button fullWidth onClick={() => setOpenRules(true)} background={flds.rules ? '#0f2' : undefined}>{flds.rules ? <div style={{display: 'flex', alignItems: 'center',flexWrap: 'nowrap', justifyContent: 'center'}}><CheckIcon /> <div style={{padding: '0 15px'}}>تم الموافقة على الشروط</div></div> : 'يرجى الموافقة على الشروط'}</Button>
        </div>
      </Tooltip>


      <Rules open={openRules} handleClose={() => setOpenRules(false)} flds={flds} setFlds={setFlds} />
    
    </div>
  )
}

export default PersonalInfo