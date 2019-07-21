const controller=require('../appcontroller/controller.js')
function getRouterConfig(){
    this.config=(app)=>{
        app.get('/getuser',(req,res)=>{
            controller.getuser(req,res)
        })
    }
}
module.exports =  new getRouterConfig();
