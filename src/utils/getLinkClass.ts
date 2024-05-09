import classNames from 'classnames';

export const getLinkClass = (baseClasses: string[], bolClasses: string[]) => {
  return ({ isActive }: { isActive: boolean }) => {
    const objBolClasses: { [key: string]: boolean } = {};

    bolClasses.forEach(item => {
      objBolClasses[item] = isActive;
    });

    return classNames(baseClasses.join(' '), objBolClasses);
  };
};
