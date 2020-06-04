const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init(codes) {
  let codePress = []
  document.body.addEventListener('keydown', (event) => {
  //  if (codePress === codes) {
  //    alert('YOU DID IT')
  //  }
  console.log(event.key)
   
     if (event.key === codes[i]) {
       codePress.push(event.key)
       console.log(`right key ${event.key}`)
     } else {
       codePress = [];
       console.log('wrong key')
     }
   

 })
 }



init(codes)
