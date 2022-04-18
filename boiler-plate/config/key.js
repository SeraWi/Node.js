if(process.env.NODE_ENV === 'production'){
    //prod 버전일때
    module.exports= require('./prod');
}else{
    //dev 버전일때
    module.exports= require('./dev');
}