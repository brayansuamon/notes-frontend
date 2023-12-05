import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  example: string;
  exampleRequired: string;
  date: string;
  status: string; // Assuming the status is a multiselect field
};

const OpenForm: React.FC = ()=>{

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = data => console.log(data);

  console.log(watch("example")) // watch input value by passing the name of it

  return(
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="mx-6 w-full max-w-[700px] px-6 py-10 h-[500px] bg-red-300">
    <form onSubmit={handleSubmit(onSubmit)} className="w-full h-[500px] flex flex-col gap-4">
      {/* register your input into the hook by invoking the "register" function */}
      <input className="px-3 py-1" placeholder="Title" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input className="px-3 py-1"  placeholder="Description" {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      {/* include validation with required or other standard HTML validation rules */}
      <input className="px-3 py-1" type="date" placeholder="Date" {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

    {/* Dropdown for Status */}
    <select
    className="px-3 py-1"
    {...register('status', { required: true })}
    >
      <option value="">Select Status</option>
      <option value="Pending">Pending</option>
      <option value="Complete">Complete</option>
    </select>
    {/* errors will return when field validation fails  */}
    {errors.status && <span>Please select a status</span>}

      <input type="submit" />
    </form>        
    </div>
  )
}

export default OpenForm