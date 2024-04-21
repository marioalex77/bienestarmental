import React from "react";
import { reviews } from "../constants/";
import CustomerReviewItem from "../components/CustomerReviewItem";

const CustomerReviews = ({ setLocale }) => {
  return (
    <section className="bg-white p-5">
      <div className="font-palanquin grid gap-10 md:grid-cols-3 lg:mt-10 lg:gap-10">
        {reviews.map((review, i) => (
          <CustomerReviewItem key={i} review={review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
