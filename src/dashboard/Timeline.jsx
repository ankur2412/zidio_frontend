import React, { useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../dashboard/AdminNavbar';
import '../style/Timeline.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Timeline = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/timelines', formData);
            console.log(response.data); 
            toast.success('Timeline created successfully!'); // Toast success message
            setFormData({ title: '', description: '', date: '' });
        } catch (error) {
            toast.error(error.response ? error.response.data.error : error.message); // Toast error message
        }
    };

    return (
        <>   
            <AdminNavbar />
            {/* <div className='back_imge'> */}
            <div className="timeline-form-container">
                <h1 className='create'>Create Timeline</h1>
                <form onSubmit={handleSubmit} className="timeline-form">
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Enter description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Create Timeline</button>
                </form>
            </div>
            {/* </div> */}
            <ToastContainer /> 
        </>
    );
};

export default Timeline;
