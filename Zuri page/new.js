const accordion = document.getElementsByClassName('.styles_row-content__QOGZd');
for (i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList,toogle('active')
    })
}