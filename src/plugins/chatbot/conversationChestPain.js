/* The chat const defines the chest pain conversation.
 *
 * It should be an object with numerical property names, and each property is an entry
 * in the conversation.
 *
 * A conversation entry should have:
 *  - A "text" property that is what the chatbot says at this point in the conversation
 *  - Either:
 *     - A "next" property, which defines the next chat entry by stating a numerical key
 *       of the chat object and is used when the chatbot needs to say several things
 *       without input from the user
 *    OR
 *     - An "options" property that defines the choices a user can take this is an
 *       array of option objects
 *
 * An options object should have:
 *  - a "text" property that is the label for the user's choice
 *  AND EITHER
 *  - a "next" property that defines the next chat entry by stating a numerical key of
 *    the chat object and is used when the user selects this option
 *  OR
 *  - a "url" property that defines a link for the user to be taken to
 *
 * A simple example chat object is:
 */
export const chatCP = {
  1: {
    text: "Hello, I am AI chatbot. How may I help you?",
    options: [
      {
        text: "👋",
        next: 2,
      },
    ],
  },
  2: {
    text: "Are any of the following present?",
    next: 3,
  },
  3: {
    text: "(1) Continuous or intermittent pain, tightness, pressure, or discomfort accompanied by <br>(a) shortness of breath <br>(b) dizziness or weakness <br> (c) cool, moist skin <br> (d) nausea or vomiting <br> (e) pain in the neck, shoulders, jaw, back, or arms <br> (f) blue or gray face, lips, earlobes, or fingernails <br> (g) heart palpitations <br>(2) Chest pain persists, unrelieved by rest, pain medication, antacids, or nitroglycerin every 5 minutes for three doses",
    options: [
      {
        text: "<strong>Yes</strong>",
        next: 4,
      },
      {
        text: "<strong>No</strong>",
        next: 6,
      },
    ],
  },
  4: {
    text: "Chew one adult aspirin unless allergic to aspirin",
    next: 5,
  },
  5: {
    text: "Call ambulance",
  },
  6: {
    text: "Are any of the following present?",
    next: 7,
  },
  7: {
    text: "(1) Change in chest pain pattern in known cardiac patient <br>(2) Pain not relieved by two nitroglycerin tablets <br>(3) Chest pain at rest or that awakens person <br> (4) Recent period of prolonged sitting (such as during traveling) <br>(5) Strong family history of heart disease, heart attack, stroke, or diabetes <br>(6) History of diabetes, heart disease, CHF, or blood clotting problems <br>(7) Age > 30 and heavy smoker with high blood pressure, high cholesterol, or obesity <br>(8) Pain, swelling, warmth, or redness of leg <br>(9) Sudden onset of swollen ankles <br>(10) Coughing up blood <br>(11) Fever, cough, congestion, and shortness of breath <br>(12) Trauma, childbirth, or surgery in past month <br>(13) History of blood clotting problems <br>(14) Recreational street drug or prescription drug abuse within past 24 hours <br>(15) Age > 35 and heart palpitations <br>(16) Repeated shocks and internal defibrillator in place",
    options: [
      {
        text: "<strong>Yes</strong>",
        next: 8,
      },
      {
        text: "<strong>No</strong>",
        next: 10,
      },
    ],
  },
  8: {
    text: "Seek emergency care now",
    next: 9,
  },
  9: {
    text: "Do not drive yourself. If another driver is not available, Call an ambulance",
  },
  10: {
    text: "Is the following present?",
    next: 11,
  },
  11: {
    text: "(1) Localized area of painful blisters or rash <br>(2) Recent injury and pain increases with movement <br>(3) Chest pain with exertion that is relieved with rest <br>(4) Fracture < 2 months previously",
    options: [
      {
        text: "<strong>Yes</strong>",
        next: 12,
      },
      {
        text: "<strong>No</strong>",
        next: 13,
      },
    ],
  },
  12: {
    text: "Seek medical care within 24 hours",
  },
  13: {
    text: "Are any of the following present?",
    next: 14,
  },
  14: {
    text: "(1) Pain occurs with deep breathing <br>(2) Pain occurs when pressure is applied to the area <br>(3) Intermittent mild chest discomfort with deep productive coughing",
    options: [
      {
        text: "<strong>Yes</strong>",
        next: 15,
      },
      {
        text: "<strong>No</strong>",
        next: 16,
      },
    ],
  },
  15: {
    text: "Call back or call PCP for appointment if no improvement and Follow Home Care Instructions",
    next: 17,
  },
  16: {
    text: "Follow Home Care Instructions",
    next: 17,
  },
  17: {
    text: "For details:",
    options: [
      {
        text: "Home Care Instructions",
        next: 18,
      },
    ],
  },
  18: {
    text: "For heartburn or GERD: <br> (A) Take your usual antacid (Maalox, Mylanta, Riopan, Tums, Pepcid, Prilosec, or other antacid) for indigestion and follow instructions on the label. <br> (B) Liquids provide faster relief than tablets. <br> (C) Consult with PCP if taking other medications. <br> (D) Do not give Pepto-Bismol to a child. <br> (E) Avoid eating 2 to 3 hours before bedtime.",
    next: 19,
  },
  19: {
    text: "Take your usual pain medication (aspirin, acetaminophen, or ibuprofen). Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.",
    next: 20,
  },
  20: {
    text: "Take nitroglycerin as directed by PCP if pain is typical chest anginal pain; if no relief after 3 to 5 minutes, take aspirin and another nitroglycerin dose and have someone drive you to the ED or call an ambulance. Do not take aspirin if you are currently on anticoagulant therapy.",
    next: 21,
  },
  21: {
    text: "If pain is related to an injury that occurred 24 hours ago or longer and pain increases with movement, apply heat to the area for 20 minutes, 4 times a day.",
    next: 22,
  },
  22: {
    text: "For a cough: <br> (A) Drink 6 to 8 glasses of water daily (if no fluid restrictions prescribed). <br> (B) Breathe steam from a shower or tea kettle with towel held over the head for 10 to 15 minutes to loosen phlegm. <br> (C) Elevate head of bed to reduce coughing at night. <br> (D) Drink warm lemonade, apple cider, or tea to help soothe cough. <br> (E) Avoid irritants such as smoking, smog, and chemicals. <br> (F) Turn down the heat, open the windows, or go out into cooler air to help suppress cough. <br> (G) Take cough suppressants (ask your pharmacist for product suggestions) if cough is interfering with activity, causing chest pain or vomiting, or interrupting sleep at night. Follow instructions on the label. Do not use if age < 1 year. <br> (H) If congested, avoid milk products. <br> (I) Take OTC medications as needed, being sure to follow instructions on the label: for a wet cough, use a decongestant; for a dry cough, use an expectorant during the day and suppressant at night; for an allergy, use an antihistamine or decongestant. Ask your pharmacist for product suggestions.",
    next: 23,
  },
  23: {
    text: "Make appointment with doctors!",
    options: [
      {
        text: "Dr. Lam",
        url: "https://www8.ha.org.hk/qmh/",
      },
      {
        text: "Dr. Wong",
        url: "https://gleneagles.hk/",
      },
    ],
  },
};
