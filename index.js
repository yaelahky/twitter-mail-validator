"use strict"

const fs = require('fs');
const axios = require('axios');

const email = [
  "kiky.lenovo@gmail.com",
  "kyki@rocketmail.com",
  "okado8su9a8@gmail.com",
  "kikykhun@gmail.com"
]

const validCheck = () => {
  email.map( async(item, index) => {
    await axios.get(`https://twitter.com/users/email_available?email=${item}`)
      .then(res => {
        if(!res.data.taken){
          fs.appendFile('registered.txt', item+'\r\n',
          err => {
            if (err) throw err;
            console.log(`[${index}]. ${item} Masih Tersedia`);
        })
        } else {
          fs.appendFile('notRegistered.txt', item+'\r\n',
          err => {
            if (err) throw err;
            console.log(`[${index}]. ${item} Tidak Tersedia`);
        })
        }
      })
      .catch(err => {
        console.log(err)
      })
  })

}

validCheck()
