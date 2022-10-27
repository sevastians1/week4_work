const updateColor = (color) => {
    let e = document.getElementsByClassName("alpha") // will return the [*first*] element that has an id equal to 'one'
    if (e) {
        for (const element of e){
            element.style.color = color
        }
      
    }
  }
  const sayHello=function(){console.log("hello")}

const insertNewElement=()=>{
    console.log("insert")
    let newDiv=document.createElement("div")
    newDiv.innerHTML="this is a new div"
    newDiv.className="alpha"
    newDiv.addEventListener("mousemove",(event)=>{
        console.log("event happened")
        console.log(event.target.style)
        event.target.style.backgroundColor=`Blue`

    })
    newDiv.addEventListener("mouseout", (evt) => {
        evt.target.style.backgroundColor = "initial"
      })
      let parentDiv = document.getElementById("parent-div")
  if (parentDiv) {
    parentDiv.appendChild(newDiv) 
  }
}

const handleFormSubmit = (evt) => {
    evt.preventDefault() // this will prevent the default browser behavior (page refresh)
  
    const formData = new FormData(evt.target);
    const formProps = Object.fromEntries(formData);
    
    // print out all the field names and values
    for (let fieldName in formProps) {
      console.log(fieldName, formData.get(fieldName))
    }
  
    showGreeting(formData.get("name"))
    
    // // alternate way (without using FormData)
    
    // let nameElem = evt.target.elements[0]
    // console.log(nameElem.name, nameElem.value)
    // let favColorElem = evt.target.elements[1]
    // console.log(favColorElem.name, favColorElem.value)
    
    // showGreeting(nameElem.value)
  }
    
    
  const showGreeting = (name) => { // update our function to take in a parameter
    let greetingOutput = document.getElementById("output")
    if (greetingOutput) {
      greetingOutput.innerHTML = "Hello " + name + "!"
    }
  }