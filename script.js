const toggleButton = document.getElementById("toggle");
const content = document.getElementById("content");
const toggleButton2 = document.getElementById("toggle2");
const education=document.getElementById("educationId");
const leftId=document.getElementById("educationLeftId");



let flipped = false;

toggleButton.addEventListener("click", function () {
  if (!flipped) {
    document.body.style.transform = "scaleX(-1)";
    content.style.display = "none";
    education.style.display="flex";
    document.body.style.transition= "transform 2s ease-in-out";
    document.body.style.transition= "2s ease-in-out";    
    document.querySelector('nav').style.transform = 'rotateY(180deg)';
    education.style.transform="rotateY(180deg)";
    document.body.style.backgroundImage="url('images/back.jpg')";
    document.body.style.backgroundPosition="center";
    document.body.style.backgroundSize="cover";
    document.body.style.color="white"
    toggleButton.style.color="#7f00ff"

    const mediaQuery = window.matchMedia('(max-width: 1000px)');

    function handleTabletChange(e) {

      if(e.matches){
        const educationim = document.getElementById('educationId');
        educationim.style.display="block";
        leftId.style.width="90%";
      }else{
        const educationim = document.getElementById('educationId');
        educationim.style.display="flex";
      }
      
    }
    
    // Yöntem, sayfa yüklendiğinde ve ekran boyutu değiştiğinde tetiklenecek.
    mediaQuery.addListener(handleTabletChange);



    flipped = true;
  } else {
    document.body.style.transform = "scaleX(1)";
    content.style.display = "flex";
    education.style.display="none";
    document.querySelector('nav').style.transform = 'rotateX(360deg)';
    document.body.style.background = "white";
    toggleButton.style.color="#3d535f"
    flipped = false;
  }
});

toggleButton2.addEventListener("click", function () {
  document.body.style.transform = "scaleX(1)";
  content.style.display = "flex";   
  document.querySelector('nav').style.transform = 'rotateX(360deg)';
  education.style.display="none";
  flipped = false;

});












