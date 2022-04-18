const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10; //10자리로 암호 생성


//암호화 방법 : generate salt and hash on separate function calls
// salt를 이용해서 비밀번호 암호하 해야 한다.



const userSchema = mongoose.Schema({
    name :{
        type: String,
        maxlength : 50
    },
    email :{
        type:String,
        trim : true,
        unique : 1
    },
    password:{
        type : String,
        maxlength: 5
    },
    lastname:{
        type:String,
        maxlength : 50
    },
    role:{
        type: Number,
        default : 0
    },
    image : String,
    token :{
        type:String
    },
    tokenExp :{
        type: Number
    }

})

//save하기 전에 시행하기
userSchema.pre('save', function(next){
    var user = this;

    // 비밀번호가 변경될때만 -> 암호화 시키기
    if(user.isModified('password')){
        //비밀번호 암호화

        
        bcrypt.genSalt(saltRounds, function(err, salt) {
                
            if(err){
                return next(err)
            }

            //salt 제대로 생성
            //myPlaintextPassword : 순수한 비번(입력한)
            bcrypt.hash(user.password, salt, function(err, hash) {
                // Store hash in your password DB.
                // hash  : 암호화된 비번

                if(err) return next(err)
                user.password =hash //기존의 password 를 hash 비번으로 바꿔준다.
                next()
            }) // bcrpt end
        })// genSalt end

    } //if end
    
})

const User = mongoose.model('User', userSchema)

module.exports ={ User }