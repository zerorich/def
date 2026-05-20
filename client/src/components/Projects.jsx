import { useEffect, useState } from 'react';
import { api, resolveAsset } from '../api/client';
import { site } from '../data/site';
import './Projects.css';

export default function Projects() {
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const res = await api.getProjects({ signal: controller.signal });
        setProjects(res?.data ?? []);
      } catch (err) {
        if (err.name === 'AbortError') return;
        setError(err.message || 'Не удалось загрузить проекты');
        setProjects(site.fallbackProjects);
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <span className="num">03.</span>
          <h2>Избранные проекты</h2>
        </div>

        {loading && <ProjectsSkeleton />}

        {!loading && (
          <>
            {error && (
              <p className="projects__notice">
                Бэкенд недоступен — показываю запасной список. <code>{error}</code>
              </p>
            )}

            {projects && projects.length > 0 ? (
              <div className="projects__grid">
                {projects.map((p) => (
                  <ProjectCard key={p._id || p.title} project={p} />
                ))}
              </div>
            ) : (
              !error && <p className="projects__empty">Пока пусто — скоро тут появятся проекты.</p>
            )}
          </>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const { title, description, stack = [], repoUrl, liveUrl, imageUrl, featured } = project;
  const imgSrc = resolveAsset(imageUrl);
  return (
    <article className={`project ${featured ? 'project--featured' : ''}`}>
      {imgSrc && (
        <div className="project__thumb">
          <img src={imgSrc} alt={title} loading="lazy" />
        </div>
      )}
      <header className="project__head">
        <h3 className="project__title">{title}</h3>
        {featured && <span className="project__badge">Featured</span>}
      </header>
      <p className="project__desc">{description}</p>
      {stack.length > 0 && (
        <ul className="project__stack">
          {stack.map((s) => (
            <li key={s} className="tag">{s}</li>
          ))}
        </ul>
      )}
      {(repoUrl || liveUrl) && (
        <footer className="project__foot">
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noreferrer" className="project__link">
              <GitHubIcon /> Code
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="project__link">
              <ExternalIcon /> Live
            </a>
          )}
        </footer>
      )}
    </article>
  );
}

function ProjectsSkeleton() {
  return (
    <div className="projects__grid" aria-hidden="true">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="project project--skeleton">
          <div className="sk sk--title" />
          <div className="sk sk--line" />
          <div className="sk sk--line short" />
          <div className="sk sk--tags" />
        </div>
      ))}
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.21 9.16 7.66 10.64.56.1.77-.24.77-.54v-1.9c-3.12.68-3.78-1.5-3.78-1.5-.51-1.29-1.25-1.63-1.25-1.63-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.49-.28-5.11-1.25-5.11-5.55 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.11 1.15.9-.25 1.86-.37 2.82-.38.96.01 1.92.13 2.82.38 2.16-1.45 3.11-1.15 3.11-1.15.61 1.54.23 2.68.11 2.96.72.79 1.16 1.79 1.16 3.02 0 4.31-2.63 5.26-5.14 5.54.4.34.76 1.02.76 2.06v3.05c0 .3.21.65.78.54 4.45-1.48 7.66-5.68 7.66-10.64C23.25 5.48 18.27.5 12 .5z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 3h7v7" />
      <path d="M10 14L21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
}
