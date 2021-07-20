var express = require("express");
var app = express(); //tao 1 ung dung tu express module
var port = process.env.PORT || 5000;
app.listen(port,function (){
    console.log("Server is running....");
});
// cap quyen truy cap cac file static (css, img, jquery..)
app.use(express.static("public"));
app.set("view engine","ejs"); //Bao rang se su dung ejs lam view engine
var count = 0; //dem so luong nguoi truy cap
//routing - bo dinh tuyen (nhan vien cua van phong)
app.get("/",function (req,res) {
    //res.send("Xin chao quy khach....");
    //res.sendfile(__dirname+"/public/demobootstrap.html");  //__dirname -> xuat cho chung ta 1 chuoi duong dan chinh xac tren may tinh den thumuc nay
    count++;
    res.render("home",{
        count: count
    }); //tu dong hieu de lay file home.ejs trong thu muc views
});

app.get("/layout",function (req,res) {
    res.sendfile(__dirname+"/public/Layout.html");
});

app.get("/asm3",function (req,res) {
    count++;
    var products = [
        {
            id:1,
            name:"Product 1",
            image:"images/tommy.jpg",
        },
        {
            id:2,
            name:"Product 2",
            image:"images/tommy.jpg",
        },
        {
            id:3,
            name:"Product 3",
            image:"images/tommy.jpg",
        },
        {
            id:4,
            name:"Product 4",
            image:"images/tommy.jpg",
        }
    ];
    res.render("asm3",{
        products:products,
        count:count
    });
});

app.get("/chi-tiet",function (req,res){
    var masp = req.query.id;
    // khi co id, tim kiem theo id trong array
    var p = {};
    for(var i=0;i<products.length;i++){
        if(products[i].id == masp){
            p = products[i];
            break;
        }
    }
    res.render("chitiet",{
        masp:masp,
        p: p
    });
});
// su dung tham so tinh
app.get("/chi-tiet2/:id",function (req,res){
    var masp = req.params.id;
    var p = {};
    for(var i=0;i<products.length;i++){
        if(products[i].id == masp){
            p = products[i];
            break;
        }
    }
    res.render("chitiet",{
        masp:masp,
        p: p
    });
})

