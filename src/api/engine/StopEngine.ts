import { domain, engine } from "api/baseURL"
import { request } from "api/request"
import { IEngine } from "interface"
import { generateQueryURL } from "router"
import { METHOD, STATUS } from "enums"

export const StopEngine = (id: number) => {
    const queryUrl = generateQueryURL({ id: id, status: STATUS.stopped })
    let requestUrl = `${domain}${engine}${queryUrl}`   

    return request<IEngine>(requestUrl, { method: METHOD.patch })
}