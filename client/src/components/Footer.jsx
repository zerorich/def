import { site } from '../data/site';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} {site.name}. Built with React + Express.
        </p>
        <ul className="footer__socials">
          {site.socials.github && (
            <li>
              <a href={site.socials.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          )}
          {site.socials.telegram && (
            <li>
              <a href={site.socials.telegram} target="_blank" rel="noreferrer">
                Telegram
              </a>
            </li>
          )}
          {site.socials.linkedin && (
            <li>
              <a href={site.socials.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          )}
        </ul>
      </div>
    </footer>
  );
}
