'use client'

import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";

type RecaptchaProps = {
  setFlds: React.Dispatch<React.SetStateAction<Fields>>
}

const Recaptcha = ({ setFlds } : RecaptchaProps) => {
  const onChange = (value: string | null) => {
    if (value) setFlds( prev => ({...prev, isNotRobot: true}) )
    else setFlds( prev => ({...prev, isNotRobot: false}) )
  }
  return (
    <div style={{margin: 'auto', width: 'max-content'}}>
      <ReCAPTCHA
        sitekey="6LcRpIkqAAAAAJ8I6KFDFY16XlEBiHRNCYmNfVOe"
        onChange={onChange}
      />
    </div>
  )
}

export default Recaptcha
