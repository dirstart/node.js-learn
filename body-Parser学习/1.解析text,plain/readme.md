#### socket hang up 的错误原因。
> https://cnodejs.org/topic/57a6c35282e6ea4870ecd3f2

如果连接突然断开，但是客户端却没有收到一个 responese，需要发布 socket hang up 错误。

注释里面也说得很清楚了，你写的那个httpServer，很明显，http的处理句柄对于GET请求根本没有返回响应的地方，但是句柄处理结束server就把socket断开了，所以客户端发现tcp连接被断开，但是确没有任何收到来自服务器的任何响应，因为会抛出这个错误，而且你的客户端代码中也没有使用

#### 解决方案：

* 1.进行异常捕获，防止程序崩溃
> req.on('error', err => console.log(err));

* 2.给 GET 函数等添加一些 服务器的回应。