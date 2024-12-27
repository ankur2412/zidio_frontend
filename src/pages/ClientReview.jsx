import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Fotter from "../components/Fotter";
import "../style/ClientReview.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddReviewForm = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    project: "",
    review: "",
    rating: 0,
  });

  const [hoverRating, setHoverRating] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStarClick = (ratingValue) => {
    setFormData({ ...formData, rating: ratingValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/reviews",
        formData
      );
      toast.success("Review submitted successfully!");
      setFormData({ clientName: "", project: "", review: "", rating: 0 });
    } catch (error) {
      toast.error(
        "Failed to submit review. " + error?.response?.data?.error || error.message
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="background01">
        <h1 className="heading01">Welcome to Zidio Family</h1>
        <p></p>
      </div>
      <div className="form-container1">
        <h2>Add a Review</h2>
        <form onSubmit={handleSubmit} className="review-form">
          <div className="form-group">
            <label>Client Name:</label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label>Project:</label>
            <input
              type="text"
              name="project"
              value={formData.project}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label>Review:</label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleChange}
              rows="4"
              required
              autoComplete="off"
            ></textarea>
          </div>

          <div className="form-group star-rating">
            <label>Rating:</label>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${
                    star <= (hoverRating || formData.rating) ? "filled" : ""
                  }`}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => handleStarClick(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <button type="submit">Submit Review</button>
        </form>
      </div>
      <Fotter />
      <ToastContainer />
    </>
  );
};

export default AddReviewForm;

