AFRAME.registerComponent("tour", {
    init: function () {
      this.comicsContainer = this.el;
      this.createCards()
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "infinity-marvel",
          title: "Infinity Marvel",
          url: "./assets/Infinity-marvel.jpg",
        },
        {
          id: "harry",
          title: "Harry",
          url: "./assets/Harry.jpg",
        },
  
        {
          id: "princess",
          title: "Princess",
          url: "./assets/Princess.jpg",
        },
        {
          id: "ducktales",
          title: "Ducktales",
          url: "./assets/Ducktales.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id)
        // Thumbnail Element
       const thumbnailEl = this.createThumbnail(item)
       borderEl.appendChild(thumbnailEl)
        // Title Text Element
        const titleEl = this.createTitle(position, item)
        borderEl.appendChild(titleEl)
  
        this.comicsContainer.appendChild(borderEl);
  
      }
    },
  
    createBorder: function(position, id){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id", id)
        entityEl.setAttribute("visible", true)
        entityEl.setAttribute("geometry", {primitive: "ring", radiusInner: 9, radiusOuter: 9.5})
        entityEl.setAttribute("position", position)
        entityEl.setAttribute("material", {color: "black", opacity: 1})
        return entityEl
    },
    
    createThumbnail: function(item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("geometry", {primitive: "circle", radius: 9})
      entityEl.setAttribute("material", {src: item.url})
      return entityEl
    },
  
    createTitle: function(position, item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("text", { font: "exo2bold", align: "center", width: 70, color: "#e65100", value: item.title })
  
      const elPosition = position
      elPosition.y = -20
  
      entityEl.setAttribute("position", elPosition)
      entityEl.setAttribute("visible", true)
  
      return entityEl
    }
  });
  