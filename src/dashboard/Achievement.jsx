import React, { useState } from "react";
import axios from "axios";
import AdminNavbar from '../dashboard/AdminNavbar';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  // Import the styles
import { ToastContainer } from "react-toastify";
import "../style/Achievement.css";

const AddAchievement = () => {
  const [formData, setFormData] = useState({
    heading: "",
    text: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("heading", formData.heading);
    data.append("text", formData.text);
    if (formData.image) data.append("image", formData.image);

    try {
      const response = await axios.post("http://localhost:4000/api/achievement", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(response.data.message || "Achievement added successfully!");  // Success toast
    } catch (error) {
      toast.error(error.response?.data?.message || "Error adding achievement.");  // Error toast
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="achievement-form-container">
        <h2 className="add_Achievement">Add Achievement</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="heading">Heading:</label>
            <input
              type="text"
              id="heading"
              name="heading"
              value={formData.heading}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Text:</label>
            <textarea
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
          <button type="submit">Add Achievement</button>
        </form>
      </div>
      <ToastContainer /> 
    </>
  );
};

export default AddAchievement;

