export default function SkillCards({ skill }) {
  return (
    <div
      key={skill.name}
      className={`skill-card span-${skill.span}`}
    >
      <div className="skill-header">
        <div>
        <img
          src={`/Icones/${skill.icon}`}
          alt={skill.name}
          className="skill-icon"
        />
        <span>{skill.name}</span>
        </div>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
}
