var inputfields = document.querySelectorAll('input')       // collect all input fields
for (var i = 0; i < inputfields.length; i++)               // loop through all fields on site
  if (inputfields[i].type === 'password'){                 // check if field is a password field
    inputfields[i].style.border = '2px solid red'          // put a red line around field
    inputfields[i].placeholder = '¡Non-secure connection!' // change the placeholder
  }
