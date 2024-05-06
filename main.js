let styleElement = document.createElement('style');
let code = document.createTextNode("*{box-sizing: border-box;}");
styleElement.appendChild(code);
document.head.appendChild(styleElement);
document.body.style.cssText = "margin: 0; font-family: Arial, Helvetica, sans-serif";

let section = document.createElement('section');
section.style.cssText = 'width: 100%';
document.body.firstChild.before(section);

let header = document.createElement('header');
header.style.cssText = 'width: 100%; height: 63px; background-color: white; padding: 20px; display: flex; justify-content: space-between; align-items: center';
section.appendChild(header);

let logo = document.createElement('a');
logo.setAttribute("href", "#")
let logoText = document.createTextNode('Elzero')
logo.appendChild(logoText);
logo.style.cssText = 'color: green; font-size: 20px; font-weight: bold; text-decoration: none';
header.appendChild(logo);

let ul = document.createElement('ul');
ul.style.cssText = 'display: flex; gap: 15px; font-size: 16px; list-style: none; margin: 0';
let myLinks = ['Home', 'About', 'Service', 'Contact'];
for (let i = 0; i < myLinks.length; i++) {
    let li = document.createElement('li');
    let link = document.createElement('a');
    link.setAttribute("href", "#")
    let linkText = document.createTextNode(myLinks[i]);
    link.style.cssText = 'text-decoration: none';
    link.appendChild(linkText);
    li.appendChild(link);
    ul.appendChild(li);
}
header.appendChild(ul);

let div = document.createElement('div');
div.style.cssText = 'background-color: #ececec; width: 100%; min-height: calc(100vh - 2*63px); padding: 20px; display: flex; flex-wrap: wrap; justify-content: center; gap: 20px';
for (let i = 1; i <= 15; i++) {
    let box = document.createElement('div');
    box.style.cssText = 'background-color: white; width: 300px; padding: 20px 0; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 5px'

    let h2 = document.createElement('h2');
    h2.innerHTML = i;
    h2.style.cssText = 'font-size: 32px; margin: 0';
    box.appendChild(h2);

    let boxTitle = document.createElement('p');
    boxTitle.innerHTML = 'Product';
    boxTitle.style.cssText = 'font-size: 15px; color: #aaa; margin: 0';
    box.appendChild(boxTitle);

    div.appendChild(box);
}
section.appendChild(div);

let footer = document.createElement('footer');
footer.style.cssText = 'width: 100%; height: 63px; background-color: #14986c; display: flex; justify-content: center; align-items: center';

let cr = document.createElement('p');
cr.innerHTML = 'Copyright 2024';
cr.style.cssText = 'color: white; font-size: 18px'

footer.appendChild(cr);
section.appendChild(footer);