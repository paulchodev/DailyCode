// Write a function that returns the total surface area and volume of a box as an array: [area, volume]


function getSize(w, h, d){
    return [2*(w*h+w*d+d*h),w*h*d]
  }