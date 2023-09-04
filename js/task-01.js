const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
const numberOfCategories = categoryItems.length;

console.log(`Number of categories:` ,numberOfCategories);

categoryItems.forEach(categoryItem => {
    const header = categoryItem.querySelector('h2');
    const listElement = categoryItem.querySelectorAll('ul li');
    const numberOfListElements = listElement.length;

    console.log(`Category:`, header.textContent);
    console.log(`Elemnts:`, numberOfListElements)
})