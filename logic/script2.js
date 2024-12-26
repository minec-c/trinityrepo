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
 	sprite.classList.add('movespsheet');
	sprite.classList.remove('idlespsheet');
      } 
      else {  	posX = targetX;
       		posY = targetY;
	        sprite.classList.remove('movespsheet');
		sprite.classList.add('idlespsheet');
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
