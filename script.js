//your JS code here. If required.
        const boxs = document.querySelectorAll(".square");

        boxs.forEach((square) => {
            square.addEventListener("mouseover", (e) => {
                console.log(e.target.id);

                changeColor(e.target.id);
            });
        });

        function changeColor(hoverBoxId) {

            boxs.forEach((box) => {

                if (box.id != hoverBoxId) {
                    box.style.backgroundColor = "#6F4E37";
                } else {
                    box.style.backgroundColor = "#E6E6FA";
                }

            });

        }