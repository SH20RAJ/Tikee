var json = "";
/*fetch('videos.json')
.then(response => response.json())
.then(data => {console.log(data);json = data});*/
function get_(a, b, c) {
    var text;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            rpns = this.responseText;
            switch (b) {
                case 'json':
                    text = JSON.parse(rpns);
                    break;
                case 'dom':
                    text = DOMParser(rpns);
                    break;
                default:
                    text = rpns;
            }
            
        }
    };
    xhttp.open("GET", a, c);
    xhttp.send();
    return text;
}
json = get_('videos.json','json');
let video = document.querySelector('video');
let title = document.querySelector('#title');
let arr = [];

//Functions
let playpause = () => {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
};
let initialise = () => {
    const random = Math.floor(Math.random() * json.length);
    arr.push(random)
    console.log({
        random,
        arr
    })
    let vid = json[random].url;
    video.src = vid;
    title.innerHTML = json[random].title;
    playpause()
};
initialise();

let back = () => {
    var n = arr.length - 2;
    n = arr[n];
    window.lastv = n;
    console.log(n)
    let vid = json[lastv].url;
    video.src = vid;
    playpause()
};