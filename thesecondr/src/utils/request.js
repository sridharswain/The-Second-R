const serverLink = "http://192.168.43.151:8080";
const get = (link,body)=>{
    fetch(serverLink+link)
    .then((res)=>{
        console.log(res);
    });
};

const post = (link,body)=>{
    return fetch(serverLink+link,{
        method : 'POST',
        headers : {
            Accept : 'application/json',
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(body)
    })
    .then((res)=>{
        console.log(res);
        return res;
    });
}

export {get,post}
