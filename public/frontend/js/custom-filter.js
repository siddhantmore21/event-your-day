

$("#filter-tailored-option").on("click", function (e) {

    $('#filter-container').hide();
    // $('#filter-div').show();
    $('#filter-div').fadeIn("slow");
    $("#select-tailored").select2("open");

  });
  
  $('#filter-capicity').on("click", function (e) {

    $('#filter-container').hide();
    $('#filter-div').fadeIn();
    $("#select-capacity").select2("open");

  });
  
  $('#filter-price').on("click", function (e) {

    $('#filter-container').hide();
    $('#filter-div').fadeIn();
    $("#select-price").select2("open");

  });
  
  $('#filter-country').on("click", function (e) {

    $('#filter-container').hide();
    $('#filter-div').fadeIn();
    $("#select-country").select2("open");

  });
  
  $('#filter-type').on("click", function (e) {

    $('#filter-container').hide();
    $('#filter-div').fadeIn();
    $("#select-type").select2("open");

  });

  $('#filter-btn-sm').on("click", function (e) {

    $('#filter-container').hide();
    $('#filter-div').fadeIn();
    $("#select-tailored").select2("open");

  });

  
   
