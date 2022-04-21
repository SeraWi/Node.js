const odd ='홀수입니다.';
const even ='짝수입니다.';

// 다른 파일에서 사용하고 싶을 떄
module.exports ={ // 객체임
    odd,
    even
};

exports.odd = odd;
exports.even = even;  //이렇게 exports 도 가능

// 위에와 아래를 같이 사용할 수 는 없다!!!
// module.exports 와 exports를 같이 사용할 수 없음



// module.exports ={ // 객체임
//     odd:odd,
//     even:even
// };