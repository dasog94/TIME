const arch_Btn = document.querySelector("#archieve-upload");

arch_Btn.onclick = (event) => {
    $("#modalLayer").show();
};

const close_Btn = document.querySelector(".fa-window-close");

close_Btn.onclick = (event) => {
    $("#modalLayer").hide();
};