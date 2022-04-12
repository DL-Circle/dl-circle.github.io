import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import { IoNewspaperOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { GrDocument } from "react-icons/gr";
import { IoDocumentTextSharp } from "react-icons/io5";
import { AiOutlinePlusCircle } from "react-icons/ai";


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Activity = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Үйл ажиллагаа'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <h1 className="center-content" data-reveal-delay="200" style={{color: '#000000'}}>
            Үйл ажиллагаа
          </h1>
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner" style={{alignItems: 'center'}}>
                  <IoDocumentTextSharp size='50' style={{color: '#ffffff'}}/>
                  <p className="text-sm mb-0" style={{color: "#ffffff"}}>
                    Судалгааны нийтлэл унших, илтгэл тавих
                  </p>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner" style={{alignItems: 'center'}}>
                  <IoNewspaperOutline size='50' style={{color: '#ffffff'}}/>
                  <p className="text-sm mb-0" style={{color: "#ffffff"}}>
                    Хиймэл оюунтай холбоотой орчин цагийн мэдээ танилцуулах
                  </p>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner" style={{alignItems: 'center'}}>
                  <AiOutlinePlusCircle size='50' style={{color: '#ffffff'}}/>
                  <p className="text-sm mb-0" style={{color: "#ffffff"}}>
                    Нэмэлт үйл ажиллагаа явуулах
                  </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Activity.propTypes = propTypes;
Activity.defaultProps = defaultProps;

export default Activity;