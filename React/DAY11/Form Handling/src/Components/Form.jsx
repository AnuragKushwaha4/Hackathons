import React from 'react'
import {useForm} from "react-hook-form"
const Form = () => {

    function Onsubmit(data){
        console.log(data)
    }

    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting}
    }=useForm();
  return (
    <div>
      <form onSubmit={handleSubmit(Onsubmit)}>
        <h1>Register</h1>
        <label>Full Name</label>
        <input className={(errors.name)?"errorlabel":""} type="text" {...register(
            "name",{
                required:true,
                minLength:{
                    value:3,
                    message:"Name should be greater than 2 character"
                }
            }
        )} />{errors.name && <p className='err-msg'>{errors.name.message}</p>}


        <label>Email</label>
        <input className={(errors.email)?"errorlabel":""} type="email"  {...register(
            "email",{
                required:true,
                pattern:{
                    value:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$",
                    message:"email format is not correct"
                }
            }
        )}/>{errors.email && <p className='err-msg'>{errors.email.message}</p>}


         <label>Age</label>
         <input type="number" {...register("age")}/>

        
        <label>Create Password</label>
        <input className={(errors.password)?"errorlabel":""} type="password" {...register(
            "password",
            {
                pattern:{
                    value:"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$",
                    message:"Password must contain at least 8 characters, including uppercase, lowercase, number and special character"
                }
            }

        )}/>{errors.password && <p className='err-msg'>{errors.password.message}</p>}
        

        <button type='submit' disabled={(isSubmitting)}>{(isSubmitting)?"Submitting":"Submit"}</button>
       
      </form>
    </div>
  )
}

export default Form
