function colourGen(x) {
   return (
       "rgba(" +
       String(Math.round(Math.random()* 127) + 127) +
       "," +
       String(Math.round(Math.random()* 127) + 127) +
       "," +
       String(Math.round(Math.random()* 127) + 127) +
       "," +
       String(x) +
       ")"
   );
}
