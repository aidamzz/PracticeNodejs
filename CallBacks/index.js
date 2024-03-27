//CALLBACKS
function fetchData(url, callback){
    setTimeout(()=>{
        const data = {id: 1, name:'Mike'}
        callback(data)
    }, 2000)
}
fetchData('somthing',(data)=>{
    console.log(data)
})

//PROMISES
function fetchDataPromise(url){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const data = {id:2, name:"Angela"}
            //if error used use reject('message)
            if(false) reject('error')
            resolve(data)
        },2000)
    })
}

fetchDataPromise('something').then((data)=>{
    console.log(data)
}).catch((err => console.log(err)))

//ASYNC/AWAIT
async function getData(){
    try {
        const data = await fetchDataPromise('somthing')
        console.log(data)
    } catch (error) {
        console.log(error)
    }


}
 getData()