var xmlHttp; 

function createXMLRequest(){
	if(window.XMLHttpRequest){
		xmlHttp = new XMLHttpRequest();
	} else {
		xmlHttp = new ActiveXObject("Microsoft.XMLHttp");
	}
}

function addCity () {
	createXMLRequest();
	var city = document.getElementById('add_city').value;
	var code = document.getElementById('add_code').value;
	var url = url1 + "?city="+city+"&code="+code;
	xmlHttp.open("GET",url);
	xmlHttp.onreadystatechange=function(){
		if (parseInt(xmlHttp.responseText) == 1) {
			window.reload()
		} else {
			alert('worng')
		}
	};
	xmlHttp.send(); 
}