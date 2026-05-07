import './Skills.css';

const Skills = () => {
  const skillsData = {
    using: [
      { name: 'HTML5', icon: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
      { name: 'CSS3', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
      { name: 'SASS', icon: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg' },
      { name: 'JAVASCRIPT', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
      { name: 'REACT', icon: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
      { name: 'BOOTSTRAP', icon: 'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg' },
      { name: 'GIT', icon: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg' },
      { name: 'FIGMA', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg' },
    ],
    learning: [
      { name: 'NODEJS', icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
      { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
      { name: 'MONGODB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
      { name: 'TYPESCRIPT', icon: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
    ],
    other: [
      { name: 'ANGIELSKI C1/C2', icon: '🇬🇧' },
      { name: 'HISZPAŃSKI B1/B2', icon: '🇪🇸' },
      { name: 'C++', icon: 'https://cdn.worldvectorlogo.com/logos/c.svg' },
      { name: 'C', icon: 'https://cdn.worldvectorlogo.com/logos/c-1.svg' },
    ]
  };

  return (
    <section className="skills-section" id="skills">
      <div className="separator top-sep">
        <span className="sep-line"></span>
        <span className="sep-icon">\\V//</span>
        <span className="sep-line"></span>
      </div>

      <div className="skills-header">
        <h2 className="skills-title">SKILLS</h2>
      </div>

      <div className="skills-container">
        <h3>USING NOW:</h3>
        <div className="skills-grid">
          {skillsData.using.map(skill => (
            <div className="skill-card" key={skill.name}>
              <img src={skill.icon} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

        <h3>LEARNING:</h3>
        <div className="skills-grid">
          {skillsData.learning.map(skill => (
            <div className="skill-card" key={skill.name}>
              <img src={skill.icon} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

        <h3>OTHER SKILLS:</h3>
        <div className="skills-grid">
          {skillsData.other.map(skill => (
            <div className="skill-card" key={skill.name}>
              {skill.icon.startsWith('http') ? <img src={skill.icon} alt={skill.name} /> : <span className="flag-emoji">{skill.icon}</span>}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;