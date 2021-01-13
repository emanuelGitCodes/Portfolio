

// How to read a JSON, iterate over it and print in the correct HTML location.
fetch('data.json').then(response => response.json()).then(data => {

  ///////// Goals
  var goal_list = document.getElementsByClassName('goal');
  var number_goals = goal_list.length;

  for (let index = 0; index < number_goals; index++) {
    goal_list[index].innerHTML = data.goals[index].goal;
  }

  ///////// Skills
  var skill_list = document.getElementsByClassName('skill_name');
  var number_skills = skill_list.length;
  var skill_body_list = document.getElementsByClassName('skill_body');


  for (let index = 0; index < number_skills; index++) {
    skill_list[index].innerHTML = data.skills[index].skill_name;
    skill_body_list[index].innerHTML = data.skills[index].skill_body;
  }


  ///////// Projects
  var number_projects = data.projects.length;

  var project_list = document.getElementsByClassName('project_name');
  var project_body_list = document.getElementsByClassName('project_body');
  var project_img_list = document.getElementsByClassName('project_img');

  for (let index = 0; index < number_projects; index++) {
    project_list[index].innerHTML = data.projects[index].project_name;
    project_body_list[index].innerHTML = data.projects[index].project_body;
    project_img_list[index].setAttribute('src', data.projects[index].project_img)
  }


});

/*
  At the moment, I can pull data from the JSON file and show it on the HTML.
  I will figure out how to create a reusable HTML template to pass the
  information over instead of building one by one.
*/

//===========================================================================

/*
#### Study this can help with the template.

#### This would go in the HTML
<template id="comment-template">
  <li class="comment">
    <div class="comment-author"></div>
    <div class="comment-body"></div>
    <div class="comment-actions">
      <a href="#reply" class="reply">Reply</a>
    </div>
  </li>
</template>


#### This would be in the JS
// An array of comments.
var comments = [
  {'author': 'Joe', 'body': 'I love this product.'},
  {'author': 'Mary', 'body': 'Great idea. I have got to get me one of these!'},
  {'author': 'Eric', 'body': 'These things are fantastic. I bought three.'}
];

// Get a reference to the comments list in the main DOM.
var commentsList = document.getElementById('comments');

// Loop through each of the comments and add them to the comments list.
for (var i = 0; i < comments.length; i++) {
  var comment = comments[i];
  var tmpl = document.getElementById('comment-template').content.cloneNode(true);
  tmpl.querySelector('.comment-author').innerText = comment.author;
  tmpl.querySelector('.comment-body').innerText = comment.body;
  commentsList.appendChild(tmpl);
}

*/

