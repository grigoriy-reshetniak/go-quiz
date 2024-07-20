import logo from '../../../assets/images/go-logo-white.svg';

export const Logo = ({ handleReset }: { handleReset?: () => void }) =>
  <div className="logo">
    <img src={logo} alt={"Golang logo"} onClick={handleReset ?? (() => {})}/>
    <span onClick={handleReset ?? (() => {})}>QUIZ</span>
  </div>
;

