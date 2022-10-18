const path=require('path');
const { VueLoaderPlugin } = require('vue-loader');

const glob = require('glob');//node自带的一个库，直接引入即可
const list = {};

// {
//   card:'./components/lib/card/index.js'
//   demo:'./components/lib/demo/index.js'
// }//需要手动加入，不是动态引入，麻烦！

// 同步读取文件，使用async
async function makeList(dirPath,list){
  const files = glob.sync(`${dirPath}/**/index.js`);  // 拿到dirPath文件夹下所有index.js文件路径
  console.log('files:',files);
  //循环遍历拆分拿到list，数据结构：{card: './components/lib/card/index.js'}
  for(let file of files){
    const component=file.split(/[/.]/)[2];
    console.log('component:',component);
    list[component]=`./${file}`;
  }
  console.log(list);
}
makeList('components/lib', list)

module.exports={
  entry: list,
  output:{
    filename: '[name].umd.js',
    path: path.resolve(__dirname,'dist'),
    library: 'mui',
    libraryTarget: 'umd'
  },
  plugins: [
    new VueLoaderPlugin(),//将vue-loader引入
  ],
  module: {//设置什么文件使用什么loader
    rules: [
      {
        test:/\.vue$/,
        use:[
          {
            loader: 'vue-loader',
          }
        ]
      }
    ]
  }
}
