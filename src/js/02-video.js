import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = e => localStorage.setItem('videoplayer-current-time', e.seconds);
const currentTime = localStorage.getItem('videoplayer-current-time');

currentTime ? player.setCurrentTime(currentTime) : null;

player.on('timeupdate', throttle(onPlay, 1000));
