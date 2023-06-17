const menu=[
    {   
        "id":1,
        "name":"BAGUETTE",
        "description": "Small-batch sourdough baguette 1.",
        "price": "$41.5",
        
    },
    {   
        "id":2,
        "name":"FARMING BREAD",
        "description": "Small-batch sourdough baguette 2.",
        "price": "$21.5",
        
    },
    {   
        "id":3,
        "name":"MIXED GRAIN",
        "description": "Small-batch sourdough baguette 3.",
        "price": "$11.5",
    
    },
    {   
        "id":4,
        "name":"MILK BREAD",
        "description": "Small-batch sourdough baguette 4.",
        "price": "$51.5",
        
    },
    {   
        "id":5,
        "name":"BROWN BREAD",
        "description": "Small-batch sourdough baguette 5.",
        "price": "$12.5",
    
    },
    {   
        "id":6,
        "name":"CHEESE BREAD",
        "description": "Small-batch sourdough baguette 6.",
        "price": "$10.5",
    
    }
]

const bread=[
    {
        "id": 7,
        "name": "CROISSANT",
        "description": "some text. Click here to see some bakery logo. And this is some example text.",

    },
    {
        "id": 8,
        "name": "BROWNIES",
        "description": "some text. Click here to see some bakery logo. And this is some example text.",

    },
    {
        "id": 9,
        "name": "CINNAMON BUN",
        "description": "some text. Click here to see some bakery logo. And this is some example text.",

    },
    {
        "id": 10,
        "name": "TURKISH BAGELS",
        "description": "some text. Click here to see some bakery logo. And this is some example text.",

    },
    {
        "id": 11,
        "name": "DOUGHNUTS",
        "description": "some text. Click here to see some bakery logo. And this is some example text.",

    },
    {
        "id": 12,
        "name": "TARTS",
        "description": "some text. Click here to see some bakery logo. And this is some example text.",

    },
    {
        "id": 13,
        "name": "SHORTBREAD",
        "description": "some text. Click here to see some bakery logo. And this is some example text.",

    },
    {
        "id": 14,
        "name": "COOKIES",
        "description": "some text. Click here to see some bakery logo. And this is some example text.",

    }
]



const sweets=[
    {   
        "id": 15,
        "title": "Cookies",
        "list": ["Biscotti", "Chocolate Chip", "Oatmeal Pecan", "Oat Ginger Bar", "Seasonal specials"],
    },
    {   
        "id": 16,
        "title": "Scones",
        "list": ["Classic butter scone", "Fresh fruit butter milk scones", "Handmade scones"],
    },
    {   
        "id": 17,
        "title": "Other",
        "list": ["Seasonal galletes", "Tarlets", "Banana Bread", "Cranberry Pecan Granola"],
    }
]

const sampleBread=[
    {
        "id": 18,
        "name": "Breads",
        "description": "Sample text. Click to select the text box. Click again or double click to start editing the text."
    },
    {
        "id": 19,
        "name": "Cookies",
        "description": "Sample text. Click to select the text box. Click again or double click to start editing the text."
    },
    {
        "id": 20,
        "name": "Pastries",
        "description": "Sample text. Click to select the text box. Click again or double click to start editing the text."
    }
]

const headLine=[
    {
        "id": 21,
        "title": "Headline",
        "description": "Sample text.",
    },
   {
        "id": 22,
        "title": "Headline",
        "description": "Sample footer text",
   },
   {
        "id": 23,
        "title": "Headline",
        "description": "Sample footer text",
    },
    {
        "id": 24,
        "title": "Headline",
        "description": "Sample footer text",
    }
]



menuBackground=["bgImage1", "bgImage2", "bgImage3", "bgImage4", "bgImage5", "bgImage6"];

breadBackground=["breadImage1","breadImage2","breadImage3","breadImage4","breadImage5","breadImage6","breadImage7","breadImage8"];

sampleBackground=["sampleImage1", "sampleImage2", "sampleImage3"];



const menuContent=document.getElementsByClassName("menuContent")[0];

for(let i=0; i<menu.length; i++){
    const menuDiv=document.createElement("div");
    menuDiv.classList.add("menu");

    const image=document.createElement("div");
    image.classList.add("bgImage", menuBackground[i]);

    const name=document.createElement("div");
    name.classList.add("text1", "text");
    const pTag=document.createElement("p");
    const strongTag=document.createElement("strong");
    strongTag.innerHTML=menu[i].name;
    pTag.append(strongTag);
    name.append(pTag);

    const description=document.createElement("div");
    description.classList.add("text2", "text");
    const descriptionPTag=document.createElement("p");
    descriptionPTag.innerHTML=menu[i].description;
    description.append(descriptionPTag);

    const price=document.createElement("div");
    price.classList.add("text", "price");
    const pricePTag=document.createElement("p");
    pricePTag.innerHTML=menu[i].price;
    price.append(pricePTag);

    menuDiv.append(image, name, description, price);
    menuContent.append(menuDiv);
}

