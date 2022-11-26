import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../../Shared/Loading/Loading";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const closeModal = () => {
    setDeletingDoctor(null);
  };

  // Loading doctors from database
  const {
    data: doctors,isLoading, refetch} = useQuery({
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

  const handleDeleteDoctor = (doctor) => {

    const id = doctor._id;


    fetch(`http://localhost:5000/doctors/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          console.log("deleted");
          toast.success(`Doctor ${doctor?.name} deleted successfully`);
          refetch();
       
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-3xl my-5">Manage Doctors {doctors?.length}</h2>

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
            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-xl">
                      <img src={doctor?.image} alt="doctor" />
                    </div>
                  </div>
                </td>
                <td>{doctor?.name}</td>
                <td>{doctor?.email}</td>
                <td>{doctor?.specialty}</td>
                <td>
                  <label
                    htmlFor="confirmation-modal"
                    onClick={() => setDeletingDoctor(doctor)}
                    className="btn btn-xs btn-error "
                  >
                    open modal
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure want to delete ? `}
          message={`Once deleted it can not be undone`}
          successAction={handleDeleteDoctor}
          modalData={deletingDoctor}
          closeModal={closeModal}
          successButtonName="Delete"
        />
      )}
    </div>
  );
};

export default ManageDoctors;
