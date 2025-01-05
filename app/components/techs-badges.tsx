import techs from '../tech-badges';

export default function TechBadges() {
  return (
    <>
      <h1 className="text-lg font-medium">Tecnologias que domino:</h1>
      <div className="flex flex-wrap gap-3 p-4">
        {techs.map((tech) => (
          <span className={`px-3 py-1 text-sm font-medium text-white rounded-full ${tech.color}`}>
            {tech.name}
          </span>
        ))}
      </div>
    </>
  );
}