const pc = require('picocolors');




const present = `

   ___  _____  _   __ _____ ______
  |_  ||  _  || | / /|  ___|| ___ \\
    | || | | || |/ / | |__  | |_/ /
    | || | | ||    \\ |  __| |    /
/\\__/ /\\ \\_/ /| |\\  \\| |___ | |\\ \\
\\____/  \\___/ \\_| \\_/\\____/ \\_| \\_|

`


function logoPresent(){

    console.log(`${pc.red(present)}`)
}

// logoPresent();

module.exports= {
    logoPresent
}