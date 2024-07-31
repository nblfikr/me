import { SwipeDiretion } from "./Board"
import Game from "./Game"

const Pos = {
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
}
// const touchArea = document.getElementById('touchArea') as HTMLElement;

export const handleTouchstart = ((e: TouchEvent) => {
    const { clientX, clientY } = e.touches[0]
    Pos.startX = clientX
    Pos.startY = clientY
})
export const handleTouchend = ((e: TouchEvent) => {
    const { clientX, clientY } = e.changedTouches[0]
    Pos.endX = clientX
    Pos.endY = clientY

    const deltaX = Pos.endX - Pos.startX;
    const deltaY = Pos.endY - Pos.startY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (deltaX > 0) {
            Game.direction = SwipeDiretion.right
            console.log(Game.direction)
        } else {
            Game.direction = SwipeDiretion.left
        }
    } else {
        // Vertical swipe
        if (deltaY > 0) {
            Game.direction = SwipeDiretion.down
        } else {
            Game.direction = SwipeDiretion.up
        }
    }
})