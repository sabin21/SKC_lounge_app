import '../public/css/common.scss';
import '../public/css/normalize.css';
import '../public/css/draft_a.scss';

const header = document.querySelector('.header');

window.addEventListener('scroll', function(){
  if(this.window.scrollY > 300){
    header.classList.add('active');
  }else{
    header.classList.remove('active');
  }
});





