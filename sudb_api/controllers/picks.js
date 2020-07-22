const express = require('express')
const picks = express.Router()

picks.use(express.json());

// data
let staffPicks = [
    {name: "A Little Life", url: "http://books.google.com/books/content?id=sL_ZCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},
    {name: "The Great Believers", url: "http://books.google.com/books/content?id=4fo5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},
    {name: "East of Eden", url: "http://books.google.com/books/content?id=OPy6E5ZhXs0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},
    {name: "Girl, Woman, Other", url: "http://books.google.com/books/content?id=U32pDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}
]

picks.get('/', (req, res) => {
    res.status(200).json(staffPicks);
})

module.exports = picks;