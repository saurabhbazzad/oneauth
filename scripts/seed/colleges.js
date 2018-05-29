const config = require('../../config');
const secret = config.SECRETS;
const {db, models: {
    College
}} = require('../../src/db/models');


(async () => {
    try {
        await College.bulkCreate([
            {"name": "---OTHER / NOT LISTED / NO COLLEGE ---"},
            {"name":"Amity School Of Engineering & Technology (Noida)"},
            {"name":"Army Institute Of Technology (Pune)"},
            {"name":"Asia Pacific Institute of Information Technology (APIIT SD) (Panipat)"},
            {"name":"B.I.T. Sindri (Dhanbad)"},
            {"name":"BMS College Of Engineering (Bangalore)"},
            {"name":"BMS Institute Of Technology & Management (Bangalore)"},
            {"name":"BRACT'S Vishwakarma Institute of Information Technology (Pune)"},
            {"name":"Bannari Amman Institute Of Technology (Erode)"},
            {"name":"Bharati Vidyapeeth University College Of Engineering (Pune)"},
            {"name":"Birla Institute Of Technology & Science (Pilani)"},
            {"name":"Birla Institute Of Technology (Ranchi)"},
            {"name":"CVR College Of Engineering (Hyderabad)"},
            {"name":"Chaitanya Bharathi Institute Of Technology (Hyderabad)"},
            {"name":"College Of Engineering, Guindy (Chennai)"},
            {"name":"College Of Engineering, Pune (Pune)"},
            {"name":"Cummins College of Engineering for Women (Pune)"},
            {"name":"Delhi Technological University (New-Delhi)"},
            {"name":"Dwarkadas J. Sanghvi College Of Engineering (Mumbai)"},
            {"name":"Faculty Of Engineering, DIT University (Dehradun)"},
            {"name":"Galgotias College Of Engineering And Technology (Noida)"},
            {"name":"Ganeshi Lal Bajaj Institute Of Technology & Management (Noida)"},
            {"name":"Government College Of Engineering (Amravati)"},
            {"name":"Government College Of Engineering (Karad)"},
            {"name":"Govt. Model Engineering College (Cochin)"},
            {"name":"Guru Nanak Dev Engineering College (Ludhiana)"},
            {"name":"IES College Of Technology (Bhopal)"},
            {"name":"IIIT, Allahabad (Allahabad)"},
            {"name":"IIIT, Hyderabad (Hyderabad)"},
            {"name":"IIT, Bombay (Mumbai)"},
            {"name":"IIT, Delhi (Delhi)"},
            {"name":"IIT, Kanpur (Kanpur)"},
            {"name":"IIT, Kharagpur (Kharagpur)"},
            {"name":"IMS Engineering College (Ghaziabad)"},
            {"name":"Indian Institute Of Technology (Indian School Of Mines), Dhanbad (Dhanbad)"},
            {"name":"Indraprastha Institute Of Information Technology Delhi (New Delhi)"},
            {"name":"Institute Of Engineering & Technology, J.K.Lakshmipat University (Jaipur)"},
            {"name":"Institute Of Technology (Ahmedabad)"},
            {"name":"J.B. Institute Of Technology (Dehradun)"},
            {"name":"JIS College Of Engineering (Kalyani, West Bengal)"},
            {"name":"JSS Academy Of Technical Education (Bangalore)"},
            {"name":"Jaipur Engineering College And Research Center (Jaipur)"},
            {"name":"Jawaharlal Nehru National College Of Engineering (Shimoga)"},
            {"name":"K L University (Guntur)"},
            {"name":"K.S.R. College Of Enginnering (Thiruchengode)"},
            {"name":"KIET Group Of Institutions (Ghaziabad)"},
            {"name":"KLE Dr M.S Sheshgiri College Of Engineering And Technology (Belgaum)"},
            {"name":"KLS Gogte Institute Of Technology (Belagavi)"},
            {"name":"Kongu Engineering College (Erode)"},
            {"name":"Kuppam Engineering College (Kuppam)"},
            {"name":"Lakshmi Narain College Of Technology (Bhopal)"},
            {"name":"Lovely Professional University (Phagwara)"},
            {"name":"M V J College Of Engineering (Bangalore)"},
            {"name":"M.S. Engineering College (Bangalore)"},
            {"name":"M.S. Ramaiah Institute Of Technology (Bangalore)"},
            {"name":"MIT College Of Engineering (Pune)"},
            {"name":"Madhav Institute of Technology & Science (Gwalior)"},
            {"name":"Maharashtra Institute Of Technology (Aurangabad)"},
            {"name":"Malla Reddy College of Engineering & Technology (Secunderabd)"},
            {"name":"Manipal Institue Of Technology (Manipal)"},
            {"name":"Mepco Schlenk Engineering College (Sivakasi)"},
            {"name":"Muffakham Jah College Of Engineering And Technology (Hyderabad)"},
            {"name":"NIT, Karnataka (Mangalore)"},
            {"name":"National Institute Of Science & Technology (Berhampur)"},
            {"name":"Netaji Subhas Institute Of Technology (New Delhi)"},
            {"name":"P.E.S. College Of Engineering (Mandya)"},
            {"name":"PES University (Bangalore)"},
            {"name":"PSG College of Technology (Coimbatore)"},
            {"name":"Pimpri Chinchwad College Of Engineering (Pune)"},
            {"name":"R.M.D. Engineering College (Thiruvallur)"},
            {"name":"R.M.K. Engineering College (Kavaripettai)"},
            {"name":"Rajagiri School Of Engineering & Technology (Ernakulam)"},
            {"name":"Rajarambapu Institute Of Technology (Sangli)"},
            {"name":"Rungta College Of Engineering And Technology (Bhilai)"},
            {"name":"S.A. Engineering College (Chennai)"},
            {"name":"SCMS School Of Engineering & Technology (Ernakulam)"},
            {"name":"SDM College Of Engineering & Technology (Dharwad)"},
            {"name":"SRM Engineering College (Chennai)"},
            {"name":"SVKM's NMIMS-Mukesh Patel School Of Technology Management & Engineering (Mumbai)"},
            {"name":"Sanjivani Rural Education Society's College Of Engineering (Ahmednagar)"},
            {"name":"Shri Ramdeobaba College Of Engineering And Management (Nagpur)"},
            {"name":"Shri Shankaracharya Technical Campus Bhilai (Bhilai)"},
            {"name":"Shri Vishnu Engineering College For Women (Bhimavaram)"},
            {"name":"Sikkim Manipal Institute Of Technology (Sikkim)"},
            {"name":"Sir M Visvesvaraya Institute Of Technology (Bangalore)"},
            {"name":"Sri Sairam College of Engineering (Bangalore)"},
            {"name":"Sri Sairam Engineering College (Chennai)"},
            {"name":"Sri Sivasubramaniya Nadar College of Engineering (Kalavakkam)"},
            {"name":"Symbiosis Institute Of Technology (Pune)"},
            {"name":"Thapar University (Patiala)"},
            {"name":"The National Institute Of Engineering (Mysore)"},
            {"name":"The Northcap University (Gurgaon)"},
            {"name":"Thiagarajar College Of Engineering (Madurai)"},
            {"name":"University College Of Engineering (Hyderabad)"},
            {"name":"University Institute Of Engineering & Technology, Panjab University (Chandigarh)"},
            {"name":"University Institute Of Engineering, Chandigarh University (Chandigarh)"},
            {"name":"VIT University (Vellore)"},
            {"name":"Veltech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College (Chennai)"},
            {"name":"Vishwakarma Institute of Technology (Pune)"},
            {"name":"Visvesvaraya National Institute Of Technology (Nagpur)"},
            {"name":"Zakir Husain College Of Engineering & Technology, Aligarh (Aligarh)"}
        ])
        
    } catch (err) {
        console.error(err)
    } finally {
        process.exit()
    }
})()
