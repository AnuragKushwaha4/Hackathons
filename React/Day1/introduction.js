const h1 = document.createElement("h1");
h1.textContent = "Hello Guy Welcome to the Coder world";

h1.className ="element";

const root = document.getElementById("root");
root.append(h1);


const React = {
    createElement : function(type, props,children){
        return {
            type :type,
            props:{...props,
                children:children
            }
        }
    }
}


const ReactDOM = {
    render: function(ReactElement, root){
        const element = document.createElement(ReactElement.type);
        const props = ReactElement.props;

        for(const key in props){
            if(key==="style"){
                Object.assign(element.style,props.style);
            }
            else if(key ==="children"){
                element.textContent = props[key];
            }
            else{element[key]=props[key];}


        }
        root.append(eleemnt);
    }
}