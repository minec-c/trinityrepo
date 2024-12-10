(function () {
  const imageContainer = document.querySelector('.Charactersp');
  const sprite = document.querySelector('.Mainspsheet');
  const Charactersp = document.getElementById("Charactersp");
  let posX = 0, posY = 0; 				// Current position
  const speed = 2; 					// Pixels per frame
  let animationFrameId; 				// To control the animation frame
  const treesp = document.querySelector('.Greentreespdiv');
  var div1 = imageContainer.getBoundingClientRect();
  var div2 = treesp.getBoundingClientRect();
      function setDirection(dX, dY) {
        const angle = Math.atan2(dY, dX);
        sprite.classList.remove('dirs', 'dirsw', 'dirn', 'dirnw', 'dirw','dirse','dire','dirne');
        if 	  (angle<2.87 && angle>2.09) {
          sprite.classList.add('dirsw');
        } else if (angle<2.09 && angle>1.04) {
          sprite.classList.add('dirs');
        } else if (angle<1.04 && angle>0.26){
	  sprite.classList.add('dirse');
	} else if (angle<0.26 && angle>-0.26){
	  sprite.classList.add('dire');		//('dire')
	} else if (angle<-0.26 && angle>-1.04){
	  sprite.classList.add('dirne');	//('dirne')
	} else if (angle<-1.04 && angle>-2.09) {
          sprite.classList.add('dirn');
        } else if (angle<-2.09 && angle>-2.87){
          sprite.classList.add('dirnw');
        } else if (angle<-2.87 || angle>2.87){
	  sprite.classList.add('dirw');
	}
	  else{
	  }
      }
  function moveToTarget(targetX, targetY) {
    function animate() 
   {
      const dX = targetX - posX;
      const dY = targetY - posY;
      const distance = Math.sqrt(dX * dX + dY * dY);
      if (distance > speed) {
        const angle = Math.atan2(dY, dX);
        posX += Math.cos(angle) * speed;
        posY += Math.sin(angle) * speed;
	setDirection(dX, dY);
      } 
      else {  	posX = targetX;
        		posY = targetY;
              }
      imageContainer.style.transform = `translate(${posX}px, ${posY}px)`;
	if(areImagesOverlapping(image1, image2))
	{
	updateDrawOrder(); //0512241744
	}
      if (posX !== targetX || posY !== targetY) {
        animationFrameId = requestAnimationFrame(animate);
    	}
	else{ //console.log("new position",getComputedTopLeft()); 
	      }	  
    }
    cancelAnimationFrame(animationFrameId); 		// Cancel any ongoing animation
    animate(); // Start animation
  }
  function getComputedTopLeft() {
    const style = window.getComputedStyle(imageContainer);
    const matrix = new DOMMatrixReadOnly(style.transform);
    const computedLeft = imageContainer.offsetLeft + matrix.m41;
    const computedTop = imageContainer.offsetTop + matrix.m42;
    return { top: computedTop, left: computedLeft };
  }
  function updateDrawOrder() {
    const computedPosition = getComputedTopLeft();
    const treeRect = treesp.getBoundingClientRect();
    if (computedPosition.top*1.2 > treeRect.top + treeRect.height / 2) { //top*1.5 //*1.1 	/2
      treesp.parentNode.insertBefore(imageContainer, treesp.nextSibling);
    } else {
      treesp.parentNode.insertBefore(treesp, imageContainer.nextSibling);
    }
  }
  document.addEventListener('click', (event) => {
    const targetX = event.clientX - imageContainer.offsetWidth / 2.2;//1.4
    const targetY = event.clientY - imageContainer.offsetHeight / 1.9;//1.3
    moveToTarget(targetX, targetY);
  });
function areImagesOverlapping(img1, img2) {
    const rect1 = imageContainer.getBoundingClientRect();
    const rect2 = treesp.getBoundingClientRect();
    return !(
        rect1.right < rect2.left ||	 //+95
        rect1.left > rect2.right ||  	//-95
        rect1.bottom < rect2.top || 	//+95
        rect1.top > rect2.bottom   	//-95
    );
}
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
})();
