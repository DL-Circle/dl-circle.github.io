import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import { IoNewspaperOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { GrDocument } from "react-icons/gr";
import { IoDocumentTextSharp } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { VscSourceControl } from "react-icons/vsc";
import { AiOutlineCode } from "react-icons/ai";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



import mongolia from '../../assets/images/flags/mongolia-flag.png'
import japan from '../../assets/images/flags/japan-flag.png'
import america from '../../assets/images/flags/us-flag.png'
import taiwan from '../../assets/images/flags/taiwan-flag.png'
import china from '../../assets/images/flags/china-flag.png'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Goal = ({
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
      <div className="container" id="page1">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <h1 className="center-content" data-reveal-delay="200" style={{color: '#000000', textAlign:'center'}}>
            Бидний зорилго
          </h1>
          <div className="container-xs">
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{textAlign: 'center'}}>
              {/* DL-Circle нь хиймэл оюун ухааны технологийг баг хамт олноороо сурах 
              сурч, ажиллаж буй Монгол залуусын нэгдсэн клуб юм. */}
              DL-Circle нь хиймэл оюун ухааны технологийн мэдлэгээ бусдадаа хуваалцаж буй Монгол оюутан залуусын нэгдсэн клуб бөгөөд дараах 3 зорилготой. 
            </p>
          </div>
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div 
                className="tiles-item-inner" 
                style={{
                    alignItems: 'center', 
                    borderRadius: 25, 
                    backgroundColor:"#F9FAFB",
                    '&:hover': {
                      backgroundColor: "#efefef !important",
                      color:"#00"
                    },
                  }
                }>
                  <AiFillStar size='100' style={{color: '#E63F92'}}/>
                  <p className="text-sm mb-0" style={{color: "#E63F92", textAlign: 'center'}}>
                  DeepLearning технологийн мэдлэгийг судлан хэрэглээнд нэврүүлдэг болох
                  </p>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner" style={{alignItems: 'center', borderRadius: 25, background:"#F9FAFB"}}>
                  <VscSourceControl size='100' style={{color: '#E63F92', "&:hover":{background:"#392004"}}}/>
                  <p className="text-sm mb-0" style={{color: "#E63F92", textAlign: 'center'}}>
                   AI-ийн алгоритм болон програмын сангуудын талаар мэдлэгтэй болох
                  </p>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner" style={{alignItems: 'center', borderRadius: 25, background:"#F9FAFB"}}>
                  <AiOutlineCode size='100' style={{color: '#E63F92'}}/>
                  <p className="text-sm mb-0" style={{color: "#E63F92", textAlign: 'center'}}>
                  Судалгааны нийтлэлүүдийг өөрсдөө кодоор угсарч чаддаг болох
                  </p>
              </div>
            </div>

          </div>


          <div className={tilesClasses} style={{marginTop: '3%'}}>
              <Grid container spacing={2}>
                  <Grid item xs={4} sm={2.4}>
                    <img src={mongolia} style={{height: '80%'}}/>
                  </Grid>
                  <Grid item xs={4} sm={2.4}>
                    <img src={japan} style={{height: '80%'}}/>
                  </Grid>
                  <Grid item xs={4} sm={2.4}>
                    <img src={america} style={{height: '80%'}}/>
                  </Grid>
                  <Grid item xs={4} sm={2.4}>
                    <img src={taiwan} style={{height: '80%'}}/>
                  </Grid>
                  <Grid item xs={4} sm={2.4}>
                    <img src={china} style={{height: '80%'}}/>
                  </Grid>
              </Grid>
              
          </div>
        
        </div>
      </div>
    </section>
  );
}

Goal.propTypes = propTypes;
Goal.defaultProps = defaultProps;

export default Goal;