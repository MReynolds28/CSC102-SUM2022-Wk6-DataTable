function checkCreds(){
    console.log("checkCreds() started");
   //variables that need to be checked for the necessary credentials to login
   var firstName;
   var lastName;
   var fullName;
   var badgeNumb; 
   var fullNameLength;
    //this is the code to allow the data from the form to be injected, allowing the credentials 
    //to be authorized or denied as well as logging that information in the console
    firstName = document.getElementById("fName").value;
    console.log(firstName);
    lastName= document.getElementById("lName").value;
    console.log(lastName);
    fullName = firstName + " " + lastName;
    console.log(fullName);

    badgeNumb = document.getElementById("BadgeID").value;
    console.log("Badge number = " + badgeNumb); 
   
    //this will allows us to check the character count to see if the user will be authorized or denied
    //it will also record the last name in the console log
    fullNameLength = fullName.length;
    console.log(fullNameLength);
    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML = "Full name is incorrect, please resubmit";
   //the code below allows us to check the users badge number to see if it is above 3 digits
    } else if (badgeNumb > 999 || badgeNumb < 1) {
        //check badge id number
        document.getElementById("loginStatus").innerHTML = 
            "Badge Number is incorrect, please resubmit";
    }else {
       //a pop up alert letting you know you have been logged in
        alert("Crediental Submission successful, welcome " + fullName + "!");
        //this last part of the code pushes you to the UAT Space page after the alert if all the 
        //credentials the user entered have been verified and authorized
        location.replace("./UATSpace.html");
    }
    
}