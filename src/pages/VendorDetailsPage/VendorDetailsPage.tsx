/* eslint-disable max-len */
import { Container } from '../../components/Container/Container';
import './VendorDetailsPage.scss';

import { useParams } from 'react-router-dom';
// eslint-disable-next-line max-len
import { DrinksFromVendor } from '../../components/DrinksFromVendor/DrinksFromVendor';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { Vendor } from '../../types/Vendor';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { PageLoader } from '../../components/PageLoader/PageLoader';

export const VendorDetailsPage: React.FC = () => {
  const id = useParams().vendorId;
  const producers = useAppSelector(state => state.producers.producers);
  const [vendor, setVendor] = useState<Vendor | null | undefined>(null);

  useEffect(() => {
    setVendor(producers.find(producer => id && producer.id === +id));
  }, [id, producers]);

  if (!id || vendor === undefined) {
    return <NotFoundPage />;
  }

  if (vendor === null) {
    return <PageLoader />;
  }

  console.log(vendor);
  const hasContacts = vendor.email || vendor.phone;
  const hasSocial = vendor.insta || vendor.fb;
  const hasContactInfo = hasSocial || hasContacts;

  return (
    <Container>
      <div className="vendor">
        {vendor.logo && (
          <div className="vendor__logo-wrapper">
            <img src={vendor.logo} alt="Vendor Logo" className="vendor__logo" />
          </div>
        )}

        <div className="vendor__header">
          {vendor.name && <h2 className="vendor__title">{vendor.name}</h2>}

          <div className="vendor__details">
            <span className="vendor__details-item">Пиво</span>
            <span className="vendor__details-item">
              {vendor.region.name} область
            </span>
          </div>
        </div>

        {vendor.image && (
          <div className="vendor__img-wrapper">
            <img src={vendor.image} alt="Vendor" className="vendor__img" />
          </div>
        )}

        <dl className="vendor__info">
          {vendor.about && (
            <div className="vendor__info-block">
              <dt className="vendor__info-title">ПРО ВИРОБНИЦТВО</dt>
              <dl className="vendor__info-paragraph">{vendor.about}</dl>
            </div>
          )}

          {hasContactInfo && (
            <div className="vendor__info-block">
              <h2 className="vendor__info-title">КОНТАКТИ</h2>

              <div className="vendor__info-paragraph vendor__info-paragraph--flex">
                {vendor.phone && (
                  <dl className="vendor__contact-group">
                    <dt className="vendor__contact-title">Телефон</dt>
                    <dd className="vendor__contact-item">
                      <a className="vendor__link" href={`tel:${vendor.phone}`}>
                        {vendor.phone}
                      </a>
                    </dd>
                  </dl>
                )}

                {vendor.email && (
                  <dl className="vendor__contact-group">
                    <dt className="vendor__contact-title">E-mail</dt>
                    <dd className="vendor__contact-item">
                      <a
                        className="vendor__link"
                        href={`mailto:${vendor.email}`}
                      >
                        {vendor.email}
                      </a>
                    </dd>
                  </dl>
                )}

                {hasSocial && (
                  <dl className="vendor__contact-group">
                    <dt className="vendor__contact-title">Social</dt>
                    <dd className="vendor__contact-item vendor__contact-item--soc">
                      {vendor.insta && (
                        <dl className="vendor__social">
                          <dt className="vendor__social-title">INSTA</dt>
                          <dd className="vendor__social-item">
                            <a
                              className="vendor__link"
                              href={vendor.insta}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {vendor.name}
                            </a>
                          </dd>
                        </dl>
                      )}

                      {vendor.fb && (
                        <dl className="vendor__social">
                          <dt className="vendor__social-title">FB</dt>
                          <dd className="vendor__social-item">
                            <a
                              className="vendor__link"
                              href={vendor.fb}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {vendor.name}
                            </a>
                          </dd>
                        </dl>
                      )}
                    </dd>
                  </dl>
                )}
              </div>
            </div>
          )}
        </dl>

        <DrinksFromVendor vendor={vendor.name} />
      </div>
    </Container>
  );
};
