var pagesCodes = ['welcome','onair','choice2publish','thankyou1','contact','thankyou2','choice2publish_cancel','contact_cancel','deletionDone']

var pagesTexts = {
  "welcome": {
    "title": "Hello",
    "instructions": "Record here what you have to say to Beirut",
    "countDownInfo": "",
    "centralButtonLabel": "Start Recording …",
    "scrollableText": ""
  },
  "onair": {
    "title": "",
    "instructions": "",
    "countDownInfo": "0.0833333333333333",
    "centralButtonLabel": "recording …",
    "scrollableText": ""
  },
  "choice2publish": {
    "title": "Agreement",
    "instructions": "",
    "countDownInfo": "",
    "centralButtonLabel": "",
    "scrollableText": `(legalDoc SFC3)<br>
    <h4>The standard Lorem Ipsum passage, used since the 1500s</h4>
<p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>

<h4>Section 1.10.32 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC</h4>
<p>\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"</p>

<h4>The standard Lorem Ipsum passage, used since the 1500s</h4>
<p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>

<h4>Section 1.10.32 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC</h4>
<p>\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"</p>
    `
  },
  "thankyou1": {
    "title": "Thank you",
    "instructions": "Thank you for your contribution. Would you wish to stay in contact with us?",
    "countDownInfo": "",
    "centralButtonLabel": "",
    "scrollableText": ""
  },
  "contact": {
    "title": "Contact Us",
    "instructions": "",
    "countDownInfo": "",
    "centralButtonLabel": "",
    "scrollableText": ""
  },
  "thankyou2": {
    "title": "Thank you",
    "instructions": "We'll send you a mail soon!",
    "countDownInfo": "",
    "centralButtonLabel": "",
    "scrollableText": ""
  },
  "choice2publish_cancel": {
    "title": "Heads up !",
    "instructions": "Your recording will be permanently deleted. Please confirm.",
    "countDownInfo": "",
    "centralButtonLabel": "",
    "scrollableText": ""
  },
  "contact_cancel": {
    "title": "Heads up !",
    "instructions": "You contact data will be lost. Please confirm",
    "countDownInfo": "",
    "centralButtonLabel": "",
    "scrollableText": ""
  },
  "deletionDone": {
    "title": "Have a nice day",
    "instructions": "Thank you for passing by. All the best. The Allobeirut team.",
    "countDownInfo": "",
    "centralButtonLabel": "",
    "scrollableText": ""
  }
}
var pagesViz = {
      'welcome' : { 
        'title': 'vany-dany',
        'instructions': 'vany-dany',
        'countDownInfo': 'vno-dany',
        'animation': 'vno-dany',
        'centralButton': 'vany-dany',
        'centralButtonLabel': 'vany-dany',
        'scrollableText': 'vno-dno',
        'formContainer': 'vno-dno',
        'bottomButtonsBarOnAir': 'vno-dno',
        'bottomButtonsBarPublish': 'vno-dno',
        'bottomButtonsBarSingle': 'vno-dno',
        'icn_microphone': 'vany-dany',
        'icn_pause': 'vno-dno',
        'bottomButtonsBarTY1': 'vno-dno',
        'bottomButtonsBarTY2': 'vno-dno',
        'bottomButtonsBarContact': 'vno-dno',
        'bottomButtonsBarCancelPublish': 'vno-dno',
        'bottomButtonsBarCancelContact': 'vno-dno',
      },

      'onair' : { 
        'title': 'vno-dany',
        'instructions': 'vno-dany',
        'countDownInfo': 'vany-dany',
        'animation': 'vany-dany',
        'centralButton': 'vany-dany',
        'centralButtonLabel': 'vany-dany',
        'scrollableText': 'vno-dno',
        'formContainer': 'vno-dno',
        'bottomButtonsBarOnAir': 'vany-dany',
        'bottomButtonsBarPublish': 'vno-dno',
        'bottomButtonsBarSingle': 'vno-dno',
        'icn_microphone': 'vno-dno',
        'icn_pause': 'vany-dany',
        'bottomButtonsBarTY1': 'vno-dno',
        'bottomButtonsBarTY2': 'vno-dno',
        'bottomButtonsBarContact': 'vno-dno',
        'bottomButtonsBarCancelPublish': 'vno-dno',
        'bottomButtonsBarCancelContact': 'vno-dno',
      },

      'choice2publish' : { 
        'title': 'vany-dany',
        'instructions': 'vno-dno',
        'countDownInfo': 'vno-dno',
        'animation': 'vno-dno',
        'centralButton': 'vno-dno',
        'centralButtonLabel': 'vno-dno',
        'scrollableText': 'vany-dany',
        'formContainer': 'vany-dany',
        'contactArea': 'vno-dno',
        'frmName': 'vno-dno',
        'frmEmail': 'vno-dno',
        'frmMsg': 'vno-dno',
        'checkboxArea': 'vany-dany',
        'frmAgree': 'vany-dany',
        'bottomButtonsBarOnAir': 'vno-dno',
        'bottomButtonsBarPublish': 'vany-dany',
        'bottomButtonsBarSingle': 'vno-dno',
        'icn_microphone': 'vno-dno',
        'icn_pause': 'vno-dno',
        'bottomButtonsBarTY1': 'vno-dno',
        'bottomButtonsBarTY2': 'vno-dno',
        'bottomButtonsBarContact': 'vno-dno',
        'bottomButtonsBarCancelPublish': 'vno-dno',
        'bottomButtonsBarCancelContact': 'vno-dno',
      },

      'thankyou1' : { 
        'title': 'vany-dany',
        'instructions': 'vany-dany',
        'countDownInfo': 'vno-dno',
        'animation': 'vno-dno',
        'centralButton': 'vno-dno',
        'centralButtonLabel': 'vno-dno',
        'scrollableText': 'vno-dno',
        'formContainer': 'vno-dno',
        'bottomButtonsBarOnAir': 'vno-dno',
        'bottomButtonsBarPublish': 'vno-dno',
        'bottomButtonsBarSingle': 'vno-dno',
        'icn_microphone': 'vno-dno',
        'icn_pause': 'vno-dno',
        'bottomButtonsBarTY1': 'vany-dany',
        'bottomButtonsBarTY2': 'vno-dno',
        'bottomButtonsBarContact': 'vno-dno',
        'bottomButtonsBarCancelPublish': 'vno-dno',
        'bottomButtonsBarCancelContact': 'vno-dno',
      },

      'contact' : { 
        'title': 'vno-dno',
        'instructions': 'vno-dno',
        'countDownInfo': 'vno-dno',
        'animation': 'vno-dno',
        'centralButton': 'vno-dno',
        'centralButtonLabel': 'vno-dno',
        'scrollableText': 'vno-dno',
        'formContainer': 'vany-dany',
        'contactArea': 'vany-dany',
        'frmName': 'vany-dany',
        'frmEmail': 'vany-dany',
        'frmMsg': 'vany-dany',
        'checkboxArea': 'vno-dno',
        'frmAgree': 'vno-dno',
        'bottomButtonsBarOnAir': 'vno-dno',
        'bottomButtonsBarPublish': 'vno-dno',
        'bottomButtonsBarSingle': 'vno-dno',
        'icn_microphone': 'vno-dno',
        'icn_pause': 'vno-dno',
        'bottomButtonsBarTY1': 'vno-dno',
        'bottomButtonsBarTY2': 'vno-dno',
        'bottomButtonsBarContact': 'vany-dany',
        'bottomButtonsBarCancelPublish': 'vno-dno',
        'bottomButtonsBarCancelContact': 'vno-dno',
      },

      'thankyou2' : { 
        'title': 'vany-dany',
        'instructions': 'vany-dany',
        'countDownInfo': 'vno-dno',
        'animation': 'vno-dno',
        'centralButton': 'vno-dno',
        'centralButtonLabel': 'vno-dno',
        'scrollableText': 'vno-dno',
        'formContainer': 'vno-dno',
        'bottomButtonsBarOnAir': 'vno-dno',
        'bottomButtonsBarPublish': 'vno-dno',
        'bottomButtonsBarSingle': 'vno-dno',
        'icn_microphone': 'vno-dno',
        'icn_pause': 'vno-dno',
        'bottomButtonsBarTY1': 'vno-dno',
        'bottomButtonsBarTY2': 'vany-dany',
        'bottomButtonsBarContact': 'vno-dno',
        'bottomButtonsBarCancelPublish': 'vno-dno',
        'bottomButtonsBarCancelContact': 'vno-dno',
      },

      'choice2publish_cancel' : { 
        'title': 'vany-dany',
        'instructions': 'vany-dany',
        'countDownInfo': 'vno-dno',
        'animation': 'vno-dno',
        'centralButton': 'vno-dno',
        'centralButtonLabel': 'vno-dno',
        'scrollableText': 'vno-dno',
        'formContainer': 'vno-dno',
        'bottomButtonsBarOnAir': 'vno-dno',
        'bottomButtonsBarPublish': 'vno-dno',
        'bottomButtonsBarSingle': 'vno-dno',
        'icn_microphone': 'vno-dno',
        'icn_pause': 'vno-dno',
        'bottomButtonsBarTY1': 'vno-dno',
        'bottomButtonsBarTY2': 'vno-dno',
        'bottomButtonsBarContact': 'vno-dno',
        'bottomButtonsBarCancelPublish': 'vany-dany',
        'bottomButtonsBarCancelContact': 'vno-dno',
      },

      'contact_cancel' : { 
        'title': 'vany-dany',
        'instructions': 'vany-dany',
        'countDownInfo': 'vno-dno',
        'animation': 'vno-dno',
        'centralButton': 'vno-dno',
        'centralButtonLabel': 'vno-dno',
        'scrollableText': 'vno-dno',
        'formContainer': 'vno-dno',
        'bottomButtonsBarOnAir': 'vno-dno',
        'bottomButtonsBarPublish': 'vno-dno',
        'bottomButtonsBarSingle': 'vno-dno',
        'icn_microphone': 'vno-dno',
        'icn_pause': 'vno-dno',
        'bottomButtonsBarTY1': 'vno-dno',
        'bottomButtonsBarTY2': 'vno-dno',
        'bottomButtonsBarContact': 'vno-dno',
        'bottomButtonsBarCancelPublish': 'vno-dno',
        'bottomButtonsBarCancelContact': 'vany-dany',
      },

      'deletionDone' : { 
        'title': 'vany-dany',
        'instructions': 'vany-dany',
        'countDownInfo': 'vno-dno',
        'animation': 'vno-dno',
        'centralButton': 'vno-dno',
        'centralButtonLabel': 'vno-dno',
        'scrollableText': 'vno-dno',
        'formContainer': 'vno-dno',
        'bottomButtonsBarOnAir': 'vno-dno',
        'bottomButtonsBarPublish': 'vno-dno',
        'bottomButtonsBarSingle': 'vany-dany',
        'icn_microphone': 'vno-dno',
        'icn_pause': 'vno-dno',
        'bottomButtonsBarTY1': 'vno-dno',
        'bottomButtonsBarTY2': 'vno-dno',
        'bottomButtonsBarContact': 'vno-dno',
        'bottomButtonsBarCancelPublish': 'vno-dno',
        'bottomButtonsBarCancelContact': 'vno-dno',
      },
}




