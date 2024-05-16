'use client'
import React from 'react'
import Slider from 'react-slick'

import { HR } from '../../../_components/HR'

import classes from './index.module.scss'

const SoundCloudSlider = ({ tracks }) => {
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
    <div className={classes.sliderContainer}>
      {' '}
      {/* Använd klassen från SCSS-modulen */}
      <h2>SoundCloud Tracks</h2>
      <Slider {...settings}>
        {tracks.map((track, index) => (
          <div key={index}>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              // Include the user ID in the URL if necessary
              src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track.id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
            ></iframe>
            <HR />
          </div>
        ))}
      </Slider>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1159896682&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
    </div>
  )
}

export default SoundCloudSlider
