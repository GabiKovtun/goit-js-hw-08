import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const vimeoPlayer = new Player('vimeo-player');

vimeoPlayer.on('timeupdate', throttle(() => {
    vimeoPlayer.getCurrentTime().then((seconds) => {
      localStorage.setItem('videoplayer-current-time', seconds);
    });
  }, 1000));

  const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  vimeoPlayer.setCurrentTime(currentTime);
}

