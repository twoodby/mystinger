// MY GUIDE: https://medium.com/@kentquirk/how-to-use-gopherjs-to-turn-go-code-into-a-javascript-library-1e947703db7a

const prompt = require('prompt-sync')();
const inData = prompt('What is the input text?');

m = require("./js.js");
st = m.newStringer(inData)

st.flipValue().then((r) =>  {
    console.log("Flipped Text: " + r)
})

st.crazyCamel().then((r) =>  {
    console.log("Crazy Camel: " + r)
})




