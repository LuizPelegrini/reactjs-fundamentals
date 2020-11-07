import React, { useEffect, useState } from "react";

import api from './services/api';
import "./styles.css";

function App() {
  // ***** LOGIC *****
  // to handle UI changes when the repo variable changes
  const [repos, setRepos] = useState([]);

  useEffect(()=>{
    api.get('/repositories')
       .then(response => setRepos(response.data))
       .catch(err => console.error(err));
  }, []);

  // add a new default Repo
  async function handleAddRepository() {
    // create new dummy repo
    const project = {
      title: 'Novo Repo',
      url: 'https://github.com',
      techs: [
        'NodeJS'
      ]
    }

    // POST request to server API passing the data
    const response = await api.post('/repositories', project);

    // update UI with new repo
    setRepos([...repos, response.data]);
  }

  // remove a Repo
  async function handleRemoveRepository(id) {
    // DELETE request to server API
    const response = await api.delete(`/repositories/${id}`);

    // if the delete operation was successfull...
    if(response.status === 204){
      // ...remove repo from list
      const index = repos.findIndex(repo => repo.id === id);
      repos.splice(index, 1);
      // ...update UI
      setRepos([...repos]);
    }
  }

  // **** PRESENTATION ****
  return (
    <div>
      <ul data-testid="repository-list">
        { 
          repos.map(repo => 
            <li key={repo.id}>{repo.title} 
              <button onClick={() => handleRemoveRepository(repo.id)}>Remover</button>
            </li>
          )
        }
      </ul>
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
