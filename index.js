
// // How to read a JSON, iterate over it and print in the correct HTML location.
// fetch('data.json').then(response => response.json()).then(data => {

//   ///////// Goals
//   var goal_list = document.getElementsByClassName('goal');
//   var number_goals = goal_list.length;

//   for (let index = 0; index < number_goals; index++) {
//     goal_list[index].innerHTML = data.goals[index].goal;
//   }

//   ///////// Skills
//   var skill_list = document.getElementsByClassName('skill_name');
//   var number_skills = skill_list.length;
//   var skill_body_list = document.getElementsByClassName('skill_body');

//   for (let index = 0; index < number_skills; index++) {
//     skill_list[index].innerHTML = data.skills[index].skill_name;
//     skill_body_list[index].innerHTML = data.skills[index].skill_body;
//   }

//   ///////// Projects
//   var number_projects = data.projects.length;

//   var project_list = document.getElementsByClassName('project_name');
//   var project_body_list = document.getElementsByClassName('project_body');
//   var project_img_list = document.getElementsByClassName('project_img');
//   var project_url_list = document.getElementsByClassName('project_url');

//   for (let index = 0; index < number_projects; index++) {
//     project_list[index].innerHTML = data.projects[index].project_name;
//     project_body_list[index].innerHTML = data.projects[index].project_body;
//     project_img_list[index].setAttribute('src', data.projects[index].project_img);
//     project_img_list[index].setAttribute('alt', data.projects[index].project_img_alt);
//     project_url_list[index].setAttribute('href', data.projects[index].project_url);
//   }

// });

$('.card').on('click', function () {
  $(this.getElementsByClassName('card_lower_body')[0]).slideToggle();
})