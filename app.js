/**
 * Created by zhihua on 3/7/17.
 */
const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

// or use absolute paths
app.use(serve(__dirname ));

app.listen(8080);

console.log('listening on port 8080');