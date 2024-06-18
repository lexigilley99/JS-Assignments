const photoSlideShow = {
    photoList: ['cat.jpg', 'dog.jpg', 'fish.jpg', 'horse.jpg'],
    currentPhotoIndex: 0,

    nextPhoto: function() {
        if (this.currentPhotoIndex < this.photoList.length - 1) {
        this.currentPhotoIndex++;
        console.log(`Current photo is ${this.photoList[this.currentPhotoIndex]}`);
      } else {
        console.log("End of photo slideshow");
      }
    },

    prevPhoto: function() {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
      console.log(`Current photo is ${this.photoList[this.currentPhotoIndex]}`);
    } else {
      console.log("Beginning of slideshow");
    }
},

  getCurrentPhoto: function() {
    return this.photoList[this.currentPhotoIndex];
  }
};

// Testing Slideshow

console.log(photoSlideShow.getCurrentPhoto());

photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto(); 
photoSlideShow.nextPhoto();

photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();

