//bio object
var bio=
{
   "name":"kunal kalra",
   "role":"web-developer",
   "contacts":[
   	{"mobile":"+918559920975"},
   	{"email":"kunalkalra121@gmail.com"},
   	{"github":"kunal121"},
     {"twitter":"kunal13145"},
     {"location":"Chandigarh"}
     ],
   "biopic":"images/pic.jpg",
   "wlcmmsg":"you only fail when you stop trying.",
   "skills":["Html","Css","Javascript","Bootstrap","C"]
};

//display bio
bio.displayBio=function()
{
$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts[0].mobile));
$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts[1].email));
$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts[2].github));
$("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts[3].twitter));
$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts[4].location));
$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.wlcmmsg));
if(bio.skills.length>0)
{
  $("#header").append(HTMLskillsStart);
  for(i in bio.skills)
  {
  var formattedSkills=HTMLskills.replace("%data%",bio.skills[i]);
  $("#skills").append(formattedSkills);
  }
}
}
bio.displayBio();

//work object
var work=
{
  "jobs":[{
  "employer": "Chitkara University",
  "title": "Student",
  "dates": "2015 - 2019",
  "location": "Chitkara university, Punjab",
  "description": "I am pursuing my Btech"
    }]
};
//display work
work.displayWork=function()
{
  $("#workExperience").append(HTMLworkStart);
   for(var i in work.jobs)
   {
      $(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer)+HTMLworkTitle.replace("%data%", work.jobs[i].title));
      $(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
      $(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
      $(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));

  }
}
work.displayWork();
//project object
var project=
{
  "projects":[{
  "title":"coffee-shop-website",
  "dates":"4/12/2016-16/12/2016",
  "projectdescription":"A simple website using HTML,CSS,Bootstrap and little bit of jQuery",
  "projectimage":"images/coffee-shop-website.png"
   },
   {
   "title":"Movie-website",
   "dates":"1/10/2016-5/10/2016",
   "projectdescription":"A movie website using python",
   "projectimage":"images/Movie-website.png"
   },
   {
     "title":"Madlib game",
     "dates":"8/10/2016-12/10/2016",
     "projectdescription":"A game using python",
     "projectimage":"images/Madlib.png"
   },
   {
     "title":"Responsive web page",
     "dates":"1/11/2016-2/11/2016",
     "projectdescription":"Responsive web page using bootstrap",
     "projectimage":"images/card.png"
   }]
};

//display project
project.displayproject=function()
{
  $("#projects").append(HTMLprojectStart);
  for(var i in project.projects)
  {
    $(".project-entry").append(HTMLprojectTitle.replace("%data%",project.projects[i].title));
    $(".project-entry").append(HTMLprojectDates.replace("%data%",project.projects[i].dates));
    $(".project-entry").append(HTMLprojectDescription.replace("%data%",project.projects[i].projectdescription));
    $(".project-entry").append(HTMLprojectImage.replace("%data%",project.projects[i].projectimage));
  }
}
project.displayproject();
//project education
var education={
      "schools":[
        {
          "name":"Smjt sr sec school",
          "location":"Bikaner(334001),Rajasthan,India",
          "degree":"High School",
          "majors":"PCM",
          "dates":"2014"

        },
        {
          "name":"Chitkara University",
          "location":"Rajpura,Punjab(140401)",
          "degree":"Btech",
          "majors":"CSE",
          "dates":"2015-2019"
        }
      ],
    "onlinecourse":[
        {
          "title":"Intro to programming Nanodegree",
          "school":"Udacity",
          "Date":"2016",
          "url":"https:www.udacity.com/course/intro-to-programming-nanodegree--nd000"
        },
        {
          "title":"Intro to HTML and Css",
          "school":"Udacity",
          "Date":"2016",
          "url":"https:www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
          "title":"Intro to Git and Github",
          "school":"Udacity",
          "Date":"2016",
          "url":"https:www.udacity.com/course/how-to-use-git-and-github--ud775"
        }
      ]
}
//display education
education.displayeducation=function()
{
$("#education").append(HTMLschoolStart);
for(var i=0;i<education.schools.length;i++)
  {
    $(".education-entry").append(HTMLschoolName.replace("%data%",education.schools[i].name)+HTMLschoolDegree.replace("%data%",education.schools[i].degree));
    $(".education-entry").append(HTMLschoolDates.replace("%data%",education.schools[i].dates));
    $(".education-entry").append(HTMLschoolMajor.replace("%data%",education.schools[i].majors));
    $(".education-entry").append(HTMLschoolLocation.replace("%data%",education.schools[i].location));
  }

  $(".education-entry").append(HTMLonlineClasses);

  for(var j=0;j<education.onlinecourse.length;j++)
  {
    $(".education-entry").append(HTMLonlineTitle.replace("%data%",education.onlinecourse[j].title)+HTMLonlineSchool.replace("%data%",education.onlinecourse[j].school));
    $(".education-entry").append(HTMLonlineDates.replace("%data%",education.onlinecourse[j].Date));
    $(".education-entry").append(HTMLonlineURL.replace("%data%",education.onlinecourse[j].url));
  }
}

education.displayeducation();
$("#mapDiv").append(googleMap);
bio.display_footer_contacts=function()
{
  $("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts[0].mobile));
  $("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts[1].email));
  $("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts[2].github));
  $("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts[3].twitter));
  $("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts[4].location));
}
bio.display_footer_contacts();
