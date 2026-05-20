import { useState } from 'react';
import { api } from '../api/client';
import { site } from '../data/site';
import './Contact.css';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ kind: 'idle' });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status.kind === 'loading') return;

    setStatus({ kind: 'loading' });
    try {
      await api.sendMessage(form);
      setForm(initialForm);
      setStatus({ kind: 'success', message: 'Сообщение отправлено. Я отвечу как можно скорее.' });
    } catch (err) {
      setStatus({
        kind: 'error',
        message: err.message || 'Не удалось отправить сообщение.',
        details: err.details,
      });
    }
  };

  return (
    <section id="contact" className="section section--alt">
      <div className="container contact">
        <div className="section-title">
          <span className="num">04.</span>
          <h2>Связаться</h2>
        </div>

        <div className="contact__grid">
          <div className="contact__intro">
            <p>
              Открыт к интересным задачам и совместной работе. Напишите пару строк — отвечу
              в течение пары дней.
            </p>
            <p>
              Или напрямую:{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>

          <form className="contact__form" onSubmit={onSubmit} noValidate>
            <label className="field">
              <span className="field__label">Имя</span>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                required
                minLength={2}
                maxLength={120}
                autoComplete="name"
                placeholder="Как к вам обращаться?"
              />
            </label>

            <label className="field">
              <span className="field__label">Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
            </label>

            <label className="field">
              <span className="field__label">Сообщение</span>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                required
                minLength={10}
                maxLength={4000}
                placeholder="Расскажите о задаче или проекте..."
              />
            </label>

            <div className="contact__actions">
              <button type="submit" className="btn btn--primary" disabled={status.kind === 'loading'}>
                {status.kind === 'loading' ? 'Отправка...' : 'Отправить'}
              </button>

              {status.kind === 'success' && (
                <p className="contact__status contact__status--ok">{status.message}</p>
              )}
              {status.kind === 'error' && (
                <div className="contact__status contact__status--err">
                  <p>{status.message}</p>
                  {Array.isArray(status.details) && status.details.length > 0 && (
                    <ul>
                      {status.details.map((d, i) => (
                        <li key={i}>{d.msg || d.message}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
