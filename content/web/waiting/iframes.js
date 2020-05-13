
prevent_scroll = function(e){
    console.log(e)
    if(e.keyCode == 32) {
        e.preventDefault();
    }
}
// window.addEventListener('keydown', function(e) {
//   if(e.keyCode == 32 && e.target == document.body) {
//     e.preventDefault();
//   }
// });

// Populate the iframes only if the screen is wide enough
// (i.e. we're not on mobile)
populate = function(){
    let urls = ['http://eointravers.com/web/portfolio/souffle/index.html',
                'http://eointravers.com/web/portfolio/veg/index.html',
                'http://eointravers.com/web/portfolio/flowers/index.html'
               ];
    let widths = [600, 400, 400];
    let heights = [400, 400, 400];
    let W = window.innerWidth;
    console.log(W);
    if(W > 1000){
        // Not mobile
        for(let i=0; i<urls.length; i++){
            console.log(i)
            let iframe = document.createElement('iframe');
            iframe.setAttribute('src', urls[i])
            iframe.setAttribute('width', widths[i])
            iframe.setAttribute('height', heights[i])
            iframe.setAttribute('id', 'fr' + i)
            document.getElementById('frame' + (i+1)).append(iframe)
            // iframe.addEventListener('keydown', prevent_scroll);
        }

    }
}
console.log(populate);
document.addEventListener('DOMContentLoaded',
                          x => setTimeout(populate, 1));
