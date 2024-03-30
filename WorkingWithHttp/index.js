const http = require('http')
//const { parse, resolve } = require('path')
const server = http.createServer()
// const server = http.createServer((request, response)=>{
//     // response.writeHead(200, {"Content-Type": "text/html"})
//     response.setHeader('Content-Type', 'text/html')
//     response.statusCode = 200
//     response.end("Hello, This is a NodeJs HTTP Server <p style = 'color:green'>200 ok</p>")
// })
// get request 
function parse(req){
    return new Promise((resolve, reject) =>{
        let body = ''
        req.on('data', (chunk)=>{
            body += chunk.toString()
        })
        req.on('end', ()=>{
            try{
                resolve({name: body.replace("productName=", "")})
                //console.log(body)
            } catch(err){
                reject(err)
            }
        })
    })
}
const products = [{name: 'banana'}, {name: 'apple'}]
server.prependListener('request', (req, res)=>{
    console.log(`Incoming ${req.method} requst for ${req.url}`)
    req.message = "Message from Middleware"
    req.error = "Error comming from Middleware"
})

server.on('request', (req, res)=>{
    console.log(req.message, '\n', req.error)
    console.log(req.method)
    console.log(req.url)
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.end(`
        <form action="/products" method= "POST" >
            <input type="text" name="productName" />
            <button type="submit">Post</button>
        </form>`)
    }
    else if(req.url ==='/products'){
        if(req.method === "POST"){
            //res.end('Post Request Handled')
            parse(req)
            .then(product =>{
                products.push(product)
                res.end(`product created \n
                        ${JSON.stringify(products)}
                `)
            }).catch(err =>{
                res.statusCode = 400
            })
        }
        else if(req.method === "GET"){
            res.setHeader('Content-Type', 'application/json')
            //res.setHeader('Content-Type', 'text/plain')
            res.statusCode = 200
            res.end(JSON.stringify(products))
        }else{
            res.setHeader('Content-Type', 'text/plain')
            res.statusCode = 405
            res.end('Method not allowed')
        }
    } else{
        res.setHeader('Content-Type', 'text/plain')
        res.statusCode = 404
        res.end('Method not allowed')
    }
    


})
server.listen(3000, ()=>{
    console.log("Server is up and running on port 3000")
})