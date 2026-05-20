import { site } from '../data/site';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="section-title">
          <span className="num">01.</span>
          <h2>Обо мне</h2>
        </div>
        <div className="about__grid">
          <div className="about__text">
            {site.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <aside className="about__card">
            <ul className="about__list">
              <li>
                <span className="about__key">Имя</span>
                <span>{site.name}</span>
              </li>
              <li>
                <span className="about__key">Роль</span>
                <span>{site.role}</span>
              </li>
              <li>
                <span className="about__key">Локация</span>
                <span>{site.location}</span>
              </li>
              <li>
                <span className="about__key">Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
