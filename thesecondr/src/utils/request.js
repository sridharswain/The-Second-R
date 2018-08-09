serverLink = "192.168.43.151:8080"
get = (link,body)=>{

}

post = (link,body)=>{
    fetch(server+link,{
        method : 'POST',
        headers : {
            Accept : 'application/json',
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(body)
    })
    .then((res)=>{
        console.log(res);
    });
}

export {get,post}
