# fa23-cs411-team026-LADYS

## 目录介绍
Nexus文件夹下是咱们的代码
- NexusServer 是后端代码
- nexusapp 是前端代码

## Postman的使用（后端调试）
下载地址  <a>https://dl.pstmn.io/download/latest/win64<a/>

(1)get
比如你想测试后端这个read函数
```javascript
app.get('/api/v1/games', (req, res) => {
  const sql = 'SELECT * FROM games';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
```

先把server.js跑起来，打开postman
- 访问方式设置为 **GET**
- 访问链接为 **http://localhost:5000/api/v1/games**
然后点击SEND，查看返回值

![image](https://github.com/cs411-alawini/fa23-cs411-team026-LADYS/assets/59141023/922bde98-67a3-4597-a70f-630a2d9c1225)


(2)post
比如你想测试后端这个update函数
```javascript
app.put('/api/v1/games/:id', (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;
  const sql = 'UPDATE games SET GameName = ?, DetailedDescription = ? WHERE GameID = ?';
  connection.query(sql, [name, description, id], (err, result) => {
    if (err) throw err;
    res.send('Record updated');
  });
});
```
做如下修改
- 访问方式设置为 **POST**
- 访问链接为 **http://localhost:5000/api/v1/games/1** 这里的1可以换成任意你想测的gameID
- 在param里面，令key等于你想修改的属性值，比如EmbeddingVectors。令value等于要改成的数值，比如3.
![image](https://github.com/cs411-alawini/fa23-cs411-team026-LADYS/assets/59141023/8487d7c5-85b0-44d6-911c-9304127740da)

