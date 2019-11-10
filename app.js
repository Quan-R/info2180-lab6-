// JavaScript File
window.onload = function search(){
    
    var searchbutton = document.getElementById("searchbutton");
    var request = new XMLHttpRequest();
    var url = "superheroes.php";
    var response = request.responseText;
    request.open('GET', url);
    request.send();
    
    searchbutton.onclick = function search(){
        //request.onreadystatechange = function(){
            if (this.readyState === 4){
                if (this.status === 200){
                    alert(response);
                }
                else{
                    alert('There was an error!');
                }
            }
    };
    
}