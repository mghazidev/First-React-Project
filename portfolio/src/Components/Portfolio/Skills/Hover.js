export function Hover(props) {
    const span = document.querySelector(".category span");
    span.style.display = "Block";
}

export function Leave(props) {
    const span = document.querySelector(".category span");
    span.style.display = "none";
}
 