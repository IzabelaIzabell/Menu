// document.addEventListener('DOMContentLoaded', function(){

var allList= document.querySelectorAll(".nav ul li");
console.log(allList);
for (i = 0; i < allList.length; i++){

    var elementsForLists = allList[i].querySelectorAll('ul li');
    for (j = 0; j < elementsForLists.length; j++){  
    console.log(elementsForLists[j].innerHTML);
    }
}

for(i = 0; i < allList.length; i++){
        allList[i].addEventListener('mouseover',function(){
        console.log("works")
        
        var thisUl = this.querySelector('ul');
        console.log(thisUl);
        console.log(this);
        if (thisUl !== null){
            //console.log(innerUl);
            thisUl.style.display = 'inline-block';}
        
        });
    
        allList[i].addEventListener('mouseout', function () {
            var thisUl = this.querySelector('ul');
            if (thisUl !== null){
                //console.log(innerUl);
                thisUl.style.display = 'none';
            }
    });
}

