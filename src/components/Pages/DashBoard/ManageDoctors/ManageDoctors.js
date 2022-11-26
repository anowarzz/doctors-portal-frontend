import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import Loading from "../../../Shared/Loading/Loading";

const ManageDoctors = () => {
    // Loading doctors from database
  const { data:doctors , setData, isLoading} = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

// Delete a doctor from database

const handleDeleteDoctor = (id) => {
    const proceed = window.confirm("Are you sure want to delete this doctor");

    if(proceed){
        fetch(`http://localhost:5000/doctors/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                console.log('deleted');
                toast.success('Doctor Deleted Successfully')
                const remaining = doctors.filter(doctor => doctor._id !==id);
                setData(remaining)
                
            }
            
        })
    }
}
  

if(isLoading){
    return <Loading />
}


  return (
    <div>
      <h2 className="text-3xl">Manage Doctors {doctors?.length}</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            doctors.map((doctor, i) =>   <tr key={doctor._id}>
            <th>{i+1}</th>
            <td>
            <div className="avatar">
  <div className="w-24 rounded-xl">
    <img src={doctor?.image} alt="doctor"/>
  </div>
</div>
            </td>
            <td>{doctor?.name}</td>
            <td>{doctor?.email}</td>
            <td>{doctor?.specialty}</td>
            <td>
                <button onClick={() => handleDeleteDoctor(doctor._id)} className="btn btn-xs btn-error ">Delete</button>
            </td>
          </tr>
            )
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
