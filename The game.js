alert("Welkom in LOST: The game! \n\n In deze game ga je verschillende keuzes maken. Je kan meestal alleen kiezen uit ja en nee.1 foute keuze en je bent af. \n\n Laten we beginnen!");

alert("Je zit op een onbewoond eiland..\n En ziet een jungle voor je..");

alert("Je hebt honger, wat ga je doen?");

var	antwoord; 

antwoord =prompt("Ga je de jungle in om eten te zoeken?");
document.writeln("Welke kant ga je op? Links of rechts?");	

if (antwoord == "ja") {

	document.writeln("ja <br>");
	console.log("Ga je de jungle in om eten te zoeken?" + antwoord);
	alert("Je loopt door de jungle en komt een bessenstruik tegen!");
	alert("Wat ga je doen?");



	antwoord =prompt("Ga je de bessen plukken om te eten?");
	document.writeln("Ga je de bessen plukken om te eten?");

	if (antwoord == "ja") {

		document.writeln("ja <br>");
		console.log("Ga je de bessen plukken om te eten?" + antwoord);
		alert("Je eet de bessen en je hebt geen honger meer! \n Je loopt weer terug naar waar je was gestrand. Maar, waar was dat ook al weer?!");
		alert("Het begint al nacht aan het worden, dus je moet snel zijn!");

		antwoord= prompt("Welke kant ga je op? Links of rechts?");
		document.writeln("Welke kant ga je op? Links of rechts?");

	} 

		if (antwoord == "links" || "zelfde weg terug") {

			document.writeln("links <br>");
			console.log("Welke kant ga je op? Links of rechts?" + antwoord);
			alert("Je bent weer waar je was gestrand. \n Ondertussen is het al bijna nacht. \n Het is best koud en je bent al moe.	\n Je had een paar takken van vanochtend verzameld.	\n Misschien kan je een vuur maken..		\n Wat ga je doen?");

			antwoord= prompt("Ga je een vuur maken? Of lekker slapen.");	
			document.writeln("Ga je een vuur maken? Of lekker slapen.");


		} 

} 



else {

document.writeln("nee <br>");
	console.log("Ga je de jungle in om eten te zoeken?" + antwoord);
	alert("je hebt nog steeds geen eten gevonden!");
	alert("Wat ga je doen?");

	antwoord= prompt("Ga je terug om in de jungle eten te zoeken?");
	document.writeln("Ga je terug om in de jungle eten te zoeken?");	

	if (antwoord == "ja") {



	} 

	else {

	}	

		if (antwoord == "ja") {



		}

		else {




			}

			else {

	}
	
}

