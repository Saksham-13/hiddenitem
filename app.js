var s = ["","Menstruation or periods are a part of growing up for every girl. Menstruation is a part of the physical development of a girl as she passes from childhood to being an adult. During every reproductive cycle, blood is shed from the reproductive organ (uterus) and flows out through the vagina. So when a girl has her period, her body is just getting rid of a small amount of blood and some unneeded tissue. It is a natural, normal body process for all girls as they become women and mature physically.",s=String.raw`How long do periods last?

The time between the first day of one period and the day before the start of the next is called a menstrual cycle. However, it can vary greatly when a girl first starts her period. It may skip months or come several times per month in the beginning. The first day of the menstrual cycle starts with your period, the release of blood from the vagina, which can last from 2 to 10 days.")`,String.raw`Will every day of my period be the same?

Most girls find that the first two or three days of their period are the heaviest and then during the last few days it gets lighter. Some girls use a higher absorbency pad or tampon during their heavier days and move to a lighter absorbency product in the last few days.

`,String.raw`Does having your period hurt?

Menstruation itself doesn’t hurt, but some girls and women get cramps or other symptoms during their periods that may be uncomfortable. This is typically due to the hormones your body releases during menstruation that cause the uterus to contract so it can shed its lining. Some amount of discomfort like pain in the abdomen, backache, headaches are common, if it becomes severe it can be controlled by using heating pads, resting, drinking lots of fluids and pain medicines if needed.`,String.raw`What if your periods start at school or somewhere else?

Keep a pad and a clean pair of underwear in your backpack or purse, so you are always prepared. If you are at school, take help from your teachers or school nurses. If you’re out somewhere else, give a call to your mother, elder sister or aunt.`,String.raw`What is PMS?

PMS (premenstrual syndrome) is when a girl has emotional and physical symptoms that happen before or during her period. These symptoms can include moodiness, sadness, anxiety, breast tenderness, bloating, and acne. The symptoms go away after the first few days of a period.`,String.raw`What care should you take during your periods?

Appropriate hygiene during menstruation is vital in order to prevent infections as well as for general well being. Unclean pads or sanitary material can lead to infections locally as well as cause urinary and uterine infections. Furthermore, infrequent changing of pads can lead to skin irritation, which can get infected and hurt. Sanitary pads should be changed every two to six hours or even more frequently if you have a heavier flow. Always free to speak to your mother or any woman in your family, or your female teachers if you face problems related to menstruation.`]
function clicked(id)
{
    popup(s[parseInt(id)]);
    document.getElementById(id).style.zIndex = "-1";
    
    
 }

 
function popup(s){
var modal = document.getElementById("myModal");
document.getElementById("text").innerHTML = s;

// Get the button that opens the modal


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

  modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}