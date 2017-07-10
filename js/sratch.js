var mosudi = {};
mosudi.job = "Network Adminisrator";

var getNetworkJob = function() {
	console.log("Mosudi Deployed for job Implementation");
	}

var projectCompleted = 0;
while (mosudi.job === "Network Engineer"){
	getNetworkJob();
	projectCompleted = projectCompleted + 1;
	if (projectCompleted ===10){
		mosudi.job = "Network Engineer";
		}
	}
console.log(mosudi.job);
getNetworkJob();
	console.log("Mosudi Deployed for job Implementation");
