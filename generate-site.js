
const fs = require('fs')

//write html file

function writeSite(html){
    fs.writeFile('./dist/index.html', html, err => {
    if (err){
         throw err
    }
    console.log("html file saved in dist folder")
    copyFile()
    })

    
}


// copy CSS template

const copyFile = () => {
    
    fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {

                console.log(err);
    }

         console.log('css file copied over to dist folder')   
});

}

module.exports = writeSite, copyFile



