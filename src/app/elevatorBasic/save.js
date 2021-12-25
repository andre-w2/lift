import { inputHeightBuilding } from './inputUser.js'
import {warning, show} from '../alert.js'
import { HEIGHT_BUILDING } from '../util.js'


function save() {
    const height = inputHeightBuilding();

    if (height > 0) {
        if (height > HEIGHT_BUILDING) {
            warning('Высота здания превышает установленную максимальную высоту здания!')
            return false
        } else {
            const elevator = document.querySelector('.elevator');

            elevator.style = `transform: translate3d(0px, -${height}px, 0px);`
            

            elevator.addEventListener('transitionend', handle, false)

            function handle() {
               show('Лифт остановился');
               const door = document.querySelector('.elevator_doorLeft')
               door.style = 'margin-right: 50px;'
            }
        }
    } else {
        warning('Введите высоту на которую хотите подняться')
        return false
    }
}
export default save;