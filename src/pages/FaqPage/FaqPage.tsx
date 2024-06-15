/* eslint-disable max-len */
import { useState } from 'react';
import { Accordion } from '../../components/Accordion/Accordion';
import { Container } from '../../components/Container/Container';
import './FaqPage.scss';

export const FaqPage: React.FC = () => {
  const [currentOpenedId, setCurrentOpenedId] = useState<number | null>(null);
  const questionsRight = [
    {
      title: 'Що таке Korchma?',
      content:
        "Korchma – це онлайн-платформа, яка з'єднує користувачів із місцевими продавцями крафтового алкоголю по різних регіонах України.",
      id: 1,
    },
    {
      title: 'Як шукати продавців крафтового алкоголю?',
      content:
        'Ви можете шукати продавців, обираючи регіон на нашій інтерактивній карті або використовуючи пошукову панель.',
      id: 2,
    },
    {
      title: 'Чи є плата за використання платформи?',
      content:
        'Ні, використання платформи Korchma для пошуку продавців є абсолютно безкоштовним.',
      id: 3,
    },
    {
      title: "Як я можу зв'язатися з продавцем?",
      content:
        "Ви можете зв'язатися з продавцями безпосередньо через контактну інформацію, вказану на їхніх профільних сторінках.",
      id: 4,
    },
  ];
  const questionsLeft = [
    {
      title: 'Чи можу я залишати відгуки про товари?',
      content:
        'Так, ви можете залишати відгуки та оцінки для товарів, які ви придбали.',
      id: 5,
    },
    {
      title: 'Які регіони покриває Korchma?',
      content:
        'Korchma покриває всі регіони України, дозволяючи вам знаходити місцевих продавців крафтового алкоголю по всій країні.',
      id: 6,
    },
    {
      title: 'Як додати свій бізнес на Korchma?',
      content:
        'Якщо ви є продавцем, ви можете додати свій бізнес, натиснувши посилання "Виробникам" і заповнивши форму зворотнього зв\'язку.',
      id: 7,
    },
    {
      title: 'Як отримати більше інформації про продавця?',
      content:
        'Ви можете переглянути профіль продавця, щоб дізнатися більше про його пропозиції, контактну інформацію та відгуки інших користувачів.',
      id: 8,
    },
  ];

  return (
    <section className="faq">
      <div className="faq__hero">
        <Container classes={['faq__hero-container']}>
          <h1 className="faq__title">FAQ</h1>
          <p className="faq__subtitle">ВІДПОВІДІ НА ПОШИРЕНІ ЗАПИТАННЯ</p>
        </Container>
      </div>

      <Container classes={['faq__container']}>
        <div className="faq__questions">
          <ul className="faq__block">
            {questionsLeft.map(question => (
              <li key={question.id}>
                <Accordion
                  title={question.title}
                  content={question.content}
                  id={question.id}
                  currentOpenedId={currentOpenedId}
                  setCurrentOpenedId={setCurrentOpenedId}
                />
              </li>
            ))}
          </ul>

          <ul className="faq__block">
            {questionsRight.map(question => (
              <li key={question.id}>
                <Accordion
                  title={question.title}
                  content={question.content}
                  id={question.id}
                  currentOpenedId={currentOpenedId}
                  setCurrentOpenedId={setCurrentOpenedId}
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
