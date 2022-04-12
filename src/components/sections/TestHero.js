import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Background from '../../assets/images/background.png'
import Grid from '@mui/material/Grid';

// import Background from 'src/assets/images/video-placeholder.jpg'

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      style={{backgroundImage: `url(${Background})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}
      {...props}
      className={outerClasses}
    >
      <div className="container-sm" >
        <div className={innerClasses}>
          <Grid container>
            <Grid item xs={6}>
            <div className="hero-content">
              {/* <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{color: '#000000'}}> */}
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" >
                Deep learning <span className="text-color-primary">Circle</span>
              </h1>
              <div className="container-xs">
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                  Хиймэл оюуны технологийн мэдлэгээ хуваалцах клуб
                </p>
              </div>
            </div>
            </Grid>
            <Grid item xs={6}>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;