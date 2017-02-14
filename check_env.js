const colors = require('colors')
let error = false

if (!process.env.ENEXT_MOLTIN_PUBLIC) {
  error = true
  console.log(`\n/!\\ It seems like you don't have the ENEXT_MOLTIN_PUBLIC env variable defined`.red)
}

if (!process.env.ENEXT_MOLTIN_PRIVATE) {
  error = true
  console.log(`\n/!\\ It seems like you don't have the ENEXT_MOLTIN_PRIVATE env variable defined`.red)
}

if (error) {
  process.exit(1)
}
