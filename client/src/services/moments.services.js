const { get, post } = require("../http_config/http.service")

export const createMoment = async (data) => {
    await post('/moment/create-moment', data)
        .then(res => { return res })
}

export const getMoments = async () => {
    return await get('/moment/get-moments')
}