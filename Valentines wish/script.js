onload = () => {
    document.body.classList.remove("container");
  };

  const wrapper = document.querySelector(".wrapper");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  
  openBtn.addEventListener("click", () => {
      wrapper.classList.add("open");
      openBtn.style.display = "none";
      closeBtn.style.display = "inline-block";
  });
  
  closeBtn.addEventListener("click", () => {
      wrapper.classList.remove("open");
      closeBtn.style.display = "none";
      openBtn.style.display = "inline-block";

      const music = document.getElementById("backgroundMusic");

openBtn.addEventListener("click", (open) => {
    music.play();
});

closeBtn.addEventListener("click", (close) => {
    music.pause();
    music.currentTime = 0; // Reset song when closed
});

  });
  