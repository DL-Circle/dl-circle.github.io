import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Background from '../../assets/images/background.png'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// import Background from 'src/assets/images/video-placeholder.jpg'

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const itemData = [
  {
    img:'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG5ldHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    title: 'aa'
  },
  {
    img: 'https://images.unsplash.com/photo-1556139943-4bdca53adf1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    title: 'Books',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=155dwTLECN47_6dxH6aGpzIm3XVu5XcHX',
    title: 'Sink',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1grD9cXqyUtNZQ0KdhCp2MDSc2gyigdid',
    title: 'Kitchen',
  },
  {
    img: 'https://drive.google.com/uc?export=view&id=1bjzlHUX04jsmnEBhtFh5s-7qESK2SFgw',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1557853197-aefb550b6fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    title: 'code'
  }
]

const MasonryImageList = (props) => {
  console.log(itemData[0].img)
  return (
    <Box sx={{ overflowY: 'fix', borderRadius: 25 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {props.itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
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

  const ref = React.useRef(null);

  return (
    <section
      style={{
        backgroundImage: `url(${Background})`, 
        backgroundSize: '200%', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        height: "100%"
      }}
      {...props}
      className={outerClasses}
    >
    <canvas ref={ref} />
      <div className="container-sm" >
        <div className={innerClasses}>
          <Grid container>
            <Grid item xs={12} sm={6}>
            <div className="hero-content">
              {/* <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{color: '#000000'}}> */}
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{textAlign: "start"}}>
                {/*Deep learning <span className="text-color-primary">Circle</span>*/}
                DeepLearning Paper reading Circle
              </h1>
              <div className="container-xs" style={{color:"#E5E5E5", textAlign: "start"}}>
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                  {/*Хиймэл оюуны технологийн мэдлэгээ хуваалцах клуб*/}
                  Хиймэл оюун ухааны технологын мэдээлэл, нийтлэл унших клуб 📑🤖
                </p>
              </div>
            </div>
            </Grid>
            <Grid item xs={12} sm={6} >
              <MasonryImageList itemData={itemData} />
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