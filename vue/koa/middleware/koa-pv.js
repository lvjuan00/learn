function pv(ctx){
  global.console.log('pv',ctx.path)
} 
module.exports=function(){
  return async function(ctx,next){
    global.console.log('pv start')
    pv(ctx)
    await next()
    global.console.log('pv end')
  }
}