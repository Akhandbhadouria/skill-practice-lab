 
const main_Container = document.querySelector('#root');


const custom_react = {
    type: "a",

    props: {
        href: 'https://www.google.com/',
        target: "_blank"
    },
    children: "click me to visit google"
}

function assigning_attributes(custom_react, main_Container) {
    const temp_elem = document.createElement(custom_react.type);
    temp_elem.innerHTML = custom_react.children;
    for (const prop in custom_react.props) {
        temp_elem.setAttribute(prop, custom_react.props[prop]);
    }
    main_Container.appendChild(temp_elem)
}

assigning_attributes(custom_react, main_Container)