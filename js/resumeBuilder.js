/*
This is empty on purpose! Your code to build the resume will go here.
 */



var skills = 
	["Automation (Ansible)", "Virtualization and Cloud Computing", "Windows and Linux Servers Administration", "Network Architecture Design", "Implementation and Administration", "Routing, Link Bonding, Redundancy, Fail-over and Clustering", "VPN, Firewall & Intrusion Detection System", "Storage Management (GlusterFS, SAN and NAS)", "Python Programming and Linux Shell/CGI Scripting", "Monitoring Systems (Icinga2)", "Data Center Collocation On-boarding procedures"];


//$("#main").append(skills[0]);
//$("#main").append(skills.length);

var bio = {
	"name" : "Mosudi Isiaka",
	"role" : "Data Center Manager",
	"contacts": {
		"mobile": "09086787840",
		"email": "efundayo@gmail.com",
		"github":"efundayo",
		"twitter":"@efundayo",
		"location": "Lagos, Nigeria and remote"
	},
	"welcomeMessage":"Alive and Proud, thanks to The Almighty",
	"skills": [
"Automation (Ansible)", "Virtualization and Cloud Computing", "Windows and Linux Servers Administration", "Network Architecture Design", "Implementation and Administration", "Routing, Link Bonding, Redundancy, Fail-over and Clustering", "VPN, Firewall & Intrusion Detection System", "Storage Management (GlusterFS, SAN and NAS)", "Python Programming and Linux Shell/CGI Scripting", "Monitoring Systems (Icinga2)", "Data Center Collocation On-boarding procedures"
],
	"bioPic": "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/68735_155605541146808_6458703_n.jpg?oh=6d490e6907705040be3d242f3f111bc1&oe=5A0E5B1F"

}

//$("#main").append(bio.name);


/*$("#main").append(skills[1]);
$("#main").append(skills[2]);
$("#main").append(skills[3]);
$("#main").append(skills[4]);
$("#main").append(skills[5]);
$("#main").append(skills[6]);
$("#main").append(skills[7]);
$("#main").append(skills[8]);
$("#main").append(skills[9]);
$("#main").append(skills[10]);
$("#main").append(skills[11]);*/

bio["city"] = "Lagos City";
bio["email"] = "efundayo@gmail.com";

//$("#main").append(bio.city);


/*
var work = {};
work.position = "Data Center Manager";
work.employer = "Server Africa";
work.year = 10;
*/

/*var education = {};
education["name"] = "Federal University Of Technology, Minna";
education["year"] = "1998-2004";
education["city"] = "Bosso, Minna"; */


var education = {
	"schools":[
		{
		"name": "Federal University of Technology, Minna",
		"location": "Bosso, Minna, Niger State",
		"degree": "B.Engr",
		"major": "Computer Engineering",
		"dates": 2004,
		"url": "http://mioemi.xyz"
		},
		{
		"name": "Federal University of Technology, Minna",
		"location": "Bosso, Minna, Niger State",
		"degree": "Masters",
		"major": "Telcom",
		"dates": 2017,
		"url": "http://mioemi.xyz"		
		}
	],
	"onlineCourses": [
		{
		"title": "Introduction to Computer Science, Python",
		"school": "EDx",
		"date":	2015,
		"url": "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiEyqrayfrUAhXEB8AKHTErDisQFggjMAA&url=https%3A%2F%2Focw.mit.edu%2Fcourses%2Felectrical-engineering-and-computer-science%2F6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016%2Findex.htm&usg=AFQjCNFUNAkT3EbmgmxRRG1yoBEggO6lpQ"
		}
	]
}



//$("#main").append(work["position"]);
//$("#main").append(education.name);

var work = {
"jobs": [
	{
	"title": "Data Centre Manager",
	"employer": "One Network",
	"location": " Gbagada, Lagos ",
	"dates": "Feb 2012 – Present",
	"description": "Responsibilities include install, configure, and support he LANs, WANs and Internet systems, Data Center Collocation Onboarding, maintain network and workstation hardware and software, monitor network to ensure network availability to all system user and perform necessary maintenance to support network availability, supervise and train network support technicians and coordinate network security measures, manage capacity planning activities to enhance the performance of the network resources, performance routine backups and archival of files on the network to assist with disaster recovery, analyse user support statistics and other data and recommend appropriate measures, assist in maintaining the operating system and security software utilized on the network, Interact with vendors and service providers, responsibility for effective cost management of the organization expenditure on Network/Server infrastructures."
	},
	{
	"title": "Chief Technology Officer/Managing Partner (Technical)",
	"employer": "Server Africa",
	"location": "Lagos, Nigeria ",
	"dates": "Dec 2016 – May 2017",
	"description": "Responsible for all technical requirements for a start-up company that will, eventually, evolves into a reliable and secure hosting company but with emphasis on affordable pricing. Leverage on license free open source technologies to deliver cutting edge enterprise infrastructure solutions."
	},
	{
	"title": "Technical Reviewer",
	"employer": "Packt Publishing Limited",
	"location": " Birmingham , United Kingdom ",
	"dates": "Jun 2015 – Dec 2015 ",
	"description": "Responsibility: Individual contributor, code review and validity.Project Completed:Mastering Python High Performance by Fernando Doglio, Published Sept. 2015, Mastering Linux Network Administration by Jay Lacroix, Published Nov. 2015."
	},
	{
	"title": "Network Engineer/Architect",
	"employer": "Daybreak Afrika Technologies",
	"location": "Oworonshoki, Lagos ",
	"dates": "Nov 2006 – Jan 2012",
	"description": "Responsible for technical operations, provide support in resolving network problems either directly on site or via telephone; engineer, design and conduct, trade off studies on network projects; conducting site surveys; Maintenance/service support of installed locations, training on wireless/wired; LAN Technology and Linux server administration."
	},
	{
	"title": "Wireless Network Engineer",
	"employer": "Naira Dot Com",
	"location": " Gbagada, Lagos",
	"dates": "Nov 2004 – Feb 2005",
	"description": " Conducting site surveys,  Maintenance/service support of installed locations, Preparation of training and certification materials, Responsibility to technical operations manager, Engineer, design and conduct trade off studies on network projects for clients, Implementing and administering IEEE 802.11 family standard of radio network usin off shelf and proprietary radio and devices both in the license-free and licensed band; Provide support in resolving network problems either directly on site or via telephone Implementing and administering Microsoft family of operating systems."
	},
	{
	"title": "Network Engineer (Internship)",
	"employer": "Datacomm Express Ltd" ,
	"location": "Commercial Avenue, Yaba Lagos ",
	"dates": "June 2002 – Nov. 2004(During school closure as a result of industrial action, student unrest, holidays, IT and other reasons)",
	"description": " Conducting site surveys, Building wireless network for last mile data delivery, Design, implementation and support of {X} AN {X-Wide, Personal, and Local},  Design, installation and, maintenance of LAN and structured office cabling infrastructures  Implementing and administering IEEE 802.11 family standard of radio network using off shelf and proprietary radio and devices both in the license-free and licensed band, Provide support in resolving network problems either directly on site or via telephone Setup and manage Internet connection using SMTP, DNS, SNMP "
}]
}