//////////////////////// to be replaced

function btn_onair_delete() {
  console.log('btn_onair_delete')
  stopCountDown()
  document.getElementById('title').innerHTML = 'Warning'
  document.getElementById('instructions').innerHTML = 'Do you want to delete your recording?'
  apply_pageViz('choice2publish_cancel') 
}

//////////////

function apply_pageViz( pageId ) {
  console.log('apply_pageViz', pageId)
  // console.log(pagesViz[pageId])
  if (pageId in pagesViz ) {
    for ( var elemId in pagesViz[pageId] ) {
      document.getElementById(elemId).classList.remove('vany-dany')
      document.getElementById(elemId).classList.remove('vany-dno')
      document.getElementById(elemId).classList.remove('vno-dany')
      document.getElementById(elemId).classList.remove('vno-dno')
      document.getElementById(elemId).classList.add(pagesViz[pageId][elemId])
    }
  } else {
    console.log('apply_pageViz', pageId, 'unknown ERROR')
  }
}

// function change_page( pageId ) {
//   document.getElementById('main').classList.add('main-translation')
// }


function apply_pageTexts( pageId ) {
  if (pageId == 'welcome') {
    reset_inputs()
  }
  if (pageId in pagesViz ) {
    console.log('apply_pageTexts', pageId )
    for ( var elemId in pagesTexts[pageId] ) {
      document.getElementById(elemId).innerHTML = pagesTexts[pageId][elemId]
    }
  } else {
    console.log('apply_pageViz', pageId, 'unknown ERROR')
  }
}

