const swiper = new Swiper(".about-mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is <= 548px
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is > 548px and <= 992px
    549: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is > 992px
    993: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});


const swiperChosen = new Swiper(".chosen-mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is <= 548px
    0: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is > 548px and <= 992px
    549: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is > 992px
    993: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  }
});

const swiperProduct = new Swiper(".product-mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is <= 548px
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is > 548px and <= 992px
    549: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is > 992px
    993: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  }
});

const swiperLogo = new Swiper(".logo-mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  // autoplay: {
  //   delay: 3000,
  // },
  loop: true,

  breakpoints: {
    // when window width is <= 548px
    0: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is > 548px and <= 992px
    549: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is > 992px
    993: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

const swiperDeteil = new Swiper(".deteil-mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is <= 548px
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is > 548px and <= 992px
    549: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is > 992px
    993: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

// home banner
const swiperBanner = new Swiper(".bannerMySwiper", {
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




// const swiperVideo = new Swiper(".video-mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

const swiperVideo = new Swiper(".video-mySwiper", {
  slidesPerView: 3,
  loop: true,

  breakpoints: {
    // when window width is <= 548px
    0: {
      slidesPerView: 1,
    },
    // when window width is > 548px and <= 992px
    549: {
      slidesPerView: 2,
    },
    // when window width is > 992px
    993: {
      slidesPerView: 3,
    }
  }
});


// video slider

const videos = document.querySelectorAll("video");
const playPauseBtns = document.querySelectorAll(".play-pause-btn");

let currentPlayingVideo = null;

videos.forEach((video) => {
  video.addEventListener("dblclick", toggleFullScreen);
  video.addEventListener("play", handleVideoStateChange);
  video.addEventListener("pause", handleVideoStateChange);
});

playPauseBtns.forEach((playPauseBtn) => {
  playPauseBtn.addEventListener("click", togglePlayPause);
});

swiper.on("slideChange", handleSlideChange);

function toggleFullScreen() {
  const video = this;
  if (!document.fullscreenElement) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      /* Firefox */
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      /* Chrome, Safari ve Opera */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      /* Internet Explorer ve Edge */
      video.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari ve Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* Internet Explorer ve Edge */
      document.msExitFullscreen();
    }
  }
}

function togglePlayPause() {
  const video = this.parentElement.querySelector("video");
  
  if (currentPlayingVideo && currentPlayingVideo !== video) {
    currentPlayingVideo.pause();
  }

  if (video.paused) {
    video.play();
    currentPlayingVideo = video;
  } else {
    video.pause();
    currentPlayingVideo = null;
  }
}

function handleVideoStateChange() {
  const playPauseBtn = this.parentElement.querySelector(".play-pause-btn");
  const playIcon = playPauseBtn.querySelector(".fa-play");
  const pauseIcon = playPauseBtn.querySelector(".fa-pause");

  if (this.paused) {
    playIcon.style.display = "inline-block";
    pauseIcon.style.display = "none";
  } else {
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline-block";
  }
}

function handleSlideChange() {
  videos.forEach((video) => {
    video.pause();
    const playPauseBtn = video.parentElement.querySelector(".play-pause-btn");
    const playIcon = playPauseBtn.querySelector(".fa-play");
    const pauseIcon = playPauseBtn.querySelector(".fa-pause");
    playIcon.style.display = "inline-block";
    pauseIcon.style.display = "none";
  });
  currentPlayingVideo = null;
}





// logo slider

var swiperLogos = new Swiper(".partners-slider", {
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 3000
  },
  spaceBetween: 30,
  breakpoints: {
    525: {
      spaceBetween: 40,

    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 50,

    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 60,

    }
  }
});