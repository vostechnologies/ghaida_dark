import pages from 'page';
page('/marbles', function() {
    // Get a reference to the product section container
    const productSection = document.querySelector('#product-section');
    
    // Generate the content for the marbles
    const marbleContent = '<h2>Marble Types:</h2><ul><li>Marble 1</li><li>Marble 2</li><li>Marble 3</li></ul>';
    
    // Set the product section content to the marble content
    productSection.innerHTML = marbleContent;
  });
  
  // Start the routing
  page();