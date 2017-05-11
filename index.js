const Koa = require('koa');
const app = new Koa();

app.use(context => {
    context.body = "hello world";
});

app.listen(3000);
