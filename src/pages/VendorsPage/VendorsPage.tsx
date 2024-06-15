/* eslint-disable max-len */
import { useState } from 'react';
import { Container } from '../../components/Container/Container';
import { useAppSelector } from '../../store/hooks';
import './VendorsPage.scss';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { Input } from '../../components/Input/Input';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { Modal } from '../../components/Modal/Modal';
import { Link } from 'react-router-dom';

export const VendorsPage: React.FC = () => {
  const regionsFromServer = useAppSelector(state => state.regions.regions);
  const regionsValues = regionsFromServer.map(reg => reg.name);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isModalShown, setIsModalShown] = useState(false);

  const categoriesFromServer = useAppSelector(
    state => state.categories.categories,
  );

  const toggleCategory = (name: string) => {
    if (selectedCategories.includes(name)) {
      setSelectedCategories(prev => prev.filter(cat => cat !== name));
    } else {
      setSelectedCategories(prev => [...prev, name]);
    }
  };

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [region, setRegion] = useState('Оберіть область');

  const clearForm = () => {
    setComment('');
    setPhone('');
    setEmail('');
    setName('');
    setSelectedCategories([]);
    setRegion('Оберіть область');
  };

  const [isNameValid, setIsNameValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isCategoryValid, setIsCategoryValid] = useState(true);
  const [isRegionValid, setIsRegionValid] = useState(true);

  const hasError =
    !isNameValid ||
    !isPhoneValid ||
    !isEmailValid ||
    !isCategoryValid ||
    !isRegionValid;

  const validateFields = () => {
    if (name.length < 2 || name.length > 32) {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }

    if (!/^\+?3?8?(0\d{9})$/.test(phone)) {
      setIsPhoneValid(false);
    } else {
      setIsPhoneValid(true);
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }

    if (selectedCategories.length === 0) {
      setIsCategoryValid(false);
    } else {
      setIsCategoryValid(true);
    }

    if (!regionsValues.includes(region)) {
      setIsRegionValid(false);
    } else {
      setIsRegionValid(true);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    validateFields();

    if (
      !(name.length < 2 || name.length > 32) &&
      /^\+?3?8?(0\d{9})$/.test(phone) &&
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) &&
      !(selectedCategories.length === 0) &&
      regionsValues.includes(region)
    ) {
      clearForm();
      setIsModalShown(true);
    }
  };

  return (
    <div className="vendors">
      <div className="vendors__header">
        <Container>
          <h2 className="vendors__title">
            ВИ - КРАФТОВИЙ ВИРОБНИК АЛКОГОЛЬНИХ НАПОЇВ В УКРАЇНІ?
          </h2>
          <p className="vendors__subtitle">
            ВАРИТЕ СМАЧНЕ ТА ЯКІСНЕ? ПИШАЄТЕСЯ СВОЇМ ПРОДУКТОМ?
          </p>
          <p className="vendors__text">
            Розміщуйте свої товари у КОРЧМІ та просувайте себе, як вітчизняного
            виробника.
          </p>
        </Container>
      </div>

      <div className="vendors__content">
        <Container>
          <h2 className="vendors__content-title">
            ЗаповнюйТЕ форму І МИ ЗВ’ЯЖЕМОСЬ З ВАШИМ ВИРОБНИЦТВОМ
          </h2>

          <form className="vendors__form" onSubmit={handleFormSubmit}>
            <fieldset className="vendors__form-group vendors__form-group--contacts">
              <legend className="vendors__form-title">
                Як з вами сконтактувати?
              </legend>

              <div className="vendors__fields-group">
                <label className="vendors__form-field">
                  <span className="vendors__form-text">
                    Вкажіть назву вашого виробництва{' '}
                    <span className="vendors__star">*</span>
                  </span>

                  <Input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    name="name"
                    placeholder="Чізай..."
                    hasError={!isNameValid}
                  />
                </label>

                <label className="vendors__form-field">
                  <span className="vendors__form-text">
                    Вкажіть номер телефону для зв’язку з вашим виробництвом{' '}
                    <span className="vendors__star">*</span>
                  </span>

                  <Input
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    name="phone"
                    placeholder="067 567 87 87"
                    hasError={!isPhoneValid}
                  />
                </label>

                <label className="vendors__form-field">
                  <span className="vendors__form-text">
                    Вкажіть e-mail для зв’язку з вашим виробництвом{' '}
                    <span className="vendors__star">*</span>
                  </span>

                  <Input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                    placeholder="****@gmail.com"
                    type="email"
                    hasError={!isEmailValid}
                  />
                </label>
              </div>
            </fieldset>

            <fieldset className="vendors__form-group vendors__form-group--about">
              <legend className="vendors__form-title">
                Розкажіть про ваше виробництво
              </legend>

              <div className="vendors__fields-group">
                <label className="vendors__form-field">
                  <span className="vendors__form-text">
                    В якій області знаходиться ваше виробництво?{' '}
                    <span className="vendors__star">*</span>
                  </span>

                  <Dropdown
                    className="vendors__dropdown"
                    contentClassName="vendors__dropdown-content"
                    options={regionsValues}
                    selectedOption={region}
                    onSelect={value => setRegion(value)}
                    hasError={!isRegionValid}
                  />
                </label>

                <label className="vendors__form-field">
                  <span className="vendors__form-text">
                    Що ви виготовляєте? <span className="vendors__star">*</span>
                  </span>
                  <div className="catalog__checkboxes">
                    {categoriesFromServer.map(cat => (
                      <Checkbox
                        title={cat.name}
                        key={cat.id}
                        checked={selectedCategories.includes(cat.name)}
                        onChange={() => toggleCategory(cat.name)}
                        hasError={!isCategoryValid}
                      />
                    ))}

                    <Checkbox
                      title={'Інше'}
                      checked={selectedCategories.includes('Інше')}
                      onChange={() => toggleCategory('Інше')}
                      hasError={!isCategoryValid}
                    />
                  </div>
                </label>

                <label className="vendors__form-field">
                  <span className="vendors__form-text">Коментарі</span>
                  <textarea
                    className="vendors__form-textarea"
                    placeholder="Напиши нам..."
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                  />
                </label>
              </div>
            </fieldset>

            <div className="vendors__submit">
              {hasError && (
                <p className="vendors__error-message">
                  Заповніть всі поля позначені зірочкою (*)
                </p>
              )}

              <button className="vendors__btn">
                Надіслати дані про ваше виробництво
              </button>
            </div>
          </form>
        </Container>

        {isModalShown && (
          <Modal>
            <section className="vendors__modal">
              <h2 className="vendors__modal-title">ДЯКУЄМО!</h2>
              <p className="vendors__modal-text">
                Ми сконтактуємо з вами протягом 3 робочих днів
              </p>
              <Link
                to="/"
                className="vendors__modal-btn"
                onClick={() => setIsModalShown(false)}
              >
                На головну
              </Link>
            </section>
          </Modal>
        )}
      </div>
    </div>
  );
};
