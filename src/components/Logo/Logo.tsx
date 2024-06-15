/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import './Logo.scss';

export const Logo: React.FC = () => {
  return (
    <Link className="logo" to="/" onClick={() => window.scrollTo(0, 0)}>
      <svg
        className="logo__svg"
        width="196"
        height="28"
        viewBox="0 0 196 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="logo__path"
          d="M2.77818 27.9912C5.89818 21.5047 2.94818 19.0261 1.81818 15.2906C-0.611824 7.27477 -0.901824 3.7854 2.77818 0.700348H8.98818C6.13818 6.49252 6.65818 10.4565 8.98818 11.6519H13.3882C19.2582 10.896 22.6082 9.78851 20.7082 6.85288C18.9682 4.99833 22.8282 2.51095 24.4682 0.700348H30.6382C28.7982 4.21608 26.7482 5.28838 27.6082 7.66149C28.7082 11.7837 28.1482 12.2232 19.9482 14.4644L30.6382 19.8347C32.4582 21.8475 31.6582 25.4159 28.1782 27.9824H22.2382C24.4482 25.9697 26.1682 24.0272 24.4682 22.5243C20.5782 19.7205 16.5482 17.6462 12.1982 17.0485L10.0682 17.1012C12.9882 19.4919 11.8582 25.1523 8.98818 27.9824H2.77818V27.9912Z"
        />
        <path
          className="logo__path"
          d="M36.3482 27.9912C34.4282 27.6748 32.8582 27.1299 33.2882 25.3017C35.3282 17.3034 34.1782 12.2671 32.7282 5.49933C32.4082 3.60083 33.5382 1.98359 36.3482 0.700349C38.9682 -0.565314 54.1082 -0.0555306 56.5082 1.74628C59.2882 3.82935 60.4682 5.2708 59.7882 11.0278C59.1082 16.7848 62.3982 17.989 62.1682 24.1942C62.0682 26.8486 59.4482 27.9912 52.8082 27.9912H36.3382H36.3482ZM50.8682 22.6825C55.9982 22.2869 52.7382 17.7868 53.5882 8.40859C54.1182 2.56369 35.9682 4.98954 38.5982 7.96033C42.5682 12.4429 41.3182 18.3054 39.4982 22.533C37.2882 25.3368 42.1382 24.036 50.8682 22.6825Z"
        />
        <path
          className="logo__path"
          d="M88.628 17.8747C83.898 18.6481 80.198 22.2078 71.608 19.8435V27.9912H65.398C68.288 16.1959 59.358 15.7477 65.398 0.700338C74.918 -1.38273 73.798 2.09785 85.258 0.594871C93.518 -0.486217 94.308 5.0071 93.688 6.76497C91.598 12.6011 94.938 16.8463 88.628 17.8747ZM85.228 13.9986C89.948 11.6343 88.178 4.85769 85.948 5.27079C74.758 7.36265 74.948 2.77463 71.608 6.15852C68.538 9.26994 69.578 12.4429 71.608 14.3853C74.428 17.0837 78.678 17.277 85.228 13.9986Z"
        />
        <path
          className="logo__path"
          d="M129.158 27.9912C135.368 17.0133 121.868 8.03065 129.158 0.700348H135.368C144.398 3.45141 144.268 9.09415 146.248 11.8452C150.568 17.8571 148.708 3.39867 157.198 0.700348H163.188C169.308 9.23479 158.838 23.8251 163.188 27.9912H156.978C152.518 23.6229 158.878 15.5543 156.978 9.58636C152.628 8.78653 154.838 20.0017 148.858 20.072H143.668C142.008 13.8843 140.398 7.55603 135.378 9.58636C131.188 13.9986 141.308 17.4616 135.378 27.9912H129.168H129.158Z"
        />
        <path
          className="logo__path"
          d="M167.178 27.9912C163.628 20.7136 169.588 18.9206 169.248 10.2719C168.968 3.07343 172.398 1.19251 172.398 1.19251L188.088 0.849731C200.868 4.86646 190.648 18.3229 195.038 27.9912H188.868C187.478 26.4091 186.188 24.6776 187.078 19.8435C180.908 22.4187 176.258 22.9285 174.248 19.8435C172.458 22.7176 171.688 25.4247 173.388 27.9912H167.178ZM176.098 14.4205C178.118 17.5319 182.748 18.2174 186.758 13.3833C188.588 11.186 190.948 7.84604 187.118 6.43096C183.738 5.18288 180.718 5.83329 178.838 6.15849C175.248 6.78254 172.688 9.16444 176.098 14.4205Z"
          fill="white"
        />
        <path
          className="logo__path"
          d="M116.818 0.700348C115.198 4.34792 115.208 7.99549 116.818 11.6606C115.498 9.10295 106.198 14.0074 102.248 11.3706C99.8681 10.4477 104.608 6.02668 102.838 0.700348H96.6281C99.4381 4.18971 94.9081 12.0562 97.0781 14.7896C97.6081 15.4576 100.288 17.6725 103.858 17.321C107.428 16.9694 111.698 14.4908 116.178 17.8483C119.728 20.5115 117.858 24.3964 115.608 28H123.028C127.268 14.0162 118.758 11.3442 123.028 0.709132H116.818V0.700348Z"
        />
      </svg>
    </Link>
  );
};
