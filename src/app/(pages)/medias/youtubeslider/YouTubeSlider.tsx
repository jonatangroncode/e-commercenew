'use client'
// YouTubeSlider.tsx

import React from 'react'
import Slider from 'react-slick'

import { HR } from '../../../_components/HR'

import classes from './index.module.scss'

const YouTubeSlider = ({ videos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className={classes.sliderContaineryt}>
      <h2>YouTube Videos</h2>
      <Slider {...settings} className="flex justify-between">
        {videos.map((video, index) => (
          <div key={index}>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <HR />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default YouTubeSlider
