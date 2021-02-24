const saveBtn = $(".saveBtn");

saveBtn.on("click", function() {
    if (this.getAttribute("locked") === "true") {
        saveBtn.html("<i class='fas fa-lock-open'></i>");
        saveBtn.attr("locked", "false");
    } else {
        saveBtn.html("<i class='fas fa-lock'></i>");
        saveBtn.attr("locked", "true");
    }
})