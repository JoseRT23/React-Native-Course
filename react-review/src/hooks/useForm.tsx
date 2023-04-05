import { useState } from 'react'

//generico para el hook useForm
const useForm = <T extends Object>(data:T) => {
    const [formInfo, setFormInfo] = useState(data)
  
    const onChange = (value:string, campo:keyof T) => {
      setFormInfo({
          ...formInfo,
          [campo]: value
      })
    }

    return {onChange, formInfo}
}

export default useForm