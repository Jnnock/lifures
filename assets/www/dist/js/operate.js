function count() {
	var left = 140 - document.getElementById('textPub').value.length;
	document.getElementById('wordCount').innerHTML = left;
	if (left < 0) {
		document.getElementById('publish').disabled = true;
	} else {
		document.getElementById('publish').disabled = false;
	}
}

var xmlHttp; 

function createXMLRequest(){
	if(window.XMLHttpRequest){
		xmlHttp=new XMLHttpRequest();
	} else {
		xmlHttp=new ActiveXObject("Microsoft.XMLHttp");
	}
}

function publish(){
	createXMLRequest();
	var value = document.getElementById('textPub').value
	url += "?text="+value;
	xmlHttp.open("GET",url);
	xmlHttp.onreadystatechange=function(){
		if(xmlHttp.readyState==4 && xmlHttp.status==200){
			$('#myModal').modal('hide');
		}
	};
	url = "";
	xmlHttp.send(); 
}

function addCommit(num,user){
	createXMLRequest();
	var value = document.getElementById('reply'+num).value
	xmlHttp.open("POST",curl);
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.onreadystatechange=function(){
		if(xmlHttp.readyState==4 && xmlHttp.status==200){
			$('#commitArea'+num).modal('hide');
		}
	};
	xmlHttp.send('message='+value+'&user='+user+'&topic='+num); 
}