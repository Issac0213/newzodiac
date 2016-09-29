var zodiac = [
   {
   	sign: "aquarius",
   	Strengths: "Progressive, original, independent, humanitarian",
    likes: "Fun with friends, helping others, fighting for causes, intellectual conversation, a good listener",
    image: "img/aquarius.jpg"
   },
   {
     sign:"pisces",
     Strengths:"Compassionate, artistic, intuitive, gentle, wise, musical",
     likes: "Being alone, sleeping, music, romance, visual media, swimming, spiritual themes",
     image:"img/pisces.jpg"
   },
   {
   	sign:"aries",
   	Strengths: "Courageous, determined, confident, enthusiastic, optimistic, honest, passionate",
   	likes:"Comfortable clothes, taking on leadership roles, physical challenges, individual sports",
   	image:"img/aries.jpg"
   },
   {
   	sign:"gemini",
   	Strengths: "Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas",
   	likes:"Music, books, magazines, chats with nearly anyone, short trips around the town",
   	image:"img/gemini.jpg"
   },
   {
   	sign:"virgo",
   	Strengths: "Loyal, analytical, kind, hardworking, practical",
   	likes:"Animals, healthy food, books, nature, cleanliness",
   	image:"img/virgo.jpg"
   },
   {
    sign:"sagittarius",
    Strengths:"Generous, idealistic, great sense of humor",
    likes:"Freedom, travel, philosophy, being outdoors",
    image:"img/sagittarius.jpg"
   },
   {
    sign:"capricorn",
    Strengths:"Responsible, disciplined, self-control, good managers",
    likes:"Capricorn likes: Family, tradition, music, understated status, quality craftsmanship",
    image:"img/capricorn.jpg"
   },
   {
    sign:"libra",
    Strengths:"Strengths: Cooperative,diplomatic, gracious, fair-minded, social",
    likes:"Libra likes: Harmony, gentleness, sharing with others, the outdoors",
    image:"img/libra.jpg"
   },
   {
    sign:"leo",
    Strengths:"Strengths: Creative, passionate, generous, warm-hearted, cheerful, humorous",
    likes:"Leo likes: Theater, taking holidays, being admired, expensive things, bright colors, fun with friends"
   
   },
   {
    sign:"scorpio",
    Strengths:"Resourceful, brave, passionate, stubborn, a true friend",
    likes:"Scorpio likes: Truth, facts, being right, longtime friends, teasing, a grand passion",
    image:"img/scorpio.jpg"
   },
   {
    sign:"taurus",
    Strengths:"Reliable, patient, practical, devoted, responsible, stable",
    likes:"Taurus likes: Gardening, cooking, music, romance, high quality clothes, working with hands",
    image:"img/taurus.jpg"
   },
   {
    sign:"cancer",
    Strengths:"Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive",
    likes:"Cancer likes: Art, home-based hobbies, relaxing near or in water, helping loved ones, a good meal with friend",
    image:"img/cancer.jpg"
   }
]

function getInfo(){
	var horoscope= document.getElementById("horoscope").value

	console.log(horoscope)
	console.log("Your Zodiac means " + horoscope.value)

	for(i=0; i < zodiac.length; i++){
		if(horoscope==zodiac[i].sign){
			console.log()
			console.log("users typed in: " + horoscope.value)
			console.log("current image value is: " + zodiac[i].image)
			console.log("current Strengths value is: " + zodiac[i].Strengths)
			console.log("current likes value is: " + zodiac[i].likes)

			document.getElementById("sign").textContent = horoscope.value
			document.getElementById("icon").src = zodiac[i].image
			document.getElementById("yourHoroscope").textContent = zodiac[i].Strengths
			document.getElementById("yourProfile").textContent = zodiac[i].likes
      return
		}
	}
      console.log("Incerrect typing or we cannot find it!")
  
}


























