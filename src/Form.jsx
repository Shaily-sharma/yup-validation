import React from "react";
import Select from "react-dropdown-select";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import "./Form.css";


const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    lastName: yup.string().required(),
    contact: yup.number().required(),
  })
  .required();



function Form() {
  // const { register, handleSubmit, control ,formState: { errors } } = 
  // resolver: yupResolver(schema)
  const { register, handleSubmit, formState: { errors },control } = useForm({
    resolver: yupResolver(schema),
  });

  const selectOptions = [
    { value: "student", label: "Student" },
    { value: "developer", label: "Developer" },
    { value: "manager", label: "Manager" }
  ];

  const onSubmit = (data) => {
  
    console.log(data, "999");
  };
  const onError = (Erordata)=>{
    console.log(Erordata)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit,onError)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input {...register('name' )} required/>
                {errors.name?.message}

          

        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input {...register('lastName')}
           required
         
          />
           {errors.lastName?.message}
        </div>

        <div>
          <label htmlFor="contact">Contact No.</label>
          <input
            {...register("contact")}
            required
          />
         {errors.contact?.message}

        </div>

        <div >
          <label htmlFor="adult">Is 18+ ?</label>
          <input type="checkbox" name="adult"{...register("adult")} required />
          {errors.adult?.message}
        </div>

        <div>ARE YOU A :</div>

        <br></br>

        <Controller
          name="role"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select className="select" options={selectOptions} {...field} label="Text field" required />
         
            )}
            
        />
        {errors.role?.message}
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
