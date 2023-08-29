import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const playerVideo = new Player(iframe);

playerVideo.on('timeupdate', throttle((fooTimeupdate), 1000));

function fooTimeupdate(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}
if (localStorage.getItem('videoplayer-current-time')) {
  playerVideo.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
