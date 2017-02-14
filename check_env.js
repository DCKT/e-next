const colors = require('colors')

if (!process.env.ENEXT_MOLTIN_PUBLIC) {
  console.log(`\n/!\\ It seems like you don't have the ENEXT_MOLTIN_PUBLIC env variable defined`.red)
}

if (!process.env.ENEXT_MOLTIN_PRIVATE) {
  console.log(`\n/!\\ It seems like you don't have the ENEXT_MOLTIN_PRIVATE env variable defined`.red)
}