/////////////////////////

function btn_welcome_ko(){ 
  // N/A
}
function btn_welcome_ok(){ 
  // N/A
}
function btn_welcome_action(){ 
  var targetPage = 'onair'
  console.log('btn_welcome_action','targetPage:', targetPage)
  startCountDown()
  apply_pageTexts(targetPage)
  apply_pageViz(targetPage) 
}
function btn_onair_ko(){ 
  var targetPage = 'choice2publish_cancel'
  console.log('btn_onair_ko','targetPage:', targetPage)
  stopCountDown()
  apply_pageTexts(targetPage)
  apply_pageViz(targetPage) 
}
function btn_onair_ok(){ 
  var targetPage = 'choice2publish'
  console.log('btn_onair_ok', 'targetPage:', targetPage)
  stopCountDown()
  apply_pageTexts(targetPage)
  apply_pageViz(targetPage)
}
function btn_onair_action(){ 
  stopCountDown()
}
function btn_choice2publish_ko(){ 
  document.getElementById('frmAgree').checked = false

  var targetPage = 'choice2publish_cancel'
  apply_pageTexts(targetPage)
  apply_pageViz(targetPage)
}
function btn_choice2publish_ok(){ 
  if (document.getElementById('frmAgree').checked ) {
    var targetPage = 'thankyou1'
    apply_pageTexts(targetPage)
    apply_pageViz(targetPage) 
  } else {
    document.getElementById('frmAgreeLabel').style.color='red'
  }
}
function btn_choice2publish_action(){ 
  // N/A
}
function btn_thankyou1_ko(){ 
  var targetPage = 'deletionDone'
  apply_pageTexts(targetPage)
  apply_pageViz(targetPage)
}
function btn_thankyou1_ok(){ 
  var targetPage = 'contact'
  apply_pageTexts(targetPage)
  apply_pageViz(targetPage)
}
function btn_thankyou1_action(){ 
  // N/A
}
///////////////// AND THE RESET !!!!! OF THE FIELDS FORM ///////////
function btn_contact_ko(){ 
  var targetPage = 'contact_cancel'
  apply_pageTexts(targetPage)
  apply_pageViz(targetPage)
}
function btn_contact_ok(){ 
  var targetPage = 'thankyou2'
  apply_pageTexts(targetPage)
  apply_pageViz(targetPage)
}
function btn_contact_action(){ 
  // N/A
}
function btn_thankyou2_ko(){ 
  var targetPage = 'contact_cancel'
  apply_pageTexts(targetPage)
  apply_pageViz(targetPage)
}
function btn_thankyou2_ok(){ 
  var targetPage = 'deletionDone'
  apply_pageTexts(targetPage)
  apply_pageViz(targetPage) 
}
function btn_thankyou2_action(){ 
  // N/A
}
function btn_choice2publish_cancel_ko(){ 
  var targetPage = 'deletionDone'
  apply_pageTexts(targetPage)
  apply_pageViz(targetPage) 
}
function btn_choice2publish_cancel_ok(){ 
  var targetPage = 'choice2publish'
  apply_pageTexts(targetPage)
  apply_pageViz(targetPage) 
}
function btn_choice2publish_cancel_action(){ 
  // N/a
}
function btn_contact_cancel_ko(){ 
  var targetPage = 'deletionDone'
  apply_pageTexts(targetPage)
  apply_pageViz(targetPage) 
}
function btn_contact_cancel_ok(){ 
  var targetPage = 'contact'
  apply_pageTexts(targetPage)
  apply_pageViz(targetPage) 
}
function btn_contact_cancel_action(){ 
  // N/a
}
function btn_deletionDone_ko(){ 
  // N/A
}
function btn_deletionDone_ok(){ 
  var targetPage = 'welcome'
  apply_pageTexts(targetPage)
  apply_pageViz(targetPage) 
}
function btn_deletionDone_action(){ 
  // N/A
}




