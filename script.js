let sideBar = document.querySelector(".side-bar");
let navBar = document.querySelector(".nav-bar");
let main = document.querySelector(".main");
let menuIcon = document.querySelector(".nav-bar i");
let titles = document.querySelectorAll(".title");
let sales = document.querySelectorAll(".sales");
let icons = document.querySelectorAll(".icon");
let info = document.querySelectorAll(".info-change");
let dashboard = document.querySelector("#dashboard");
let analytics = document.querySelector("#analytics");
let maincontent = document.querySelector(".main-content");
let cardsContainer = document.querySelector(".card-container");
let cards = document.querySelectorAll(".card");
let rpt = document.querySelector("#report");
let reportContainer = document.querySelector(".report-container");
let dashboardSale = document.querySelector("#dashboard-sale");
let analyticSale = document.querySelector("#analytic-sale");
let noteofRpt = document.querySelector(".note");
let salesDiff = document.querySelector("#difference");
let themeSetting = document.querySelector("#setting");
let help = document.querySelector("#help");
let helpContainer = document.querySelector(".help-center");
let questions = document.querySelectorAll(".question");
let answers = document.querySelectorAll(".answers");
let questionIcons = document.querySelectorAll(".quesicon");
let messageContainer = document.querySelector(".message-container");
let quote = document.querySelector("#quote");
let msgs = document.querySelector("#messages");
let tableheaders = document.querySelectorAll ("#table th");
let tablerows= document.querySelectorAll("#table tr");
menuIcon.addEventListener("click", () => {
    sideBar.classList.toggle("show");
});
console.log(cards);
let arrayofCards = [{
    title: "User-1",

    sales: 245,

    icon: "👥",

    info: "Up 15%",

}, {
    title: "User-2",

    sales: 300,

    icon: "👥",

        info: "Up 20%",
    }, {
    title: "User-3",

    sales: 255,

    icon: "👥",

    info: "Up 25%",
    }, {
    title: "User-4",

    sales: 655,

    icon: "👥",

        info: "Up 50%",
    }, {
    title: "User-5",

    sales: 555,

    icon: "👥",

    info: "Up 20%",
    }, {
    title: "Users-6",

    sales: 125,

    icon: "👥",

    info: "Up 10%",    }

];
let analyticcardsArry = [
    {
        title: "User-1",

        sales: 245,

        icon: "👥",

        info: "Up 15%",
},
    {
        title: "User-2",

        sales: 300,

        icon: "👥",

        info: "Up 20%",
},
    {
        title: "User-3",

        sales: 255,

        icon: "👥",

        info: "Up 25%",
    }, {
        title: "User-4",

        sales: 655,

        icon: "👥",

        info: "Up 50%",
    }, {
        title: "User-5",

        sales: 555,

        icon: "👥",

        info: "Up 20%",
    }, {
        title: "Users-6",

        sales: 125,

        icon: "👥",

        info: "Up 10%",
    }
];

dashboard.addEventListener("click", async () => {
    dashboard.style.transform = "scale(0.8)";
    setTimeout(() => {
        dashboard.style.transform= "scale(1)";

    
    reportContainer.style.display = "none";
    messageContainer.style.display = "none";
    helpContainer.style.display = "none";
    cardsContainer.style.display = "flex";
        updateCardArray(arrayofCards);
    }, 1000);
});
//analytics
analytics.addEventListener("click", async () => {
    analytics.style.transform = "scale(0.8)";
    setTimeout(() => {
    reportContainer.style.display = "none";
    messageContainer.style.display = "none";
    helpContainer.style.display = "none";
    cardsContainer.style.display = "flex";
        updateCardArray(analyticcardsArry);
        analytics.style.transform = "scale(1)";
    }, 1000);
    
});
function updateCardArray(array) {
    array.forEach((data, i) => {
        titles[i].innerHTML = data.title;
        sales[i].innerHTML = data.sales;
        icons[i].innerHTML = data.icon;
        info[i].innerHTML = data.info;
    });
}
//tasks 
    function salesHandler(arr) {
        return arr.map(data => data.sales);
    }



let tasks = document.querySelector("#tasks");
tasks.addEventListener(("click"), async() => {
    tasks.style.transform = "scale(0.8)";
    setTimeout(() => {
        
    let userId = Number(prompt("enter your id "));
    if (userId < 0 || userId >= analyticcardsArry.length) {
        alert("Not a valid id");
    }
    let userTask = prompt("Enter your task e.g add,subtract,").trim().toLowerCase();
    if (userTask === "add") {
        let addingSales=Number(prompt("Enter your sales to add"));
       analyticcardsArry[userId].sales += addingSales;
        updateCardArray(analyticcardsArry);
    }
    else if (userTask === "subtract") {
        let subtractingSales = Number(prompt("Enter your sales to subtract"));
        if (analyticcardsArry[userId].sales > subtractingSales) {
            analyticcardsArry[userId].sales -= subtractingSales;
            updateCardArray(analyticcardsArry);
        }
        else {
            subtractingSales = Number(prompt("Your budget is full.Plz try for smaller sales"));
            analyticcardsArry[userId].sales -= subtractingSales;
            
        }
        updateCardArray(analyticcardsArry);
    }
    else {
        alert("Not a valid task");
        }
        tasks.style.transform = "scale(1)";
    }, 1000);
});
// report
function compareSales(arr1, arr2) {
        return arr1.map((data, i) => (arr2[i].sales - data.sales ))
            .join("<br>");
 
}
function displayingNote(arr1, arr2) {
    const notes = arr1.map((data, i) => {
        if (data.sales > arr2[i].sales) {
            return `User-${i + 1} sales are decreasing`;
        } else {
            return `User-${i + 1} sales are stable or improving`;
        }
    });

    noteofRpt.classList.remove("hide"); 
    noteofRpt.innerHTML = notes.join("<br>"); 
}
rpt.addEventListener("click", async () => {
   rpt.style.transform = "scale(0.8)";
    setTimeout(() => {
        dashboard.style.transform = "scale(0.8)";
        main.style.transition = "all ease 0.3s";
        cardsContainer.style.display = "none";
        messageContainer.style.display = "none";
        reportContainer.style.display = "flex";
        helpContainer.style.display = "none";
        dashboardSale.innerHTML = salesHandler(arrayofCards)
            .map((sale, i) => `User-${i + 1}: ${sale}`)
            .join("<br>");
        analyticSale.innerHTML = salesHandler(analyticcardsArry)
            .map((sale, i) => `User-${i + 1}: ${sale}`)
            .join("<br>")
        salesDiff.innerHTML = compareSales(arrayofCards, analyticcardsArry);
        displayingNote(arrayofCards, analyticcardsArry);
        rpt.style.transform="scale(1)"
    },1000);
});
//theme mode
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("darkModeEnabled") === "true";
    applyTheme(savedTheme);
});

