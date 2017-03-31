const child_process = require('child_process')

const displayProcesses = () => {
    let command = `ps -aux`
    child_process.exec(command, (err, stdout, stdin) => {
        if (err) throw err
        console.log(stdout)
        document.getElementById("process-list").innerHTML = stdout
    });
}

setInterval(displayProcesses, 1000)
