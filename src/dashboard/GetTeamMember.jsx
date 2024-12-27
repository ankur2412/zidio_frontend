import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../dashboard/AdminNavbar';
import '../style/GetTeamMember.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    expertise: '',
    videoUrl: '',
    image: null,
  });

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/teams');
        setTeamMembers(response.data);
      } catch (err) {
        toast.error('Error fetching team members.');
      }
    };
    fetchTeamMembers();
  }, []);

  const handleDelete = (id) => {
    toast(
      ({ closeToast }) => (
        <div>
          <p style={{ color: 'blue' }}>Are you sure you want to delete this team member?</p>
          <button
            onClick={async () => {
              try {
                await axios.delete(`http://localhost:4000/api/teams/${id}`);
                toast.success("Team member deleted successfully.");
                setTeamMembers((prev) => prev.filter((member) => member._id !== id));
                closeToast();
              } catch (err) {
                toast.error("Error deleting team member.");
              }
            }}
            className="confirm-button"
          >
            Yes
          </button>
          <button onClick={closeToast} className="cancel-button">
            No
          </button>
        </div>
      ),
      {
        closeOnClick: false,
        autoClose: false,
      }
    );
  };

  const handleEditClick = (member) => {
    setSelectedMember(member);
    setFormData({
      name: member.name,
      role: member.role,
      expertise: member.expertise.join(', '),
      videoUrl: member.videoUrl,
      image: null,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  const handleUpdate = async () => {
    const { name, role, expertise, videoUrl, image } = formData;
    const form = new FormData();
    form.append('name', name);
    form.append('role', role);
    form.append('expertise', expertise);
    form.append('videoUrl', videoUrl);
    if (image) form.append('image', image);

    try {
      await axios.put(`http://localhost:4000/api/teams/${selectedMember._id}`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('Team member updated successfully.');
      setTeamMembers((prev) =>
        prev.map((member) =>
          member._id === selectedMember._id
            ? { ...member, name, role, expertise: expertise.split(','), videoUrl }
            : member
        )
      );
      setSelectedMember(null);
    } catch (err) {
      toast.error('Error updating team member.');
    }
  };

  return (
    <>
      <AdminNavbar />
      <ToastContainer />
      <div className="team-container5">
        <h2 className='team_h2'>Team Members</h2>

        <div className="team-list5">
          {teamMembers.map((member) => (
            <div className="team-card5" key={member._id}>
              <img src={`http://localhost:4000/${member.image}`} alt={member.name} className="team-image5" />
              <h3>{member.name}</h3>
              <p><strong>Role:</strong> {member.role}</p>
              <p><strong>Expertise:</strong> {member.expertise.join(', ')}</p>
              <p><strong>Video:</strong> <a href={member.videoUrl} target="_blank" rel="noopener noreferrer">Watch</a></p>
              <button onClick={() => handleEditClick(member)} className="edit-button5">Edit</button>
              <button onClick={() => handleDelete(member._id)} className="delete-button5">Delete</button>
            </div>
          ))}
        </div>

        {selectedMember && (
          <div className="modal5">
            <div className="modal-content5">
              <h3>Edit Team Member</h3>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
              <input type="text" name="role" value={formData.role} onChange={handleInputChange} placeholder="Role" />
              <input type="text" name="expertise" value={formData.expertise} onChange={handleInputChange} placeholder="Expertise (comma separated)" />
              <input type="url" name="videoUrl" value={formData.videoUrl} onChange={handleInputChange} placeholder="Video URL" />
              <input type="file" onChange={handleFileChange} />
              <button onClick={handleUpdate} className="update-button5">Update</button>
              <button onClick={() => setSelectedMember(null)} className="cancel-button5">Cancel</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TeamMembers;

