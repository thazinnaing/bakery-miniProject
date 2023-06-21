
const menuArray=[
    {   
        "id": "5",
        "name": "BAGUETTE",
        "description": "Small-batch sourdough baguette 1.",
        "price": "$41.5",
        "image": "//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/114eb3a7d170559dbf141d3b/r.jpg",
        
    },
    {   
        "id": "6",
        "name": "FARMING BREAD",
        "description": "Small-batch sourdough baguette 2.",
        "price": "$21.5",
        "image": "//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/0cd587018da1567ca82ec0a8/rr.jpg",
        
    },
    {   
        "id": "7",
        "name": "MIXED GRAIN",
        "description": "Small-batch sourdough baguette 3.",
        "price": "$11.5",
        "image": "//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/fa992363623553128956b054/hh.jpg",
    
    },
    {   
        "id": "8",
        "name": "MILK BREAD",
        "description": "Small-batch sourdough baguette 4.",
        "price": "$51.5",
        "image": "//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/1790791acc975a71ba003ca1/hg.jpg",
        
    },
    {   
        "id": "9",
        "name": "BROWN BREAD",
        "description": "Small-batch sourdough baguette 5.",
        "price": "$12.5",
        "image": "//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/c05083dfe0235ffaa9a5cfbf/jhjhjh.jpg",
    
    },
    {   
        "id": "10",
        "name": "CHEESE BREAD",
        "description": "Small-batch sourdough baguette 6.",
        "price": "$10.5",
        "image": "//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/c1a914846ece539fab7e5b32/j.jpg",
    
    }
]

const menuContent=document.getElementsByClassName("menuContent")[0];

const createMenuDiv=(tempArray)=>{
    for(let i=0; i<tempArray.length; i++){

        const menu=document.createElement("div");
        menu.classList.add("menu");

        const image=document.createElement("div");
        image.style.backgroundImage=`url("${tempArray[i].image}")`;
        image.classList.add("bgImage");
    
        const name=document.createElement("div");
        name.classList.add("text1", "text");
        const pTag=document.createElement("p");
        const strongTag=document.createElement("strong");
        strongTag.innerHTML=tempArray[i].name;
        pTag.append(strongTag);
        name.append(pTag);
    
        const description=document.createElement("div");
        description.classList.add("text2", "text");
        const descriptionPTag=document.createElement("p");
        descriptionPTag.innerHTML=tempArray[i].description;
        description.append(descriptionPTag);
    
        const price=document.createElement("div");
        price.classList.add("text", "price");
        const pricePTag=document.createElement("p");
        pricePTag.innerHTML=tempArray[i].price;
        price.append(pricePTag);
        menu.append(image, name, description, price);
        menu.setAttribute("id", tempArray[i].id);
        menuContent.append(menu);
        if(tempArray.length === menuArray.length){
            document.getElementById(tempArray[i].id).addEventListener('click',()=>{
                location.href = "../pages/details.html";
            });
        }
        else{
            document.getElementById(tempArray[i].id).addEventListener('click',()=>{
                location.href = "../pages/menu.html";
        });
    }
}
}
    
const arrFun=(limit, array)=>{
    const tempArray=[];
    for(let i=0; i< array.length; i++){
        if((limit)===i){
            break;
        }
        else{
            tempArray[i]=array[i];
        }
    }
    createMenuDiv(tempArray);
}

const checkClass = menuContent.classList.contains("showAllMenu");
if(checkClass){
    arrFun(menuArray.length, menuArray);
}
else{
    arrFun(menuArray.length/2, menuArray);
}
