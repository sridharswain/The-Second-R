const serverLink = "https://thesecondr.herokuapp.com";

const get = (link,body)=>{
    fetch(serverLink+link)
    .then((res)=>{
        console.log(res);
        return res;
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
        return JSON.parse(res._bodyText);
    });
}

export {get,post}
