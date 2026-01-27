function customRender(element, target){
    /* const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    // problem yeh hai ki baar baar attribute set karna padd raha hai
    domElement.setAttribute('href', element.props.href)
    domElement.setAttribute('target', element.props.target)
    target.appendChild(domElement)
    */

    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    for (const prop in element.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, element.props[prop])
    }
    target.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer) // kya inject karna hai aur kaha inject karna hai
