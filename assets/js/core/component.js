window.addEventListener("load", (event) => {
  const components = document.querySelectorAll('component');

  componentImplementation(components);
}, false);

const componentImplementation = (components) => {
  const functions = [];
  components.forEach((component, index) => {
    const path = './components';
    component.setAttribute('id', `component-${index}`);
    const element = document.getElementById(`component-${index}`);
    const componentLocation = element.getAttribute('src');
    const node = document.createElement('div');

    // load component file
    const request = new XMLHttpRequest();
    request.open("GET", `${path}/${componentLocation}`, false);
    request.send(null);
    const response = request.responseText || '';

    // Apply component
    node.innerHTML = response;
    node.className = generateId(7);
    element.replaceWith(node);

    // Apply script tag
    const script = node.getElementsByTagName('script');
    let scriptContent = script.length > 0 ? script[0].innerHTML : '';
    const scriptNode = document.createElement('script');
    scriptNode.innerHTML = scriptContent;
    functions.push(scriptNode);
  });

  const header = document.querySelector('head');
  functions.forEach((node) => header.appendChild(node));
  console.log(functions)
};

const generateId = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
