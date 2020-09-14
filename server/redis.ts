import redis from 'redis';
import Promise from 'bluebird';

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);
const client = redis.createClient({
  host: '127.0.0.1',
  port: 6379
});

client.on('error', (error) => {
  console.error(error);
});

setInterval(() => {
  console.log('heartbeat');
  client.get('key');
}, 2e4)

export default client;
