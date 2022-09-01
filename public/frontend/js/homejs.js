function tailoredoption() {

    var x = document.getElementById("select-tailored");
    var y = document.getElementById("select-capacity");
    var value = x.value;
    console.log(value);
    var max = 0;
    if (value == "0") {
        document. getElementById("capacity-div"). style. display = "inline";
        $("#select-capacity").empty()
        var option = document.createElement("option");
        option.text ="capacity";
        y.add(option);

        for (var min = 0; min < 100000; min += 100) {
            max = min + 100
            var option = document.createElement("option");
            option.value = min + '-' + max;
            option.text = min + '-' + max;
            y.add(option);

        }
    }
    if (value == "1") {
        document. getElementById("capacity-div"). style. display = "inline";
        $("#select-capacity").empty()
        var option = document.createElement("option");
        option.text ="capacity";
        y.add(option);
        for (var min = 0; min < 10000; min += 100) {
            max = min + 100
            var option = document.createElement("option");
            option.value = min + '-' + max;
            option.text = min + '-' + max;
            y.add(option);

        }
    }
    if (value == "2") {
        document. getElementById("capacity-div"). style. display = "inline";
        $("#select-capacity").empty()
        var option = document.createElement("option");
        option.text ="capacity";
        y.add(option);
        for (var min = 0; min < 600; min += 100) {
            max = min + 100
            var option = document.createElement("option");
            option.value = min + '-' + max;
            option.text = min + '-' + max;
            y.add(option);

        }
    }
    if (value == "7") {
        document. getElementById("capacity-div"). style. display = "inline";
        $("#select-capacity").empty()
        var option = document.createElement("option");
        option.text ="capacity";
        y.add(option);
        for (var min = 0; min < 500; min += 100) {
            max = min + 100
            var option = document.createElement("option");
            option.value = min + '-' + max;
            option.text = min + '-' + max;
            y.add(option);

        }
    }
    if (value == "3"||value == "4"||value == "5"||value == "6"||value == "8"||value == "9"||value == "10") {
        document. getElementById("capacity-div"). style. display = "inline";
        document. getElementById("capacity-div"). style. display = "none";
    var y = document.getElementById("select-price");
        $("#select-price").empty()
        var option = document.createElement("option");
        option.text ="price";
        y.add(option);

        for (var min = 0; min < 1000000; min += 1000) {
            max = min + 1000
            var option = document.createElement("option");
            option.value = min + '-' + max;
            option.text = min + '-' + max;
            y.add(option);
        }
        // console.log(y)

    $('#filter-container').hide();
    $('#filter-div').fadeIn("slow");
    $("#select-price").select2("open");

    }
    else{
        $('#filter-container').hide();
        $('#filter-div').fadeIn("slow");
        $("#select-capacity").select2("open");  
    }
    
      
}

function capacityoption() {
    
    var x = document.getElementById("select-capacity");
    var y = document.getElementById("select-price");
    var value = parseInt(x.value);
    // console.log(value);
    var max = 0;
    if (value <=200 ) {
        $("#select-price").empty()
        var option = document.createElement("option");
        option.text ="price";
        y.add(option);

        for (var min = 0; min < 50000; min += 100) {
            max = min + 100
            var option = document.createElement("option");
            option.value = min + '-' + max;
            option.text = min + '-' + max;
            y.add(option);

        }
    }
    if (value>200 && value <=1000 ) {
        $("#select-price").empty()
        var option = document.createElement("option");
        option.text ="price";
        y.add(option);

        for (var min = 20000; min < 500000; min += 100) {
            max = min + 100
            var option = document.createElement("option");
            option.value = min + '-' + max;
            option.text = min + '-' + max;
            y.add(option);

        }
    }
    if (value >=1000 ) {
        $("#select-price").empty()
        var option = document.createElement("option");
        option.text ="price";
        y.add(option);

        for (var min = 100000; min < 1000000; min += 100) {
            max = min + 100
            var option = document.createElement("option");
            option.value = min + '-' + max;
            option.text = min + '-' + max;
            y.add(option);

        }
    }
    
    $('#filter-container').hide();
    $('#filter-div').fadeIn("slow");
    $("#select-price").select2("open");
}

function priceoption() {
    $('#filter-container').hide();
    $('#filter-div').fadeIn("slow");
    $("#select-country").select2("open");
}

function countryoption() {
    $('#filter-container').hide();
    $('#filter-div').fadeIn("slow");
    $("#select-type").select2("open");
}
//     $('.js-select').select2().on('select2:open', (elm) => {
//   const targetLabel = $(elm.target).prev('label');
//   targetLabel.addClass('selected');
// }).on('select2:close', (elm) => {
//   const target = $(elm.target);
//   const targetLabel = target.prev('label');
//   const targetOptions = $(elm.target.selectedOptions);
//   if (targetOptions.length === 0) {
//     targetLabel.removeAttr('class');
//   }
// });
















