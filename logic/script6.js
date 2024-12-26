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
