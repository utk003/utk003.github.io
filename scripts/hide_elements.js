$(function () {
    const sections = ["rnd", "libs", "clss"];
    const modifiers = ["l3", "l2", "l1", "r1", "r2", "r3"];
    const shifts = [-1000, -3, -1, 1, 3, 1000];
    for (let i = sections.length - 1; i >= 0; i--) {
        for (let j = 4; j <= $("#" + sections[i]).children().length; j++)
            $("#" + sections[i] + j).addClass("hide");
        $("#" + sections[i] + "hide").addClass("hide");
        for (let j = 0; j < 6; j++)
            $("#" + sections[i] + modifiers[j]).click(function () {
                let maxInd = $("#" + sections[i]).children().length;
                if (maxInd > 3) {
                    let ind = 1;
                    for (; ind <= maxInd; ind++)
                        if (!$("#" + sections[i] + ind).hasClass("hide"))
                            break;
                    ind += shifts[j];
                    if (ind < 1)
                        ind = 1;
                    else if (ind > maxInd - 2)
                        ind = maxInd - 2;
                    for (let k = 1; k <= maxInd; k++)
                        $("#" + sections[i] + k).addClass("hide");
                    for (let k = 0; k < 3; k++)
                        $("#" + sections[i] + (ind + k)).removeClass("hide");
                }
            });
        $("#" + sections[i] + "show").click(function () {
            let maxInd = $("#" + sections[i]).children().length;
            for (let k = 1; k <= maxInd; k++)
                $("#" + sections[i] + k).removeClass("hide");
            $("#" + sections[i] + "show").addClass("hide");
            $("#" + sections[i] + "hide").removeClass("hide");
        });
        $("#" + sections[i] + "hide").click(function () {
            let maxInd = $("#" + sections[i]).children().length;
            for (let k = 1; k <= maxInd; k++)
                $("#" + sections[i] + k).addClass("hide");
            if (maxInd > 3)
                maxInd = 3;
            for (let k = 1; k <= maxInd; k++)
                $("#" + sections[i] + k).removeClass("hide");

            $("#" + sections[i] + "hide").addClass("hide");
            $("#" + sections[i] + "show").removeClass("hide");
        });
    }
})