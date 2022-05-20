var countries = ["Afghanistan", "Albania","Algeria","Andorra","Angola","Antigua and Barbuda", "Argentina","Armenia","Australia","Austria","Azerbaijan","The Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde", "Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica", "Cote D'Ivoire", "Croatia", "Cuba","Cyprus","Czechia","North Korea","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","The Gambia", "Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia",'Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan',"Jordan",'Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritania','Mauritius','Mexico','Micronesia','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Macedonia','Norway','Oman','Pakistan','Palau','Palestine','Panama',"Papua New Guinea",'Paraguay','Peru','Philippines','Poland','Portugal','Qatar','South Korea','Moldova','Romania','Russia','Rwanda',"Saint Kitts and Nevis",'Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Sweden','Switzerland','Syria','Tajikistan','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','Tanzania','United States of America','Uruguay','Uzbekistan','Vanuatu','Venezuela','Vatican City','Vietnam','Yemen','Zambia','Zimbabwe'];
var countriesDone = 0;
var countriesRight = 0;
const countryD = document.getElementById('name');
const flagD = document.getElementById('flagImage');
const showFlagB = document.getElementById("showflag");
const scoreD = document.getElementById("scoreDisplay");
const ynButtons = document.getElementsByClassName("btn");
var flag;
generate();
function generate() {
    scoreD.innerText = `${countriesRight}/${countriesDone}`;
    flagD.style.display = "none";
    showFlagB.style.display = "inline";
    ynButtons[0].style.display = "none";
    ynButtons[1].style.display = "none";
    ynButtons[2].style.display = "none";
    var countryIndex = Math.round(Math.random() * 195);
    var country = countries[countryIndex];
    var flagFile = country.split(' ').join('').toLowerCase();
    flag = `flags/${flagFile}.png`;
    flagD.src = flag;
    countryD.innerText = country;
    countries.splice(countryIndex, 1);
}
function showFlag() {
    flagD.style.display = "inline";
    showFlagB.style.display = "none";
    ynButtons[0].style.display = "inline";
    ynButtons[1].style.display = "inline";
    ynButtons[2].style.display = "inline";
}
