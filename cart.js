
const product =[
    {
        id:0,
        image:'./CSS/Images/uisi-hm13.jpg',
        tittle: 'Uisi HM13 Headphone',
        price:350,
    },

    {
        id:1,
        image:'./CSS/Images/iPhone-14-Pro-Max-9907.jpg',
        tittle: 'i-Phone 14 pro max',
        price:124000,
    },

    {
        id:2,
        image:'./CSS/Images/borofone-bo12-power-bt-headset-headphones.jpg',
        tittle: 'Wireless Headphone',
        price:500,
    },

    {
        id:3,
        image:'./CSS/Images/Asus-Vivobook-X515MA-Celeron-N4020-Transparent-Silver-Laptop_57v6-83.jpg',
        tittle: 'Asus VivoBook',
        price:150000,
    },

    // {
    //     id:4,
    //     image:'',
    //     tittle: 'Uisi HM13 Headphone',
    //     price:350,
    // },
    // {
    //     id:5,
    //     image:'',
    //     tittle: 'Uisi HM13 Headphone',
    //     price:350,
    // },
];

const categories=[...new Set(product.map((item)=>

    {return item}

  ))]

  let i=0;
  document.getElementById('root').innerHTML= categories.map((item)=>
  {
    var {image,tittle,price}=item;
    return(
        `<div class ='box'>
        <div class = 'image-box'>
        <img class= 'images' src=${image}></img>
        </div>
        <div class= 'bottom'>
        <p>${tittle}</p>
        <h2>${price}.00</h2>` +

        "<button onClick='addtocart("+(i++)+")'>Add to Cart</button>"+
        
        `</div>
        </div>`
      
    )
  }).join('');


  var cart=[];

  function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
  }

  function delElement(a){
    cart.splice(a,1);
    displaycart();
  }

  function clearCart(){
    cart.splice(0,cart.length)
    displaycart();
  }



  function displaycart(a){
    let j =0, total=0;
    document.getElementById('count').innerHTML= cart.length;
    document.getElementById('total').innerHTML= "$ "+0+".00";
  

    if(cart.length==0){
        document.getElementById('cartItem').innerHTML="Your Cart is Empty";

    }
    else{
        document.getElementById('cartItem').innerHTML= cart.map((items)=>
        {
            var {image,tittle,price}=items;
            total=total+price;
            document.getElementById('total').innerHTML="$"+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'> ${tittle}</p>
                <h2 style='font-size:15px;'> ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onClick= 'delElement("+(j++)+")'></i></div>"

            );
            
        }).join('');
       
    }
    if(cart.length==0){
        document.getElementById('clrbtn').innerHTML="";

    }
   else{
        document.getElementById('clrbtn').innerHTML=`<button onClick="clearCart()">Remove All</button>`
   }

  }

  
