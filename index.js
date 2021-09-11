function elementoPrincipal (id, , ){
    this.id = id;
    this.inelement = inicio;
    this.element = final;
    this.element = this.inicio;
  
    this.conteoSegundos = function(){
    if (this.contador == this.final ){
        this.conteoSegundos = null;
        return;
      } 
              document.getElementById(this.id).value = this.element--;
     

      if(this.contador == -1 )
        {
          var audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);
          
          function beep(duration, frequency, volume, type, callback) {
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  if (volume){gainNode.gain.value = volume;};
  if (frequency){oscillator.frequency.value = frequency;}
  if (type){oscillator.type = type;}
  if (callback){oscillator.onended = callback;}

  oscillator.start();
  setTimeout(function(){oscillator.stop()}, (duration ? duration : 500));
};
         beep();
        }
      t=setTimeout(this.conteoSegundos.bind(this), 1000);
    };
  }

function element()
{

element = new          elementoPrincipal('indicacion', , -1);
if(alto == 1){
  element.conteoSegundos();
  }
else
  {
    clearTimeout(t);
 }
}

function activo()
{
var valor, valor3;
valor = document.getElementById('').value; contador(0,  valor);

}
function parada()
{
contador(0);

}

function limpiar(){
document.getElementById('').value = 0 ;
contador(0);
}