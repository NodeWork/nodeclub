### parameter could be one of [start|stop|restart]

NODE_ENV=production forever $1 -a -m 20 -e err.log -o out.log app.js
