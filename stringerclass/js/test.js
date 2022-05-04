// MY GUIDE: https://medium.com/@kentquirk/how-to-use-gopherjs-to-turn-go-code-into-a-javascript-library-1e947703db7a

m = require("./js.js");
st = m.newStringer("abcdefg")

st.flipValue().then((r) =>  {
    console.log("Flipped Text: " + r)
})

st.crazyCamel().then((r) =>  {
    console.log("Crazy Camel: " + r)
})




