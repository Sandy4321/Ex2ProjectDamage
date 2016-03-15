
document.getElementById("Dent").addEventListener("click",DentStyle);
document.getElementById("Paint").addEventListener("click",PaintStyle);
document.getElementById("Scratch").addEventListener("click",ScratchStyle);
document.getElementById("Erase").addEventListener("click",EraseStyle);

document.getElementById("Dent").addEventListener("mouseover",DentHStyle);
document.getElementById("Paint").addEventListener("mouseover",PaintHStyle);
document.getElementById("Scratch").addEventListener("mouseover",ScratchHStyle);
document.getElementById("Erase").addEventListener("mouseover",EraseHStyle);



function DentStyle()
{
	console.log("Style");
	document.getElementById("Dent").style.backgroundColor = "white";
	document.getElementById("Paint").style.backgroundColor ="#b04c51";
	document.getElementById("Scratch").style.backgroundColor ="#b04c51";
	document.getElementById("Erase").style.backgroundColor ="#b04c51";
}

function PaintStyle()
{
	
	document.getElementById("Paint").style.backgroundColor = "white";
	document.getElementById("Dent").style.backgroundColor ="#b04c51";
	document.getElementById("Scratch").style.backgroundColor ="#b04c51";
	document.getElementById("Erase").style.backgroundColor ="#b04c51";

}

function ScratchStyle()
{
	
	document.getElementById("Scratch").style.backgroundColor = "white";
	document.getElementById("Paint").style.backgroundColor ="#b04c51";
	document.getElementById("Dent").style.backgroundColor ="#b04c51";
	document.getElementById("Erase").style.backgroundColor ="#b04c51";

}

function EraseStyle()
{
	
	document.getElementById("Erase").style.backgroundColor = "white";
	document.getElementById("Paint").style.backgroundColor ="#b04c51";
	document.getElementById("Scratch").style.backgroundColor ="#b04c51";
	document.getElementById("Dent").style.backgroundColor ="#b04c51";

}

function DentHStyle(){

	document.getElementById("Dent").style.backgroundColor.backgroundColor= "#ffffff";
    document.getElementById("Dent").style.boxShadow= "#000000"
    document.getElementById("Dent").style.color="b04c51";
	document.getElementById("Dent").style.width="73px";
	document.getElementById("Dent").style.height="32px";
}
