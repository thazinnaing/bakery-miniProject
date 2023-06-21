
const bread=[
    {
        "id": 11,
        "name": "CROISSANT",
        "description": "some text. Click here to see some bakery logo. And this is some example text.",
        "image": "https://assets.nicepagecdn.com/d2cc3eaa/3284316/images/fggggg.jpg",
        

    },
    {
        "id": 12,
        "name": "BROWNIES",
        "description": "some text. Click here to see some bakery logo. And this is some example text.",
        "image": "https://assets.nicepagecdn.com/d2cc3eaa/3284316/images/yyyy.jpg",

    },
    {
        "id": 13,
        "name": "CINNAMON BUN",
        "description": "some text. Click here to see some bakery logo. And this is some example text.",
        "image": "https://assets.nicepagecdn.com/d2cc3eaa/3284316/images/f5f4b03a-6b27-3595-ba4e-7b894cc961a3.jpg",

    },
    {
        "id": 14,
        "name": "TURKISH BAGELS",
        "description": "some text. Click here to see some bakery logo. And this is some example text.",
        "image": "https://assets.nicepagecdn.com/d2cc3eaa/3284316/images/444.jpg",

    },
    {
        "id": 15,
        "name": "DOUGHNUTS",
        "description": "some text. Click here to see some bakery logo. And this is some example text.",
        "image": "https://assets.nicepagecdn.com/d2cc3eaa/3284316/images/c91fa21f-6a02-001e-d59f-2125c9c711bd.jpg",

    },
    {
        "id": 16,
        "name": "TARTS",
        "description": "some text. Click here to see some bakery logo. And this is some example text.",
        "image": "https://assets.nicepagecdn.com/d2cc3eaa/3284316/images/96a8f2c7-47a4-66cb-fec2-68902bf475cf.jpg",

    },
    {
        "id": 17,
        "name": "SHORTBREAD",
        "description": "some text. Click here to see some bakery logo. And this is some example text.",
        "image": "https://assets.nicepagecdn.com/d2cc3eaa/3284316/images/3ec2a0c1-031e-107f-1950-2cfd3f6314ce.jpg",

    },
    {
        "id": 18,
        "name": "COOKIES",
        "description": "some text. Click here to see some bakery logo. And this is some example text.",
        "image": "https://assets.nicepagecdn.com/d2cc3eaa/3284316/images/96a8f2c7-47a4-66cb-fec2-68902bf475cf.jpg",

    }
]



const sweets=[
    {   
        "id": 19,
        "title": "Cookies",
        "list": ["Biscotti", "Chocolate Chip", "Oatmeal Pecan", "Oat Ginger Bar", "Seasonal specials"],
    },
    {   
        "id": 20,
        "title": "Scones",
        "list": ["Classic butter scone", "Fresh fruit butter milk scones", "Handmade scones"],
    },
    {   
        "id": 21,
        "title": "Other",
        "list": ["Seasonal galletes", "Tarlets", "Banana Bread", "Cranberry Pecan Granola"],
    }
]

const sampleBread=[
    {
        "id": 22,
        "name": "Breads",
        "description": "Sample text. Click to select the text box. Click again or double click to start editing the text.",
        "image": "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/8baae157ffbe56548790d776/yty.jpg",
    },
    {
        "id": 23,
        "name": "Cookies",
        "description": "Sample text. Click to select the text box. Click again or double click to start editing the text.",
        "image": "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/8d481fe712f85027870c837e/rtrtrt.jpg",
    },
    {
        "id": 24,
        "name": "Pastries",
        "description": "Sample text. Click to select the text box. Click again or double click to start editing the text.",
        "image": "https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/9765013a9a185d16adf414dd/b1182e8f-cee4-f571-00ff-b553b7f96898.jpg"
    }
]

const headLine=[
    {
        "id": 25,
        "title": "Headline",
        "description": "Sample text.",
    },
   {
        "id": 26,
        "title": "Headline",
        "description": "Sample footer text",
   },
   {
        "id": 27,
        "title": "Headline",
        "description": "Sample footer text",
    },
    {
        "id": 28,
        "title": "Headline",
        "description": "Sample footer text",
    }
]




const breadBar=document.getElementsByClassName("breadBar")[0];

for(let i=0; i<bread.length; i++){
    const breadDiv=document.createElement("div");
    breadDiv.classList.add("bread")

    const image=document.createElement("div");
    image.classList.add("breadImage");
    image.style.backgroundImage=`url("${bread[i].image}")`;

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
        liTag.append(listIcon, sweets[i].list[j]);
        
        ulTag.append(liTag);
    }
    const ulDiv=document.getElementsByClassName("ulDiv")[i];
    ulDiv.append(ulTag);

}


const sampleBreadContainer=document.getElementsByClassName("sampleBreadContainer")[0];

for(let i=0; i< sampleBread.length; i++){
    const sampleBreadDiv=document.createElement("div");
    sampleBreadDiv.classList.add("sampleBread");

    const image=document.createElement("div");
    image.classList.add("sampleImage");
    image.style.backgroundImage=`url("${sampleBread[i].image}")`;

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








