$(document).ready(function(){
    $('#show-login').on('click', function(){
        $('#modal-login').addClass('modal-show');
    });

    $('#close-modal').on('click', function(){
        $('#modal-login').removeClass('modal-show');
    });
});

var default_card = [
    {
        'id' : 1,
        'nama' : 'Nasi Goreng Joz',
        'img' : "menu-1.jpg",
        'harga' : 10000,
        'qty' : 2
    },
    {
        'id' : 2,
        'nama' : 'Air Es Topping Bubble',
        'img' : "menu-2.jpg",
        'harga' : 7000,
        'qty' : 2
    },
];

list();

function add(param){
    for(a=0; a<list_menu.length; a++){
        if(list_menu[a].id == param){
            var found = default_card.find(x => x.id == list_menu[a].id);
            if(found != undefined){
                var index = default_card.findIndex(y => y.id == list_menu[a].id);
                default_card[index].qty = default_card[index].qty + 1;
            }else{
                var push ={
                    'id' : list_menu[a].id,
                    'nama' : list_menu[a].nama,
                    'img' : list_menu[a].img,
                    'harga' : list_menu[a].harga,
                    'qty' : 1
                };
                default_card.push(push);
            }
            
        }
    }

    list();
}

function plus(param){
    for(i=0; i < default_card.length; i++){
        if(default_card[i].id == param){
            default_card[i].qty++;
        }
    }

    list();
}

function minus(param){
    for(i=0; i < default_card.length; i++){
        if(default_card[i].id == param){
            default_card[i].qty--;
            if(default_card[i].qty == 0){
                default_card.splice(i,1);
                break;
            }
        }
    }

    list();
}

function list(){
    var list = "";
    var sub_total = 0;

    for(i=0; i < default_card.length; i++){
        total = default_card[i].harga * default_card[i].qty;
        list = list + "<div class='row'>"+
                        "<div class='col-md-4 pr-1'>"+
                            "<div class='card'>"+
                                "<img src='images/"+default_card[i].img+"' alt='' class='img-fluid'>"+
                            "</div>"+
                        "</div>"+
                        "<div class='col-md-8 pl-1'>"+
                            "<ul class='pl-0'>"+
                                "<li class='active'>"+default_card[i].nama+"</li>"+
                                "<li>Rp "+default_card[i].harga+" | <button class='plus px-2' onclick='plus("+default_card[i].id+")'>+</button> "+default_card[i].qty+" <button class='minus px-2' onclick='minus("+default_card[i].id+")'>-</button>  Qty</li>"+
                                "<li>Total : Rp "+total+"</li>"+
                            "</ul>"+
                        "</div>"+
                    "</div>";
                                
        sub_total = sub_total + total;
    }

    list = list + "<div class='row'>"+
                    "<div class='col-md-12'>"+
                        "<h5 class='float-right' id='total'>Total : Rp "+ sub_total+"</h5>"+
                    "</div>"+
                "</div>";
    document.getElementById("list-keranjang").innerHTML = list;
}

