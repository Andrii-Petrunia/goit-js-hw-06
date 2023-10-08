const categoriesList = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
    const categoryTitle = category.firstElementChild.textContent;
    const elementsQuantity = category.lastElementChild.children.length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elementsQuantity}`);
});
