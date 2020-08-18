import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0" style={{alignSelf: "center"}}>
        <Link to="/">
          <Image
            src={require('./../../../assets/images/EOUSlogo2.png')}
            alt="Open"
            width={210}
            height={220} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;