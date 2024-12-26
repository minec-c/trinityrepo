  function getComputedTopLeft() {
    const style = window.getComputedStyle(imageContainer);
    const matrix = new DOMMatrixReadOnly(style.transform);
    const computedLeft = imageContainer.offsetLeft + matrix.m41;
    const computedTop = imageContainer.offsetTop + matrix.m42;
    return { top: computedTop, left: computedLeft };
  }
