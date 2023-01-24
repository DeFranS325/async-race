import { domain, engine } from "api/baseURL"
import { request } from "api/request"
import { IEngineWorkStatus } from "interface"
import { METHOD, STATUS } from "enums"
import { generateQueryURL } from "router"

export const SwitchEngine = (id: number, controller?: AbortController) => {
    const queryUrl = generateQueryURL({ id: id, status: STATUS.drive })
    let requestUrl = `${domain}${engine}${queryUrl}`

    return request<IEngineWorkStatus>(requestUrl, {
        method: METHOD.patch,
        signal: controller?.signal
    })
}