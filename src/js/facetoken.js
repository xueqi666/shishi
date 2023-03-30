import axios from "axios";


export default {

    userData:function(){
      
        return formData;
    },

detect: function(url){
        
    const formData = new FormData();
                   
    // 遍历当前临时文件List,将上传文件添加到FormData对象中
    formData.append('api_key','RydPX6dejb_ebSnFpR1Q159SMpvTxfFy')
    formData.append('api_secret','DSq5-oD33iC12LwgEuHC8Pm5kGqwnMiz')
   
        formData.append('image_base64',url)
        axios({
            method:'post',
            url:'http://localhost:8080/detects/facepp/v3/detect',
            data:formData

            
        }).then(res=>{
                console.log(res.data)
                console.log('成功获取token',res.data.faces[0].face_token);
                return res.data.faces[0].face_token
            
        },err=>{})

    }
}