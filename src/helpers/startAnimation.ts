import { StartEngine, StopEngine, SwitchEngine } from "api"
import { setWinner } from "api/garage/setWinner"
import { Body } from "components/Body"
import { WinnerPanel } from "components/Panels/WinnerPanel"
import { ICar, IEngine } from "interface"
import { raceStartAttribute } from "./constants"
import { sessionStorageInstanse } from "./sessionStorage"

export const startAnimation = async (car: ICar, carImg: HTMLElement, startEnginBtn: HTMLButtonElement, stopEnginBtn: HTMLButtonElement, raceButton: HTMLButtonElement, resetBtn: HTMLButtonElement) => {
    let animationID = 0

    const carAnimation = ({ distance, velocity }: IEngine) => {
        let startTime: number = performance.now()
        let duration = distance / velocity //animation time
        let distancePx = (<HTMLElement>carImg.parentElement).clientWidth //distance in px
        let onePx = (distance / distancePx)
        animationID = requestAnimationFrame(move)

        function move(time: number) {

            duration = distance / velocity //animation time
            distancePx = (<HTMLElement>carImg.parentElement).clientWidth //distance in px
            onePx = distance / distancePx

            const progress = (time - startTime) / duration
            const translate = progress * distance / onePx    //translate in px
            carImg.style.transform = `translateX(${translate}px)`
            if (translate < distancePx) {
                animationID = requestAnimationFrame(move)
                return
            }

            if (!distancePx) {
                cancelAnimationFrame(animationID)
                switchEngineController.abort()
                return
            }

            if (
                !sessionStorageInstanse.hasCurrentWinner() &&
                raceButton.hasAttribute(raceStartAttribute)
            ) {
                const finishTime = performance.now()
                const resultTime = Math.floor(finishTime - startTime) / 1000

                if (resetBtn.disabled) resetBtn.disabled = false;
                sessionStorageInstanse.setCurrentWinner({ car: car, time: resultTime })
                Body.appendChild(WinnerPanel(car, resultTime))
                setWinner()
            }           
        }
    }

    let switchEngineController: AbortController

    const checkEngine = async () => {
        try {
            switchEngineController = new AbortController()
            await SwitchEngine(car.id!, switchEngineController)
        } catch (error) {
            cancelAnimationFrame(animationID)
        }
    }

    const handleStartEngineClick = async () => {
        startEnginBtn.disabled = true
        raceButton.disabled = true

        const { distance, velocity } = await StartEngine(car.id!)

        stopEnginBtn.disabled = raceButton.hasAttribute(raceStartAttribute)

        carAnimation({ distance, velocity })
        checkEngine()
    }

    const handleStopEngineClick = async () => {
        stopEnginBtn.disabled = true

        await StopEngine(car.id!)  
        switchEngineController.abort()              

        cancelAnimationFrame(animationID)

        startEnginBtn.disabled = false
        raceButton.disabled = false
        carImg.style.transform = ''
    }

    startEnginBtn.addEventListener('click', handleStartEngineClick)
    stopEnginBtn.addEventListener('click', handleStopEngineClick)
}