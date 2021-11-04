const fs = require('fs')
const add = require('./util.js')
const getNotes = require('./notes.js')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const sum = add(1,2)

const notes = getNotes()

console.log(chalk.green.bold.inverse('Success!'))

console.log(notes)

console.log(process.argv[2])//parsing from command line

console.log(yargs.argv)//node pratice.js title="the notes" add

console.log(sum)

fs.writeFileSync('notes.txt','this file is created by nodejs omlet')
fs.appendFileSync('notes.txt',' add on text')