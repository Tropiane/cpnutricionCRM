import { apiConnect } from "./axios.connection";

async function refreshTokenAuth() {
    const res = await apiConnect.post(
        "/auth/refresh", 
        null,
        {
            headers: {
            "x-refresh-token": localStorage.getItem("refreshToken") ?? "",
        }
    });
    console.log(res);
    
    return res.data;
}

export {
    refreshTokenAuth
}