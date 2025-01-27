import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import Button from '@ui/Button'
import React from 'react'

type RulesProps = {
  open: boolean,
  handleClose: () => void,
  flds: Fields,
  setFlds: React.Dispatch<React.SetStateAction<Fields>>
}

const Rules = ({ open, handleClose, flds, setFlds } : RulesProps) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"يرجى الموافقة على الشروط للمواصلة"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          أصرح أنني على علم بالشروط المتعلقة بصيغة البيع بالإيجار المحددة في المرسوم التنفيذي 105 -01 المؤرخ في 23 أفريل 2001 ، و المحدد لشروط و كيفيات إمتلاك سكن في إطار برنامج البيع 
بالإيجار، المعدل و المتمم

أصرح أن كل المعلومات والوثائق المقدمة من طرفي، هي معلومات صحيحة، صادقة و رسمية (في حالة التصريح
الكاذب أتحمل الإجراءات القانونية المعمول بها قانونا ).

أصرح أنى التزم بالإجراءات المعمول بها في إطار اكتساب سكن بصيغة البيع بالإيجار و أمتثل لما تقتضيه عملية الاكتاب
و الاستفادة من سكن في اطار صيغة البيع بالإيجار.

أصرح أني إطلعت ووافقت على شروط وكيفيات الحصول على مسكن في إطار برنامج البيع بالايجار.

 أرخص لوكالة عدل، وفقا للشروط المنصوص عليها في القانون، بنقل المعطيات ذات الطابع الشخصي ومعالجتها
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {setFlds(prev => ({...prev, rules: false})); handleClose()}} transparent>إلغاء</Button>
          <Button onClick={() => {setFlds(prev => ({...prev, rules: true})); handleClose()}}>
            أوافق
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Rules
