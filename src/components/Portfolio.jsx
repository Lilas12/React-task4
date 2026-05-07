import { useState } from 'react';
import './Portfolio.css';

const Portfolio  = () => {
  const [filter,setFilter] = useState('ALL')

  const projects = [
    {
      id: 1,
      category: 'CODED',
      title: 'Project 1',
      img: '/Project1.png'
    },
    {
      id: 2,
      category: 'DESIGNED',
      title: 'Project 2',
      img: '/Project2.png'
    },
    {
      id: 3,
      category: 'CODED',
      title: 'Project 3',
      img: '/Project3.png'
    },
    {
      id: 4,
      category: 'DESIGNED',
      title: 'Project 4',
      img: '/Project4.png'
    },
    {
      id: 5,
      category: 'CODED',
      title: 'Project 5',
      img: '/Project5.png'
    },
    {
      id: 6,
      category: 'DESIGNED',
      title: 'Project 6',
      img: '/Project6.png'
    },
  ];

  const filteredProjects = filter === 'ALL'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-banner">
        <div className="portfolio-header-box">
          <h2>PORTFOLIO</h2>
        </div>
      </div>

      <div className="portfolio-filter-nav">
        {['ALL', 'CODED', 'DESIGNED'].map(cat => (
          <button
            key={cat}
            className={filter === cat ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.img} alt={project.title} className="project-img" />
            <div className="project-overlay">
              <p className="project-cat">{project.category}</p>
              <h3>{project.title}</h3>
              <div className="project-btns">
                <a href="#demo" className="btn-link">| DEMO |</a>
                <a href="#more" className="btn-link">| MORE |</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="portfolio-footer">
        <p>And many more to come!</p>
      </div>
    </section>
  );
};

export default Portfolio;
