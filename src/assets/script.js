
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname) {
        for (var tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (var tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    /*---------side menu---------*/
    document.addEventListener("DOMContentLoaded", function() {
        var sidemenu = document.getElementById("sidemenu");
    
        function openmenu() {
            sidemenu.style.right = "0";
        }
    
        function closemenu() {
            sidemenu.style.right = "-200px";
        }
    
        document.getElementById("openButton").onclick = openmenu;
        document.getElementById("closeButton").onclick = closemenu;
    });
    

/*---------scroll---------*/
    
      