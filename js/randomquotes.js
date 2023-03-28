function generateQuote() {
    const quotes = [

        {
            quote: "Profit is the GOAT.",
            author: "Me"      
        },

                
        {
            quote: "Krillin will be an alright ms.",
            author: "Me"      
        },
                
        {
            quote: "Void is the best ot still in OWL.",
            author: "Me"      
        },
                
        {
            quote: "LeeSooMin is gonna diff Skewed.",
            author: "Me"      
        },
                
        {
            quote: "Prophet will win ROTY.",
            author: "Me"      
        }
                
    ];

    let currentQuote =  Math.floor(Math.random() * quotes.length);
   // console.log(currentQuote);

   document.getElementById('quotation').innerHTML = "&quot;" + quotes[currentQuote].quote + "&quot;";
   document.getElementById('author').innerHTML = "-" + quotes[currentQuote].author;

}

window.onload = function() {

    generateQuote()
    document.getElementById('generate').addEventListener('click', generateQuote);

}
