// JavaScript File
window.onload = function (){
    
    var searchbutton = document.getElementById("searchbutton");
    var request;

    searchbutton.addEventListener('click', function(element){
        element.preventDefault();
        request = new XMLHttpRequest();
        var url = "superheroes.php";
        request.onreadystatechange = search;
        request.open('GET', url);
        request.send();
        
    });
    
    
    function search(){
            if (this.readyState === XMLHttpRequest.DONE){
                if (this.status === 200){
                    var response = request.responseText;
                    alert(response);
                }else{
                    alert('There was an error!');
                }
            }
    }
    
};