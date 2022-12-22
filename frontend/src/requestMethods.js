import axios from 'axios'


const BASE_URL ='/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTdmYzZjYzY5MmRmY2U5N2YxNTFhMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDkwNDk1NSwiZXhwIjoxNjczNDk2OTU1fQ.lMBJgcv0CMFaAxNgJ6UDWZwBH7qwo4CMGqLUkJ_hutU'

export const puplicRequest = axios.create({
    baseURL:BASE_URL,

})
export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token :`Bearer ${TOKEN}`}
    
})