//////////////////////




function debug_init() {
  document.getElementById('scrollableText').innerHTML = 'scrollableText  scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText scrollableText'
  apply_pageViz('welcome')
}


/////////////////////////////

function start_animation() {
  document.getElementById('animation').innerHTML =  '<img src="anim_recording.gif" style="height: 100px; width:auto; margin:0px; padding:0px;">'
}
function freeze_animation() {
  document.getElementById('animation').innerHTML =  '<img src="anim_recording_frozen.gif" style="height: 100px; width:auto; margin:0px; padding:0px;">'
}

function pad(num, size){     // https://stackoverflow.com/questions/2998784/how-to-output-numbers-with-leading-zeros-in-javascript
  return ('000000000' + num).substr(-size); 
} 
function convertMS_MMSS(ms) { // https://stackoverflow.com/questions/50570376/how-to-calculated-elapsed-time-in-javascript-in-readable-format
  var d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  // return d + " days, " + h + " hours, " + m + " minutes, " + s + " seconds.";
  return pad(m,2) + ":" + pad(s,2);
}



var confMaxRecordTime = 2 * 60 * 1000 // milliseconds
var countDownForceStop = false
var countDownStartTime = new Date()
function startCountDown() {
  console.log('startCountDown')
  apply_pageViz('onair')
  start_animation()
  countDownForceStop = false
  countDownStartTime = new Date()
  document.getElementById('countDownInfo').innerHTML =  convertMS_MMSS(confMaxRecordTime)
  document.getElementById('centralButtonLabel').innerHTML = 'recording ...'
  setTimeout('updateCountDown()', 300)
}
function updateCountDown() {
  var currentTime = new Date()
  var elapsed =  (currentTime.getTime() - countDownStartTime.getTime())
  var remaining = 0
  if ( countDownForceStop ) { 
    stopCountDown()
  } else {
    if (  elapsed <= confMaxRecordTime ) {
      remaining = confMaxRecordTime - elapsed
      document.getElementById('countDownInfo').innerHTML =  convertMS_MMSS(remaining)
      setTimeout('updateCountDown()', 300)
    } else {
      stopCountDown()   
    }
  }
}
function stopCountDown() {
  console.log('stopCountDown')
  freeze_animation()
  document.getElementById('centralButtonLabel').innerHTML = 'recording done'
  
  var elemId = 'icn_pause'
  document.getElementById(elemId).classList.remove('vany-dany')
  document.getElementById(elemId).classList.remove('vany-dno')
  document.getElementById(elemId).classList.remove('vno-dany')
  document.getElementById(elemId).classList.remove('vno-dno')
  document.getElementById(elemId).classList.add('vany-dno')

  countDownForceStop = true
  var currentTime = new Date()
  var elapsed = (currentTime.getTime() - countDownStartTime.getTime())
  document.getElementById('countDownInfo').innerHTML =  'duration ' + convertMS_MMSS(elapsed)
}



/// For debugging
var currentPageNo = 0
function goThroughPages(speed) {
  apply_pageViz(pagesCodes[currentPageNo])
  currentPageNo++
  if (currentPageNo < pagesCodes.length) {
    setTimeout('goThroughPages('+speed+')', speed)
  } else {
    currentPageNo = 0
  }
}



function reset_inputs() {
  document.getElementById('frmName').value = ''
  document.getElementById('frmEmail').value = ''
  document.getElementById('frmMsg').value = ''
  document.getElementById('frmAgree').checked = false
  document.getElementById('frmAgreeLabel').style.color='white'
}



function reset_app_timeout() {

}















