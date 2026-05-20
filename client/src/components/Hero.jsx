import { site } from '../data/site';
import './Hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__inner">
        <span className="hero__eyebrow">
          <span className="hero__dot" /> Open to opportunities
        </span>
        <h1 className="hero__title">
          Привет, я <span className="hero__name">{site.name}</span>.
          <br />
          <span className="hero__role">{site.role}</span>
        </h1>
        <p className="hero__tagline">{site.tagline}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            Смотреть проекты
          </a>
          <a className="btn" href="#contact">
            Связаться
          </a>
        </div>

        <div className="hero__meta">
          <div className="hero__meta-item">
            <span className="hero__meta-label">Stack</span>
            <span>React · Node.js · MongoDB</span>
          </div>
          <div className="hero__meta-item">
            <span className="hero__meta-label">Location</span>
            <span>{site.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
