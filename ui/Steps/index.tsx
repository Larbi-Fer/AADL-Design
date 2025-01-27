'use client'
import Button from '@ui/Button'
import './style.css'
import { useEffect, useRef, useState } from 'react'
import CheckIcon from '@icons/checkIcon'
import { Tooltip } from '@mui/material'
// import { Tooltip } from 'tooltip-react-component'

type StepsProps = {
  blocks: React.ReactNode[],
  titles: string[],
  onBack?: () => void,
  onNext?: () => void,
  stepNumber?: number,
  conditions: boolean[]
}

const Steps = ({ blocks, titles, conditions } : StepsProps) => {
  const [currentStep, setCurrentStep] = useState(0)

  const contentRef = useRef<HTMLDivElement>(null)

  const next = () => {    
    if (currentStep + 1 == blocks.length) return
    const stepNmb = document.getElementById('step-numbers')
    stepNmb?.style.setProperty('--percent', ((currentStep+1) / (blocks.length - 1) * 100) + '%')

    if(contentRef.current)
      contentRef.current.style.transform = `translateX(${ (currentStep+1) / blocks.length * 100 }%)`;

    setTimeout(() => {
      const s = document.querySelector('.step-n' + (currentStep+1))
      s?.classList.add('active')
    }, 380);
    
    setCurrentStep(prevStep => prevStep+1)
  }

  const previous = () => {    
    if (currentStep == 0) return
    const stepNmb = document.getElementById('step-numbers')
    stepNmb?.style.setProperty('--percent', ((currentStep-1) / (blocks.length - 1) * 100) + '%')

    if(contentRef.current)
      contentRef.current.style.transform = `translateX(${ (currentStep-1) / blocks.length * 100 }%)`;

    const s = document.querySelector('.step-n' + (currentStep))
    s?.classList.remove('active')
    setCurrentStep(prevStep => prevStep-1)
  }

  return (
    <div className='steps-container'>
      <div id='step-numbers' className="step-number" style={{ '--percent': '0%' }}>
        {blocks.map((b, index) => (
          <Tooltip title={titles[index]} key={'step-n' + index} arrow>
            <div className={"step-number__item step-n" + index + ( index == 0 ? ' active' : '' )}> {index < currentStep ? <CheckIcon /> : index+1} </div>
          </Tooltip>
        ))}
      </div>

      <div className="steps-content" ref={contentRef} style={{ width: blocks.length * 100 + '%' }}>
        {blocks.map((block, index) => (
          <div key={index} className="steps-content__item">
            {block}
          </div>
        ))}
      </div>

      <div className="step-actions">
        <Tooltip title={currentStep != 0 ? 'السابق: ' + titles[currentStep-1] : ''}>
          <div>
            <Button onClick={previous} transparent disabled={currentStep == 0}>{'<'} عودة</Button>
          </div>
        </Tooltip>

        <Tooltip title={currentStep+1 < titles.length ? 'التالي: ' + titles[currentStep+1] : 'تسجيل'}>
          <div>
            <Button onClick={next} fullWidth disabled={conditions[currentStep]}>{currentStep == blocks.length-1 ? 'تسجيل' : 'متابعة >'}</Button>
          </div>
        </Tooltip>
      </div>
    </div>
  )
}

export default Steps