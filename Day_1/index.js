import fs from 'fs'



//console.log(lines)

function partOne(file){
    const lines = fs.readFileSync(file, 'utf-8').trim().split('\n')
    const value = lines.map((line) => {
        let first = line.split('').find((v) => !Number.isNaN(Number(v)))
        let last = line.split('').findLast((v) => !Number.isNaN(Number(v)))
        return Number(first + last);
    });

    return value.reduce((s,v) => s+v)
}

console.log(partOne('./example.txt'));
