
let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');

}

// mobile part code ----------

let sidemenu = document.getElementById('sidemenu');

function openMenu(){
    sidemenu.style.right = '0';
}

function closeMenu(){
    sidemenu.style.right = '-200px';
}

// ------- code for app script in google sheets -------------------

// var sheetName = 'Sheet1'
// var scriptProp = PropertiesService.getScriptProperties()

// function intialSetup () {
//   var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
//   scriptProp.setProperty('key', activeSpreadsheet.getId())
// }

// function doPost (e) {
//   var lock = LockService.getScriptLock()
//   lock.tryLock(10000)

//   try {
//     var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
//     var sheet = doc.getSheetByName(sheetName)

//     var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
//     var nextRow = sheet.getLastRow() + 1

//     var newRow = headers.map(function(header) {
//       return header === 'timestamp' ? new Date() : e.parameter[header]
//     })

//     sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

//     return ContentService
//       .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
//       .setMimeType(ContentService.MimeType.JSON)
//   }

//   catch (e) {
//     return ContentService
//       .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
//       .setMimeType(ContentService.MimeType.JSON)
//   }

//   finally {
//     lock.releaseLock()
//   }
// }

// -------------- puting url in html -------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbw79jEEdxFZZStF1p1NJEjnzaAc3WyRk0JVmDtD0CevyG6hW_E553Q4UN5Ki15lO9Vg/exec';
const form = document.forms['submit-to-google-sheet'];

const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
            msg.innerHTML = 'message sent successfully'
            msg.setTimeout(() => {
                msg.innerHTML = ' '
            },4000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })