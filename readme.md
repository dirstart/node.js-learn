#### 1.https://blog.csdn.net/yanyang1116/article/details/54847560



* * *

#### 新学到的
```
req.on('data', () => console.log('收到了一次数据'));
```
上面服务器中对应的客户端代码其实是
```
client.write('第一次发送的数据');
client.write('第二次发送的数据');
```