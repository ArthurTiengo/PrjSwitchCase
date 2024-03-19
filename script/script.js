const frutas = document.querySelectorAll(".fruta");

frutas.forEach((button) => {
    //addEventListener= ouve os  eventos do usuario e dispara a ação quando o evento que o programador especificou for disparado
    button.addEventListener("click", () => {
        document.querySelector("header").style.color = "white";
        document.querySelector("footer").style.color = "white";

        //verifica qual o texto do botão atual
        switch (button.innerText) {
            case "🍌":
                document.body.style.backgroundColor = "#f1c329";
                document.querySelector("header").style.color = "black";
                document.querySelector("footer").style.color = "black";
                break;
            case "🍉":
                document.body.style.backgroundColor = "#f22d2d";
                break;
            case "🍇":
                document.body.style.backgroundColor = "#835AB8";
                break;
            case "🍊":
                document.body.style.backgroundColor = "#F8762A";
                break;
            case "🥑":
                document.body.style.backgroundColor = "#059a23";
                break;
            case "🍈":
                document.body.style.backgroundColor = "#a9d399";
                document.querySelector("header").style.color = "black";
                document.querySelector("footer").style.color = "black";
                break;
            case "🥥":
                document.body.style.backgroundColor = "#fff";
                document.querySelector("header").style.color = "black";
                document.querySelector("footer").style.color = "black";
                break;
            default:
                console.log("Botão não reconhecido", button.innerText);
        }
    })
})