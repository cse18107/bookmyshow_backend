const app = require('./app');

app.listen(process.env.PORT||8008,()=>{
    console.log(`server is working on port ${process.env.PORT}`);
})