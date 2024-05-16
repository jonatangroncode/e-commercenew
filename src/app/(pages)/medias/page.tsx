'use client'
import React from 'react'
import Slider from 'react-slick'

import { HR } from '../../_components/HR'
import SoundCloudSlider from './SoundCloudSlider/SoundCloudSlider'
import YouTubeSlider from './youtubeslider/YouTubeSlider'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import classes from './index.module.scss'

const MediaPage = () => {
  const youtubeVideos = [
    {
      title: 'Video 1',
      videoId: 'CY5pOGUL86g',
    },
    {
      title: 'Video 2',
      videoId: 'SYc17oQ5WzE',
    },
    // Add more YouTube video entries as needed
  ]
  const soundcloudTracks = [
    {
      title: 'SoundCloud Track 1',
      id: '1159896682', // Replace with the actual SoundCloud track ID
    },
    {
      title: 'SoundCloud Track 2',
      id: '1433970934', // Replace with the actual SoundCloud track ID
    },
    {
      title: 'SoundCloud Track 1',
      id: '1159896682', // Replace with the actual SoundCloud track ID
    },
    {
      title: 'SoundCloud Track 2',
      id: '1433970934', // Replace with the actual SoundCloud track ID
    },
  ]

  return (
    <div className="container">
      <div className="flex justify-center items-center h-screen">
        <h1 className={classes.header}>Soundcloud</h1>
        <div className={classes.soundcloud}>
          <iframe
            width="100%"
            height="400"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/user-754866229&amp;"
          ></iframe>
        </div>
        <HR />
        <h1 className={classes.header}>SDW Favorites</h1>
        <div className={classes.soundcloud}>
          <iframe
            width="100%"
            height="500"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/1047976156/favorites&amp;"
          ></iframe>
        </div>
        <HR />
        <YouTubeSlider videos={youtubeVideos} />
      </div>
    </div>
  )
}

export default MediaPage
