import { SubmitHandler, useForm } from "react-hook-form";
import './useForm.css';

type FormData = {
  title: string;
  description: string;
  date: string;
  status: string; // Assuming the status is a multiselect field
};

const OpenForm: React.FC = ()=>{

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = data => console.log(data);

  console.log(watch("title")) // watch input value by passing the name of it

  return(
    <div className="mx-6 w-full max-w-[700px] px-6 py-10 h-auto border-2">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full h-auto flex flex-col gap-4">
       
        <div>Add Note</div>
       
        {/* register your input into the hook by invoking the "register" function */}
        <input className="input" placeholder="Title" {...register("title")} />
        {/* errors will return when field validation fails  */}
        {errors.title && <span>This field is required</span>}  
        
        {/* include validation with required or other standard HTML validation rules */}
        <input className="input"  placeholder="Description" {...register("description", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.description && <span>This field is required</span>}
        
        {/* include validation with required or other standard HTML validation rules */}
        <input className="input" type="date" placeholder="Date" {...register("date", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.date && <span>This field is required</span>}

      {/* Dropdown for Status */}
      <select
      className="input"
      {...register('status', { required: true })}
      >
        <option value="">Select Status</option>
        <option value="Pending">Pending</option>
        <option value="Complete">Complete</option>
      </select>
      {/* errors will return when field validation fails  */}
      {errors.status && <span>Please select a status</span>}

        <input className="button bg-gray-600" type="submit" />
      </form>        
    </div>

  )
}

export default OpenForm