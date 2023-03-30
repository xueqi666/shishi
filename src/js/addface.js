import axios from "axios";

export default {



adduser: function(faceToken){
        
    const formData = new FormData();
                   
    // 遍历当前临时文件List,将上传文件添加到FormData对象中
    formData.append('api_key','RydPX6dejb_ebSnFpR1Q159SMpvTxfFy')
    formData.append('api_secret','DSq5-oD33iC12LwgEuHC8Pm5kGqwnMiz')
   
   
        formData.append('outer_id',11)
        formData.append('face_tokens',faceToken)
        axios({
            method:'post',
            url:'http://localhost:8080/check/facepp/v3/faceset/addface',
            data:formData

            
        }).then(res=>{
                console.log('人脸已添加',res.data);
            
        },err=>{})

    }
}