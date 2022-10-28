const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, firstFile) => {
    if (err) {
        console.log(err);
        return;
    }

    readFile('./content/second.txt', 'utf-8', (err, secondFile) => {
        if (err) {
            console.log(err);
            return;
        }
        
        writeFile('./content/result-async.txt', `Result async: ${firstFile}, ${secondFile}`, (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });
    })
});