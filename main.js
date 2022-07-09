let names = ['ahmad', 'jake', 'tarek', 'karem' ]
let ages = ['18 years old','34 years old','23 years old','34 years old']
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';

function element(name,ages){
    // Elements

    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');

    // Content

    let head = document.createTextNode(name);
    let ageContent = document.createTextNode(ages);
    img.src = '/234px-Bruce_Willis_by_Gage_Skidmore_3.jpg';
    title.appendChild(head);
    age.appendChild(ageContent);

    // Style 
    card.style.width = '200px';
    card.style.background = '#999';
    card.style.color = '#fff';
    card.style.padding = '10px';
    card.style.margin = ' 10px';
    card.style.display = 'inline-block';
    card.style.textTransform = 'uppercase';



    img.style.width = '100%';

    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);

    container.appendChild(card);

}

for(let i = 0 ; i < 4 ; i++){

    element(names[i],ages[i]);
}