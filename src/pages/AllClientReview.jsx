import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/AllClientReview.css";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/reviews");
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error.message);
      }
    };

    fetchReviews();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

 
  const renderStars = (rating) => {
    const maxStars = 5;
    return (
      <>
        {Array.from({ length: maxStars }, (_, index) => (
          <span key={index} className="star">
            {index < rating ? "★" : "☆"}
          </span>
        ))}
      </>
    );
  };

  return (
    <div className="review-container">
      
      <Slider {...sliderSettings}>
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h1 className="review"> Reviews</h1>
            <h1 className="review_feedback"> Customer’s Feedback Are Good</h1>
            <h2>{review.clientName}</h2>
            <h3>Project: {review.project}</h3>
            <p>Review: {review.review}</p>
            <div className="stars">{renderStars(review.rating)}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewList;

