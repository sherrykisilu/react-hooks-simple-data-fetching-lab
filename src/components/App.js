import React,{useEffect,useState} from "react"
function App(){
      const [dogImageUrl, setDogImageUrl] = useState();
    
      useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
          .then(response => response.json())
          .then(data => {
            setDogImageUrl(data.message);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);
    
      return (
        <div>
          <h1>Random Dog Image</h1>
          {!dogImageUrl &&<p>Loading...</p>}
          {dogImageUrl && <img src={dogImageUrl} alt="A Random Dog" />}
        </div>
      );
    }
    
    export default App;
    
