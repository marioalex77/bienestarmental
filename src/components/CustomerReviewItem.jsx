import React from "react";
import ReactStars from "react-rating-stars-component";

const CustomerReviewItem = ({ review }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="bg-third-color-200 p-5 rounded-md text-default-color-700 flex flex-col gap-3">
      <div clasName="">"{review.feedback}"</div>
      <div className="flex flex-row gap-10">
        <div className="text-sm font-bold">{review.customerName}</div>
        <ReactStars
          count={5}
          onChange={ratingChanged(review.rating)}
          size={14}
          isHalf={true}
          activeColor="text-default-color-700"
          color="gray"
          value={review.rating}
        />
      </div>
    </div>
  );
};

export default CustomerReviewItem;
