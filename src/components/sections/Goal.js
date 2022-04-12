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
import mongolia from '../../assets/images/mongol.png'
import japan from '../../assets/images/japan.png'
import america from '../../assets/images/america.jpeg'
import taiwan from '../../assets/images/taiwan.jpeg'
import china from '../../assets/images/china.jpeg'


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
      <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <h1 className="center-content" data-reveal-delay="200" style={{color: '#000000'}}>
            Бидний зорилго
          </h1>
          <div className="container-xs">
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              {/* DL-Circle нь хиймэл оюун ухааны технологийг баг хамт олноороо сурах 
              сурч, ажиллаж буй Монгол залуусын нэгдсэн клуб юм. */}
              DL-Circle нь хиймэл оюун ухааны технологийг хамтдаа сурах, гадаад дотоодод сурч буй Монгол оюутнуудын нэгдсэн клуб.
            </p>
          </div>
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner" style={{alignItems: 'center'}}>
                  <AiFillStar size='50' style={{color: '#ffffff'}}/>
                  <p className="text-sm mb-0" style={{color: "#ffffff"}}>
                    Трэндтэй хөл нийлүүлэн алхах
                  </p>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner" style={{alignItems: 'center'}}>
                  <VscSourceControl size='50' style={{color: '#ffffff'}}/>
                  <p className="text-sm mb-0" style={{color: "#ffffff"}}>
                    Сонгодог ойлголтуудын талаар мэдэж авах
                  </p>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner" style={{alignItems: 'center'}}>
                  <AiOutlineCode size='50' style={{color: '#ffffff'}}/>
                  <p className="text-sm mb-0" style={{color: "#ffffff"}}>
                    Моделуудыг өөрсдөө угсарч сурах
                  </p>
              </div>
            </div>

          </div>


          <div className={tilesClasses} style={{marginTop: '3%'}}>
              <Grid container spacing={2}>
                  <Grid item xs={2.4}>
                    <Paper>
                    <img src={mongolia} style={{height: '100px', width: "100%"}}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Paper>
                    <img src={japan} style={{height: '100px', width: "100%" }}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Paper>
                    <img src={america} style={{height: '100px', width: "100%"}}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Paper>
                    <img src={taiwan} style={{height: '100px', width: "100%"}}/>
                    </Paper>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Paper>
                    <img src={china} style={{height: '100px', width: "100%"}}/>
                    </Paper>
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