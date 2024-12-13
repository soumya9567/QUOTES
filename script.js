async function onClick() {
    try {
        const response = await fetch('https://dummyjson.com/quotes');
        
       
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        console.log(data);
        
        const heading = document.getElementById("p");
        heading.innerHTML = '';
      
       
        if (Array.isArray(data.quotes)) {
         
            const randomIndex = Math.floor(Math.random() * data.quotes.length);
            const randomQuote = data.quotes[randomIndex];
            
            const para = document.createElement("p");
            para.innerHTML = `“${randomQuote.quote}”<br><br>— <strong>${randomQuote.author}</strong>`;
            para.style.backgroundColor="black";
           para.style.color="white"
           para.style.width="800px";
           para.style.height="max-height"
           para.style.margin="auto"
           para.style.borderRadius="10px"
           para.style.paddingTop="20px"
            heading.appendChild(para);
        } else {
            console.error('Quotes data is not an array or missing');
        }
    } catch (error) {
        console.error('There was an error fetching data:', error);
    }
}

// Call onClick function to generate a random quote
onClick();
