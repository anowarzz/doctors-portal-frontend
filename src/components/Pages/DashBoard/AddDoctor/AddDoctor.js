import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../../../Shared/Loading/Loading";

const AddDoctor = () => {


const {data: specialties, isLoading} = useQuery({
    queryKey: ['specialty'],
    queryFn: async () => {
    const res = await fetch('http://localhost:5000/appointmentSpecialty');
    const data = await res.json();
    return data
    }

    

})





  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddDoctor = (data) => {
    console.log(data);
  };

if(isLoading){
    return <Loading />
}

  return (
    <div className="w-96 p-8 mx-auto">
      <h2 className="text-4x mb-8">Add A Doctor</h2>

      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", {
              required: "Please provide your name",
            })}
            type="text"
            className="input input-bordered w-full"
            placeholder="Type Your Name"
          />
          {errors.name && (
            <p className="text-sm font-bold text-red-500">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            className="input input-bordered w-full"
            placeholder="Enter Your Email"
          />
          {errors.email && (
            <p className="text-sm font-bold text-red-500">
              {errors.email?.message}
            </p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
        
          <select
            {...register("specialty", {
                required: "Select a specialty",
              })}
          className="select select-bordered w-full max-w-xs">
        
            {
                specialties.map(specialty =>  <option key={specialty._id} value={specialty.name}>
                    {specialty.name}
                </option> )
            }
           
            
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            {...register("img", {
              required: "Please upload a photo",
            })}
            type="file"
            className="input input-bordered w-full"
            placeholder="Upload a photo"
          />
          {errors.img && (
            <p className="text-sm font-bold text-red-500">
              {errors.img?.message}
            </p>
          )}
        </div>
        {/* {signUpError && (
            <p className="text-sm font-bold text-red-500 py-1">{signUpError}</p>
          )} */}
        <input
          className="btn btn-accent w-full mt-4 hover:btn-secondary"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
