const categoriesList = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const elementsQuantity = category.querySelectorAll('ul li').length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elementsQuantity}`);
});
