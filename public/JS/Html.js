

class Html {


    collapse() {
        var coll = document.getElementsByClassName("collapsible");
        var i;
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function (e) {
                if (e.target.classList.contains("list-group-item")) {
                    this.classList.toggle("active");
                    var content = this.children[1];
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = "200px"
                        content.style.height = "200px"


                    }
                }

            });
        }
    }

}