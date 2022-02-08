// ========================
// Variables
// ========================
const endpoint = 'YOUR_API_URL';
const auth = {
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
}
const body = document.body;
const todoList = document.createElement('ul');
body.insertAdjacentElement('afterbegin', todoList)

// Fetch data of a specific user
// axios({
//   method: 'get',
//   url: `${endpoint}/users/${auth.username}`
// })
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));

// Fetching tasks
axios({
  method: 'get',
  url: `${endpoint}/tasks`,
  auth: {
    username: auth.username,
    password: auth.password
  }
})
  .then(response => {
    const tasks = response.data;
    tasks.forEach(task => {
      const taskElement = document.createElement('li');
      taskElement.innerHTML = task.name;
      todoList.appendChild(taskElement);
    })
  })
  .catch(error => console.log(error));

// Add a new task
// axios({
//   method: 'post',
//   url: `${endpoint}/tasks`,
//   auth,
//   data: {
//     name: 'Learn a new thing today'
//   }
// })
//   .then(response => {
//     const task = response.data;
//     const taskElement = document.createElement('li');
//     taskElement.innerHTML = task.name;
//     todoList.appendChild(taskElement);
//   })
//   .catch(error => console.log(error));

// Update a task
// axios({
//   method: 'put',
//   url: `${endpoint}/tasks/TASK_ID`,
//   auth,
//   data: {
//     name: 'Take a day off'
//   }
// })
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));

// Delete a task
// axios({
//   method: 'delete',
//   url: `${endpoint}/tasks/TASK_ID`,
//   auth
// })
//   .then(response => console.log(response))
//   .catch(error => console.log(error));
