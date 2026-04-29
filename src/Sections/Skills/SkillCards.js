export default function SkillCards({ skill }) {
  return (
    <div
      key={skill.name}
      className={`min-w-[20vw] rounded-xl bg-[#1e1e1e] p-4 text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] max-md:col-span-2 ${
        skill.span === 2 ? "md:col-span-2" : "md:col-span-1"
      }`}
    >
      <div className="mb-2 flex items-center justify-between text-[0.95rem] font-semibold">
        <div className="flex items-center">
          <img
            src={`/Icones/${skill.icon}`}
            alt={skill.name}
            className="mr-2 h-6 w-6 object-contain"
          />
          <span>{skill.name}</span>
        </div>
        <span className="text-[0.85rem] text-[#ccc]">{skill.level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-[3px] bg-mist">
        <div
          className="h-full bg-lavender transition-[width] duration-300 ease-in-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
}
