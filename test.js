const fetch = require("node-fetch");

console.log('qq')

fetch('https://pypi.org/pypi?%3Aaction=list_classifiers')
  .then(response => response.text())
  // .then(text => console.log(text))
  .then(text => 
    {
      let dict = {}
      let lines = text.split('\n');
      for(let i = 0; i < lines.length; i++){
        let topicLine = lines[i].split(' :: ', 2)
        let key = topicLine[0]
        let value = topicLine[1]      
        if(!(key in dict)) {
          dict[key] = []
        }
        dict[key].push(value)
      }    
      console.log(dict)
    }
    )