// function tailoredoption() {

//     var x = document.getElementById("select-tailored");
//     var y = document.getElementById("select-capacity");
//     var value = x.value;
//     console.log(value);
//     var max = 0;
//     if (value == "0") {
//         document. getElementById("capacity-div"). style. display = "inline";
//         $("#select-capacity").empty()
//         var option = document.createElement("option");
//         option.text ="capacity";
//         y.add(option);

//         for (var min = 0; min < 100000; min += 100) {
//             max = min + 100
//             var option = document.createElement("option");
//             option.value = min + '-' + max;
//             option.text = min + '-' + max;
//             y.add(option);

//         }
//     }
//     if (value == "1") {
//         document. getElementById("capacity-div"). style. display = "inline";
//         $("#select-capacity").empty()
//         var option = document.createElement("option");
//         option.text ="capacity";
//         y.add(option);
//         for (var min = 0; min < 1100; min += 100) {
//             max = min + 100
//             var option = document.createElement("option");
//             option.value = min + '-' + max;
//             option.text = min + '-' + max;
//             y.add(option);

//         }
//     }
//     if (value == "2") {
//         document. getElementById("capacity-div"). style. display = "inline";
//         $("#select-capacity").empty()
//         var option = document.createElement("option");
//         option.text ="capacity";
//         y.add(option);
//         for (var min = 0; min < 600; min += 100) {
//             max = min + 100
//             var option = document.createElement("option");
//             option.value = min + '-' + max;
//             option.text = min + '-' + max;
//             y.add(option);

//         }
//     }
//     if (value == "3") {
//         document. getElementById("capacity-div"). style. display = "inline";
//         $("#select-capacity").empty()
//         var option = document.createElement("option");
//         option.text ="capacity";
//         y.add(option);
//         for (var min = 0; min < 300; min += 100) {
//             max = min + 100
//             var option = document.createElement("option");
//             option.value = min + '-' + max;
//             option.text = min + '-' + max;
//             y.add(option);

//         }
//     }
//     if (value == "4") {
//         document. getElementById("capacity-div"). style. display = "inline";
//         $("#select-capacity").empty()
//         var option = document.createElement("option");
//         option.text ="capacity";
//         y.add(option);
//         for (var min = 100; min < 5000; min += 100) {
//             max = min + 100
//             var option = document.createElement("option");
//             option.value = min + '-' + max;
//             option.text = min + '-' + max;
//             y.add(option);

//         }
//     }
//     if (value == "6") {
//         document. getElementById("capacity-div"). style. display = "inline";
//         $("#select-capacity").empty()
//         var option = document.createElement("option");
//         option.text ="capacity";
//         y.add(option);
//         for (var min = 100; min < 5000; min += 100) {
//             max = min + 100
//             var option = document.createElement("option");
//             option.value = min + '-' + max;
//             option.text = min + '-' + max;
//             y.add(option);

//         }
//     }
//     if (value == "7") {
//         document. getElementById("capacity-div"). style. display = "inline";
//         $("#select-capacity").empty()
//         var option = document.createElement("option");
//         option.text ="capacity";
//         y.add(option);
//         for (var min = 0; min < 500; min += 100) {
//             max = min + 100
//             var option = document.createElement("option");
//             option.value = min + '-' + max;
//             option.text = min + '-' + max;
//             y.add(option);

//         }
//     }
//     if (value == "5") {
//     document. getElementById("capacity-div"). style. display = "none";
//     $('#filter-container').hide();
//     $('#filter-div').fadeIn("slow");
//     $("#select-price").select2("open");

//     } else {

//         $('#filter-container').hide();
//         $('#filter-div').fadeIn("slow");
//         $("#select-capacity").select2("open");

//     }
// }

// function capacityoption() {
//     $('#filter-container').hide();
//     $('#filter-div').fadeIn("slow");
//     $("#select-price").select2("open");
// }

// function priceoption() {
//     $('#filter-container').hide();
//     $('#filter-div').fadeIn("slow");
//     $("#select-country").select2("open");
// }

// function countryoption() {
//     $('#filter-container').hide();
//     $('#filter-div').fadeIn("slow");
//     $("#select-type").select2("open");
// }
// //     $('.js-select').select2().on('select2:open', (elm) => {
// //   const targetLabel = $(elm.target).prev('label');
// //   targetLabel.addClass('selected');
// // }).on('select2:close', (elm) => {
// //   const target = $(elm.target);
// //   const targetLabel = target.prev('label');
// //   const targetOptions = $(elm.target.selectedOptions);
// //   if (targetOptions.length === 0) {
// //     targetLabel.removeAttr('class');
// //   }
// // });
