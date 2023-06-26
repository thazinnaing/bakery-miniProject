console.log("jjjj");
const login=()=>{
    const loginPromise=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // reject("error in login")
            resolve("Resolved")

        }, 5000);
    })
    return loginPromise;
}
const fetchdata=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // reject("error in fetch data")
            resolve("Data has arrived")
        }, 1000)
    })
}
const getUserPhotos=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Photos have been resolved");
            // reject("Photos have been rejected");
        }, 1000)
    })
}
const getUserFriends=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("Friend have been fetched")
        }, 1000);
    })
}
const getUserMessage=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("Message not arrived!");
        }, 2000);
    })
}

const showHomeFeed=(data)=>{
   
    console.log("Making home feed using data:: ", data)
}

const buildingUI= async()=>{

    const logindata= await login();
    console.log("LoginData::", logindata);
    const datafromFetch= await fetchdata();
    console.log("Fetchdata:: ", datafromFetch);
    // const frienddata= await getUserFriends();
    // console.log("Friend data:: ", frienddata);
    // const userMessage= await getUserMessage();
    // console.log("userMessage::", userMessage);
    const photodata= await getUserPhotos();
    console.log("User photo data:: ", photodata);
    showHomeFeed(photodata);
}
console.log("first");


buildingUI().catch((error)=>{
    console.log("Inside cache:: ", error);
});

console.log("Second")

const tryCatch=async()=>{
    try{
    const logindata= await login();
    console.log("LoginData::", logindata);
    const datafromFetch= await fetchdata();
    console.log("Fetchdata:: ", datafromFetch);
    const frienddata= await getUserFriends();
    console.log("Friend data:: ", frienddata);
    const userMessage= await getUserMessage();
    console.log("userMessage::", userMessage);
    const photodata= await getUserPhotos();
    console.log("User photo data:: ", photodata);
    
    showHomeFeed(frienddata);

    }
    catch(error){
        console.log("inside catch::", error);
    }
    
}

tryCatch();

