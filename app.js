var i = 59;
var j = 24;
document.getElementById('s').innerHTML=i;
document.getElementById('m').innerHTML=j;

var pause = false;
var inter;
var timer = {
	currentTime: 0,
	start:function(){
		pause=false;
		//console.log(inter);
		if (inter===undefined){

			inter = setInterval(function(){
				if (!pause){
					i--;
					document.getElementById('s').innerHTML=i;
					if(i==0){
						j--;
						i=59;
						document.getElementById('s').innerHTML=i;
						document.getElementById('m').innerHTML=j;
						if(j<0){

							j=24;
							i=59;
							document.getElementById('m').innerHTML=j;
							
						}

					}
					


				}
			},1000)
		}
	},



	stop:function(){
		//console.log('pause...');
		pause = true;
	},

	raz:function(){
		//console.log('raz...');
		pause = true;
		i = 59;
		j = 24;
		document.getElementById('s').innerHTML=i;
		document.getElementById('m').innerHTML=j;
		

	},
	pomodoro:function(){
		var i = 59;
		var j = 24;
		document.getElementById('s').innerHTML=i;
		document.getElementById('m').innerHTML=j;

	},
	pause:function (){
		var i = 59;
		var j = 4;
		document.getElementById('s').innerHTML=i;
		document.getElementById('m').innerHTML=j;
	},
	superpause:function(){
		var i = 59;
		var j = 14;
		document.getElementById('s').innerHTML=i;
		document.getElementById('m').innerHTML=j;
	}
}

function todoList(){

  var item = document.getElementById("todoInput").value;

  var newItem = document.createElement("li");


  newItem.innerHTML = "<input type='checkbox' id='cbox2' value='checkbox1' name='test'><span>" + item.toString() + "</span><label for='cbox2'>"

  document.getElementById("todoList").appendChild(newItem);
  document.getElementById("todoInput").value = "";

}

function removeFinished(){
  var checkboxes = document.getElementsByName("test");
  for (var i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].checked){
      //checkboxes[i].parentElement.remove();
      checkboxes[i].parentElement.style.display = "none";
    }
  }

}
