import logoSmall from '../../../assets/images/go-logo-small.svg';

export const DisclaimerLogo = () =>
  <h1 className="logo">
    <picture>
      <source srcSet="assets/images/go-logo-large.svg" media="(min-width: 1200px)" />
      <source srcSet="assets/images/go-logo-medium.svg" media="(min-width: 768px) and (max-width: 1199.98px)" />
      <source srcSet="assets/images/go-logo-small.svg" media="(max-width: 767.98px)" />
      <img src="assets/images/go-logo-small.svg" alt="Go Logo" />
    </picture>
    <span>QUIZ</span>
  </h1>
;

export const TopNavLogo = ({ handleReset }: { handleReset: () => void }) =>
  <button className="logo" onClick={handleReset} type="reset">
    <img src={logoSmall} alt="Go"/>
    <span>QUIZ</span>
  </button>
;
