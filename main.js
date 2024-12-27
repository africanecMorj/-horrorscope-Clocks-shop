const db = [
    {
        id:1,
        manufacturer:`Sony`,
        name:`Beats 3 studio Wireles`,
        price:41,
        image:`https://topavenue.com.ua/image/cache/catalog/ziz/3/3512201-1-800x800.jpg`
    },
    {
        id:2,
        manufacturer:`Google`,
        name:`Canceling Sport Music Deep Bass`,
        price:39,
        image:`https://fs5.deka.ua/photo/goods/popup/111/450685/450685_20240625_627_1072_CBN2A1N_5.jpg`
    },
    {
        id:3,
        manufacturer:`Toshiba`,
        name:`T500BT original wireles`,
        price:28,
        image:`https://zolotiyvik.ua/media/catalog/product/cache/7d867076b0c31e5e4acf36489cc1e4f1/9/1/9117-4-01-0-__.webp`
    },
    {
        id:4,
        manufacturer:`Apple`,
        name:`Canceling Sport Music Deep Bass`,
        price:69,
        image:`https://images.prom.ua/2472039941_w600_h600_2472039941.jpg`
    },
    {
        id:5,
        manufacturer:`Konika`,
        name:`Black wallnut wood and aliminium Stand`,
        price:43,
        image:`https://together.biz.ua/images/products/509871/1200_1200_0.jpg`
    },
    {
        id:6,
        manufacturer:`Vid`,
        name:`Marshal Major ||| Wireles Folding Bluetooth`,
        price:44,
        image:`https://best-time.biz/image/cache/catalog/0015-8-17/03-04-2024/northedgealps1-300x300.jpg`
    },
    {
        id:7,
        manufacturer:`Toshiba`,
        name:`Beats 3 studio Wireles`,
        price:62,
        image:`https://zadari.com.ua/content/images/46/349x480l50nn0/25970806561618.jpeg`
    },
    {
        id:8,
        manufacturer:`Sony`,
        name:`T500BT original wireles`,
        price:55,
        image:`https://images.zakupka.com/i3/firms/27/10478/10478393/naruchnye-kvarcevye-chasy-curren-47-mm-strelochnye-chasy-curren-naruchnye-chasy-kurren_06302c9f27827f1_300x300.webp.jpg`
    },

    {
        id:9,
        manufacturer:`Sony`,
        name:`Black wallnut wood and aliminium Stand`,
        price:33,
        image:`https://media.gelius.ua/images/1b7ae1a5-24bb-11ed-8237-ac162d75ecbb_thumbnail.jpg`
    },
];

localStorage.clear();

let trolley = JSON.parse(localStorage.getItem('trolley')) || [];
let tempTrolleyCost = [];
let a = localStorage.getItem('trolleyCost') || [];
if(a != ``){
    tempTrolleyCost = a.split(',');
};
let trolleyCost = 0;
let tempTrolley = [];
for(let i = 0;i<tempTrolleyCost.length; i++){
    trolleyCost += +tempTrolleyCost[i];
};

let responses1 = localStorage.getItem(`responses1`) || ``;
let responses2 = localStorage.getItem(`responses2`) || ``;
let responses3 = localStorage.getItem(`responses3`) || ``;
let responses4 = localStorage.getItem(`responses4`) || ``;
let responses5 = localStorage.getItem(`responses5`) || ``;
let responses6 = localStorage.getItem(`responses6`) || ``;
let responses7 = localStorage.getItem(`responses7`) || ``;
let responses8 = localStorage.getItem(`responses8`) || ``;
let responses9 = localStorage.getItem(`responses9`) || ``;

$(`.trolleyPopup`).hide(0);

$(`.responsePopup`).hide(0);

$('.counter').text(trolley.length);

