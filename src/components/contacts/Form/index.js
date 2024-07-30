import {useState} from 'react'

function Form(addContacts,contacts) {
    const [form,setform]=useState({fullname:"",phone_number:""})
    const onChangeInput=(e)=>{
        setform({...form,[e.target.name]:e.target.value})
        //... noktanin anlami bir once deger getir
    }
    const onSubmit=(e)=>{
        e.preventDefault()
        if(form.fullname ==="" || form.phone_number ===""){
            return false;
        }

        addContacts(...contacts,form)
        console.log(form)
    }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name='fullname' placeholder='full Name' onChange={onChangeInput}></input>
      </div>
      <div><input name='phone_number'placeholder='phone Number' onChange={onChangeInput}></input></div>
      <div><button>Add</button></div>
    </form>
    
  )
}

export default Form
