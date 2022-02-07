import moment from 'moment';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <h1 className="title"> 🌎 NEWS TODAY 🌎</h1>
      <h4 className="dateTime">Todays Date: {moment().format('D MMM YYYY H: mm: ss')}</h4>
    </header>
  );
};

export default Header;
