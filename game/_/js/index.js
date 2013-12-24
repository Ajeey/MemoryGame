//var gameCombo = Array();
//var playerCombo = Array();
var gameCombo = Array(100);
var playerCombo = Array(100);
var i = 0;
var qtdSons = 8;
var sounds = Array(qtdSons);


$(document).ready(function()
{

	for (var j = 0; j < qtdSons; ++j) sounds[j] = document.getElementsByTagName('audio')[j];

	$('.square').addClass('active');

	sounds[4].play();
	
	setTimeout(function(){sounds[5].play();},650);

	setTimeout(function(){gameTurn();},2000);

});



function gameTurn()
{

	gameCombo[i] = Math.floor((Math.random()*4));

	var z = 0;

	var intervalo = setInterval(function()
	{
		switch (gameCombo[z])
		{
			case 0: $("#red").addClass("squareL"); sounds[0].play(); setTimeout(function(){$("#red").removeClass("squareL");},1000); break;
			case 1: $("#blue").addClass("squareL"); sounds[1].play(); setTimeout(function(){$("#blue").removeClass("squareL");},1000); break;
			case 2: $("#green").addClass("squareL"); sounds[2].play(); setTimeout(function(){$("#green").removeClass("squareL");},1000); break;
			case 3: $("#yellow").addClass("squareL"); sounds[3].play(); setTimeout(function(){$("#yellow").removeClass("squareL");},1000); break;
		}

		if (z === i)
		{
			z = 0; // I don't think it is necessary, but I'm testing if that's the problem
			clearInterval(intervalo);
			setTimeout(function(){playerTurn();},1200);
		}
		else
			++z;


	},2000);
}

function check()
{
	var w = 0;

	for (; w <= i; ++w)
	{
		if (playerCombo[w] !== gameCombo[w])
			break;
	}

	if (playerCombo[w] !== gameCombo[w])
	{
		sounds[6].play();
		i = 0;
	}
	else
	{
		sounds[7].play();
		++i;
	}
}


function playerTurn()
{
	var j = 0;

	$('.square').removeClass('active');

	$('.square').addClass('clicked');

	$('#red').click(function()
	{
		playerCombo[j] = 0;

		++j;

		if (j > i)
		{
			j = 0; // I don't think it is necessary, but I'm testing if that's the problem

			$('.square').addClass('active');

			check();

			setTimeout(function()
			{
				if (i === 0)
				{
					sounds[4].play();

					setTimeout(function(){sounds[5].play();},650);

					setTimeout(function(){gameTurn();},2000);
				}
				else
				{
					setTimeout(function(){gameTurn();},1000);
				}
			},1000);
		}

		
	});



	$('#blue').click(function()
	{
		playerCombo[j] = 1;

		++j;

		if (j > i)
		{
			j = 0; // I don't think it is necessary, but I'm testing if that's the problem

			$('.square').addClass('active');

			check();

			setTimeout(function()
			{
				if (i === 0)
				{
					sounds[4].play();

					setTimeout(function(){sounds[5].play();},650);

					setTimeout(function(){gameTurn();},2000);
				}
				else
				{
					setTimeout(function(){gameTurn();},1000);
				}
			},1000);
		}
	});



	$('#green').click(function()
	{
		playerCombo[j] = 2;

		++j;

		if (j > i)
		{
			j = 0; // I don't think it is necessary, but I'm testing if that's the problem

			$('.square').addClass('active');

			check();

			setTimeout(function()
			{
				if (i === 0)
				{
					sounds[4].play();

					setTimeout(function(){sounds[5].play();},650);

					setTimeout(function(){gameTurn();},2000);
				}
				else
				{
					setTimeout(function(){gameTurn();},1000);
				}
			},1000);
		}
	});



	$('#yellow').click(function()
	{
		playerCombo[j] = 3;

		++j;

		if (j > i)
		{
			j = 0; // I don't think it is necessary, but I'm testing if that's the problem

			$('.square').addClass('active');

			check();

			setTimeout(function()
			{
				if (i === 0)
				{
					sounds[4].play();

					setTimeout(function(){sounds[5].play();},650);

					setTimeout(function(){gameTurn();},2000);
				}
				else
				{
					setTimeout(function(){gameTurn();},1000);
				}
			},1000);
		}
	});
}