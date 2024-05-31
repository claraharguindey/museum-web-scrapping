document.addEventListener("DOMContentLoaded", function() {
    const poemContainer = document.getElementById("poem-container");
  
    fetch("poems.json")
      .then(response => response.json())
      .then(data => {
        const poemLines = [];
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * data.length);
          poemLines.push(data[randomIndex].alt);
          const imageUrl = data[randomIndex].src;

          const imageElement = document.createElement("img");
          imageElement.src = imageUrl;
          imageElement.classList.add("poem-image");
  
          poemContainer.appendChild(imageElement);
        }
  
        const poemElement = document.createElement("div");
        poemElement.classList.add("poem");
  
        poemLines.forEach(line => {
          const lineElement = document.createElement("p");
          lineElement.textContent = `Quemaría una ${line}`;
          poemElement.appendChild(lineElement);
        });
  
        poemContainer.appendChild(poemElement);
      })
      .catch(error => {
        console.error("Error al cargar el archivo JSON", error);
      });
  });
  