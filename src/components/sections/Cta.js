import React, {useState, useEffect} from 'react';
import * as emailjs from 'emailjs-com'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [IsSent, setIsSent] = useState(false)
  const [message, setMessage] = useState('')

  const handleClick = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'gmail',
      'customer',
      e.target,
      'user_wUe4EIUQxpmYl2XyPTA3T'
    )
    .then(setIsSent(true))
    .catch()
  }

  useEffect(() => {
    if(IsSent == false){
      setMessage('Ostavite svoje podatke i kontaktiraćemo vas u najkraćem mogućem roku.')
    } else if(IsSent == true){
      setMessage('Hvala što ste nas kontaktirali!!')
      setName('')
      setNumber('')
      setEmail('')
    }
  })

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              {message}
              </h3>
          </div>
          <div className="cta-action">
            <form className='contact_form_class' onSubmit={handleClick}>
            <Input id="name" name='name' type="name" label="Subscribe" value={name} onChange={e => setName(e.target.value)} labelHidden placeholder="ime">
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input>

            <Input id="number" name='number' type="phone number" label="Subscribe" value={number} onChange={e => setNumber(e.target.value)}  labelHidden  placeholder="broj telefona" style={{padding:'50p'}}>
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input>
            
            <Input id="email" name='email' type="email" label="Subscribe" labelHidden value={email} onChange={e => setEmail(e.target.value)}  placeholder="imejl" style={{padding:'50p'}}>
            <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input>
            <input type="submit" value="Pošalji" />
            </form>
            
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;