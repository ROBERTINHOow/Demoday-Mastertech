
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