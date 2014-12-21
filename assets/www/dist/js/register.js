var xmlHttp; 

function createXMLRequest(){
	if(window.XMLHttpRequest){
		xmlHttp=new XMLHttpRequest();
	} else {
		xmlHttp=new ActiveXObject("Microsoft.XMLHttp");
	}
}
//级联下拉框 根据大分类获取小分类
function small(){
	createXMLRequest();
	var value = document.getElementById('citylist').value
	url = url1 + "?city="+value;
	xmlHttp.open("GET",url);
	xmlHttp.onreadystatechange=function(){
		if(xmlHttp.readyState==4 && xmlHttp.status==200){
			document.getElementById('area').style.display = 'block';
			var result=xmlHttp.responseText.split(',')
			document.getElementById('tiny').options.length=0;
			document.getElementById('tiny').add(new Option('请选择您的小区',0))
			for(var i=0;i<result.length;i++){
				var o=result[i].split('*')
				document.getElementById('tiny').add(new Option(o[0],o[1]))
			}
		}
	};
	url = "";
	xmlHttp.send(); 
}

function addNum(){
	createXMLRequest();
	var value = document.getElementById('tiny').value;
	url += url2 + "?area="+value;
	xmlHttp.open("GET",url);
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
			document.getElementById('loft').style.display = 'block';
			var result = xmlHttp.responseText;
			document.getElementById('number').options.length = 0;
			for(var i=1;i<=result;i++){
				document.getElementById('number').add(new Option(i,i))
			}
		}
	};
	url = "";
	xmlHttp.send(); 
}

function room(){
	document.getElementById('room').style.display = 'block';
}

function next(){
	document.getElementById('nextStep').disabled = false;
}
