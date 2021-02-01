// docs: https://github.com/aFarkas/lazysizes
import lazySizes from 'lazysizes';

// import a plugin 
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes/plugins/respimg/ls.respimg';


//in case you want to use custom media query aliases in your markup, instead of full media queries
lazySizes.cfg.customMedia = {
    '--xs': '(max-width: 480px)',
    '--sm': '(max-width: 992px)',
    '--md': '(max-width: 1280px)' 
};  

function loadJS(u){
    var r=document.getElementsByTagName("script")[0],s=document.createElement("script");
    s.src=u;
    r.parentNode.insertBefore(s,r);
}
if(!window.HTMLPictureElement || !('sizes' in document.createElement('img'))){
    loadJS("ls.respimg.min.js");
}