document.getElementById(`btnTrolley`).onclick = function() {
    $('.responsePopup').slideUp(250);
    $(`.trolleyPopup`).slideToggle(250);
    $('.counter').text(trolley.length);
    $(`.trolleyPopup`).empty();
    $(`.trolleyPopup`).append(
    `<div class="breadCrump">
        <i class="fa-solid fa-xmark" id="btnClose"></i>
        <p class="goodsCount">Кількість товарів:<span>${trolley.length}</span></p>
        <p class="goodsPrice">Повна ціна:<span>${trolleyCost}$</span></p>
    </div> `);
    for(let i of db){
    for(let el of trolley){
        if(el.id == i.id){
            $(`.trolleyPopup`).append( 
            `
            <div class="item">
                <img src="${el.image}" alt="">
                <p class="namP">${el.name}</p>
                <p class="prcP">${el.price+`$`}</p>
                <div class="btnDelete"><i id="${`btnDelete`+el.id} "class="fa-solid fa-trash-can"></i></div>
            </div>`);
        }
    }
}};

$(`#btnClose1`).click( function () {
    $('.responsePopup').slideUp(250);
})
for(let el of db){
    $(`.cardsContainer`).append(
    `<div class="cart">
        <img src="${el.image}" alt="">
                    
        <div class="descriptionContainer">
        <p class="manufacturer gray">${el.manufacturer}</p>

        <p class="title">${el.name}</p>

        <div class="starRate">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>

        <p class="price">${el.price+`$`}</p>

        <button id="${`addBtn`+el.id} class="addBtn">Додати</button>

        <p class="gray response" id="${`response`+el.id}">Залишити відгук</p>

        </div>
    </div>`)
};

