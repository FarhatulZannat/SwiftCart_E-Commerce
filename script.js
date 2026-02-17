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
    document.getElementById('top').style.display='none'
    categoriesContainer.innerHTML=''
    categoriesContainer.innerHTML = `
     
    <button onclick="loadAllProducts()" class="btn font-medium text-slate-800 border rounded-full">All</button>
    `

    categories.forEach(cat => {
        // const catbtn = document.createElement('button')
        // catbtn.innerHTML=`
        
        // <button onclick="loadCategoryProducts("${cat}")" class="btn font-medium text-slate-800 border rounded-full ">${cat}</button>
        // `
        // categoriesContainer.append(catbtn)
        const button = document.createElement('button')
        button.innerText= cat 
        button.className = "btn font-medium text-slate-800 border rounded-full "

        button.addEventListener("click",()=>{
            loadCategoryProducts(cat)
        })
        categoriesContainer.append(button)

    })
}


   const displayModal = (details)=>{
    const modalContainer = document.getElementById('modal-content')
    modalContainer.innerHTML=`
    <h3 class="text-lg font-bold">${details.title}</h3>
    <p class="py-4">${details.description}</p>
    <div class="flex justify-between">
    <h3 class="text-lg font-bold">$${details.price}</h3>
    <h3 class="text-lg font-bold"><i class="fa-solid text-amber-400 fa-star"></i>${details.rating.rate}(${details.rating.count})</h3>
    </div>
    <div class="flex justify-start gap-8">
    <button class="text-base btn btn-primary font-bold">Buy Now</button>
    <button class="text-base btn btn-primary font-bold">Add to Cart</button>
    </div>
    
     
    `
    document.getElementById('details-modal').showModal()



   }

const loadModal = async(id)=>{
    try{
        const  res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
        displayModal(data)
    }
    catch(error){
        console.log('find error')
    }

}
  


const displayCategoryProducts = (products)=>{
    const categoryProductsContainer=document.getElementById('product-card')
    categoryProductsContainer.innerHTML=''

    products.forEach(cate=>{
        const cateContainer=document.createElement('div')
        cateContainer.innerHTML=`
        <div class="card bg-[#F9FAFB] lg:w-60  shadow-sm">
  <figure>
    <img
      src="${cate.image}"
      alt="Shoes"  class="h-48 w-48" />
  </figure>
  <div class="card-body h-auto ">
   <div class=" flex justify-between">
    <h2 class="card-title badge badge-primary font-thin text-xs">   
      ${cate.category}</h2>
      <div class="font-medium text-xs"><i class="fa-solid text-amber-400 fa-star"></i>${cate.rating.rate}(${cate.rating.count})</div>
    
    </div>
    <p class="truncate font-medium">${cate.title}</p>
    <h1 class="font-bold text-xl">$${cate.price}</h1>
     <div class="card-actions   lg:justify-between">
      <button onclick="loadModal(${cate.id})" class="flex-1 badge border-gray-400 text-slate-800 p-3 "><i class="fa-solid fa-circle-info"></i>Details</button>
      <button class="flex-1 badge bg-blue-500 text-white p-3 "><i class="fa-solid fa-cart-shopping"></i>Add</button>
    </div>
  </div>
</div>   
        `
        categoryProductsContainer.append(cateContainer)
        
    })
}

const loadCategoryProducts= async (category)=>{
    try{
        const res = await fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`)
    const data= await res.json()
    displayCategoryProducts(data)
    }
    catch(error){
        console.log('error found')
    }
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
  <div class="card-body h-auto ">
    <div class="flex justify-between">
    <h2 class="card-title badge badge-primary font-thin text-xs">
      ${product.category}</h2>
      <div class="font-medium text-xs">${product.rating.rate}(${product.rating.count})</div></div>
    
    <p class="truncate font-medium">${product.title}</p>
    <h1 class="font-bold text-xl">$${product.price}</h1>
    <div class="card-actions   lg:justify-between">
      <button onclick="loadModal(${product.id})" class="flex-1 badge border-gray-400 text-slate-800 p-3 "><i class="fa-solid fa-circle-info"></i>Details</button>
      <button class="flex-1 badge bg-blue-500 text-white p-3 "><i class="fa-solid fa-cart-shopping"></i>Add</button>
    </div>
  </div>
</div>
    `

    productCard.append(cardsContainer)
    })
    
}

// filter 3 products

const displayFilterProducts = (threeProducts => {
    const topContainer = document.getElementById('top-container')
    
    threeProducts.forEach(three =>{
        const cardsContainer = document.createElement('div')
        cardsContainer.innerHTML=`
        <div class="card bg-[#F9FAFB] lg:w-60  shadow-sm">
  <figure>
    <img
      src="${three.image}"
      alt="Shoes"  class="h-48 w-60 " />
  </figure>
  <div class="card-body h-auto ">
    <div class="flex justify-between">
    <h2 class="card-title badge badge-primary font-thin text-xs">
      ${three.category}</h2>
      <div class="font-medium text-xs">${three.rating.rate}(${three.rating.count})</div></div>
    
    <p class="truncate font-medium">${three.title}</p>
    <h1 class="font-bold text-xl">$${three.price}</h1>
    <div class="card-actions   lg:justify-between">
      <button onclick="loadModal(${three.id})" class="flex-1 badge border-gray-400 text-slate-800 p-3 "><i class="fa-solid fa-circle-info"></i>Details</button>
      <button class="flex-1 badge bg-blue-500 text-white p-3 "><i class="fa-solid fa-cart-shopping"></i>Add</button>
    </div>
  </div>
</div>
    `
 topContainer.append(cardsContainer)
    
    })

})

const loadFilterProducts = async() =>{
   try{
     const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()

    const filterRateProducts = data.filter(product=>product.rating.rate>=4.5)

    const topThree = filterRateProducts.sort((a,b)=>b.rating.rate - a.rating.rate).slice(0,3)
    displayFilterProducts(topThree)
   }
   catch(error){
    console.log('error find!!!')
   }
}
loadFilterProducts()


    