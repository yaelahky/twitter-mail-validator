"use strict"

const fs = require('fs');
const axios = require('axios');

const validCheck = async(filename) => {
  const file = fs.readFileSync(`./${filename}`, 'utf-8');
  const splitFile = file.split(/\r?\n/)

  splitFile.map((item) => {
    axios.get(`https://twitter.com/users/email_available?email=${item}`)
      .then(res => {
        if(!res.data.taken){
          fs.appendFile('email-tersedia.txt', item+'\r\n',
          err => {
            if (err) throw err;
            console.log(`${item} Masih Tersedia`);
        })
        }
      })
      .catch(err => {
        console.log(err)
      })
  })
}

validCheck("email.txt")
