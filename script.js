let btn = document.getElementById("fetchData");

let number = 1;

btn.addEventListener("click", () => {
  number++;
  fetchData(number);
});

async function fetchData(number) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${number}`);
    const data = await res.json();
    scriptToHtml(data);
  } catch {
    
  }
}

function scriptToHtml(data) {
  const productInfo = document.createElement("div");
  productInfo.textContent = `სახელი: ${data.title}, ფასი: $${data.price}`;
  document.body.appendChild(productInfo);
}
