import "./style.css"
import { greeting } from "./greeting";

/* Example to import some img to the html dom

    import odinImage from "./odin.png";
   
    const image = document.createElement("img");
    image.src = odinImage;
   
    document.body.appendChild(image);

*/

const HelloWorld = document.createElement('h1');
HelloWorld.textContent = greeting();