themeSetting.addEventListener("click", async() => {
    themeSetting.style.transform = "scale(0.8)";
    setTimeout(() => {
        themeSetting.style.transform = "scale(1)";
    }, 1000);
    let darkmode = localStorage.getItem("darkModeEnabled") === "true";
    darkmode = !darkmode;
    applyTheme(darkmode);

});
    function applyTheme(dark) { 
    if (dark) {
        navBar.style.backgroundColor = "dimgrey"
        navBar.style.color = "white";
        navBar.style.border = " 0.2px solid black";
        sideBar.style.backgroundColor = "black";
        sideBar.style.color = "white";
        main.style.backgroundColor = "darkgray";
        main.style.backgroundImage = 'url("darkmode.jpg")';
        main.style.backgroundImage.size = "cover";
        main.style.color = "white";
        cards.forEach((card) => {
            card.style.backgroundColor = "black";
            card.style.color = "white";
        });
        questions.forEach((q) => {
            q.style.backgroundColor = "black";
            q.style.color = "azure";

        });
        answers.forEach((ans) => {
            ans.style.backgroundColor = "azure";
            ans.style.color = "black";
        });
        reportContainer.style.color = "black";
        tableheaders.forEach((header)=>{

            header.style.border = "5px solid black";
        });
        messageContainer.style.backgroundColor="black"
        localStorage.setItem("darkModeEnabled", "true");
    }
    else {
        navBar.style.backgroundColor = "rgba(42, 95, 121, 0.95)";
        navBar.style.color = "white";
        navBar.style.border = "none";
        sideBar.style.backgroundColor = "rgb(108, 145, 163, 0.95)";
        sideBar.style.color = "white";
        main.style.color = "black";
        main.style.backgroundImage = 'url("background.jpg")';
        main.style.backgroundImage.size = "cover";
        main.style.backgroundColor = "rgba(99, 149, 180, 0.3)";
        cards.forEach((card) => {
            card.style.backgroundColor = "honeydew";
            card.style.color = "black";
        });
        questions.forEach((q) => {
            q.style.backgroundColor = " rgba(42, 95, 121, 0.95)";
            q.style.color = "white";

        });
        answers.forEach((ans) => {
            ans.style.backgroundColor = "azure";
            ans.style.color = "black";
        });
        tableheaders.forEach((header) => {

            header.style.border = "5px solid rgba(42, 95, 121, 0.95);"
        });
        messageContainer.style.backgroundColor = "azure";
        reportContainer.style.color = "black";
        localStorage.setItem("darkModeEnabled", "false");
    }
}
// help
help.addEventListener("click", async() => {
    help.style.transform = "scale(0.8)";
    setTimeout(() => {
        help.style.transform = "scale(1)";
   
    cardsContainer.style.display = "none";
    reportContainer.style.display = "none";
    helpContainer.style.display = "flex";
    messageContainer.style.display = "none";
    questions.forEach((q) => {
        q.addEventListener("click", (evt) => {
            const corrAns = evt.target.nextElementSibling;
            let icon = q.querySelector(".quesicon");
           
            answers.forEach((ans)=>{
                if (ans != corrAns) {
                    ans.classList.remove("show");
                  
                }
                else
                    corrAns.classList.toggle("show");
                
            });
            questionIcons.forEach((i) => {
                if (i !== icon) {
                    i.classList.remove("rotate");
                }
                else
                    i.classList.add("rotate");

                });
        });
    });
    }, 1000);
});
//// message

async function quoteDisplay() {
    let URL = "https://api.adviceslip.com/advice";
    quote.innerText = "Wait...... \nAn advice for you😊";
    let response = await fetch(URL);
    let data= await response.json();
    quote.innerHTML = data.slip.advice;

}
msgs.addEventListener("click", async () => {
    msgs.style.transform = "scale(0.8)";
    setTimeout(() => {
        msgs.style.transform = "scale(1)";
    reportContainer.style.display = "none";
    helpContainer.style.display = "none";
    cardsContainer.style.display = "none";
    messageContainer.style.display = "flex";
    quoteDisplay();
    }, 1000);
});
