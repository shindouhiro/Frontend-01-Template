
var readline = require('readline')




const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  


  async function ask(requestion) {
    return new Promise((resolve,reject) => {
      rl.question(requestion, (answer) => {
        // TODO：将答案记录在数据库中。
        resolve(`感谢您的宝贵意见：${answer}`);
      
        rl.close();
      });
    })
  }

  void async function() {
     console.log(await ask("你喜欢我么？"))
  }()
