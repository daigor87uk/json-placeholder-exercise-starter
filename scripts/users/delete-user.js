 function Remove() {
  const requestSelector = document.querySelector('#method');
  const dataTable = document.querySelector('#data-table');
  const dataForm = document.querySelector('#data-form');
  const userIdField = document.querySelector('#user-id-field');
  const id = document.querySelector('#id');
 }
  function toggleIdVisibility(isVisible) {
      if (isVisible)  {
          if (userIdField.classList.contains('hide')) userIdField.classList.remove('hide');
      } else {
          if (!userIdField.classList.contains('hide')) userIdField.classList.add('hide');
      }
  }

  function Remove() {

    const formData = new FormData(dataForm);
    const formDataObject = Object.fromEntries(formData.entries());
   
    setStatus('PREPARING POST REQUEST');
  }

    function Remove() {
      const [users, setUsers] = useState();  
      const pressHandler = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: 'DELETE'
        })
          .then(() => {

            return fetch(`https://jsonplaceholder.typicode.com/users`)
          })
          .then(res => res.json())
          .then(res => {
            setUsers(res);
          })
     }
    }
    
      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users') 
          .then(res => res.json())
          .then(res => {
            setUsers(res);
          })
      })

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
  }
  
  );