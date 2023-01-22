import { sessionStorageInstanse } from "helpers"
import { getWinnerById } from "api/winners/getWinnerById"
import { createWinner, updateWinnerById } from "api/winners"

export const setWinner = async () => {
    const winnerData = sessionStorageInstanse.getCurrentWinner()

    if (!winnerData) {
        return
    }

    const { car: currentWinnerCar, time: currentWinnerTime } = winnerData

    try {
        const { time, wins, id } = await getWinnerById(currentWinnerCar.id!)

        const bestWinnerTime = Math.min(currentWinnerTime, time)

        await updateWinnerById({ carId: id, time: bestWinnerTime, wins: wins + 1 })
    } catch (error) {
        await createWinner(currentWinnerCar.id!, currentWinnerTime)
    }
}