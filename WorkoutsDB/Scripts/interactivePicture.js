console.log("interactivePicture.js loaded");

var rsr = Raphael('intMap', '578', '538');

var muscleGroups = [];

var Pec_Mayoris = rsr.path("M 144,116,142,149,159,156,183,150,190,130,169,116 z M 90,128,94,150,117,156,135,149,134,117,109,117 z");

Pec_Mayoris.attr({ id: 'Pec_Mayoris', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Pec Mayoris', 'selected': false, 'selected': false });

muscleGroups.push(Pec_Mayoris);

var Rectus_Abdominis = rsr.path("M 155,159,159,171,160,205,160,241,155,255,152,269,143,278,142,221,141,179,142,154 z M 124,158,136,154,137,179,136,221,135,277,126,268,117,238,117,206,118,172 z");

Rectus_Abdominis.attr({ id: 'Rectus_Abdominis', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Rectus Abdominis', 'selected': false });

muscleGroups.push(Rectus_Abdominis);

var Oblique = rsr.path("M 185,169,182,154,161,160,164,171,165,218,178,207,180,185,182 z M 100,206,98,190,93,169,96,154,117,159,113,169,113,219 z");

Oblique.attr({ id: 'Oblique', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Oblique', 'selected': false });

muscleGroups.push(Oblique);

var Neck = rsr.path("M 153,72,141,96,141,110,168,112,190,124,187,104,172,100,160,89 z M 88,124,91,105,106,100,118,88,126,74,137,97,136,110,110,111 z");

Neck.attr({ id: 'Neck', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Neck', 'selected': false });

muscleGroups.push(Neck);

var Deltoids_Front = rsr.path("M 209,144,212,131,211,115,203,107,191,103,194,119,192,130 z M 86,130,69,144,66,131,67,114,77,105,87,105,83,120 z");

Deltoids_Front.attr({ id: 'Deltoids_Front', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Deltoids Front', 'selected': false });

muscleGroups.push(Deltoids_Front);

var Head_Front = rsr.path("M 121,21,115,43,120,62,130,71,139,76,151,69,158,61,162,39,157,20,139,14 z");

Head_Front.attr({ id: 'Head_Front', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Head Front', 'selected': false });

muscleGroups.push(Head_Front);

var Adductor_Longus = rsr.path("M 146,284,150,320,164,284,169,259,176,245,164,241,156,270 z M 134,285,127,321,120,298,116,291,114,277,110,265,102,244,114,240,119,257,124,272 z");

Adductor_Longus.attr({ id: 'Adductor_Longus', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Adductor Longus', 'selected': false });

muscleGroups.push(Adductor_Longus);

var Knee_Front = rsr.path("M 178,357,194,376,194,387,188,399,176,398,171,384 z M 100,357,102,365,104,375,106,384,103,398,90,398,84,388,84,375,91,367 z");

Knee_Front.attr({ id: 'Knee_Front', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Knee Front', 'selected': false });

muscleGroups.push(Knee_Front);

var Rectus_Femoris = rsr.path("M 172,273,175,259,181,246,189,262,191,288,184,340,177,351,170,329,169,287,190 z M 102,256,108,279,108,327,101,350,93,339,89,308,86,287,89,261,96,246 z");

Rectus_Femoris.attr({ id: 'Rectus_Femoris', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Rectus Femoris', 'selected': false });

muscleGroups.push(Rectus_Femoris);

var Vastus_Medialis = rsr.path("M 163,371,153,330,166,293,167,333,174,356,171,373,171 z M 112,331,111,289,118,304,126,331,122,345,115,372,106,373,104,357 z");

Vastus_Medialis.attr({ id: 'Vastus_Medialis', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Vastus Medialis', 'selected': false });

muscleGroups.push(Vastus_Medialis);

var Tibialis_Anterior = rsr.path("M 192,407,197,390,205,409,212,425,209,474,212,493,200,493 z M 78,491,85,418,86,407,81,392,78,400,72,410,68,425,71,475,68,493 z");

Tibialis_Anterior.attr({ id: 'Tibialis_Anterior', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Tibialis Anterior', 'selected': false });

muscleGroups.push(Tibialis_Anterior);

var Shin = rsr.path("M 195,492,188,404,177,402,174,412,174,419,178,448 z M 104,402,105,412,105,423,103,436,103,447,96,460,92,473,83,491,84,474,86,456,87,444,88,430,90,416,91,403 z");

Shin.attr({ id: 'Shin', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Shin', 'selected': false });

muscleGroups.push(Shin);

var Vastus_Lateralis = rsr.path("M 193,291,198,318,198,358,195,371,180,353,189,341 z M 97,353,82,371,80,349,80,326,83,294,89,341 z");

Vastus_Lateralis.attr({ id: 'Vastus_Lateralis', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Vastus Lateralis', 'selected': false });

muscleGroups.push(Vastus_Lateralis);

var Brachioradialis = rsr.path("M 224,185,221,194,213,193,250,255,262,260,246,233,237,201,186 z M 32,231,42,198,53,186,57,196,64,194,28,253,17,259 z");

Brachioradialis.attr({ id: 'Brachioradialis', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Brachioradialis', 'selected': false });

muscleGroups.push(Brachioradialis);

var Biceps_Brachii_Long_Head = rsr.path("M 192,135,189,148,204,176,217,190,220,183,210,150 z M 58,181,61,189,73,176,88,146,85,135,67,151 z");

Biceps_Brachii_Long_Head.attr({ id: 'Biceps_Brachii_Long_Head', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Biceps Brachii Long Head', 'selected': false });

muscleGroups.push(Biceps_Brachii_Long_Head);

var Flexor_Digitorum = rsr.path("M 207,191,207,204,214,220,226,234,243,262,249,258 z M 34,262,50,236,63,220,70,203,69,190,29,256 z");

Flexor_Digitorum.attr({ id: 'Flexor_Digitorum', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Flexor Digitorum', 'selected': false });

muscleGroups.push(Flexor_Digitorum);

var Biceps_Brachii_Short_Head = rsr.path("M 187,150,187,165,203,192,207,186,202,179 z M 72,184,90,150,90,163,73,193 z");

Biceps_Brachii_Short_Head.attr({ id: 'Biceps_Brachii_Short_Head', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Biceps Brachii Short Head', 'selected': false });

muscleGroups.push(Biceps_Brachii_Short_Head);

var Head_Back = rsr.path("M 448,6,437,8,425,19,424,36,435,53,460,53,468,38,469,17,460,9 z");

Head_Back.attr({ id: 'Head_Back', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Head Back', 'selected': false });

muscleGroups.push(Head_Back);

var Trapezius = rsr.path("M 434,57,441,57,440,96,441,158,419,131,412,102,402,92,421,84,432,70 z M 452,57,460,57,462,70,472,83,491,92,481,101,474,131,452,158,454,96 z");

Trapezius.attr({ id: 'Trapezius', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Trapezius', 'selected': false });

muscleGroups.push(Trapezius);

var Deltoids_Back = rsr.path("M 398,93,383,98,370,110,372,132,386,122,393,115 z M 496,93,513,99,523,111,521,132,505,121,499,112 z");

Deltoids_Back.attr({ id: 'Deltoids_Back', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Deltoids Back', 'selected': false });

muscleGroups.push(Deltoids_Back);

var Latissimus_Dorsi = rsr.path("M 402,97,395,121,396,136,409,183,440,173,440,162,415,133,408,103 z M 491,97,498,122,497,138,484,183,453,173,453,162,478,134,485,104 z");

Latissimus_Dorsi.attr({ id: 'Latissimus_Dorsi', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Latissimus Dorsi', 'selected': false });

muscleGroups.push(Latissimus_Dorsi);

var Triceps_Medial = rsr.path("M 392,143,392,167,383,183,374,188,382,160 z M 500,143,510,158,518,188,509,183,500,168 z");

Triceps_Medial.attr({ id: 'Triceps_Medial', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Triceps Medial', 'selected': false });

muscleGroups.push(Triceps_Medial);

var Triceps_Lateral = rsr.path("M 392,123,371,137,363,176,368,198,380,156,392,137 z M 502,124,522,137,531,178,525,199,512,154,501,137 z");

Triceps_Lateral.attr({ id: 'Triceps_Lateral', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Triceps Lateral', 'selected': false });

muscleGroups.push(Triceps_Lateral);

var Erector_Spinae = rsr.path("M 441,177,410,187,412,202,445,246,439,201 z M 452,177,483,187,481,202,448,246,454,203 z");

Erector_Spinae.attr({ id: 'Erector_Spinae', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Erector Spinae', 'selected': false });

muscleGroups.push(Erector_Spinae);

var Extensor_Digitorum = rsr.path("M 361,184,350,203,345,226,329,256,338,251,358,214,366,201 z M 532,184,543,202,548,227,564,256,555,251,536,216,527,203 z");

Extensor_Digitorum.attr({ id: 'Extensor_Digitorum', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Extensor Digitorum', 'selected': false });

muscleGroups.push(Extensor_Digitorum);

var Right_Flexor_Carpi = rsr.path("M 520,193,511,189,515,205,543,250,548,262,551,252 z M 373,193,381,189,378,204,351,248,345,261,341,252 z");

Right_Flexor_Carpi.attr({ id: 'Right_Flexor_Carpi', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Flexor Carpi', 'selected': false });

muscleGroups.push(Right_Flexor_Carpi);

var Gluteus_Max = rsr.path("M 434,240,400,261,399,285,403,302,440,291,445,276 z M 459,239,449,275,452,290,489,302,493,286,492,261 z");

Gluteus_Max.attr({ id: 'Gluteus_Max', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Gluteus Max', 'selected': false });

muscleGroups.push(Gluteus_Max);

var Semitendinous = rsr.path("M 420,301,433,349,424,398,414,365,416,324 z M 474,301,478,326,480,366,470,398,461,350 z");

Semitendinous.attr({ id: 'Semitendinous', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Semitendinous', 'selected': false });

muscleGroups.push(Semitendinous);

var Biceps_Femoris = rsr.path("M 397,293,402,310,415,302,412,324,410,359,398,378,397,351,394,338,393,315 z M 497,292,492,309,479,302,483,327,485,359,496,378,497,353,500,340,502,316 z");

Biceps_Femoris.attr({ id: 'Biceps_Femoris', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Biceps Femoris', 'selected': false });

muscleGroups.push(Biceps_Femoris);

var Adductor_Longus_Back = rsr.path("M 442,295,434,295,426,301,435,345,443,325,444,310 z M 451,294,460,296,468,302,458,345,451,326,449,310 z");

Adductor_Longus_Back.attr({ id: 'Adductor_Longus_Back', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Adductor Longus Back', 'selected': false });

muscleGroups.push(Adductor_Longus_Back);

var Knee_Back = rsr.path("M 410,366,402,380,408,397,417,388 z M 485,367,477,389,486,397,492,380 z");

Knee_Back.attr({ id: 'Knee_Back', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Knee Back', 'selected': false });

muscleGroups.push(Knee_Back);

var Gastrocnemius_Medialis = rsr.path("M 417,394,412,400,407,410,402,430,400,457,409,476,420,454,421,403 z M 477,394,473,402,474,454,485,475,495,457,491,428,486,406 z");

Gastrocnemius_Medialis.attr({ id: 'Gastrocnemius_Medialis', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Gastrocnemius Medialis', 'selected': false });

muscleGroups.push(Gastrocnemius_Medialis);

var Gastrocnemius_Lateralis = rsr.path("M 398,383,396,399,387,428,385,459,389,469,396,460,399,429,404,408,404,398 z M 495,383,499,402,507,427,509,459,504,468,499,461,495,428,489,401 z");

Gastrocnemius_Lateralis.attr({ id: 'Gastrocnemius_Lateralis', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Gastrocnemius Lateralis', 'selected': false });

muscleGroups.push(Gastrocnemius_Lateralis);

var Soleus = rsr.path("M 396,466,400,466,408,480,401,523,396,508,392,472 z M 493,466,498,466,502,472,498,507,494,522,487,481 z");

Soleus.attr({ id: 'Soleus', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Soleus', 'selected': false });

muscleGroups.push(Soleus);

var Peroneus_Longus = rsr.path("M 390,484,395,521,390,528,387,518 z M 504,482,499,521,503,528,508,517 z");

Peroneus_Longus.attr({ id: 'Peroneus_Longus', title: '', 'stroke-width': '0', 'stroke-opacity': '1', 'fill': '#a5a5a5' }).data({ 'name': 'Peroneus Longus', 'selected': false });

muscleGroups.push(Peroneus_Longus);



//########################################################NOT SORTED################################################

/*var _x36_9 = rsr.path("M 403,106,403,103,404,103,404,106,405,106,405,110,407,110,407,109,407,110,406,110,406,114,408,114,407,114,407,119,408,119,408,123,409,123,409,127,411,127,410,127,410,132,411,132,411,135,412,135,412,136,414,136,413,136,413,138,414,138,414,139,415,139,415,140,416,140,416,141,417,141,417,142,418,142,418,143,419,143,419,144,420,144,420,146,421,146,421,147,422,147,422,148,423,148,423,149,424,149,424,150,425,150,425,151,427,151,426,151,426,153,427,153,427,154,428,154,428,155,429,155,429,156,430,156,430,157,431,157,431,158,433,158,432,158,432,160,433,160,433,161,434,161,434,162,435,162,435,163,436,163,436,170,434,170,434,171,431,171,431,173,433,173,430,173,430,174,427,174,427,175,424,175,424,176,420,176,420,177,417,177,417,178,414,178,417,178,417,177,420,177,420,175,416,175,416,176,413,176,413,177,411,177,411,175,409,175,409,178,409,175,408,175,408,172,407,172,407,169,407,172,408,172,408,175,410,175,410,171,409,171,409,168,408,168,408,165,407,165,407,161,406,161,406,158,405,158,405,155,404,155,404,152,402,152,402,155,402,152,401,152,401,149,401,152,403,152,403,148,402,148,402,145,401,145,401,141,399,141,399,145,399,142,398,142,398,138,397,138,397,130,396,130,396,121,397,121,397,118,398,118,398,114,399,114,399,110,399,114,401,114,401,110,402,110 z");

_x36_9.attr({id: '_x36_9',title: '','stroke-width': '0','stroke-opacity': '1','fill': '#a5a5a5'}).data('id', '_x36_9');

muscleGroups.push('');

var _x37_0 = rsr.path("M 174,122,175,122,174,122 z");

_x37_0.attr({id: '_x37_0',title: '','stroke-width': '0','stroke-opacity': '1','fill': '#a5a5a5'}).data('id', '_x37_0');

muscleGroups.push('');*/

var rsrGroups = [];
var selectedMuscles = [];
var pH = document.getElementById('placeholder').value;


for (var i = 0; i < muscleGroups.length; i++) {

    console.log(muscleGroups[i].data('name'));
	// Change Yorkshire's fill colour to gold
    /*if (muscleGroups[i].data('id') == 'Pec_Mayoris') {
    	muscleGroups[i].node.setAttribute('fill', 'gold');
    }*/
    if (muscleGroups[i].data('id') == 'Pec_Mayoris') {
    	muscleGroups[i].node.setAttribute('fill', 'gold');
    }
    if (muscleGroups[i].data('id') == 'Rectus_Abdominis') {
    	muscleGroups[i].node.setAttribute('fill', 'gold');
    }
    if (muscleGroups[i].data('id') == 'Rectus_Abdominis') {
    	muscleGroups[i].node.setAttribute('fill', 'gold');
    }

    // Showing off
    muscleGroups[i].mouseover(function(e){
		//this.node.style.opacity = 0;
        this.node.setAttribute('fill', 'black');
        document.getElementById('muscle-name').innerHTML = this.data('name');
    });

	muscleGroups[i].mouseout(function(e){
	    //this.node.style.opacity = 1;
	    if (this.selected == true) {
	        this.node.setAttribute('fill', 'blue');
	    } else {
	        this.node.setAttribute('fill', '#a5a5a5');
	        document.getElementById('muscle-name').innerHTML = "No muscle selected";
	    }
        
	});
    
	muscleGroups[i].mousedown(function (e) {
	    if (this.selected == true) {
	        this.selected = false;
	        this.node.setAttribute('fill', '#a5a5a5');
	        document.getElementById('invisPlaceholder').value = "";

	        selectedMuscles[0] = "";
	        console.log(selectedMuscles[0]);

	    } else {
	        
	        muscleGroups.forEach(unSelect);
	        selectedMuscles[0] = this.data('name');
	        document.getElementById('invisPlaceholder').value = "";
	        this.selected = true;
	        console.log(selectedMuscles);
	        this.node.setAttribute('fill', 'gold');
	        document.getElementById('invisPlaceholder').value += " " + this.data('name');
	        //alert(pH);

             
	        console.log(this.data('name') + " is selected");
	    }
});

	    
	    var workoutText = document.getElementById("workout-details");

	    

   
	}

function unSelect(item){
    item.node.setAttribute('fill', '#a5a5a5');
    item.selected = false;
}

	