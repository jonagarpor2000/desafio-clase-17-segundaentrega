
   const btnAddToCart = document.querySelector("#save_cart")
   const divcontainer = document.querySelector("#dvd")
btnAddToCart.addEventListener('click', async function(event){
    event.preventDefault()
    const pid = dvd.dataset.name.pid
    console.log(`Tengo mi pid: ${pid}`)
    try {
        const response = await fetch('/api/carts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({pid }), // Send cid and pid in the request body
        });
        
        const data = await response.json();
        if (data.success) {
          // Handle successful cart addition (e.g., update cart UI, show a success message)
          alert('Product added to cart!');
        } else {
          // Handle error (e.g., display an error message)
          console.log('Failed to add product to cart:', data.error);
        }
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    
})
    