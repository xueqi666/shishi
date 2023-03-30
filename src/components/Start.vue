<template>
    <div>
      <div id="contentHolder">
          <video id="video" autoplay></video>
          <canvas style="display:none;" id="canvas"></canvas>
          <img id="imgXX" src="" />
      </div>
    </div>
  
  </template>
  
  <script>

  import facetoken from '../js/facetoken'
  import addface from '../js/addface'
  import checkface from '../js/checkface'
    export default {
      
                mounted()
                {
                
                  const cvs = document.getElementById('canvas')
                    const video = document.getElementById('video')
                    cvs.width = cvs.height = video.width = video.height = 400
                    const {width, height} = cvs
                    const ctx = cvs.getContext('2d')
  
                    const constraints = {
                        video: {
                            width,
                            height
                        }
                    }
                  navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
                  video.srcObject = stream
                  video.onloadedmetadata=() => video.play()
                })
                setTimeout(function(){
                                    ctx.drawImage(video, 0, 0, width, height)
                                var url = canvas.toDataURL('image/png')
                                       document.getElementById('imgXX').src =url
                          
                              
  
                         var token = facetoken.detect(url)
                        // addface.adduser(token)
                        checkface.check1(url)
  
                
                
  
  
                    
                  
  
                    },5000)
  
                
  
  
                  }
  
                }
    
  </script>
  
  <style>
  
  </style>
  