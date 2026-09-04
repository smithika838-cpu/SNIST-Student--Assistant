console.log("JavaScript is working!;)
  // Data extracted from SNIST documents
const snistData = {
  timetable: [
    { day: "Monday", slots: ["09:00 - 12:20: EW Lab", "01:10 - 04:10: AEP Lab"] },
    { day: "Tuesday", slots: ["09:00 - 09:50: PPS", "09:50 - 10:40: PPS", "10:40 - 11:30: ES", "11:30 - 12:20: EDC", "01:10 - 01:55: MAC", "01:55 - 02:40: ESE", "02:40 - 04:10: LPE"] },
    { day: "Wednesday", slots: ["09:00 - 09:50: ESE", "09:50 - 10:40: MAC", "10:40 - 11:30: AEP", "11:30 - 12:20: EDC", "01:10 - 02:40: ELCS LAB", "02:40 - 03:25: PPS", "03:25 - 04:10: Mentoring"] },
    { day: "Thursday", slots: ["09:00 - 09:50: MAC", "09:50 - 10:40: ES", "10:40 - 12:20: AEP", "01:10 - 01:55: PPS", "01:55 - 02:40: EDC", "02:40 - 03:25: ESE", "03:25 - 04:10: Mentoring"] },
    { day: "Friday", slots: ["09:00 - 12:20: PPS LAB", "01:10 - 01:55: MAC", "01:55 - 02:40: AEP", "02:40 - 03:25: ESE", "03:25 - 04:10: Library"] },
    { day: "Saturday", slots: ["09:00 - 09:50: PPS", "09:50 - 10:40: MAC", "10:40 - 11:30: AEP", "11:30 - 12:20: EDC"] }
  ],
  faculty: [
    { subject: "AEP (Advanced Engineering Physics)", name: "Dr. Sumalatha M", email: "sumalatha.m@sreenidhi.edu.in", phone: "9494994258" },
    { subject: "MC (Matrices and Calculus)", name: "Dr. Brahmachary S", email: "brahmachary.s@sreenidhi.edu.in", phone: "9866473209" },
    { subject: "PPS (Programming for Problem Solving)", name: "Mastanvali D", email: "mastanvali.d@sreenidhi.edu.in", phone: "9441115950" },
    { subject: "ESE (English for Skill Enhancement)", name: "Catharine L K", email: "catharine.l@sreenidhi.edu.in", phone: "9515809012" },
    { subject: "ES (Environmental Science)", name: "Karthik B", email: "karthik.b@sreenidhi.edu.in", phone: "9848088754" },
    { subject: "EDC (Electronic Devices and Circuits)", name: "Ramakrishna V", email: "ramakrishna.v@sreenidhi.edu.in", phone: "9000217673" }
  ],
  holidays: [
    { date: "14-01-2026", occasion: "Bhogi" },
    { date: "15-01-2026", occasion: "Sankranti / Pongal" },
    { date: "26-01-2026", occasion: "Republic Day" },
    { date: "15-02-2026", occasion: "Maha Shivaratri" },
    { date: "03-03-2026", occasion: "Holi" },
    { date: "19-03-2026", occasion: "Ugadi" },
    { date: "21-03-2026", occasion: "Eid Ul Fitr (Ramzan)" },
    { date: "15-08-2026", occasion: "Independence Day" },
    { date: "08-11-2026", occasion: "Deepavali" },
    { date: "25-12-2026", occasion: "Christmas" }
  ],
  buses: [
    { route: "Route 6 (12:45 PM)", details: "Trimulgheery LIC - Bowenpally - Balanagar - Kukatpally - JNTU" },
    { route: "Route 4 (12:45 PM)", details: "Vayupuri - Neredmet - Begumpet - Ameerpet - Jubilee Hills Check Post" },
    { route: "Route 10 (12:45 PM)", details: "Hanuman Temple (RK Puram) - Alwal - Suchitra X Road - Kompally" },
    { route: "Route 33 (12:45 PM)", details: "Rampally X Road - ECIL Radhika - Sainikpuri - Yapral Water Tank" },
    { route: "Route 13 (16:25 PM)", details: "ECIL X Road - Moula Ali - Tarnaka - Seetafalmandi - Lakdikapul - Mehdipatnam" }
  ]
};

// Main Handler Function
function processQuery(query) {
  const q = query.toLowerCase();
  
  if (q.includes("timetable") || q.includes("class") || q.includes("schedule")) {
    let html = "<strong>CSE-H Class Timetable (1st Year):</strong><br><ul>";
    snistData.timetable.forEach(t => {
      html += <li><strong>${t.day}:</strong> ${t.slots.join(" | ")}</li>;
    });
    return html + "</ul>";
  }

  if (q.includes("bus") || q.includes("route") || q.includes("transport")) {
    let html = "<strong>SNIST Bus Routes:</strong><br><ul>";
    snistData.buses.forEach(b => {
      html += <li><strong>${b.route}:</strong> ${b.details}</li>;
    });
    return html + "</ul>";
  }

  if (q.includes("faculty") || q.includes("teacher") || q.includes("contact")) {
    let html = "<strong>CSE-H Faculty Directory:</strong><br><ul>";
    snistData.faculty.forEach(f => {
      html += <li><strong>${f.subject}:</strong> ${f.name} (${f.email} | ${f.phone})</li>;
    });
    return html + "</ul>";
  }

  if (q.includes("holiday") || q.includes("vacation") || q.includes("leave")) {
    let html = "<strong>SNIST Holiday Calendar (2026):</strong><br><ul>";
    snistData.holidays.forEach(h => {
      html += <li><strong>${h.date}:</strong> ${h.occasion}</li>;
    });
    return html + "</ul>";
  }

  if (q.includes("map") || q.includes("block") || q.includes("canteen") || q.includes("cet")) {
    return `<strong>SNIST Campus Map Guide:</strong><br>
    <ul>
      <li><strong>Main Entrance:</strong> Lead straight down the main path towards Admin Block.</li>
      <li><strong>CET 1 / Room 9108:</strong> Go straight past Block I & II, past Food Stalls, turn right at the end to reach CET 1.</li>
      <li><strong>Canteen / Cafeteria:</strong> Located right near the Main Entrance on the right, and Cafeteria past Central Library.</li>
      <li><strong>Play Ground & Courts:</strong> East side next to CET 2, CET 3, and Basketball court.</li>
    </ul>`;
  }

  return "I can help you with <strong>SNIST CSE-H Timetables, Bus Routes, Faculty Contacts, Holidays, and Campus Navigation</strong>. Try asking about one of those!";
}

// UI Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("ai-input");
  const outputDiv = document.getElementById("output");
  const getAnswerBtn = document.getElementById("get-answer-btn");
  const clearBtn = document.getElementById("clear-btn");

  if (getAnswerBtn) {
    getAnswerBtn.addEventListener("click", () => {
      const query = inputField ? inputField.value.trim() : "";
      if (query === "") {
        outputDiv.innerHTML = "<p style='color: #c2185b;'>Please enter a question first.</p>";
        return;
      }
      outputDiv.innerHTML = processQuery(query);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (inputField) inputField.value = "";
      if (outputDiv) outputDiv.innerHTML = "";
    });
  }
});
