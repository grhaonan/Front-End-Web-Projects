/*
This is empty on purpose! Your code to build the resume will go here.
*/





// Data Parts
var work = {
    // Recoding work related information
    jobs:[
    {
        employer: "Ericsson",
        title: "Core Network Engineer",
        location: "Beijing",
        dates: "1st March 2010 - 1st March 2013",
        description: "The Network Engineer performs design, optimization and audit of a network to meet the customer requirements." +
        "The Network Engineer role is applicable for design & optimization of RAN, BBA, Transmission, Core, OM and Services Networks." +
        "The Network Engineer can be engaged in the whole process from pre-sales of services and networks to service delivery and acceptance."
    },
    {
        employer: "Ericsson",
        title: "Project Manager",
        location: "Beijing",
        dates: "2nd March 2013 - 8th May 2015",
        description: "Defining the project scope together with Product and System Management, secure the necessary resources with Line Management," +
        "and be responsible for project time plan, budget planning/costs, quality and risks by planning, monitoring and controlling all activities to" +
        "get your project successfully executed within time, scope and budget."
    }
    ],
    // function to append work related information to html
    display: function (){
        $("#workExperience").append(HTMLworkStart);
        work.jobs.forEach (function(element){
            // create new div for work experience
            // concat employer name and title
            var formattedEmpolyer = HTMLworkEmployer.replace("%data%", element.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", element.title);
            var formattedEmpolyerTitle = formattedEmpolyer + formattedTitle;
            $(".work-entry:last").append(formattedEmpolyerTitle);

            // append work dates
            var formattedDates = HTMLworkDates.replace("%data%", element.dates);
            $(".work-entry:last").append(formattedDates);
            // append work location
            var formattedLocation = HTMLworkLocation.replace("%data%", element.location);
            $(".work-entry:last").append(formattedLocation);
            // append work description
            var formattedDescription = HTMLworkDescription.replace("%data%", element.description);
            $(".work-entry:last").append(formattedDescription);
        });
    }
};
var projects = {
    // Recoding projects related information
    projects:[
    {
        title: "Volvo Auto Driving",
        dates: "2010-05-01",
        description: "Testing new auto driving framework",
        images: [
        "http://www.medpireland.com/communities/3/004/011/419/023/images/4583491184.jpg"
        ]
    },
    {
        title: "LTE Integration",
        dates: "2013-10-01",
        description: "Testing new LTE framework",
        images: [
        "http://sertekmedia.com/wp-content/uploads/2014/09/project-management.jpg"
        ]
    }
    ],
// function to append projects related information to html
    display: function (){
        $("#projects").append(HTMLprojectStart);
        projects.projects.forEach (function(element){

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", element.title);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", element.dates);
            $(".project-entry:last").append(formattedProjectDates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", element.description);
            $(".project-entry:last").append(formattedProjectDescription);
            var formattedProjectImage = HTMLprojectImage.replace("%data%", element.images);
            $(".project-entry:last").append(formattedProjectImage);
        });
    }
};


var bio = {
    // Recoding bio related information
    name: "Dustin Liu",
    role: "PHP Engineer",
    welcomeMessage: "Welcome to my page",
    contacts: {
        mobile: "18601163385",
        email: "liucong.haonan@gmail.com",
        github: "grhaonan",
        location: "Beijing"
    },
    skills:["Project Management", "Full Stack Development", "Data Analysis"],
    biopic: "http://2.images.southparkstudios.com/default/image.jpg?quality=0.8",
    // function to append bio related information to html
    display: function(){
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);

        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);


        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);


        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);

        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(element){
            var formattedSkill = HTMLskills.replace("%data%", element);
            $("#skills").append(formattedSkill);
        });
    }
};

var education = {
// Recoding school related information
    schools: [
    {
        name: "BeiHang University",
        location: "Beijing, China",
        degree: "BA",
        dates: "2003-2007",
        url: "www.beihang.edu",
        majors: [
        "Telecommunication Engineering"
        ]
    },
    {
        name: "Chalmers University Of Technology",
        location: "Gothenburg, Sweden",
        degree: "Master",
        dates: "2007-2009",
        url: "www.chalmers.se",
        majors: [
        "Telecommunication Engineering"
        ]
    }
    ],
    onlineCourses:[
    {
        title: "Frontend Developer NanoDegree",
        school: "Udacity",
        dates: "2017",
        url: "www.udacity.com"
    }
    ],
     // function to append school related information to html
    display:function(){
        $("#education").append(HTMLschoolStart);
        education.schools.forEach(function(element){

            var formattedEducationName = HTMLschoolName.replace("%data%", element.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", element.degree);
            var formattedEducationNameAndDegree = formattedEducationName + formattedDegree;
            $(".education-entry:last").append(formattedEducationNameAndDegree);

            var formatteedDates = HTMLschoolDates.replace("%data%", element.dates);
            $(".education-entry:last").append(formatteedDates);

            var formattedLocation = HTMLschoolLocation.replace("%data%", element.location);
            $(".education-entry:last").append(formattedLocation);

            var formattedMajor = HTMLschoolMajor.replace("%data%", element.majors);
            $(".education-entry:last").append(formattedMajor);
        });
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        education.onlineCourses.forEach(function(element){
            var formattedOnlineCourseTitle = HTMLonlineTitle.replace("%data%", element.title);
            var formattedOnlineCourseSchool = HTMLonlineSchool.replace("%data%", element.school);

            var formattedOnlineCourseTtileAndSchool = formattedOnlineCourseTitle + formattedOnlineCourseSchool;

            $(".education-entry:last").append(formattedOnlineCourseTtileAndSchool);

            var formattedOnlineCourseDates = HTMLonlineDates.replace("%data%", element.dates);
            $(".education-entry:last").append(formattedOnlineCourseDates);

            var formattedOnlineCourseUrl = HTMLonlineURL.replace("%data%", element.url);
            $(".education-entry:last").append(formattedOnlineCourseUrl);

        });
    }
};

// Append google map
var map = {

    display:function(){
        $("#mapDiv").append(googleMap);
    }
};

//Displaying Bio Info
bio.display();

//Displaying Work Info
work.display();

//Displaying Projects Info
projects.display();

//Displaying Education Info
education.display();

//Displaying Map Info
map.display();




