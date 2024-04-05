import express from "express"
const app = express()
const port = 3001
import cors from "cors"
import bodyParser from "body-parser"

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
//   console.log(req.body);  
  res.send(req.body);
  console.log("Post Request");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})