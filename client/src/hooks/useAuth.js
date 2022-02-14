//Custom Hook to handle tokens 
import axios from "axios";
import { useState , useEffect } from "react";
export default function useAuth(code){
    const [accessToken,setaccessToken] = useState();
    const [refreshToken,setrefreshToken] = useState();
    const [expiresIn,setexpiresIn] = useState();
    useEffect(()=>{
        axios.post('/login',{
            code,
        }).then(res=>{
            //console.log(res.data);
            setaccessToken(res.data.accesToken);
            setrefreshToken(res.data.refreshToken);
            setexpiresIn(res.data.expiresIn);
            window.history.pushState({},null,'/');
        }).catch((err)=>{
            // window.location='/';
        })
    },[code]);
    useEffect(()=>{
        if(!refreshToken || !expiresIn){
            return;
        } 
        const interval = setInterval(()=>{

            axios.post('/refresh',{
                refreshToken,
            }).then(res=>{
                setaccessToken(res.data.accessToken);
                setexpiresIn(res.data.expiresIn)
                window.history.pushState({},null,'/');
            }).catch((err)=>{
                window.location='/';
            })
        },(expiresIn-60)*1000);
        return ()=>{clearInterval(interval)};
        },[refreshToken,expiresIn]);
        // console.log(accessToken);
        // console.log(refreshToken);
        // console.log(expiresIn);
    return accessToken;
}