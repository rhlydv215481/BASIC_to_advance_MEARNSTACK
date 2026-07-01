 var products = [
  {
    id: 1,
    name: "Wooden Sofa",
    price: 25000,
    img: "https://example.com/images/sofa.jpg"
  },
  {
    id: 2,
    name: "Dining Table",
    price: 18000,
    img: "https://example.com/images/dining-table.jpg"
  },
  {
    id: 3,
    name: "Queen Bed",
    price: 32000,
    img: "https://example.com/images/bed.jpg"
  }
];
var popular = [
  {
    id: 4,
    name: "Office Chair",
    price: 8500,
    img: "https://example.com/images/chair.jpg"
  },
  {
    id: 5,
    name: "TV Unit",
    price: 12000,
    img: "https://example.com/images/tv-unit.jpg"
  },
  {
    id: 6,
    name: "Coffee Table",
    price: 6500,
    img: "https://example.com/images/coffee-table.jpg"
  }
];
function product() {
    var clutter = "";

    products.forEach((detail) => {
        clutter += `
        <div class="product w-fit rounded-xl p-2 bg-white">
            <div class="image w-[14rem] h-[13rem] rounded-xl overflow-hidden">
                <img src="${detail.img}" class="w-full h-full object-cover">
            </div>

            <div class="data w-full px-2 py-5">
                <h1 class="font-semibold text-xl leading-none tracking-tight">
                    ${detail.name}
                </h1>

                <div class="flex justify-between w-full items-center mt-2">
                    <div class="w-1/2">
                        <h3 class="font-semibold opacity-20">Furniture</h3>
                        <h4 class="font-semibold mt-2">₹${detail.price}</h4>
                    </div>

                    <button class="w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400">
                        <i class="ri-add-line"></i>
                    </button>
                </div>
            </div>
        </div>`;
    });

    var productsContainer = document.querySelector(".products");
    productsContainer.innerHTML = clutter;
}

product();
function showPopular() {
    let clutter = "";

    popular.forEach((detail) => {
        clutter += `
        <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
            <div class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                <img class="w-full h-full object-cover"
                    src="${detail.img}"
                    alt="${detail.name}">
            </div>

            <div class="data py-2 w-full">
                <h1 class="leading-none font-semibold">${detail.name}</h1>
                <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
                    Furniture
                </h4>
                <h4 class="mt-3 font-semibold text-zinc-500">
                    ₹${detail.price}
                </h4>
            </div>
        </div>`;
    });

    document.querySelector(".populars").innerHTML = clutter;
}

showPopular();