const breadBar=document.getElementsByClassName("breadBar")[0];

for(let i=0; i<bread.length; i++){
    const breadDiv=document.createElement("div");
    breadDiv.classList.add("bread")

    const image=document.createElement("div");
    image.classList.add("breadImage", breadBackground[i]);

    const name=document.createElement("div");
    name.classList.add("breadName", "text")
    const pTag=document.createElement("p");
    pTag.innerHTML=bread[i].name;
    name.append(pTag);

    const description=document.createElement("div");
    description.classList.add("breadText", "text")
    const descriptionPTag=document.createElement("p");
    descriptionPTag.innerHTML=bread[i].description;
    description.append(descriptionPTag);

    const moreDiv=document.createElement("div");
    moreDiv.classList.add("more", "text");
    const more=document.createElement("a");
    const moreValue=document.createTextNode("more")
    more.setAttribute("href", "");
    more.appendChild(moreValue);
    moreDiv.append(more);

    breadDiv.append(image, name, description, moreDiv);
    breadBar.append(breadDiv);

}

const ulDiv1=document.getElementsByClassName("ulDiv")[0];
const ulDiv2=document.getElementsByClassName("ulDiv")[1];
const ulDiv3=document.getElementsByClassName("ulDiv")[2];

const arr=["ulDiv1", "ulDiv2", "ulDiv3"]

for(let i=0; i<sweets.length; i++){
    const ulTag=document.createElement("ul");
    const strongTag=document.createElement("strong");
    strongTag.innerHTML=sweets[i].title;
    ulTag.append(strongTag);

    for(let j=0; j<sweets[i].list.length; j++){
        const liTag=document.createElement("li");
        const listIcon=document.createElement("div");
        listIcon.classList.add("listIcon");
        liTag.append(listIcon);
        liTag.innerHTML=sweets[i].list[j];
        ulTag.append(liTag);
    }
    if(i === 0){
        ulDiv1.append(ulTag);
    }
    if(i === 1){
        ulDiv2.append(ulTag);
    }
    if(i === 2){
        ulDiv3.append(ulTag);
    }

}





const sampleBreadContainer=document.getElementsByClassName("sampleBreadContainer")[0];

for(let i=0; i< sampleBread.length; i++){
    const sampleBreadDiv=document.createElement("div");
    sampleBreadDiv.classList.add("sampleBread");

    const image=document.createElement("div");
    image.classList.add("sampleImage", sampleBackground[i]);

    const name=document.createElement("div");
    name.classList.add("sampleTitle", "forSample")
    const pTag=document.createElement("p");
    const strongTag=document.createElement("strong");
    pTag.append(strongTag);
    strongTag.innerHTML=sampleBread[i].name;
    name.append(pTag);

    const description=document.createElement("div");
    description.classList.add("sampleText", "forSample")
    const descriptionPTag=document.createElement("p");
    descriptionPTag.innerHTML=sampleBread[i].description;
    description.append(descriptionPTag);

    sampleBreadDiv.append(image, name, description);
    sampleBreadContainer.append(sampleBreadDiv);
}


const headlineContainer=document.getElementsByClassName("headlineContainer")[0];
const headlineInnerContainer1=document.getElementsByClassName("headlineInnerContainer")[0];
const headlineInnerContainer2=document.getElementsByClassName("headlineInnerContainer")[1];

const forheadlineDiv=(i)=>{
    const headlineDiv=document.createElement("div");
    headlineDiv.classList.add("headlineDiv");

    const title=document.createElement("div");
    title.classList.add("headTitle", "forText");
    const pTag=document.createElement("p");
    pTag.innerHTML=headLine[i].title;
    title.append(pTag);

    const description=document.createElement("div");
    description.classList.add("headText", "forText");
    const descriptionPTag=document.createElement("p");
    descriptionPTag.innerHTML=headLine[i].description;
    description.append(descriptionPTag);

    headlineDiv.append(title, description);
    return headlineDiv;
    
}

for(let i=0; i<headLine.length; i++){
    if(i<headLine.length/2){
        const headlineDiv=forheadlineDiv(i);
        headlineInnerContainer1.append(headlineDiv);

    }
    if(i>(headLine.length/2)-1){
        const headlineDiv=forheadlineDiv(i);
        headlineInnerContainer2.append(headlineDiv);
    }
}
headlineContainer.append(headlineInnerContainer1, headlineInnerContainer2);








