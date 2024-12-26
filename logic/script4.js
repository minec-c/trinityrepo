  function updateDrawOrder() {
    const computedPosition = getComputedTopLeft();
    const treeRect = treesp.getBoundingClientRect();
    if (computedPosition.top*1.2 > treeRect.top + treeRect.height / 2) { //top*1.5 //*1.1 	/2
      treesp.parentNode.insertBefore(imageContainer, treesp.nextSibling);
    } else {
      treesp.parentNode.insertBefore(treesp, imageContainer.nextSibling);
    }
  }
