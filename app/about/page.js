import { site, mission, partners, executiveBoard, boardOfDirectors, emeritusBoard } from "@/content/site";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import TeamCard from "@/components/TeamCard";
import { Spray } from "@/components/Botanical";

export const metadata = { title: "About", description: `The mission, leadership and community partners of ${site.name}.` };

function Profile({ person }) {
  const { bio } = person;
  return (
    <article className="profile">
      <img src={person.photo} alt={`Portrait of ${person.name}`} width={360} height={360} loading="lazy" />
      <div>
        <p className="kicker">{person.role}</p>
        <h3>{person.name}{person.credential && <span className="credential">{person.credential}</span>}</h3>
        <dl className="facts">
          <div><dt>Hometown</dt><dd>{bio.hometown}</dd></div>
          <div><dt>Undergrad</dt><dd>{bio.undergrad}</dd></div>
          <div><dt>Interests</dt><dd>{bio.interests}</dd></div>
          {person.email && <div><dt>Email</dt><dd><a href={`mailto:${person.email}`}>{person.email}</a></dd></div>}
        </dl>
        <p className="why-label">Why I love street medicine</p>
        <blockquote className="why">{bio.why}</blockquote>
      </div>
    </article>
  );
}

export default function About() {
  const [featured, ...rest] = executiveBoard;
  return (
    <>
      <PageHero crumb="About" title={`About ${site.name}`} lede={site.description} />
      <section className="section">
        <div className="container split">
          <div>
            <p className="kicker">Our mission</p>
            <h2>Meeting people where they are</h2>
            {mission.map((p, i) => <p key={i} style={{ color: "var(--ink-soft)" }}>{p}</p>)}
          </div>
          <div className="art-panel"><Spray /></div>
        </div>
      </section>

      <section className="section band-white">
        <div className="container">
          <div className="head-row"><div><p className="kicker">Leadership</p><h2>Executive Board</h2></div></div>
          {featured.bio ? <Profile person={featured} /> : <TeamCard person={featured} />}
          <div className="grid-3" style={{ marginTop: 24 }}>
            {rest.map((m) => <TeamCard person={m} key={m.name} />)}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <p className="kicker">Governance</p>
          <h2>Board of Directors</h2>
          {boardOfDirectors.length > 0 ? (
            <div className="grid-3" style={{ marginTop: 24 }}>{boardOfDirectors.map((m) => <TeamCard person={m} key={m.name} />)}</div>
          ) : (
            <p className="lede">Our Board of Directors will be announced soon.</p>
          )}
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <p className="kicker">With gratitude</p>
          <h2>Emeritus Board of Founding Members</h2>
          <ul className="name-list">{emeritusBoard.map((n) => <li key={n}>{n}</li>)}</ul>
        </div>
      </section>

      <section className="section-tight band-sage">
        <div className="container">
          <p className="kicker center">Community partners</p>
          <h2 className="center" style={{ marginBottom: 28 }}>We work alongside</h2>
          <div className="partners">{partners.map((p) => <span key={p}>{p}</span>)}</div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
