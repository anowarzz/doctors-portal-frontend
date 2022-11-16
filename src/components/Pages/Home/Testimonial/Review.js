import React from "react";

const Review = ({ review }) => {
  const { name, img, review: userReview, location } = review;

  return (
    <div className="shadow-xl rounded">
      <div className="card-body">

        <p className="font-Ibm-plex">{userReview}</p>
        <div className="flex gap-4 items-center mt-3 ">
        <div className="avatar">
  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={img} alt="" />
  </div>
</div>

<div>
    <h5 className="text-lg font-semibold">{name}</h5>
    <p>{location}</p>
</div>
        </div>
      </div>
    </div>
  );
};

export default Review;
