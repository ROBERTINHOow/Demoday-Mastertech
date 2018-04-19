
function carregarLogin(){
    axios.get('http://localhost:4000/login')
  .then(function (res) {
      let login = document.querySelector('section')
      login.innerHTML = res.data;
    console.log(res.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}


function carregarMapa(){
    axios.get('http://localhost:4000/mapa')
  .then(function(res){
    let mapa = document.querySelector()
    mapa.innerHTML = res.data;
    console.log(res.data);
  }
)
}

// Banner

let banner = document.querySelector('.banner img')
let imagens = [
  '../img/fundo/banner1.jpg', 
  '../img/fundo/banner2.jpg',
  '../img/fundo/banner3.jpg',
  '../img/fundo/banner4.jpg',
];
let bannerAtivo = 1;

setInterval(function(){
  banner.src = imagens[bannerAtivo];
  bannerAtivo++;

  if(bannerAtivo == imagens.length){
      bannerAtivo = 0;
  }
}, 1000);