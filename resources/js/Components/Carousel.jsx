import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, Image } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export default function Carousel() {
  const data = [
    {
      id: 0,
      image: '/image/miang.png',
    },
    {
      id: 1,
      image: '/image/tifaf.png',
    },
    {
      id: 2,
      image: '/image/adat.png',
    },
    {
      id: 3,
      image:
        'https://dispar.kaltimprov.go.id/wp-content/uploads/2022/02/Biduk-Biduk-e1650418220713.png',
    },
  ];
  const NextArrow = ({ onClick }) => {
    return (
      <Box
        sx={{
          backgroundColor: '#fafafa',
          borderRightRadius: '1',
          height: 'auto',
        }}
        className="arrow next"
        onClick={onClick}
      >
        <Box sx={{ height: '1em', display: 'flex', alignItems: 'center' }}>
          <ChevronRightIcon />
        </Box>
      </Box>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <Box
        sx={{
          backgroundColor: '#fafafa',
          borderLeftRadius: '1',
          height: 'auto',
        }}
        className="arrow prev"
        onClick={onClick}
      >
        <Box sx={{ height: '1em', display: 'flex', alignItems: 'center' }}>
          <ChevronLeftIcon />
        </Box>
      </Box>
    );
  };
  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    autoPlaySpeed: 5000,
    speed: 1500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    className: 'center',
    centerMode: true,
    slidesToShow: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          className: 'mobile',
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Box className="banner-container">
      <Slider {...settings}>
        {data?.map((item, idx) => (
          <Box
            key={item.id}
            className={idx === imageIndex ? 'slide activeSlide' : 'slide'}
          >
            <Image
              objectFit="cover"
              borderRadius="1.5em"
              w="100%"
              h="280px"
              variant="banner"
              src={item?.image}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
