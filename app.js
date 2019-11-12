// JavaScript File
window.onload = function (){
    
    var searchbtn = document.querySelector('#searchbtn');
    var result = document.querySelector('#result');
    var request;

    searchbtn.addEventListener('click', function(element){
        element.preventDefault();
        
        request = new XMLHttpRequest();
        var input = document.querySelector('#search').value;
        
        var url = "superheroes.php";
        request.onreadystatechange = search;
        request.open('GET', url);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send('search=' + encodeURIComponent(search) );
    });
    
    
    function search(){
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                var response = request.responseText;
                result.innerHTML = response;
            }else{
                alert('There was an error with the request!');
            }
        }
    }
    
};