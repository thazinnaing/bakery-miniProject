fetch('../data.json')
    .then((response) => response.json())
    .then((menuArray) => {
        const gotoDetail=(arrayLength, id)=>{
            if(arrayLength === menuArray.length){
                localStorage.setItem("menuId", id);
                location.href = "../pages/details.html";
            }
            else{
                location.href = "../pages/menu.html";
            }
        }
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
        
                menu.addEventListener('click',()=>{
                    gotoDetail(tempArray.length, tempArray[i].id);
                    });
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

    })




// // import fs from ('fs');
// // const jdata=fs.readFileSync('../data.json');
// // const jsondata=JSON.parse(jdata);

// // console.log(jsondata);


// const jsonData= async()=>{
//     const response=await fetch("../data.json");
//     const jsondata=await response.json();
//     console.log(jsondata);

// }
// jsonData();


// fetch('../data.json')
//     .then((response) => response.json())
//     .then((jsondata) => console.log(jsondata));
