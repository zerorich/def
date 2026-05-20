import { site } from '../data/site';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <div className="section-title">
          <span className="num">02.</span>
          <h2>Стек и инструменты</h2>
        </div>

        <div className="skills__grid">
          {site.skills.map((group) => (
            <article key={group.group} className="skills__card">
              <h3 className="skills__title">{group.group}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
