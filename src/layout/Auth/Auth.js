import './Auth.css';
import Logo from "../../asset/TOMSPURSE LOGO_Horizontal Logo Full Color.svg";

const AuthLayout = ({ children, title, info }) => {
  return (
    <div className="auth">
      <div className="auth_container">
        <img src={Logo} alt="Logo" />
        <div className="form_container">
          <h3>{title}</h3>
          <p>{info}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
