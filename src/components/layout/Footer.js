import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container">
      <div className="footer-copyright">Broj telefona: <span className="text-color-primary">062 114 7908/062 114 7905 </span></div>
            <div className="footer-copyright">imejl <span className="text-color-primary">eous2020@gmail.com</span></div>
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
            
          <div className="footer-top space-between text-xxs">
            <Logo />
            <FooterSocial />
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <div className="footer-copyright">The <span className="text-color-primary">Eous team</span>. All right reserved</div>
          </div>
          
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
          <div > Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;