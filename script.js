const loadCategories = ()=>{
    fetch("https://fakestoreapi.com/products/categories")
    .then(res=>res.json())
    .then(data=>{
        // console.log(data)
           // hide banner
    document.getElementById("hero-text").style.display='none'
    document.getElementById("features").style.display='none'
    document.getElementById("categories-container").classList.remove('hidden')
    document.getElementById("categories-title").classList.remove('hidden')
        displayCategories(data)
    }
)}

const displayCategories=(categories)=>{
         

    const categoriesContainer = document.getElementById("categories-container")
    categoriesContainer.innerHTML=''
    categoriesContainer.innerHTML = `
     
    <button onclick="loadAllProducts()" class="btn font-medium text-slate-800 border rounded-full">All</button>
    `

    categories.forEach(cat => {
        const catbtn = document.createElement('div')
        catbtn.innerHTML=`
        
        <button class="btn font-medium text-slate-800 border rounded-full ">${cat}</button>
        `
        categoriesContainer.append(catbtn)

    })
}

const loadAllProducts = async()=>{
    try{
        const res= await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        displayAllProducts(data)
    }
    catch(error){
        console.log('catching some error')
    }

}


const displayAllProducts = (products)=>{
    const productCard =document.getElementById('product-card')
    productCard.innerHTML=''

    
    products.forEach(product => {
        const cardsContainer = document.createElement('div')
        cardsContainer.innerHTML=`
        <div class="card bg-[#F9FAFB] lg:w-60  shadow-sm">
  <figure>
    <img
      src="${product.image}"
      alt="Shoes"  class="h-48 w-48" />
  </figure>
  <div class="card-body h-48 ">
    <h2 class="card-title flex justify-between">
      ${product.category}
      <div class="badge badge-secondary">${product.rating.rate}</div>
    </h2>
    <p>${product.title}</p>
    <h1 class="font-bold">$${product.price}</h1>
    <div class="card-actions justify-between">
      <div class="badge badge-outline"><i class="fa-solid fa-circle-info"></i>Details</div>
      <div class="badge badge-outline"><i class="fa-solid fa-cart-shopping"></i>Add</div>
    </div>
  </div>
</div>
    `

    productCard.append(cardsContainer)
    })
    
}


    