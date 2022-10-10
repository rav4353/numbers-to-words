function number(num) {

    switch (num) {
      case "0":
        document.write("Zero ");
        break;

     
      case "1":
        document.write("One ");
        break;

  
      case "2":
        document.write("Two ");
        break;

   
      case "3":
        document.write("Three ");
        break;


      case "4":
        document.write("Four ");
        break;

      case "5":
        document.write("Five ");
        break;

      case "6":
        document.write("Six ");
        break;

      case "7":
        document.write("Seven ");
        break;

      case "8":
        document.write("Eight ");
        break;

      case "9":
        document.write("Nine ");
        break;
    }
  }

  function word(inp) {
    var i,
      length = inp.length;
    for (i = 0; i < length; i++) {
      number(inp[i]);
    }
  }

  var inp = "123";
  word(inp);