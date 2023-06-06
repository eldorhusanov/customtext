let data=[
    {
        id:1,name:'test1',age:21
    },{
        id:2,name:'test1',age:22
    },{
        id:3,name:'test1',age:23
    },{
        id:4,name:'test1',age:24
    },{
        id:5,name:'test1',age:25
    },{
        id:6,name:'test1',age:26
    },
]
class XProduct extends  HTMLElement{
    constructor() {
        super();
        let shadow=this.attachShadow({mode:'open'});
        let div=document.createElement('div');
        let div2=document.createElement('div');
        // div.attributes=this.getAttribute('data-page');
        div.className='eldor_class';
        shadow.appendChild(div);
    }
}
customElements.define('x-eldor', XProduct);
const serverIpAddress = 'http://localhost:8080';

async function request (endpoint, method, bodyData) {
    let response = await fetch(serverIpAddress + endpoint, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    })
    let parsedData = await response.json()
    return parsedData
}

// class XProduct extends HTMLElement {
//     constructor() {
//         super();
//         let shadow = this.attachShadow({mode: 'open'});
//         let img = document.createElement('img');
//         img.alt = this.getAttribute('data-name');
//         img.src = this.getAttribute('data-img');
//         img.width = '150';
//         img.height = '150';
//         img.className = 'product-img';
//         shadow.appendChild(img);
//         img.addEventListener('click', () => {
//             window.location = this.getAttribute('data-url');
//         });
//         let link = document.createElement('a');
//         link.innerText = this.getAttribute('data-name');
//         link.href = this.getAttribute('data-url');
//         link.className = 'product-name';
//         shadow.appendChild(link);
//     }
// }
// customElements.define('x-product', XProduct);
