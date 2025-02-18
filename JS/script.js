// Check which page we're on
if (window.location.pathname.endsWith("index.html")) {
  let restApp_link = document.getElementById("restaurants");
  let thabbit_link = document.getElementById('thabbit');
  let to_do_link = document.getElementById('to-do');
  let dictionary_link = document.getElementById('dictionary');

  restApp_link.addEventListener("click", (event) => {
    // Prevent default behavior of the link
    event.preventDefault();
    
    // Set the href with query parameter
    window.location.href = "projects.html?project=restaurants";  // Pass the query parameter to projects.html
  });

  thabbit_link.addEventListener("click", (event) => {
    // Prevent default behavior of the link
    event.preventDefault();
    
    // Set the href with query parameter
    window.location.href = "projects.html?project=thabbit";  // Pass the query parameter to projects.html
  });

  to_do_link.addEventListener("click", (event) => {
    // Prevent default behavior of the link
    event.preventDefault();
    
    // Set the href with query parameter
    window.location.href = "projects.html?project=to-do";  // Pass the query parameter to projects.html
  });

  dictionary_link.addEventListener("click", (event) => {
    // Prevent default behavior of the link
    event.preventDefault();
    
    // Set the href with query parameter
    window.location.href = "projects.html?project=dictionary";  // Pass the query parameter to projects.html
  });
}

if (window.location.pathname.endsWith("projects.html")) {
  // Check for the query parameter in the URL
  const urlParams = new URLSearchParams(window.location.search);
  const project = urlParams.get('project');
  
  let app_to_show = document.getElementById(project);
  app_to_show.style.display = "inline-block";  // Show the element
}


