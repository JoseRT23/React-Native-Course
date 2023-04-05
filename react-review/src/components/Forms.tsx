import useForm from "../hooks/useForm"

const Forms = () => {

  const {formInfo, onChange} = useForm({
    email: 'joser16torres@gmail.com',
    password: 'test123'
  });

  return (
    <>
        <h3>Formularios</h3>
        <input type="text" className='form-control' 
               placeholder='Email' value={formInfo.email} 
               onChange={({target}) => onChange(target.value, 'email')}/>
        <input type="text" className='form-control mt-2' 
               placeholder='Password' value={formInfo.password}
               onChange={({target}) => onChange(target.value, 'password')}/>
    </>
  )
}

export default Forms