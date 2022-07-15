document.addEventListener('DOMContentLoaded',function(){
    var btnbar=document.querySelector('.btnbar')
    var navmobi__overlay=document.querySelector('.navmobi__overlay')
    btnbar.onclick=function(){
        navmobi__overlay.classList.toggle('visible')
    }
    
    //backup_intro0
    var play=document.querySelector('.play')
    var backup=document.querySelector('.backup1')
    var close=document.querySelector('.close')
    play.onclick=function(){
        backup.classList.add('backup-open')
    }
    close.onclick=function(){
        backup.classList.remove('backup-open')
    }
    
    
    
    
    
    
},false)