var projects = {
"projects":
[
	{
	"title": "Ansible- Automate my IT solutions going forward",
	"date": "2017",
	"images": "images/fry.jpg",
	"description": "Automation with Ansible removes the complexity that comes with every IT environment. I will be automating the whole process from provisioning of ec2 AWS Ubuntu server instance to installation of Docker, Icinga2, Icingaweb2 with dependencies, prerequisite application suits, systems update and swap creation and action.."
	},
	{
	"title" :"ICINGA 2- The best of opensource data center infrastructure monitoring",
	"date": "2016",
	"images": "images/fry.jpg",
	"description": "Icinga 2 features a new configuration format that is intuitive to write, efficient to execute and even adjusts to the changing conditions of your environment at run-time (This Deployment document remains valid for use on Ubuntu 14.04.4 LTS..."
	},
	{
	"title" :"Docker Installation on AWS Instance",
	"date": "2016",
	"images": "images/fry.jpg",
	"description": "Docker installation on Ubuntu Linux server AWS Instance. Docker containerization is a little different than hypervisor-based server virtualization. But encapsulating an application in a container with an operating environment achieves many of the benefits of loading and application onto a virtual machine (This Deployment document remains valid for use on Ubuntu 14.04.4 LTS..."
	},
	{
	"title" :"One Network - Data Center Onboarding",
	"date": "2015",
	"images": "images/fry.jpg",
	"description": "KVM virtualisation infrastructure on Ubuntu Linux server at MTN Nigeria collocation facility with own storage replication of virtual machines at a remote data centre collocation facility in UK using GlusterFS. Provide secure online availability of Servers(virtual machines) services and applications (Backend and..."
		},
	{
	"title" :"ChamsCity - Network Infrastructure and Management",
	"date": "2010",
	"images": "images/fry.jpg",
	"description": "Microsoft Active Directory Domain Controller using Windows server 2008 R2 and the integration of not less that one thousand Workstations(Microsoft Windows Vista and Microsoft Windows XP operating systems) at the two ChamsCity Digital Mall locations (ChamsCity, Ikeja and ChamsCity, Central Business District, Abuja) Firewall with advance web filtering using a FreeBSD ..."
		},
	{
	"title" :"LASRRA - Long Distance Point-to-Point",
	"date": "2011",
	"images": "images/fry.jpg",
	"description": "A single hop point to point wireless link between Lagos State Ministry of Science and Technology, State Secretariat, Alausa, Ikeja and Library, Sangotedo, Eti Osa Local Government Area, Lagos. The link span is about 35 kilometer..."
		},
	{
	"title" :"Open Source Routing Platform",
	"date": "2010",
	"images": "images/fry.jpg",
	"description": "There was a need for high resource router with capacity to handle network traffic for more than a thousand connected workstations, with not less than 30 access layer switches, about ten aggregation layer switches as well as a core switch..."
		},
	{
	"title" :"Open Source Firewall Open Source",
	"date": "2010",
	"images": "images/fry.jpg",
	"description": "Firewall, NAT, Port forwarding, VPN, IDS and redundancy/failover. "
		},
	{
	"title" :"Web/Mail Hosting Control Panel Open Source",
	"date": "2012",
	"images": "images/fry.jpg",
	"description": " Web server management (Apache2 and nginx), Mail server management (with virtual mail users), DNS server management (BIND and MyDNS), Virtualization (OpenVZ), Administrator, reseller and client login"
	}
]
}










function myProfile(){

//var name = "Mosudi Isiaka";

var formattedName = HTMLheaderName.replace("%data%", bio.name);


//var role = "Data Center Manager";

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var n = bio.skills.length - 1;	
	for(i=0;i<n;i++){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
		//console.log(i)
		}
}
//

for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);


}


}
myProfile();



projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0){
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
				}
			}
	}
}

projects.display();

$(document).click(function(loc) {
	var x = loc.pageX;	
	var y = loc.pageY;	
logClicks(x,y);
	});

function locationizer(work_obj){
	var locationArray = [];
	
	for (job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
		}
	return locationArray;
	}
console.log(locationizer(work));

function inName(name){
	name = bio.name;
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " +name[1];
}
//console.log(inName(name));
//$("#main").append(internationalizeButton);

