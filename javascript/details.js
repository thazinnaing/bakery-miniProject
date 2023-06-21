const detailArray=[
    {
        "id": 1,
        "name": "Baguette",
        "description1": `Baguette dough is a very wet (high hydration) dough.
        Because of this, we do not knead the dough (as we do with many other bread doughs).addressInstead, the dough slowly ferments with a series of brief stretch and folds.
        The stretch and fold technique serves three purposes: re-distributes heat within the dough, puts yeast back in contact with its food source, and layers the gluten to build the gluten structure within the dough.`,
        "description2":"All-purpose flour can technically be used for baguettes, creating a soft, airy crumb.<br> However, for a traditional chewy and crusty baguette, use bread flour. Bread flour has a higher protein content than all-purpose flour which adds chewiness. The French typically use flour with a protein content similar to bread flour (or even a little higher).Bread flour has a higher protein content than all-purpose flour which adds chewiness. The French typically use flour with a protein content similar to bread flour (or even a little higher).",
        "image1": "https://media.istockphoto.com/id/1225614743/photo/loaf-of-bread-and-butter.jpg?s=612x612&w=0&k=20&c=wVjvdidzOv6SegQ5dmdEagfog6WWPWb6QJJ12Difo-k=",
        "image2": "https://media.istockphoto.com/id/621696364/photo/french-baguettes-in-wicker-basket-in-bakery.jpg?s=612x612&w=0&k=20&c=FnSNClYZXjSXFm5MMTZxbpAqnW2dIgVKJyoYLGrRD-8=",
        
    }
]

const descriptionFun=(num)=>{
    const description=document.createElement("div");
    description.classList.add("description", "forText");
    const descriptionPTag=document.createElement("p");
    if(num === 1){
        descriptionPTag.innerHTML=`${detailArray[0].description1}`;
    }
    else{
        descriptionPTag.innerHTML=`${detailArray[0].description2}`;
    }
    
    description.append(descriptionPTag);
    return description;
}

const imageFun=(num)=>{
    const image=document.createElement("div");
    image.classList.add("backgroundImage");
    if(num === 1){
        image.style.backgroundImage=`url("${detailArray[0].image1}")`;
    }
    else{
        image.style.backgroundImage=`url("${detailArray[0].image2}")`;
    }
    return image;
}
const detailsContainer= document.getElementsByClassName("detailsContainer")[0];

const detailsDiv=document.createElement("div");
detailsDiv.classList.add("detailsDiv");

const nameDiv=document.createElement("div");
nameDiv.classList.add("name", "forText");
const pTag=document.createElement("p");
pTag.innerHTML=`<strong>${detailArray[0].name}</strong>`;
nameDiv.append(pTag);

const description1=descriptionFun(1);

const image1 = imageFun(1);

const description2=descriptionFun(2);

const image2 =imageFun(2);

detailsDiv.append(nameDiv, description1, image1, description2, image2);
detailsContainer.append(detailsDiv);



