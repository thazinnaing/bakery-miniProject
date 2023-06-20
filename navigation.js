
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
        "url": "joke.html",

    },
    {
        "id": 4,
        "name": "Contact Us",
        "url": "joke.html",

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
