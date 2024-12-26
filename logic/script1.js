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
