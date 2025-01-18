import logo from '../../../assets/images/go-logo-white.svg';

export const Logo = ({ handleReset }: { handleReset?: () => void }) =>
  <div className="logo" onClick={handleReset ?? (() => {})}>
    <img src={logo} alt={"Golang logo"}/>
    <span>QUIZ</span>
  </div>
;
