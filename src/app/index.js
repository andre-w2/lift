import '../style/app.scss';
import save from './elevatorBasic/save.js';
import {HEIGHT_BUILDING} from './util.js'

document.querySelector('body').innerHTML += `Максимальная высота здание установленного может быть: ${HEIGHT_BUILDING}`

const btn = document.querySelector('.btn');

btn.addEventListener('click', save)
