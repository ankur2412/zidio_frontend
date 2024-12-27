import React from 'react';
import Navbar from '../components/Navbar'
import '../style/ReadMore.css';

const ReadMore = () => {
  return (
    <><Navbar />
    <div className="read-more-container">
      {/* Full-Width Image */}
      <div className="header-image">
      Zidio's History
      </div>

      {/* Content Section */}
      <div className="content-section">
        <h2>5+ Years of Zidio History</h2>
        <p className='read_pra'>
          Over the past 5+ years, Zidio has grown from a small startup to a leading name in its industry. Our journey is marked by innovation, collaboration, and a commitment to excellence. We began as a team with a dream, venturing into uncharted territories and overcoming numerous challenges. Through relentless efforts, we established a strong foundation that has allowed us to grow and thrive. Our milestones include launching groundbreaking products, expanding into new markets, and building a loyal customer base. Each year, we have embraced opportunities for improvement, ensuring that our services remain top-notch and ahead of the curve. Today, Zidio stands as a testament to what can be achieved through hard work, perseverance, and a vision for the future.
        </p>

        <h2>Zidio Team Developer Profiles</h2>
        <p className='read_pra'>
          Our development team consists of highly skilled professionals with expertise in a wide range of technologies. They are the backbone of our innovative solutions, always striving to deliver the best. With a deep understanding of programming languages, frameworks, and tools, our developers craft solutions that meet the evolving needs of our clients. Their dedication to continuous learning and adaptation ensures that Zidio remains at the forefront of technological advancements. Each team member brings unique strengths, from designing intuitive user interfaces to building robust backend systems. Collaboration and teamwork are at the heart of their success, enabling them to solve complex problems and deliver high-quality results. The developers at Zidio embody a culture of excellence, pushing the boundaries of what is possible and setting new standards in the industry.
        </p>

        <h2>Supporting Team Staff</h2>
        <p className='read_pra'>
          Behind the scenes, our dedicated supporting team staff ensures that every operation runs smoothly. From administrative tasks to customer support, their contributions are invaluable. They handle the intricate details that keep the organization functioning seamlessly, allowing the rest of the team to focus on their core responsibilities. Whether it's managing schedules, coordinating projects, or addressing customer queries, their efficiency and professionalism shine through. The supporting team fosters a positive work environment, promoting collaboration and communication across departments. Their efforts often go unnoticed, but their impact is undeniable, as they play a crucial role in maintaining the company's stability and growth. Zidio's supporting staff exemplifies commitment and dedication, working tirelessly to ensure that every aspect of the business operates at its best.
        </p>
      </div>
    </div>
    </>
  );
};

export default ReadMore;