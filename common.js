
const navigationTags=[
    {
        "id": 1,
        "name": "Home",
        "url": "home.html",

    },
    {
        "id": 2,
        "name": "Menu",
        "url": "menu.html",

    },
    {
        "id": 3,
        "name": "About",
        "url": "",

    },
    {
        "id": 4,
        "name": "Contact Us",
        "url": "",

    }
]  

const menuArray=[
    {   
        "id": 5,
        "name": "BAGUETTE",
        "description": "Small-batch sourdough baguette 1.",
        "price": "$41.5",
        "image": "//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/114eb3a7d170559dbf141d3b/r.jpg",
        
    },
    {   
        "id": 6,
        "name": "FARMING BREAD",
        "description": "Small-batch sourdough baguette 2.",
        "price": "$21.5",
        "image": "//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/0cd587018da1567ca82ec0a8/rr.jpg",
        
    },
    {   
        "id": 7,
        "name": "MIXED GRAIN",
        "description": "Small-batch sourdough baguette 3.",
        "price": "$11.5",
        "image": "//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/fa992363623553128956b054/hh.jpg",
    
    },
    {   
        "id": 8,
        "name": "MILK BREAD",
        "description": "Small-batch sourdough baguette 4.",
        "price": "$51.5",
        "image": "//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/1790791acc975a71ba003ca1/hg.jpg",
        
    },
    {   
        "id": 9,
        "name": "BROWN BREAD",
        "description": "Small-batch sourdough baguette 5.",
        "price": "$12.5",
        "image": "//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/c05083dfe0235ffaa9a5cfbf/jhjhjh.jpg",
    
    },
    {   
        "id": 10,
        "name": "CHEESE BREAD",
        "description": "Small-batch sourdough baguette 6.",
        "price": "$10.5",
        "image": "//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/c1a914846ece539fab7e5b32/j.jpg",
    
    }
]

const navigationFun = ()=>{
    const navBar= document.createElement("div");
    navBar.classList.add("navigationBar");

    const leftMostBar= document.createElement("div");
    leftMostBar.classList.add("leftBar");
    const pTag= document.createElement("p");
    const strongTag= document.createElement("strong");
    strongTag.innerHTML="BAKERY";
    pTag.append(strongTag);
    leftMostBar.append(pTag);

    const middleBar=document.createElement("div");
    middleBar.classList.add("middleBar");
    for(let i=0; i<navigationTags.length; i++){
        const linkTag=document.createElement("div");
        linkTag.classList.add("linkTag");
        const anchor=document.createElement("a");
        anchor.setAttribute("href", navigationTags[i].url);
        const anchorValue= document.createTextNode(navigationTags[i].name);
        anchor.append(anchorValue);
        linkTag.append(anchor);
        middleBar.append(linkTag);
    }

    const rightMostBar=document.createElement("div");
    rightMostBar.classList.add("rightmostBar");
    const icon=document.createElement("i");
    icon.classList.add("fa-solid", "fa-bars");
    rightMostBar.append(icon);

    navBar.append(leftMostBar, middleBar, rightMostBar);
    return navBar;
}

const navigationContainer= document.getElementsByClassName("navigationContainer")[0];
const navigationBar=navigationFun();
navigationContainer.append(navigationBar);

const menuContent=document.getElementsByClassName("menuContent")[0];

const createMenuDiv=(index)=>{
    const menu=document.createElement("div");
        menu.classList.add("menu");
    
        const image=document.createElement("div");
        image.style.backgroundImage=`url("${menuArray[index].image}")`;
        image.classList.add("bgImage");
        // image.setAttribute("title", "Click for more menu");
    
        const name=document.createElement("div");
        name.classList.add("text1", "text");
        const pTag=document.createElement("p");
        const strongTag=document.createElement("strong");
        strongTag.innerHTML=menuArray[index].name;
        pTag.append(strongTag);
        name.append(pTag);
    
        const description=document.createElement("div");
        description.classList.add("text2", "text");
        const descriptionPTag=document.createElement("p");
        descriptionPTag.innerHTML=menuArray[index].description;
        description.append(descriptionPTag);
    
        const price=document.createElement("div");
        price.classList.add("text", "price");
        const pricePTag=document.createElement("p");
        pricePTag.innerHTML=menuArray[index].price;
        price.append(pricePTag);
    
        menu.append(image, name, description, price);
        menuContent.append(menu);

}
    
const arrFun=(limit, array)=>{
    for(let i=0; i< array.length; i++){
        if((limit)===i){
            break;
        }
        else{
            createMenuDiv(i);
        }
        
    }
}

const checkClass = menuContent.classList.contains("showAllMenu");
if(checkClass){
    arrFun(menuArray.length, menuArray);
}
else{
    arrFun(menuArray.length/2, menuArray);
}


