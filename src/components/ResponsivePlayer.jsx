import React from 'react';
import ReactPlayer from 'react-player';
import '../assets/styles/components/responsive-player.scss';

const ResponsivePlayer = ({ url, onProgress }) => {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player'
        url={url}
        playing={true}
        light={true}
        width='100%'
        height='100%'
        controls={true}
        onProgress={onProgress}
      />
    </div>
  );
};

export default ResponsivePlayer;
