const init = () => {
    const inputForm=  document.querySelector('form').addEventListener('submit',(e)=>{
          e.preventDefault();
          const inputEl=document.getElementById('searchByID');
          console.log(inputEl.value)
  
          fetch(`http://localhost:3000/movies/${inputEl.value}`)
          .then(res=>res.json())
          .then(data=>{
              const title = document.querySelector('section#movieDetails h4');
              const summary = document.querySelector('section#movieDetails p');
  
               title.innerText = data.title;
              summary.innerText = data.summary;
          })
      })
    
  }
  
  document.addEventListener('DOMContentLoaded', init);