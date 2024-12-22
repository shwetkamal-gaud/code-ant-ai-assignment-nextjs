import axios from "axios";



export const getRequest = async (data:any) => {
    try {
        const response = await axios({
            method: 'get',
            url: process.env.NEXT_PUBLIC_URL,
        });
        
        return response.data;
    } catch (error) {
        throw error;
    }
};