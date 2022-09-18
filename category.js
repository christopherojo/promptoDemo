function openAdventure() {
    hideLabel()
    var x = document.getElementById("phrases");
    x.style.display = "block";

    var y = document.getElementById('category-header');
    y.style.alignSelf = "start";
    y.style.paddingLeft = "50px";
    y.style.paddingTop = "170px";
    y.style.marginBottom = "-60px";
    y.innerText = "ADVENTURE";
}

function hideLabel() {
    const items = document.getElementsByClassName("category-item");
    for (let i = 0; i < items.length; i++)
        items[i].style.display="none";
}