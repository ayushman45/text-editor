const path=require('path')
require('dotenv').config()

module.exports={
    mode:"production",
    entry:'./src/'+process.env.ENTRY,
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:process.env.OUTPUT
    },
    //loader
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    //loader
    devServer:{
        static: {
            directory: path.join(__dirname, "dist")
          },
        compress:true,
        port:8080
    }
}