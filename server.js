// lisen post слухаты  + 
// routing  принимать запросы 
// conntcting db взаимодействовать с базами данных 

const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 3000;

const server = http.createServer(app)
server.listen(PORT, () => {
  console.log('server started at port =' + PORT);
})

