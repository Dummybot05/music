import path from 'path'
import fs from 'fs'
import express from 'express'
import { meta, cover } from './metadata.js';
import pic from './songArr.js'

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.static('./public'))
app.set('view engine', 'ejs')

app.get('/', async(req, res) => {
  fs.readdir("./public/music", async(err, auddata) => {
     let currM = req.query.song
       res.render('index', {
         lister : auddata,
         picture : pic,
         currentMusic : auddata[currM],
         playNow : currM
       })
     currM += 1;
   })
})

app.listen(PORT)
