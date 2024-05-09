/* eslint-disable max-len */
import { useState } from 'react';
import { Accordion } from '../../components/Accordion/Accordion';
import { Container } from '../../components/Container/Container';
import './FaqPage.scss';

export const FaqPage: React.FC = () => {
  const [currentOpenedId, setCurrentOpenedId] = useState<number | null>(null);
  const questionsRight = [
    {
      title: 'Як я можу знайти конкретний вид алкоголю на вашому сайті?',
      content:
        'Для того, щоб знайти конкретний вид алкоголю вам необхідно скористатися розділом Каталог, на якому ви знайдете інструмент пошуку, а також зможете профільтрувати результати чи скористатися категоріями.',
      id: 11,
    },
    {
      title: 'Як я можу знайти конкретний вид алкоголю на вашому сайті?',
      content:
        'Для того, щоб знайти конкретний вид алкоголю вам необхідно скористатися розділом Каталог, на якому ви знайдете інструмент пошуку, а також зможете профільтрувати результати чи скористатися категоріями.',
      id: 12,
    },
    {
      title: 'Як я можу знайти конкретний вид алкоголю на вашому сайті?',
      content:
        'Для того, щоб знайти конкретний вид алкоголю вам необхідно скористатися розділом Каталог, на якому ви знайдете інструмент пошуку, а також зможете профільтрувати результати чи скористатися категоріями.',
      id: 13,
    },
    {
      title: 'Як я можу знайти конкретний вид алкоголю на вашому сайті?',
      content:
        'Для того, щоб знайти конкретний вид алкоголю вам необхідно скористатися розділом Каталог, на якому ви знайдете інструмент пошуку, а також зможете профільтрувати результати чи скористатися категоріями.',
      id: 14,
    },
  ];
  const questionsLeft = [
    {
      title: 'Як я можу знайти конкретний вид алкоголю на вашому сайті?',
      content:
        'Для того, щоб знайти конкретний вид алкоголю вам необхідно скористатися розділом Каталог, на якому ви знайдете інструмент пошуку, а також зможете профільтрувати результати чи скористатися категоріями.',
      id: 1,
    },
    {
      title: 'Як я можу знайти конкретний вид алкоголю на вашому сайті?',
      content:
        'Для того, щоб знайти конкретний вид алкоголю вам необхідно скористатися розділом Каталог, на якому ви знайдете інструмент пошуку, а також зможете профільтрувати результати чи скористатися категоріями.',
      id: 2,
    },
    {
      title: 'Як я можу знайти конкретний вид алкоголю на вашому сайті?',
      content:
        'Для того, щоб знайти конкретний вид алкоголю вам необхідно скористатися розділом Каталог, на якому ви знайдете інструмент пошуку, а також зможете профільтрувати результати чи скористатися категоріями.',
      id: 3,
    },
    {
      title: 'Як я можу знайти конкретний вид алкоголю на вашому сайті?',
      content:
        'Для того, щоб знайти конкретний вид алкоголю вам необхідно скористатися розділом Каталог, на якому ви знайдете інструмент пошуку, а також зможете профільтрувати результати чи скористатися категоріями.',
      id: 4,
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
