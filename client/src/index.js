import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Root = () => {
  useEffect(() => {
    
//Below is how the nav is created by getting an array of each section then creating a list item
//and an anchor which can then have text added and be appending to the nav bar

const sections = Array.from(document.getElementsByTagName("section"));
const menu = document.getElementById('navbar__list');
for (let section of sections) {
  const listItem = document.createElement('li');
  const listItemLink=document.createElement('a');
  // use the section data-nav to fill the <a> tag
  listItemLink.textContent=section.dataset.nav;
  listItem.appendChild(listItemLink);
  listItem.classList.toggle('menu__link');
  menu.appendChild(listItem);
}

// Sets the class as active for each section depending on the viewport
let s1 = document.getElementById('section1');
let s2 = document.getElementById('section2');
let s3 = document.getElementById('section3');
let s4 = document.getElementById('section4');
const navs = Array.from(document.getElementsByTagName("li"));
console.log(navs.length)
let n1 = navs[0];
let n2 = navs[1];
let n3 = navs[2];
let n4 = navs[3];

n1.classList.toggle('active'); //Default the first section is active

document.addEventListener('scroll',function()
{
  let y1 = s1.getBoundingClientRect().y;
  let y2 = s2.getBoundingClientRect().y;
  let y3 = s3.getBoundingClientRect().y;
  let y4 = s4.getBoundingClientRect().y;

  if (y1 > -25)
  {
    if(!s1.classList.contains('active')) //If this is true there is nothing that needs to be done
    {
      s1.classList.toggle('active');
      s2.classList.remove('active'); // The remove is to make sure there are no other sections marked active
      s3.classList.remove('active');
      s4.classList.remove('active');

      n1.classList.toggle('active');
      n2.classList.remove('active');
      n3.classList.remove('active');
      n4.classList.remove('active');
    }
  }
  else if (y2 > -25)
  {
    if(!s2.classList.contains('active'))
    {
      s2.classList.toggle('active');
      s1.classList.remove('active');
      s3.classList.remove('active');
      s4.classList.remove('active');

      n2.classList.toggle('active');
      n1.classList.remove('active');
      n3.classList.remove('active');
      n4.classList.remove('active');
    }
  }
  else if (y3 > -25) {
    if(!s3.classList.contains('active'))
    {
      s3.classList.toggle('active');
      s1.classList.remove('active');
      s2.classList.remove('active');
      s4.classList.remove('active');

      n3.classList.toggle('active');
      n1.classList.remove('active');
      n2.classList.remove('active');
      n4.classList.remove('active');
    }
  }
    else {
      if(!s4.classList.contains('active'))
      {
        s4.classList.toggle('active');
        s1.classList.remove('active');
        s2.classList.remove('active');
        s3.classList.remove('active');

        n4.classList.toggle('active');
        n1.classList.remove('active');
        n2.classList.remove('active');
        n3.classList.remove('active');
      }
  }
}
);



//All the event listeners to scroll to each section using the nav

  n1.addEventListener('click',function() {
  document.getElementById('section1').scrollIntoView({behavior:'smooth'});
  });
  n2.addEventListener('click',function() {
  document.getElementById('section2').scrollIntoView({behavior:'smooth'});
  });
  n3.addEventListener('click',function() {
  document.getElementById('section3').scrollIntoView({behavior:'smooth'});
  });
  n4.addEventListener('click',function() {
  document.getElementById('section4').scrollIntoView({behavior:'smooth'});
  });
},[]);

return (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();