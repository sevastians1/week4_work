const access_key="4ff3dabbbb83ee9fcda38a3da0be4b63"
const secret_key="c04377692994c69c4aa68c022c514057"
// let auth_key = Buffer.from(`${access_key}:${secret_key}`).toString(base64)

// headers={"Authorization":`Basic ${auth_key}`
// }


// Buffer.from("!")
const onClick=async()=>{


    const access_key="4ff3dabbbb83ee9fcda38a3da0be4b63"
    const secret_key="c04377692994c69c4aa68c022c514057"

    const credentials=`${btoa(access_key)}:${btoa(secret_key)}`
    headers2={"Authorization":`Basic ${credentials}`
}
    url= " https://api.roadgoat.com/api/v2/destinations/auto_complete?q=barcelona"
    
    headers1= {auth:{
    username:"4ff3dabbbb83ee9fcda38a3da0be4b63",
    password:"c04377692994c69c4aa68c022c514057"}
}

    const mapVar= await axios.get(url, headers1)

    console.log(mapVar)

}