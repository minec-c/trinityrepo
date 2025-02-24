  document.addEventListener('click', (event) => {
    const targetX = event.clientX - imageContainer.offsetWidth / 2.2;//1.4
    const targetY = event.clientY - imageContainer.offsetHeight / 1.9;//1.3
    moveToTarget(targetX, targetY);
    
  });
