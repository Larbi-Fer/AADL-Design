'use client'

import PersonalInfo from "@components/PersonalInfo";
import CivilStatus from "@components/CivilStatus";
import Steps from "@ui/Steps";

import './global-style.css'
import { useState } from "react";
import Recaptcha from "@components/Recaptcha";

const fields = {
  wilaya: 0,
  phone: '+213 ',
  rules: false,
  IDCard: '',
  SSCNum: '',
  isNotRobot: false
}

export default function Home() {
  const [flds, setFlds] = useState(fields);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFlds({
      ...flds,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div style={{ width: '50%', marginLeft: '50%', marginTop: '300px', transform: 'translateX(-50%)' }}>
      <Steps blocks={[
        <div style={{margin: '30px 100px'}}>
          <PersonalInfo flds={flds} onChange={handleChange} setFlds={setFlds} />
        </div>,
        <div style={{margin: '30px 100px'}}>
          <CivilStatus flds={flds} handleChange={handleChange} setFlds={setFlds} />
        </div>,
        <div style={{height: '100%', display: 'flex'}}>
          <Recaptcha setFlds={setFlds} />
        </div>
      ]} titles={[
        'Personal Info',
        'Civil Status',
        'Are you a robot?'
      ]} conditions={[
        flds.phone.length != 17 || flds.wilaya == 0 || !flds.rules,
        // false,
        flds.IDCard.length != 18 || flds.SSCNum.length != 15,
        // false,
        !flds.isNotRobot
      ]} />
    </div>
  );
}

/**
 * Rules
 * CAPATCHA
 * Header disgin
 */