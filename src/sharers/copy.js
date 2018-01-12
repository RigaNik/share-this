export function render(text, rawText, refUrl) {
    const title = document.querySelector(".naziv-dokumenta").innerHTML.replace(new RegExp("<[^>]*>", "g"), "");
    const filteredText = text.replace(new RegExp("\"", "g"), "'");
    return `<a href="#" data-text="${filteredText}\n\n- ${title} | ${refUrl}" target="_blank" rel="noopener nofollow noreferrer">`
    + "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 70 20\">"
    + "<path fill=\"#FFFFFF\" d=\"M9,18H1c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v12C10,17.6,9.6,18,9,18z M2,16h6V6H2V16z\"/>"
    + "<path fill=\"#FFFFFF\" d=\"M13,14h-2v-2h1V2H6v1H4V1c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v12C14,13.6,13.6,14,13,14z\"/>"
    + "<path fill=\"#FFFFFF\" d=\"M22.1,6.5v6.6h-1.7V6.5H18V4.9h6.6v1.5H22.1z\"/>"
    + "<path fill=\"#FFFFFF\" d=\"M24.9,13.1L27.6,9l-2.6-4h1.9l1.7,2.7l1.7-2.7h1.8l-2.7,4l2.6,4.1h-1.9l-1.7-2.8l-1.8,2.8H24.9z\"/>"
    + "<path fill=\"#FFFFFF\" d=\"M36.5,6.5v6.6h-1.7V6.5h-2.5V4.9H39v1.5H36.5z\"/>"
    + "<path fill=\"#FFFFFF\" d=\"M44,10.2V13h-1.2v-2.8H40V9h2.8V6.2H44V9h2.8v1.2H44z\"/>"
    + "<path fill=\"#FFFFFF\" d=\"M53,13.1L50.9,10h-0.8v3.1h-1.7V4.9h2.9c1,0,1.8,0.2,2.3,0.6s0.7,1,0.7,1.8C54.4,8,54.3,8.6,54,9s-0.7,0.7-1.2,0.8l2.2,3.3 H53z M52.7,7.4c0-0.4-0.1-0.7-0.3-0.8s-0.6-0.2-1-0.2h-1.3v2.2h1.2c0.4,0,0.7,0,0.9-0.1s0.3-0.2,0.4-0.3S52.7,7.7,52.7,7.4z\"/>"
    + "<path fill=\"#FFFFFF\" d=\"M56,13.1V4.9h5.3v1.5h-3.6v1.7h3v1.5h-3v1.9h3.6v1.5H56z\"/>"
    + "<path fill=\"#FFFFFF\" d=\"M64.4,6.5v1.8h3v1.5h-3v3.4h-1.7V4.9h5.2v1.5H64.4z\"/>"
    + "</svg></a>";
}

export function action(event, item) {
    event.preventDefault();
    const text = item.children[0].getAttribute("data-text");
    const copyHolder = document.getElementById("copy-holder");
    copyHolder.value = text;
    copyHolder.select();
    document.execCommand("copy");
}

export const name = "copy";
