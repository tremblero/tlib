var css = document.createElement('link');
css.href = 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css';
css.rel = 'stylesheet';
document.head.appendChild(css);

var s = document.createElement('script');
s.src = 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js';

s.addEventListener('load', function() {
    toast = toastr;
});

document.head.appendChild(s);
