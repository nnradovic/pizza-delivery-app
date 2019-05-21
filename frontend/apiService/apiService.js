class ApiService {
  
    getPizza = () => {
        return fetch('https://pizza-app-nr.herokuapp.com/feed/posts')
        .then(res => res.json())
        
    
    }


}

export const apiService = new ApiService(); 
