// Imediately Invoke Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
}) ();

// we have to end IIFE using (;) 

(
    (name) => {
        // unnamed IIFE
        console.log(`DB CONNECT 2 ${name}`);
    }
) ('name rakho')