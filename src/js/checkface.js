import axios from "axios";

export default {

  

    check1: function(faceToken){
        const formData = new FormData();
                   
        // 遍历当前临时文件List,将上传文件添加到FormData对象中
        formData.append('api_key','RydPX6dejb_ebSnFpR1Q159SMpvTxfFy')
        formData.append('api_secret','DSq5-oD33iC12LwgEuHC8Pm5kGqwnMiz')
        formData.append('image_base64',faceToken)
        formData.append('outer_id',11)
     
     
        axios({
            method:'post',
            url:'http://localhost:8080/select/facepp/v3/search',
            data:formData

            
        }).then(res=>{
        
            if(res.data.results[0].confidence > 60){
                alert('薛祁你好')
            }else{
                alert('我不认识你')
            }
                
            
        },err=>{
            console.log(err)
        })

    }
}