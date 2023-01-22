import { STORAGE } from "../../enums"
import { ICar } from "../../interface"

type SessionStorageWinner = {
    car: ICar
    time: number // ms
}

class SessionStorageInstanse {
    getValue<T>(key: STORAGE): T | null {
        const item = sessionStorage.getItem(key)

        if (item) {
            return JSON.parse(item) as T
        }

        return null
    }

    hasCurrentWinner() {
        return Boolean(this.getValue(STORAGE.currentWinner))
    }

    getCurrentWinner() {
        return this.getValue<SessionStorageWinner>(STORAGE.currentWinner)
    }

    setCurrentWinner(winner: SessionStorageWinner) {
        sessionStorage.setItem(STORAGE.currentWinner, JSON.stringify(winner))
    }

    removeCurrentWinner() {
        sessionStorage.removeItem(STORAGE.currentWinner)
    }
}

export const sessionStorageInstanse = new SessionStorageInstanse()