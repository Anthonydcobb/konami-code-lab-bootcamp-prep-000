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
  let index = 0
  document.body.addEventListener('keydown', (event) => {
  //  if (codePress === codes) {
  //    alert('YOU DID IT')
  //  }
  console.log(event.key)
    if (codes === codePress) {
      alert("YOU DID IT")
    }

     if (event.key === codes[index]) {
       codePress.push(event.key)
       index ++;
       console.log(codePress)
     } else {
       index = 0
       codePress = []
       console.log('wrong key')
     }

 })
 }



init(codes)