document.onclick = function (e) {
    let delId = e.target.id.substring(3,9);
    let addId = e.target.id.substring(0,3);
    let resId = e.target.id.substring(0,8);
    
    if(e.target.id == `resBtn`){
    let id = document.querySelector('.breadCrumpR').id.substring(10,11);
    
    let responseSys;

    if(id == 1){
        if(document.getElementById(`inputRes`).value.charAt(0) != `` && document.getElementById(`inputRes`).value.charAt(0) != ` `) {
            responses1 += `${`{<|`+document.getElementById(`inputRes`).value}`;
            localStorage.setItem(`responses1`, responses1);
            responseSys = responses1.split(`{<|`);
        };

        $('.responseContainer').empty();
        
        for(let i = 1; i < responseSys.length; i++){
            $(`.responseContainer`).append(
                `<div class="item"><i class="fa-solid fa-user"></i><p>${responseSys[i]}</p></div>`);
        }
    
    }else if(id == 2){
        if(document.getElementById(`inputRes`).value.charAt(0) != `` && document.getElementById(`inputRes`).value.charAt(0) != ` `) {
            responses2 += `${`{<|`+document.getElementById(`inputRes`).value}`;
            localStorage.setItem(`responses2`, responses2);
            responseSys = responses2.split(`{<|`);
        };

        $('.responseContainer').empty();
        
        for(let i = 1; i < responseSys.length; i++){
            $(`.responseContainer`).append(
                `<div class="item"><i class="fa-solid fa-user"></i><p>${responseSys[i]}</p></div>`);
        }
    
    }else if(id == 3){
        if(document.getElementById(`inputRes`).value.charAt(0) != `` && document.getElementById(`inputRes`).value.charAt(0) != ` `) {
            responses3 += `${`{<|`+document.getElementById(`inputRes`).value}`;
            localStorage.setItem(`responses3`, responses3);
            responseSys = responses3.split(`{<|`);
        };

        $('.responseContainer').empty();
        
        for(let i = 1; i < responseSys.length; i++){
            $(`.responseContainer`).append(
                `<div class="item"><i class="fa-solid fa-user"></i><p>${responseSys[i]}</p></div>`);
        }
    
    }else if(id == 4){
        if(document.getElementById(`inputRes`).value.charAt(0) != `` && document.getElementById(`inputRes`).value.charAt(0) != ` `) {
            responses4 += `${`{<|`+document.getElementById(`inputRes`).value}`;
            localStorage.setItem(`responses4`, responses4);
            responseSys = responses4.split(`{<|`);
        };

        $('.responseContainer').empty();
        
        for(let i = 1; i < responseSys.length; i++){
            $(`.responseContainer`).append(
                `<div class="item"><i class="fa-solid fa-user"></i><p>${responseSys[i]}</p></div>`);
        }
    
    }else if(id == 5){
        if(document.getElementById(`inputRes`).value.charAt(0) != `` && document.getElementById(`inputRes`).value.charAt(0) != ` `) {
            responses5 += `${`{<|`+document.getElementById(`inputRes`).value}`;
            localStorage.setItem(`responses5`, responses5);
            responseSys = responses5.split(`{<|`);
        };

        $('.responseContainer').empty();
        
        for(let i = 1; i < responseSys.length; i++){
            $(`.responseContainer`).append(
                `<div class="item"><i class="fa-solid fa-user"></i><p>${responseSys[i]}</p></div>`);
        }
    }else if(id == 6){
        if(document.getElementById(`inputRes`).value.charAt(0) != `` && document.getElementById(`inputRes`).value.charAt(0) != ` `) {
            responses6 += `${`{<|`+document.getElementById(`inputRes`).value}`;
            localStorage.setItem(`responses6`, responses6);
            responseSys = responses6.split(`{<|`);
        };

        $('.responseContainer').empty();
        
        for(let i = 1; i < responseSys.length; i++){
            $(`.responseContainer`).append(
                `<div class="item"><i class="fa-solid fa-user"></i><p>${responseSys[i]}</p></div>`);
        }

    }else if(id == 7){
        if(document.getElementById(`inputRes`).value.charAt(0) != `` && document.getElementById(`inputRes`).value.charAt(0) != ` `) {
            responses7 += `${`{<|`+document.getElementById(`inputRes`).value}`;
            localStorage.setItem(`responses7`, responses7);
            responseSys = responses7.split(`{<|`);
        };

        $('.responseContainer').empty();
        
        for(let i = 1; i < responseSys.length; i++){
            $(`.responseContainer`).append(
                `<div class="item"><i class="fa-solid fa-user"></i><p>${responseSys[i]}</p></div>`);
        }
    
    }else if(id == 8){
        if(document.getElementById(`inputRes`).value.charAt(0) != `` && document.getElementById(`inputRes`).value.charAt(0) != ` `) {
            responses8 += `${`{<|`+document.getElementById(`inputRes`).value}`;
            localStorage.setItem(`responses8`, responses8);
            responseSys = responses8.split(`{<|`);
        };

        $('.responseContainer').empty();
        
        for(let i = 1; i < responseSys.length; i++){
            $(`.responseContainer`).append(
                `<div class="item"><i class="fa-solid fa-user"></i><p>${responseSys[i]}</p></div>`);
        }
    
    }else if(id == 9){
        if(document.getElementById(`inputRes`).value.charAt(0) != `` && document.getElementById(`inputRes`).value.charAt(0) != ` `) {
            responses9 += `${`{<|`+document.getElementById(`inputRes`).value}`;
            localStorage.setItem(`responses9`, responses9);
            responseSys = responses9.split(`{<|`);
        };

        $('.responseContainer').empty();
        
        for(let i = 1; i < responseSys.length; i++){
            $(`.responseContainer`).append(
                `<div class="item"><i class="fa-solid fa-user"></i><p>${responseSys[i]}</p></div>`);
        }
    } 


    }else if(resId == `response`){
        $(`.breadCrumpContainer`).empty();
        let id = e.target.id.substring(8,9);
        $('.trolleyPopup').slideUp(250);
        $('.responsePopup').slideDown(250);
        
        $('.breadCrumpContainer').prepend(
            `<div class="breadCrumpR xy" id="breadCrump${id}">
                </div>
            `
        );
        
        if(id == 1){
            let responseSys = responses1.split(`{<|`);
            $('.responseContainer').empty();
        
            for(let i = 1; i < responseSys.length; i++){
                $(`.responseContainer`).append(
                    `<div class="item"><i class="fa-solid fa-user"></i><p>${responseSys[i]}</p></div>`);
            };

        }else if(id == 2){
            let responseSys = responses2.split(`{<|`);
            $('.responseContainer').empty();
        
            for(let i = 1; i < responseSys.length; i++){
                $(`.responseContainer`).append(
                    `<div class="item"><i class="fa-solid fa-user"></i><p>${responseSys[i]}</p></div>`);
            };

        }else if(id == 3){
            let responseSys = responses3.split(`{<|`);
            $('.responseContainer').empty();
        
            for(let i = 1; i < responseSys.length; i++){
                $(`.responseContainer`).append(
                    `<div class="item"><i class="fa-solid fa-user"></i><p>${responseSys[i]}</p></div>`);
            };

        }else if(id == 4){
            let responseSys = responses4.split(`{<|`);
            $('.responseContainer').empty();
        
            for(let i = 1; i < responseSys.length; i++){
                $(`.responseContainer`).append(
                    `<div class="item"><i class="fa-solid fa-user"></i><p>${responseSys[i]}</p></div>`);
            };

        }else if(id == 5){
            let responseSys = responses5.split(`{<|`);
            $('.responseContainer').empty();
        
            for(let i = 1; i < responseSys.length; i++){
                $(`.responseContainer`).append(
                    `<div class="item"><i class="fa-solid fa-user"></i><p>${responseSys[i]}</p></div>`);
            };

        }else if(id == 6){
            let responseSys = responses6.split(`{<|`);
            $('.responseContainer').empty();
        
            for(let i = 1; i < responseSys.length; i++){
                $(`.responseContainer`).append(
                    `<div class="item"><i class="fa-solid fa-user"></i><p>${responseSys[i]}</p></div>`);
            };

        }else if(id == 7){
            let responseSys = responses7.split(`{<|`);
            $('.responseContainer').empty();
        
            for(let i = 1; i < responseSys.length; i++){
                $(`.responseContainer`).append(
                    `<div class="item"><i class="fa-solid fa-user"></i><p>${responseSys[i]}</p></div>`);
            };

        }else if(id == 8){
            let responseSys = responses8.split(`{<|`);
            $('.responseContainer').empty();
        
            for(let i = 1; i < responseSys.length; i++){
                $(`.responseContainer`).append(
                    `<div class="item"><i class="fa-solid fa-user"></i><p>${responseSys[i]}</p></div>`);
            };

        }else if(id == 9){
            let responseSys = responses9.split(`{<|`);
            $('.responseContainer').empty();
        
            for(let i = 1; i < responseSys.length; i++){
                $(`.responseContainer`).append(
                    `<div class="item"><i class="fa-solid fa-user"></i><p>${responseSys[i]}</p></div>`);
            };

        }
    }else if(e.target.id == `btnClose`){
        $('.trolleyPopup').slideUp(250);

    }else if(`Delete` == delId){
        $('.trolleyPopup').slideUp(250);
        let id = e.target.id.substring(9,10);
        for (let el of trolley) {
            if(id == el.id){
                tempTrolleyCost = tempTrolleyCost.filter(numb => numb != el.price);
                localStorage.setItem('trolleyCost', tempTrolleyCost);
                trolleyCost = 0;
                for(let i = 0;i<tempTrolleyCost.length; i++){
                    trolleyCost += +tempTrolleyCost[i];
                };
            }
            if(id != el.id){
                tempTrolley.push(el);
                
            }
        }
        if(tempTrolley != []){
            trolley = tempTrolley;
            localStorage.setItem('trolley', JSON.stringify(trolley));
            tempTrolley = [];
            $('.counter').text(trolley.length);

        }    
    }else if(`add` == addId){
    let id = e.target.id.substring(6,7);
    for (let el of db) {
        if (el.id == id) {
            $(`.trolleyPopup`).empty();
            trolley.push(el);
            tempTrolleyCost.push(el.price);
            localStorage.setItem('trolley', JSON.stringify(trolley));
            localStorage.setItem('trolleyCost', tempTrolleyCost);
            trolleyCost = 0;
            for(let i = 0;i<tempTrolleyCost.length; i++){
                trolleyCost += +tempTrolleyCost[i];
            };
            $('.trolleyPopup').slideUp(250);
            $('.counter').text(trolley.length);
        
            }
        }
    }
};

