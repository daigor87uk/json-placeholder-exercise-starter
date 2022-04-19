(function() {
  const requestSelector = document.querySelector('#method');
  const dataTable = document.querySelector('#data-table');
  const dataForm = document.querySelector('#data-form');
  const userIdField = document.querySelector('#user-id-field');
  const id = document.querySelector('#id');

  function toggleIdVisibility(isVisible) {
      if (isVisible) {
          if (userIdField.classList.contains('hide')) userIdField.classList.remove('hide');
      } else {
          if (!userIdField.classList.contains('hide')) userIdField.classList.add('hide');
      }
  }

  function remove() {
    // form data as a js object, all inputs are directly accessible via dot notation
    const formData = new FormData(dataForm);
    const formDataObject = Object.fromEntries(formData.entries());
    // { username: "", street: "", city: "", etc...}
    // - street and city should be in a nested address object but are not
   
    setStatus('PREPARING POST REQUEST');
    
    // this fetch request has options as the second parameter
    export default function App() {
      const [users, setUsers] = useState();  
      const pressHandler = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: 'DELETE'
        })
          .then(() => {
    
            // Issue GET request after item deleted to get updated list
            // that excludes user of id
            return fetch(`https://jsonplaceholder.typicode.com/users`)
          })
          .then(res => res.json())
          .then(res => {
            setUsers(res);
          })
     }
    
      /* request API to json.placeholder to get users */
      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') 
          .then(res => res.json())
          .then(res => {
            setUsers(res);
          })
      })
}

  requestSelector.addEventListener('change', function(event) {
      // access the current element that we are adding an event to with 'this'
      if (this.value == 'ALL') {
          toggleIdVisibility(false);
      } else if (this.value == 'ID') {
          toggleIdVisibility(true);
      }
  });

  dataForm.addEventListener('submit', function(event) {
    console.log('Form Submit Pressed')
    event.preventDefault(); // prevent default page refresh on form submission
    remove()

  });

})();