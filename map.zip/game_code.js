alert("Welkom in LOST: The game! \n\n In deze game ga je verschillende keuzes maken. Je kan meestal alleen kiezen uit ja en nee.1 foute keuze en je bent af. \n\n Laten we beginnen!");
alert("Je zit op een onbewoond eiland..\n En ziet een jungle voor je..");
alert("Je hebt honger, wat ga je doen?");

var	antwoord = ""; 

antwoord = prompt("Ga je de jungle in om eten te zoeken?");

if (antwoord == "ja"){ //de vraag is: Ga je de jungle in om eten te zoeken?
	document.writeln("Ga je de jungle in om eten te zoeken? " + antwoord  + "<br>");
	console.log("Ga je de jungle in om eten te zoeken? " + antwoord  + "<br>");
	alert("Je loopt door de jungle en komt een bessenstruik tegen! Wat ga je doen?");

	antwoord = prompt("Ga je de bessen plukken om te eten?");

	if (antwoord == "ja"){ //de vraag is: Ga je de bessen plukken om te eten?
		document.writeln("Ga je de bessen plukken om te eten? " + antwoord + "<br>");
		console.log("Ga je de bessen plukken om te eten? " + antwoord + "<br>");
		alert("Je eet de bessen en je hebt geen honger meer! \n Je loopt weer terug naar waar je was gestrand. Maar, waar was dat ook al weer?! \n Het begint al nacht aan het worden, dus je moet snel zijn!");

		antwoord = prompt("Welke kant ga je op? Links of rechts?");	

		if (antwoord == "links" || antwoord == "zelfde weg terug"){
			document.writeln("Welke kant ga je op? Links of rechts? " + antwoord + "<br>");
			console.log("Welke kant ga je op? Links of rechts? " + antwoord + "<br>");
			alert("Je bent weer waar je was gestrand. \n Ondertussen is het al bijna nacht. \n Het is best koud en je bent al moe.	\n Je had een paar takken van vanochtend verzameld.	\n Misschien kan je een vuur maken..		\n Wat ga je doen?");
			

			antwoord= prompt("Ga je een vuur maken? Of lekker slapen.");	

			if (antwoord == "vuur maken" || antwoord == "vuur"){
				document.writeln("Ga je een vuur maken? Of lekker slapen. " + antwoord + "<br>");	
				console.log("Ga je een vuur maken? Of lekker slapen. " + antwoord + "<br>");						
				alert("Het is gelukt! \n Je hebt een vuur gemaakt! \n Je gaat naast het vuur liggen en valt in slaap.. Je word doodziek wakker.. \n De bessen! Misschien waren ze wel giftig! \n Wat ga je doen?");
				
				antwoord= prompt("Ga je eten zoeken om je beter te maken? Of accepteer je, je dood..");

				if (antwoord != "eten zoeken"){
					document.writeln("Ga je eten zoeken? Of accepteer je, je dood.. " + antwoord + "<br>");
					console.log("Ga je eten zoeken? Of accepteer je, je dood.. " + antwoord + "<br>");
					
					alert("Je gaat dood door het gif.");
					alert("Jammer! Probeer het opnieuw door op de link te klikken.");

				}else{
					document.writeln("Ga je eten zoeken om je beter te maken? Of accepteer je, je dood.. " + antwoord + "<br>");
					console.log("Ga je eten zoeken om je beter te maken? Of accepteer je, je dood.. " + antwoord + "<br>");

					alert("Je probeert naar eten te zoeken maar je vind niks, je word zwakker en zwakker..");
					alert("En uiteindelijk, ga je dood.");
					alert("Volgende keer beter! Klik op de link om het opnieuw te proberen!");
				}

			}else{
				document.writeln("Ga je een vuur maken? Of lekker slapen. " + antwoord + "<br>");
				console.log("Ga je een vuur maken? Of lekker slapen. " + antwoord + "<br>");

				alert("Je vriest dood door de kou.");
				alert("Jammer! Probeer het opnieuw door op de link te klikken!");
			}
					
		}else{ //de vraag is: Welke kant ga je op? Links of rechts? antwoord = rechts
			document.writeln("Welke kant ga je op? Links of rechts? " + antwoord  + "<br>");
			console.log("Welke kant ga je op? Links of rechts? " + antwoord  + "<br>");
			
			alert("Oeps! dat was niet de goeie kant, je gaat dood door de dieren die je in de nacht hebben verrast..");
			alert("Klik op de link om je keuze te veranderen!");
        }
        
    } else{

		document.writeln("Ga je de boom in klimmen om mango's te plukken? " + antwoord  + "<br>");
		console.log("Ga je de boom in klimmen om mango's te plukken? " + antwoord  + "<br>");
		alert("Je loopt verder en je komt een boom tegen waar mango's aan groeien. Wat ga je doen?");
		
        antwoord = prompt("Ga je de boom in klimmen om de mango's te plukken?");

        if (antwoord == "ja"){ //de vraag is: Ga je de boom in klimmen om de mango's te plukken? antwoord = ja
			document.writeln("Ga je de boom in klimmen om mango's te plukken? " + antwoord + "<br>");
			console.log("Ga je de boom in klimmen om mango's te plukken? " + antwoord  + "<br>");
			alert("Nadat je de 3 mango's hebt geplukt ga je weer terug naar waar je was gestrand.. \n Maar waar was dat ook alweer?! \n Het is al nacht aan het worden dus je moet snel zijn!");
			
            antwoord = prompt("Welke kant ga je op? Links of rechts?");

            if (antwoord == "Links" || antwoord == "zelfde weg terug"){
				document.writeln("Welke kant ga je op? Links of rechts? " + antwoord + "<br>");
				console.log("Welke kant ga je op? Links of rechts? " + antwoord  + "<br>");
                alert("Je bent weer waar je was gestrand. \n Ondertussen is het al bijna nacht. \n Het is best koud en je bent al moe. \n Je had een paar takken van vanochtend verzameld. \n Misschien kan je een vuur maken.. \n Wat ga je doen?");
                
                antwoord= prompt("Ga je een vuur maken? Of lekker slapen.");	

                if (antwoord == "vuur maken" || antwoord == "vuur"){ 

					document.writeln("Ga je een vuur maken? Of lekker slapen. " + antwoord + "<br>");
					console.log("Ga je een vuur maken? Of lekker slapen. " + antwoord + "<br>");
					alert("Het is gelukt! \n  Je hebt een vuur gemaakt! \n Je gaat naast het vuur liggen en valt in slaap.. \n Je word wakker. \n Je bedenkt je dat je hier nog lang vast zult zitten. \n Het lijkt je verstandig om een hut te maken. \n Als je bent klaar met je hut, zie je in de verte een boot! \n Je moet snel zijn! Voor hij weg vaart! Wat ga je doen?!");

					antwoord= prompt("Ga je roepen? Of een ??? actie?");	

					if (antwoord != "??? actie"){
						document.writeln("Ga je roepen? Of een ??? actie? " + antwoord + "<br>"); 
						console.log("Ga je Ga je roepen? Of een ??? actie? " + antwoord  + "<br>");
						alert("Je roept zo hard als je kan! \n Maar dat lukt niet!");
						alert("De boot vaart voorbij, en je bent gedoemd om dood te gaan..");
						
			
					} else{
			
						document.writeln("Ga je roepen? Of een ??? actie? " + antwoord + "<br>"); 
						console.log("Ga je Ga je roepen? Of een ??? actie? " + antwoord  + "<br>");
						alert("Met het stuk glas dat je had gevonden, steek je je hut in de fik! \n Door de grote rookwolken die vrijkomen ziet het schip je! \n Het schip ziet de wolken van het eiland en vaart er naartoe.");
						alert("Je hebt gewonnen! Gefeliciteerd!");
					}
				

                } else { 

					document.writeln("Ga je een vuur maken? Of lekker slapen." + antwoord  + "<br>");
					console.log("Ga je een vuur maken? Of lekker slapen." + antwoord  + "<br>");
					
					alert("Je vriest dood door de kou.");
					alert("Jammer! Probeer het opnieuw door op de link te klikken!");
				
				}
    
                        
            } else { //de vraag is: Welke kant ga je op? Links of rechts? antwoord = rechts
				document.writeln("Welke kant ga je op? Links of rechts? " + antwoord   + "<br>");
				console.log("Welke kant ga je op? Links of rechts? " + antwoord   + "<br>");
				
                alert("Oeps! dat was niet de goeie kant, je gaat dood door de dieren die je in de nacht hebben verrast..");
                alert("Klik op de link om je keuze te veranderen!");
			}
			

        } else {

			document.writeln("Ga je de boom in klimmen om de mango's te plukken? " + antwoord + "<br>");
			console.log("Ga je de boom in klimmen om de mango's te plukken? " + antwoord + "<br>");
            
            alert("Je loopt dieper en dieper de jungle in.. \n Op een gegeven moment besef je je..	\n Dat je verdwaald bent!	\n Intussen is het al nacht geworden.	\n De dieren in de jungle zijn nu wakker! Er wacht je een pijnlijke dood..");
            alert("Ik zou maar snel je keuze veranderen, voordat het te laat is!");
        }
    }

} else{
	document.writeln("Ga je de jungle in om eten te zoeken? " + antwoord + "<br>");
	console.log("Ga je de jungle in om eten te zoeken? " + antwoord + "<br>");
	alert("Na een tijdje heb je nog steeds geen eten gevonden! Wat ga je doen?");

	antwoord= prompt("Ga je terug om in de jungle eten te zoeken?");

	if (antwoord == "ja"){
		document.writeln("Ga je terug om in de jungle eten te zoeken? " + antwoord + "<br>");
		console.log("Ga je terug om in de jungle eten te zoeken? " + antwoord + "<br>");
		alert("Klik dan op de link om je keuze te veranderen!");

	}else{
		document.writeln("Ga je terug om in de jungle eten te zoeken? " + antwoord);
		console.log("Ga je terug om in de jungle eten te zoeken? " + antwoord);
		alert("Je verhongerd en gaat dood.");
	}
}

