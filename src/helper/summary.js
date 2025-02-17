const localhost="http://localhost:8080/api"
const summary={
    login:{
        url:`${localhost}/signin`,
        method:"post"
    },
    register:
    {
       url:`${localhost}/register`,
       method :"post"
    },
    updatePassword:{
        url:`${localhost}/update-password`,
        method:"put"
    },
    logout:{
        url:`${localhost}/logout`,
       method :"post"
    },
    updateUser:{
        url:`${localhost}/update-user`,
       method :"post"
    },
    userDetails:{
         url:`${localhost}/user-details`,
       method :"post"
    },
    storeSoilDetails:{
         url:`${localhost}/store-soil-details`,
       method :"post"
    },
    soilDetails:{
        url:`${localhost}/soilDetail`,
       method :"post"

    },
    emailSerive:{
        url:`${localhost}/email`,
       method :"post"

    },
    queryStore:{
            url:`${localhost}/query-detail`,
           method :"post"
    },
    getQuery:{
         url:`${localhost}/GetQuery`,
           method :"post"

    },
    getIndQuer:
    {
        url:`${localhost}/getIndQuery`,
        method:"post"
    },
    prediction:
    {
        url:`${localhost}/prediction`,
        method:"post"

    }



}

export default summary;