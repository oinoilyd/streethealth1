const initialsOf = (name) => name.split(" ").map((w) => w[0]).slice(0, 2).join("");

export default function TeamCard({ person }) {
  return (
    <div className="team-card">
      <div className="avatar">
        {person.photo
          ? <img src={person.photo} alt={`Portrait of ${person.name}`} width={88} height={88} loading="lazy" />
          : <span aria-hidden="true">{initialsOf(person.name)}</span>}
      </div>
      <div><h3>{person.name}</h3><p>{person.role}</p></div>
    </div>
  );
}
