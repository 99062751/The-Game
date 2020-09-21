alert("Welkom in LOST: The game!");

alert("In deze game ga je verschillende keuzes maken.");

alert("Je kan meestal alleen kiezen uit ja en nee.");

alert("1 foute keuze en je bent af.");

alert("Laten we beginnen!");

alert("Je zit op een onbewoond eiland..");

alert("Je ziet een jungle voor je..");

alert("Je hebt honger, wat ga je doen?");

var antwoord;

antwoord =prompt("Ga je de jungle in om eten te zoeken?");
document.writeln("Ga je de jungle in om eten te zoeken?");

/*A*/if (antwoord == "ja") {

	document.writeln("ja <br>");
	console.log("Ga je de jungle in om eten te zoeken?" + antwoord);
	alert("Je loopt door de jungle en komt een bessenstruik tegen!");
	alert("Wat ga je doen?");

antwoord =prompt("Ga je de bessen plukken om te eten?");
document.writeln("Ga je de bessen plukken om te eten?");

/*B*/if (antwoord == "ja") {

	document.writeln("ja <br>");
	console.log("Ga je de bessen plukken om te eten?" + antwoord);
	alert("Je eet de bessen en je hebt geen honger meer!");
	alert("Je loopt weer terug naar waar je was gestrand.");
	alert("Maar, waar was dat ook al weer?!");
	alert("Het begint al nacht aan het worden, dus je moet snel zijn!");

antwoord= prompt("Welke kant ga je op? Links of rechts?");
document.writeln("Welke kant ga je op? Links of rechts?");	

/*F*/if (antwoord == "links") {

	document.writeln("links <br>");
	console.log("Welke kant ga je op? Links of rechts?" + antwoord);
	alert("Je bent weer op de plaats waar je was gestrand.");
	alert("Ondertussen is het al bijna nacht.");
	alert("Het is best koud en je bent moe.");
	alert("Je had een paar takken van vanochtend verzameld.");
	alert("Misschien kan je een vuur maken..");
	alert("Wat ga je doen?");

antwoord= prompt("Ga je vuur maken? Of lekker slapen..");
document.writeln("Ga je vuur maken? Of lekker slapen..");

/*G*/if (antwoord == "vuur maken") {

	document.writeln("vuur maken <br>");
	console.log("Ga je vuur maken? Of lekker slapen.." + antwoord);
	alert("Het is gelukt!");
	alert("Je hebt een vuur gemaakt!");
	alert("Je gaat naast het vuur liggen en valt in slaap..");
	alert("Je word doodziek wakker..");
	alert("Waarom voel je je zo..?");
	alert("De bessen! Misschien waren ze wel giftig!");
	alert("Wat ga je doen?");

antwoord= prompt("Ga je eten zoeken om je beter te maken? Of accepteer je, je dood..");
document.writeln("Ga je eten zoeken om je beter te maken? Of accepteer je, je dood..");

/*H*/if (antwoord == "eten zoeken") {

	document.writeln("eten zoeken <br>");
	console.log("Ga je eten zoeken om je beter te maken? Of accepteer je, je dood.." + antwoord);
	alert("Je probeert naar eten te zoeken maar je vind niks, je word zwakker en zwakker..");
	alert("En uiteindelijk, ga je dood.");
	alert("Volgende keer beter! Klik op de link om het opnieuw te proberen!");
} 




/*H*/else {

		document.writeln("Ik accepteer mijn dood. <br>");
		console.log("Ga je eten zoeken? Of accepteer je, je dood.." + antwoord);
		alert("Je gaat dood door het gif.");
		alert("Jammer! Probeer het opnieuw door op de link te klikken.");

}
} 


/*G*/else {

	document.writeln("lekker slapen <br>");
	console.log("Ga je vuur maken? Of lekker slapen." + antwoord);
	alert("Je vriest dood door de kou.");
	alert("Verander je keuze door op de link te klikken!");
}
} 




/*F*/else {

	document.writeln("rechts <br>");
	console.log("Welke kant ga je op? Links of rechts?" + antwoord);
	alert("Oeps! dat was niet de goeie kant, je gaat dood door de dieren die je in de nacht hebben verrast..");
	alert("Klik op de link om je keuze te veranderen!");
}

} 

/*B*/else {

document.writeln("nee <br>");
console.log("Ga je de boom in klimmen om mango's te plukken?" + antwoord);
alert("Je loopt verder en je komt een boom tegen waar mango's aan groeien.");
alert("Wat ga je doen?");

antwoord =prompt("Ga je de boom in klimmen om de mango's te plukken?");
document.writeln("Ga je de boom in klimmen om de mango's te plukken?");

/*C*/if (antwoord == "ja") {

document.writeln("ja <br>");
console.log("Ga je de boom in klimmen om mango's te plukken?" + antwoord);
alert("Nadat je de 3 mango's hebt geplukt ga je weer terug naar waar je was gestrand..");
alert("Maar waar was dat ook alweer?!");
alert("Het is al nacht aan het worden dus je moet snel zijn!");

antwoord= prompt("Welke kant ga je op? Links of rechts?");
document.writeln("Welke kant ga je op? Links of rechts?");

/*D*/if (antwoord == "links") {

	document.writeln("links <br>");
	console.log("Welke kant ga je op? Links of rechts?" + antwoord);
	alert("Je bent weer waar je was gestrand.");
	alert("Ondertussen is het al bijna nacht.");
	alert("Het is best koud en je bent al moe.");
	alert("Je had een paar takken van vanochtend verzameld.");
	alert("Misschien kan je een vuur maken..");
	alert("Wat ga je doen?");

antwoord= prompt("Ga je een vuur maken? Of lekker slapen.");	
document.writeln("Ga je een vuur maken? Of lekker slapen.");

/*I*/if (antwoord == "vuur maken") {

	document.writeln("vuur maken <br>");
	console.log("Ga je een vuur maken? Of lekker slapen." + antwoord);
	alert("Het is gelukt!");
	alert("Je hebt een vuur gemaakt!");
	alert("Je gaat naast het vuur liggen en valt in slaap..");
	alert("Je word wakker.");
	alert("Je bedenkt je dat je hier nog lang vast zult zitten.");
	alert("Het lijkt je verstandig om een hut te maken.");
	alert("Je bent klaar met je hut, en je ziet in de verte een boot!");
	alert("Je moet snel zijn! Voor hij weg is! Wat ga je doen?!");

antwoord= prompt("Ga je roepen? Of een ??? actie?");	
document.writeln("Ga je roepen? Of een ??? actie?");

	/*I*/if (antwoord == "??? actie") {

		document.writeln("??? actie <br>");
		console.log("Ga je Ga je roepen? Of een ??? actie?" + antwoord);
		alert("Met het stuk glas dat je had gevonden, steek je je hut in de fik!");
		alert("Door de grote rookwolken die vrijkomen ziet het schip je!");
		alert("Het schip ziet de wolken van het eiland en vaart er naartoe.");
		alert("Je hebt gewonnen! Gefeliciteerd!");
	} 




	/*I*/else {

		document.writeln("roepen <br>");
		console.log("Ga je Ga je roepen? Of een ??? actie?" + antwoord);
		alert("Je roept zo hard als je kan!");
		alert("Maar dat lukt niet!");
		alert("De boot vaart voorbij, en je bent gedoemd om dood te gaan..");
	}	

} 



/*I*/else {

	document.writeln("lekker slapen <br>");
	console.log("Ga je een vuur maken? Of lekker slapen." + antwoord);
	alert("Je vriest dood door de kou.");
	alert("Jammer! Probeer het opnieuw door op de link te klikken!");
}
} 





/*D*/else {

	document.writeln("rechts <br>");
	console.log("Welke kant ga je op? Links of rechts?" + antwoord);
	alert("Oeps! dat was niet de goeie kant, je gaat dood door de dieren die je in de nacht hebben verrast..");
	alert("Klik op de link om je keuze te veranderen!");
}



} 




/*C*/else {

	document.writeln("nee <br>");
	console.log("Ga je de boom in klimmen om de mango's te plukken?" + antwoord);
	alert("Je loopt dieper en dieper de jungle in..");
	alert("Op een gegeven moment besef je je..");
	alert("dat je verdwaald bent!");
	alert("Intussen is het al nacht geworden.");
	alert("De dieren in de jungle zijn nu wakker! Er wacht je een pijnlijke dood..");
	alert("Ik zou maar snel je keuze veranderen, voordat het te laat is!");

}
}
} 





/*A*/else {

	document.writeln("nee <br>");
	console.log("Ga je de jungle in om eten te zoeken?" + antwoord);
	alert("je hebt nog steeds geen eten gevonden!");
	alert("Wat ga je doen?");

antwoord= prompt("Ga je terug om in de jungle eten te zoeken?");
document.writeln("Ga je terug om in de jungle eten te zoeken?");

/*E*/if (antwoord == "ja") {

	document.writeln("ja <br>");
	console.log("Ga je terug om in de jungle eten te zoeken?" + antwoord);
	alert("Klik dan op de link om je keuze te veranderen!");
} 



/*E*/else {

	document.writeln("nee <br>");
	console.log("Ga je terug om in de jungle eten te zoeken?" + antwoord);
	alert("Je verhongerd en gaat dood, klik op de link om je keuze te veranderen!");
}
}



















