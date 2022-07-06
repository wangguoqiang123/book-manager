var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'book' 
}); 
 
connection.connect();
 
 
// var  addSql = 'INSERT INTO user(username,password) VALUES(?,?)';
// var  addSqlParams = ['admin','123456'];
//             //增
// connection.query(addSql,addSqlParams,function (err, result) {
//         if(err){
//             console.log('[INSERT ERROR] - ',err.message);
//             return;
//         }
 
//        console.log('--------------------------INSERT----------------------------');
//        //console.log('INSERT ID:',result.insertId);        
//        console.log('INSERT ID:',result);        
//        console.log('-----------------------------------------------------------------\n\n');  
// });


// var modSql = 'UPDATE user SET username = ?,password = ? WHERE Id = ?';
// var modSqlParams = ['admin', '123456',1];
// //改
// connection.query(modSql,modSqlParams,function (err, result) {
//    if(err){
//          console.log('[UPDATE ERROR] - ',err.message);
//          return;
//    }        
//   console.log('--------------------------UPDATE----------------------------');
//   console.log('UPDATE affectedRows',result.affectedRows);
//   console.log('-----------------------------------------------------------------\n\n');
// });

// var delSql = 'DELETE FROM user where id=1';
// //删
// connection.query(delSql,function (err, result) {
//         if(err){
//           console.log('[DELETE ERROR] - ',err.message);
//           return;
//         }        
 
//        console.log('--------------------------DELETE----------------------------');
//        console.log('DELETE affectedRows',result.affectedRows);
//        console.log('-----------------------------------------------------------------\n\n');  
// });

var  sql = 'SELECT * FROM user';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});





 
connection.end();