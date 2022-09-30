// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) { 
    return otherInfo;
}
myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"); // ["CodeSweetly", "Web Developer", "Male"]


// Define a function with three parameters:
function myBio(firstName, lastName, company) { 
    return `${firstName} ${lastName} runs ${company}`;
  }
  
// Use spread to expand an array’s items into individual arguments:
myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]); // “Oluwatobi Sofela runs CodeSweetly”