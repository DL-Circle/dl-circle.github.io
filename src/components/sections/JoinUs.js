import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Background from '../../assets/images/background.png'
// import Background from 'src/assets/images/video-placeholder.jpg'

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const JoinUs = ({
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
      {...props}
      className={outerClasses}
    >
      <div className="container-sm" >
        <div className={innerClasses}>
          <div className="hero-content">
            <div className="container-xs">
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <Button tag="a" style={{ color: '#ffffff', background:"linear-gradient(to right, #3CC7EB, #E63F92, #FEA74A)", borderRadius:25}} wideMobile href="https://forms.gle/Qf6BjPaA6eT2aVsj6">
                Click to Join🎉
                </Button>
                <p style={{marginTop: '2%'}} className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                    Та суралцах баг хайж байгаа бол бидэнтэй нэгдээрэй!
                </p>
              </div>
              <div className="reveal-from-bottom" data-reveal-delay="600">
              <p style={{marginTop: '10%'}} className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{fontWeight: "bold"}}>
                    Presentation Sample⤵️
                </p>
              </div>
              <iframe src="https://drive.google.com/uc?export=view&id=1DXsKhgMnvxBz0xlflxqhhhfn7s8EU-kb" width="100%" height="480"></iframe>
            </div>
          </div>
          {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div> */}
          {/* <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" /> */}
        </div>
      </div>
    </section>
  );
}

JoinUs.propTypes = propTypes;
JoinUs.defaultProps = defaultProps;

export default JoinUs;