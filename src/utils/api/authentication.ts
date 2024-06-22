import { Api_endpoint } from '@/types/enum'
import axios from 'axios'

export const login = async (email:string, password:string) => {
    try {
        const res = await axios.post(`${Api_endpoint.user_auth}`, {email, password})
        return res.data
    } catch (error) {
        Promise.reject(error)
    }
}