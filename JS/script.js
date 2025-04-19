// Check which page we're on
if (window.location.pathname.endsWith("index.html")) {
  let restApp_link = document.getElementById("restaurants");
  let thabbit_link = document.getElementById('thabbit');
  let to_do_link = document.getElementById('to-do');
  let dictionary_link = document.getElementById('dictionary');
  let cruise_project_link = document.getElementById('cruise');

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

  cruise_project_link.addEventListener("click", (event) => {
    // Prevent default behavior of the link
    event.preventDefault();
    
    // Set the href with query parameter
    window.location.href = "projects.html?project=cruise";  // Pass the query parameter to projects.html
  });
}
 

if (window.location.pathname.endsWith("projects.html")) {
  // Check for the query parameter in the URL
  const urlParams = new URLSearchParams(window.location.search);
  const project = urlParams.get('project');
  
  let app_to_show = document.getElementById(project);
  app_to_show.style.display = "inline-block";  // Show the element
}

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
