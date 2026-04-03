/* Solace by MyGriefAngels.org | v2.2 | mygriefangels.org | updated 2026-04-03 */
(function () {
  'use strict';

  /* ============================================================
     CONFIGURATION
     ============================================================ */
  var CFG = {
    siteUrl:         'https://www.mygriefangels.org',
    chatUrl:         'https://chat.mygriefangels.org',
    coursesUrl:      'https://courses.ugrief.com',
    calendarUrl:     'https://calendar.google.com/calendar/embed?src=mygriefangels@gmail.com',
    groupsPageUrl:   'https://www.mygriefangels.org/free-virtual-peer-led-grief-support-groups',
    groupsByLossUrl: 'https://www.mygriefangels.org/free-virtual-grief-support-groups-by-type-of-loss.html',
    holidayUrl:      'https://www.mygriefangels.org/holidays-grief-support-groups',
    therapistDirUrl: 'https://www.mygriefangels.org/grief-counselors',
    resourceDirUrl:  'https://www.mygriefangels.org/directory-of-grief-support',
    spanishUrl:      'https://www.mygriefangels.org/apoyo-para-el-duelo-en-espanol',
    petLossUrl:      'https://www.mygriefangels.org/pet-loss-support',
    disabilitiesUrl: 'https://www.mygriefangels.org/people-with-disabilities',
    checklistUrl:    'https://www.mygriefangels.org/prepost-loss-checklist',
    journalUrl:      'https://www.mygriefangels.org/grief-journal-and-grief-scales',
    helpUrl:         'https://www.mygriefangels.org/how-2-help',
    lgbtqUrl:        'https://lgbtqloss.com',
    lgbtqDirUrl:     'https://lgbtqloss.com/lgbtq-grief-support-resources',
    selfCareUrl:     'https://feirg.com',
    griefTvUrl:      'https://grieftelevision.com',
    podcastUrl:      'https://griefwalking.com',
    griefFestUrl:    'https://grieffest.com',
    calFiresUrl:          'https://firescalifornia.com',
    spanishCoursesUrl:    'https://uduelo.com',
    frenchCoursesUrl:     'https://www.udeuil.com',
    portugueseCoursesUrl: 'https://uniluto.com',
    hindiCoursesUrl:      'https://udukh.com',
    griefTechUrl:         'https://grieftech.com',
    benchThinkUrl:        'https://benchthink.com',
    goodFromGriefUrl:     'https://goodfromgrief.com',
    externalDataUrl: '/solace-data.json',
    proactiveDelay:  5500,
    typingDelayMin:  800,
    typingDelayMax:  1400
  };

  /* ============================================================
     GROUP REGISTRATION LINKS
     ============================================================ */
  var GROUPS = {
    child_sibling_friend:   'https://us02web.zoom.us/meeting/register/tZcoce2vpz8tHde_P3yvdIKUWKdLcIpMW0XW',
    spouse_partner_lgbtqia: 'https://us02web.zoom.us/meeting/register/tZAldeihqDIqH9YOiEop6eGpBZcWCjHrMcET',
    parent_grandparent:     'https://us02web.zoom.us/meeting/register/tZAsdOqqrzIuGtfEKEdANcqsl99qA8DWaYSW',
    general_all_loss:       'https://us02web.zoom.us/meeting/register/lZTbzJQgReC3Q22jZE7obQ',
    grief_break_small:      'https://us02web.zoom.us/meeting/register/ApEH-S-0RSikDZCtibvE6w',
    lgbtq_dedicated:        'https://us02web.zoom.us/meeting/register/tZAkfuuoqTkpGNbrG5alWI_GvAEb-D-ljpY6',
    spanish_apoyo:          'https://us02web.zoom.us/meeting/register/OjaUQRarToiLozZLn1tPBg',
    california_fires:       'https://us02web.zoom.us/meeting/register/tZYrf-2vpzsoE9UOkfvORY980RvvO3Xg2Acf',
    holiday_valentines:     'https://us02web.zoom.us/meeting/register/F0aNlizPQbyUU26fRQh19w',
    holiday_easter:         'https://us02web.zoom.us/meeting/register/tZ0vd--rqzssGt3j6mcairq7rHBRb2FuvyPu',
    holiday_mothers:        'https://us02web.zoom.us/meeting/register/tZEvfuCorj4vHtwzucmaFHQcM1KxZVeNuiKO',
    holiday_memorial:       'https://us02web.zoom.us/meeting/register/xV6CtSygSei4edTd02uWUw',
    holiday_fathers:        'https://us02web.zoom.us/meeting/register/j0pumcWgT0OmIJEnNZHi3w',
    holiday_july4:          'https://us02web.zoom.us/meeting/register/S5EMnGbPRDGhdsGmimYO5A',
    holiday_labor:          'https://us02web.zoom.us/meeting/register/nlAH0IAIQ-6A79qwX8DAnA',
    holiday_halloween:      'https://us02web.zoom.us/meeting/register/EQUgdMHqRoefrD62VIlO-g',
    holiday_veterans:       'https://us02web.zoom.us/meeting/register/wAIqFppYREyDLa0bPtInTQ',
    holiday_thanksgiving:   'https://us02web.zoom.us/meeting/register/ZY9Kh6rEQjCgYrQez73c5A',
    holiday_christmas:      'https://us02web.zoom.us/meeting/register/QwH1O8FKQjWRdsvtwXanqA',
    holiday_newyearseve:    'https://us02web.zoom.us/meeting/register/KwAMQjFpRVqFPeTUy39hRg'
  };

  /* ============================================================
     CSS — injected once at runtime
     ============================================================ */
  function injectStyles() {
    if (document.getElementById('mga-solace-styles')) return;
    var css = [
      '#mga-launcher,#mga-window,#mga-bubble,.mga-wrap,.mga-qrow,#mga-input-row,#mga-header,#mga-disclaimer,#mga-msgs,#mga-footer{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;line-height:1.5}',
      '#mga-launcher{position:fixed;bottom:24px;right:24px;z-index:2147483647;width:64px;height:64px;border-radius:50%;background:linear-gradient(145deg,#5B4B8A,#8763C4);border:none;cursor:pointer;box-shadow:0 4px 24px rgba(91,75,138,.50);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:2px;transition:transform .22s,box-shadow .22s;padding:0}',
      '#mga-launcher:hover{transform:translateY(-3px);box-shadow:0 8px 32px rgba(91,75,138,.60)}',
      '#mga-lbl{color:rgba(255,255,255,.92);font-size:9.5px;font-weight:700;letter-spacing:.6px;text-transform:uppercase}',
      '#mga-badge{position:absolute;top:-3px;right:-3px;background:#E53935;color:#fff;border-radius:50%;width:20px;height:20px;font-size:11px;font-weight:800;display:none;align-items:center;justify-content:center;border:2px solid #fff}',
      '#mga-bubble{position:fixed;bottom:100px;right:24px;z-index:2147483646;background:#fff;border:1.5px solid #DDD4F5;border-radius:18px 18px 6px 18px;padding:14px 38px 14px 16px;max-width:268px;font-size:13.5px;line-height:1.55;color:#2D2D2D;box-shadow:0 4px 20px rgba(91,75,138,.18);cursor:pointer;display:none;animation:mga-fi .4s ease}',
      '#mga-bc{position:absolute;top:8px;right:10px;background:none;border:none;cursor:pointer;font-size:15px;color:#9B7FD4;padding:2px 4px;line-height:1}',
      '#mga-window{position:fixed;bottom:100px;right:24px;z-index:2147483647;width:368px;max-width:calc(100vw - 32px);height:572px;max-height:calc(100vh - 116px);background:#F7F4FF;border-radius:22px;box-shadow:0 10px 48px rgba(91,75,138,.26);display:none;flex-direction:column;overflow:hidden}',
      '#mga-window.mga-open{display:flex;animation:mga-si .3s ease}',
      '@keyframes mga-fi{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}',
      '@keyframes mga-si{from{opacity:0;transform:translateY(16px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}',
      '#mga-header{background:linear-gradient(135deg,#5B4B8A,#8763C4);padding:14px 16px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}',
      '#mga-hl{display:flex;align-items:center;gap:11px}',
      '#mga-av{width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;flex-shrink:0;border:1.5px solid rgba(255,255,255,.28)}',
      '#mga-bn{color:#fff;font-size:17px;font-weight:700}',
      '#mga-bs{color:rgba(255,255,255,.78);font-size:11.5px;margin-top:1px}',
      '#mga-cb{background:rgba(255,255,255,.15);border:none;color:#fff;border-radius:50%;width:34px;height:34px;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .18s;font-family:inherit}',
      '#mga-cb:hover{background:rgba(255,255,255,.30)}',
      '#mga-disclaimer{background:#EDE8F8;color:#4A3E7A;font-size:11px;padding:8px 14px;line-height:1.5;flex-shrink:0;border-bottom:1px solid #DDD4F5}',
      '#mga-msgs{flex:1;overflow-y:auto;padding:16px 13px;display:flex;flex-direction:column;gap:12px;scroll-behavior:smooth}',
      '#mga-msgs::-webkit-scrollbar{width:5px}',
      '#mga-msgs::-webkit-scrollbar-thumb{background:#C9B8E8;border-radius:4px}',
      '.mga-wrap{display:flex;align-items:flex-end;gap:8px;max-width:100%}',
      '.mga-wrap.bot{justify-content:flex-start}',
      '.mga-wrap.usr{justify-content:flex-end}',
      '.mga-av2{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#5B4B8A,#8763C4);display:flex;align-items:center;justify-content:center;flex-shrink:0}',
      '.mga-col{max-width:83%;display:flex;flex-direction:column;gap:7px}',
      '.mga-bbl{padding:10px 14px;border-radius:18px;font-size:13.5px;line-height:1.58;word-wrap:break-word;overflow-wrap:break-word}',
      '.mga-bbl.bot{background:#fff;color:#2A2A2A;border-radius:5px 18px 18px 18px;border:1px solid #E4DCF7;box-shadow:0 1px 5px rgba(91,75,138,.09)}',
      '.mga-bbl.bot a{color:#5B4B8A;text-decoration:underline;text-decoration-color:#C9B8E8}',
      '.mga-bbl.usr{background:linear-gradient(135deg,#5B4B8A,#7B5FC5);color:#fff;border-radius:18px 18px 5px 18px;align-self:flex-end}',
      '.mga-bbl.crs{background:#FFF3F3;color:#8B0000;border:1.5px solid #F5AAAA}',
      '.mga-dots{display:flex;align-items:center;gap:5px;padding:13px 16px}',
      '.mga-dots span{width:7px;height:7px;background:#C9B8E8;border-radius:50%;animation:mga-b 1.3s infinite ease-in-out}',
      '.mga-dots span:nth-child(2){animation-delay:.18s}',
      '.mga-dots span:nth-child(3){animation-delay:.36s}',
      '@keyframes mga-b{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-7px)}}',
      '.mga-qrow{display:flex;flex-wrap:wrap;gap:6px;padding:2px 0}',
      '.mga-qbtn{background:#fff;border:1.5px solid #A07ED4;color:#5B4B8A;border-radius:22px;padding:6px 13px;font-size:12.5px;cursor:pointer;transition:background .18s,color .18s;font-family:inherit;line-height:1.35}',
      '.mga-qbtn:hover{background:#5B4B8A;color:#fff;border-color:#5B4B8A}',
      '#mga-input-row{display:flex;align-items:center;gap:8px;padding:11px 13px;background:#fff;border-top:1px solid #E4DCF7;flex-shrink:0}',
      '#mga-input{flex:1;border:1.5px solid #D4C8F0;border-radius:26px;padding:10px 16px;font-size:13.5px;outline:none;color:#2A2A2A;background:#F9F7FF;transition:border-color .18s;font-family:inherit}',
      '#mga-input:focus{border-color:#9B7FD4;background:#fff}',
      '#mga-input::placeholder{color:#A89CC4}',
      '#mga-sb{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#5B4B8A,#8763C4);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:opacity .18s}',
      '#mga-sb:hover{opacity:.88}',
      '#mga-footer{text-align:center;font-size:10px;color:#B0A0CC;padding:5px 10px 7px;background:#fff;border-top:1px solid #F0EAF8;flex-shrink:0}',
      '#mga-footer a{color:#9B7FD4;text-decoration:none}',
      '@media(max-width:479px){#mga-window{bottom:0;right:0;width:100vw;max-width:100vw;height:100dvh;max-height:100dvh;border-radius:0}#mga-launcher{bottom:16px;right:16px}#mga-bubble{right:16px;max-width:calc(100vw - 88px)}}'
    ].join('');
    var s = document.createElement('style');
    s.id = 'mga-solace-styles';
    s.textContent = css;
    (document.head || document.documentElement).appendChild(s);
  }

  /* ============================================================
     HTML — injected into <body> at runtime
     ============================================================ */
  function injectHTML() {
    if (document.getElementById('mga-solace-root')) return;
    var DOVE = '<svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><ellipse cx="20" cy="19" rx="10" ry="8" fill="rgba(255,255,255,.90)"/><path d="M10 19C6 16 3 17 4 20.5C5 22.5 8 22 10 21" fill="rgba(255,255,255,.65)"/><path d="M30 19C34 16 37 17 36 20.5C35 22.5 32 22 30 21" fill="rgba(255,255,255,.65)"/><circle cx="20" cy="13" r="4.5" fill="rgba(255,255,255,.92)"/><circle cx="21.5" cy="12.5" r="1.2" fill="#9B7FD4"/><path d="M23.5 13.5L26 14L23.5 14.5Z" fill="rgba(201,184,232,.9)"/><path d="M17 26L14 32M20 27L19 33M23 26L26 32" stroke="rgba(255,255,255,.7)" stroke-width="1.5" stroke-linecap="round"/></svg>';
    var DOVE_SM = '<svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="20" cy="22" rx="9" ry="7" fill="rgba(255,255,255,.88)"/><circle cx="20" cy="14" r="4" fill="rgba(255,255,255,.90)"/></svg>';
    var SEND = '<svg width="17" height="17" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>';

    var html = [
      '<button id="mga-launcher" aria-label="Open Solace, your MyGriefAngels compassionate guide" title="Chat with Solace">',
        DOVE,
        '<span id="mga-lbl">Solace</span>',
        '<span id="mga-badge" aria-label="New message">1</span>',
      '</button>',
      '<div id="mga-bubble" role="complementary" aria-label="Message from Solace">',
        '<button id="mga-bc" aria-label="Dismiss">&#x2715;</button>',
        "I'm here to gently guide you through MyGriefAngels. How may I support you today?",
      '</div>',
      '<div id="mga-window" role="dialog" aria-modal="false" aria-label="Solace \u2014 MyGriefAngels Compassionate Guide" aria-hidden="true">',
        '<div id="mga-header">',
          '<div id="mga-hl">',
            '<div id="mga-av" aria-hidden="true">', DOVE_SM, '</div>',
            '<div>',
              '<div id="mga-bn">Solace</div>',
              '<div id="mga-bs">MyGriefAngels Guide &middot; Here for you</div>',
            '</div>',
          '</div>',
          '<button id="mga-cb" aria-label="Close chat">&#x2715;</button>',
        '</div>',
        '<div id="mga-disclaimer" role="note">',
          '<strong>Please note:</strong> Everyone at MyGriefAngels &mdash; in groups, chat, and this guide &mdash; is a fellow griever volunteering to support others. No licensed mental health professionals are involved. If you are in crisis, please call or text <strong>988</strong> immediately.',
        '</div>',
        '<div id="mga-msgs" role="log" aria-live="polite" aria-atomic="false"></div>',
        '<div id="mga-input-row">',
          '<input id="mga-input" type="text" placeholder="Share what\'s on your mind\u2026" aria-label="Type your message to Solace" autocomplete="off" maxlength="500"/>',
          '<button id="mga-sb" aria-label="Send message">', SEND, '</button>',
        '</div>',
        '<div id="mga-footer">',
          'A free service of <a href="https://www.mygriefangels.org" target="_blank" rel="noopener noreferrer">MyGriefAngels.org</a> &mdash; 100% volunteer-led &middot; Always free',
        '</div>',
      '</div>'
    ].join('');

    var root = document.createElement('div');
    root.id = 'mga-solace-root';
    root.innerHTML = html;
    document.body.appendChild(root);
  }

  /* ============================================================
     KNOWLEDGE BASE — INTENTS
     ============================================================ */
  var INTENTS = [
    { id:'crisis', patterns:[/suicid/i,/kill\s*(my)?self/i,/end\s+my\s+life/i,/don.?t\s+want\s+to\s+live/i,/want\s+to\s+die/i,/harm\s+my\s*self/i,/hurt\s+my\s*self/i,/self.?harm/i,/no\s+reason\s+to\s+live/i,/can.?t\s+go\s+on/i,/not\s+worth\s+living/i,/better\s+off\s+dead/i],
      response:function(){return{crisis:true,text:'<strong>Your life matters deeply, and I am genuinely concerned about you.</strong>\n\nIf you are having any thoughts of suicide or self-harm, please reach out right now:\n\n<strong>&#x260E; Call or text 988</strong> &mdash; Suicide &amp; Crisis Lifeline (free, confidential, 24/7)\n<strong>&#x270F; Text HOME to 741741</strong> &mdash; Crisis Text Line\n\nPlease contact one of these resources right away. MyGriefAngels cares deeply about you. When you are safe and ready, this community will be here.',quickReplies:[]}}},
    { id:'greeting', patterns:[/^h[ie][iy]?[\s!.]*$/i,/^hello[\s!.]*$/i,/^hey[\s!.]*$/i,/good\s+(morning|afternoon|evening|day)/i,/^howdy/i,/^greetings/i,/^hola\b/i],
      response:function(){return{text:'Hello, and welcome. I\'m <strong>Solace</strong>, the compassionate guide for <a href="'+CFG.siteUrl+'" target="_blank" rel="noopener">MyGriefAngels.org</a> &mdash; a free, volunteer-led community of people supporting one another through grief.\n\nHowever you arrived here today, I\'m glad you found your way. How may I gently support you?',quickReplies:['Find a support group','Online grief chat','Free grief courses','Multilingual grief courses','Holiday grief support','Resource directory','What is MyGriefAngels?']}}},
    { id:'about', patterns:[/what is\s*(my)?grief\s*angels/i,/about (mygrief|this site)/i,/who are you/i,/tell me about/i,/what do you (do|offer)/i,/how does this (work|site)/i,/what.?s available/i],
      response:function(){return{text:'<a href="'+CFG.siteUrl+'" target="_blank" rel="noopener">MyGriefAngels.org</a> is a <strong>100% volunteer-run nonprofit</strong> providing free peer-led grief support to anyone grieving or anticipating the death of a loved one.\n\nEveryone involved &mdash; in the support groups, the chat community, and this guide &mdash; is a fellow griever who volunteers to walk alongside others. <strong>There are no licensed mental health professionals here</strong>, and that is intentional: sometimes the most healing thing is hearing, &ldquo;I understand, because I have been there too.&rdquo;\n\nFree offerings include:\n&#x2022; Virtual peer-led grief support groups (by type of loss)\n&#x2022; Holiday grief support groups\n&#x2022; Online grief chat community\n&#x2022; Free grief courses at <a href="'+CFG.coursesUrl+'" target="_blank" rel="noopener">UGrief.com</a> &mdash; in English, Spanish, French, Portuguese &amp; Hindi\n&#x2022; Grief TV, podcasts, self-care, and technology resources\n\n<strong>The MGA network:</strong>\n&#x2022; <a href="'+CFG.coursesUrl+'" target="_blank" rel="noopener">UGrief.com</a> (English courses)\n&#x2022; <a href="'+CFG.spanishCoursesUrl+'" target="_blank" rel="noopener">UDuelo.com</a> (Spanish / Espa&ntilde;ol)\n&#x2022; <a href="'+CFG.frenchCoursesUrl+'" target="_blank" rel="noopener">UDeuil.com</a> (French / Fran&ccedil;ais)\n&#x2022; <a href="'+CFG.portugueseCoursesUrl+'" target="_blank" rel="noopener">UniLuto.com</a> (Portuguese / Portugu&ecirc;s)\n&#x2022; <a href="'+CFG.hindiCoursesUrl+'" target="_blank" rel="noopener">UDukh.com</a> (Hindi)\n&#x2022; <a href="'+CFG.lgbtqUrl+'" target="_blank" rel="noopener">LGBTQLoss.com</a>, <a href="'+CFG.griefTechUrl+'" target="_blank" rel="noopener">GriefTech.com</a>, and more\n\nAll free. No barriers. Open to everyone.',quickReplies:['Find a support group','Online grief chat','Free grief courses','Multilingual grief courses','Resource directory']}}},
    { id:'peer_support', patterns:[/therapist|counselor|licensed|mental health professional|clinical/i,/is there (a )?(therapist|doctor|professional)/i,/do you have (professionals|therapists)/i,/are (the )?(facilitators|leaders) (licensed|professionals)/i],
      response:function(){return{text:'An important part of who we are: <strong>MyGriefAngels does not include licensed therapists, counselors, or mental health professionals.</strong> Every person involved is a fellow griever who has chosen to support others navigating similar pain.\n\nParticipants are encouraged to consult their own mental health professional before joining peer groups to make sure peer support is right for them.\n\nIf you are looking for professional clinical support, our <a href="'+CFG.therapistDirUrl+'" target="_blank" rel="noopener">Grief Counselor &amp; Therapist Directory</a> lists licensed grief specialists.',quickReplies:['Find a grief counselor','Find a peer support group','Online grief chat']}}},
    { id:'groups_general', patterns:[/support group/i,/grief group/i,/find (a )?group/i,/join (a )?group/i,/virtual group/i,/online group/i,/peer.led/i,/zoom group/i,/group (meeting|session|support)/i,/^groups$/i,/what groups/i,/available groups/i],
      response:function(){return{text:'MyGriefAngels hosts <strong>free, open, virtual peer-led grief support groups</strong> via Zoom for many different types of loss.\n\n<strong>Ongoing groups:</strong>\n&#x2022; <a href="'+GROUPS.child_sibling_friend+'" target="_blank" rel="noopener">Child, Sibling &amp; Best Friend Loss</a> &mdash; Wednesdays 7 PM ET\n&#x2022; <a href="'+GROUPS.spouse_partner_lgbtqia+'" target="_blank" rel="noopener">Spouse, Partner &amp; LGBTQIA+ Loss</a> &mdash; Wednesdays 8 PM ET\n&#x2022; <a href="'+GROUPS.parent_grandparent+'" target="_blank" rel="noopener">Parent, Grandparent &amp; Mentor Loss</a> &mdash; Sundays 8 PM ET\n&#x2022; <a href="'+GROUPS.general_all_loss+'" target="_blank" rel="noopener">General / All Loss Types</a> &mdash; Sundays 7 PM ET\n&#x2022; <a href="'+GROUPS.grief_break_small+'" target="_blank" rel="noopener">Grief Break</a> (max 15) &mdash; Tuesdays 7:30 PM ET\n&#x2022; <a href="'+GROUPS.lgbtq_dedicated+'" target="_blank" rel="noopener">LGBTQ+ Loss</a> &mdash; 1st Wednesday 6 PM ET\n&#x2022; <a href="'+GROUPS.spanish_apoyo+'" target="_blank" rel="noopener">Apoyo en Espa&ntilde;ol</a> &mdash; 1st Sunday 6 PM ET\n\n<a href="'+CFG.calendarUrl+'" target="_blank" rel="noopener">View full group calendar &rarr;</a>',quickReplies:['Child or sibling loss','Loss of a spouse or partner','Loss of a parent','LGBTQ+ loss','Suicide loss','Holiday grief groups']}}},
    { id:'groups_child', patterns:[/child loss/i,/loss of (a |my )?child/i,/lost (my )?(child|son|daughter|baby|infant|toddler)/i,/infant loss/i,/pregnancy loss/i,/miscarriage/i,/stillbirth/i,/\bsids\b/i,/pediatric loss/i,/bereaved parent/i,/child or sibling/i],
      response:function(){return{text:'Losing a child &mdash; at any age, in any circumstance &mdash; is one of the most profound griefs one can carry. You are not alone in this.\n\n&#x2022; <a href="'+GROUPS.child_sibling_friend+'" target="_blank" rel="noopener">Register: Child, Sibling &amp; Best Friend Loss Group</a> &mdash; Wednesdays 7 PM ET\n&#x2022; <a href="'+GROUPS.general_all_loss+'" target="_blank" rel="noopener">General All-Inclusive Group</a> &mdash; Sundays 7 PM ET\n&#x2022; <a href="'+CFG.calendarUrl+'" target="_blank" rel="noopener">View full group calendar</a>\n&#x2022; <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">Online grief chat community</a>\n\nYou may also find support through <a href="https://www.compassionatefriends.org" target="_blank" rel="noopener">The Compassionate Friends</a> &mdash; a national nonprofit dedicated to families after the death of a child.',quickReplies:['Register for child loss group','Online grief chat','Find a grief counselor','Resource directory']}}},
    { id:'groups_spouse', patterns:[/spouse|widow(er)?/i,/widowed/i,/lost (my )?(husband|wife|partner|spouse)/i,/(husband|wife|partner|spouse)\s+(died|passed|death)/i,/spousal loss/i,/partner loss/i,/loss of (a |my )?partner/i,/loss of (a |my )?spouse/i],
      response:function(){return{text:'The loss of a partner or spouse reshapes every part of life. Your grief is real, and you deserve support.\n\n&#x2022; <a href="'+GROUPS.spouse_partner_lgbtqia+'" target="_blank" rel="noopener">Register: Spouse, Partner &amp; LGBTQIA+ Loss Group</a> &mdash; Wednesdays 8 PM ET\n&#x2022; <a href="'+GROUPS.general_all_loss+'" target="_blank" rel="noopener">General All-Inclusive Group</a> &mdash; Sundays 7 PM ET\n&#x2022; <a href="'+CFG.calendarUrl+'" target="_blank" rel="noopener">View full group calendar</a>\n&#x2022; <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">Online grief chat community</a>\n\nFor LGBTQ+ partner loss: <a href="'+GROUPS.lgbtq_dedicated+'" target="_blank" rel="noopener">LGBTQ+ Loss Group</a> &mdash; 1st Wednesday 6 PM ET',quickReplies:['Register for partner loss group','LGBTQ+ loss group','Online grief chat','Find a grief counselor']}}},
    { id:'groups_parent', patterns:[/lost (my )?(mom|dad|mother|father|parent|grandparent)/i,/loss of (a |my )?(mom|dad|mother|father|parent|grandparent)/i,/(parent|mother|father|mom|dad|grandparent)\s+(died|passed|death)/i,/parental loss/i],
      response:function(){return{text:'Grief over a parent or grandparent touches something foundational in us &mdash; no matter the age at which it happens, or the nature of the relationship.\n\n&#x2022; <a href="'+GROUPS.parent_grandparent+'" target="_blank" rel="noopener">Register: Parent, Grandparent, Guardian &amp; Mentor Loss Group</a> &mdash; Sundays 8 PM ET\n&#x2022; <a href="'+GROUPS.general_all_loss+'" target="_blank" rel="noopener">General All-Inclusive Group</a> &mdash; Sundays 7 PM ET\n&#x2022; <a href="'+CFG.calendarUrl+'" target="_blank" rel="noopener">View full group calendar</a>\n&#x2022; <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">Online grief chat community</a>',quickReplies:['Register for parent loss group','Online grief chat','Free grief courses','Find a grief counselor']}}},
    { id:'groups_sibling', patterns:[/lost (my )?(brother|sister|sibling)/i,/sibling loss/i,/(brother|sister|sibling)\s+(died|passed|death)/i],
      response:function(){return{text:'Sibling loss is sometimes called the &ldquo;forgotten grief&rdquo; &mdash; and yet it touches every memory and every future milestone.\n\n&#x2022; <a href="'+GROUPS.child_sibling_friend+'" target="_blank" rel="noopener">Register: Child, Sibling &amp; Best Friend Loss Group</a> &mdash; Wednesdays 7 PM ET\n&#x2022; <a href="'+GROUPS.general_all_loss+'" target="_blank" rel="noopener">General All-Inclusive Group</a> &mdash; Sundays 7 PM ET\n&#x2022; <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">Online grief chat community</a>',quickReplies:['Register for sibling loss group','Online grief chat','Free grief courses']}}},
    { id:'groups_friend', patterns:[/lost (my )?(friend|best friend|close friend)/i,/friend loss/i,/friend\s+(died|passed|death)/i],
      response:function(){return{text:'The loss of a close friend can be deeply disorienting, and is often less recognized by the world around us. Your grief for your friend is entirely valid.\n\n&#x2022; <a href="'+GROUPS.child_sibling_friend+'" target="_blank" rel="noopener">Register: Child, Sibling &amp; Best Friend Loss Group</a> &mdash; Wednesdays 7 PM ET\n&#x2022; <a href="'+GROUPS.general_all_loss+'" target="_blank" rel="noopener">General All-Inclusive Group</a> &mdash; Sundays 7 PM ET\n&#x2022; <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">Online grief chat community</a>',quickReplies:['Register for friend loss group','Online grief chat','Find a grief counselor']}}},
    { id:'groups_suicide_loss', patterns:[/suicide loss/i,/lost to suicide/i,/died by suicide/i,/suicide survivor/i,/loss (from|due to|by|after) suicide/i],
      response:function(){return{text:'Grief after losing someone to suicide carries its own particular weight &mdash; questions that may never have answers, and emotions that can be hard to name.\n\n&#x2022; <a href="'+GROUPS.general_all_loss+'" target="_blank" rel="noopener">General All-Inclusive Group</a> &mdash; Sundays 7 PM ET\n&#x2022; <a href="'+CFG.groupsByLossUrl+'" target="_blank" rel="noopener">Groups by Type of Loss</a>\n&#x2022; <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">Online grief chat community</a>\n&#x2022; <a href="https://www.afsp.org/healing-conversations" target="_blank" rel="noopener">AFSP Healing Conversations</a> &mdash; peer program for suicide loss survivors\n\n<em>If you yourself are having thoughts of suicide, please call or text <strong>988</strong> immediately.</em>',quickReplies:['View groups by type of loss','Online grief chat','Find a grief counselor','Resource directory']}}},
    { id:'groups_overdose', patterns:[/overdose/i,/drug overdose/i,/opioid/i,/fentanyl/i,/heroin/i,/substance (use|abuse)/i,/lost to addiction/i],
      response:function(){return{text:'Losing someone to an overdose or substance-related cause is a profound loss that can come with complicated feelings alongside the grief. All of those feelings belong here.\n\n&#x2022; <a href="'+GROUPS.general_all_loss+'" target="_blank" rel="noopener">General All-Inclusive Group</a> &mdash; Sundays 7 PM ET\n&#x2022; <a href="'+CFG.groupsByLossUrl+'" target="_blank" rel="noopener">Groups by Type of Loss</a>\n&#x2022; <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">Online grief chat community</a>\n\nEvery loss is worthy of compassionate support, no matter the circumstances.',quickReplies:['View all groups','Online grief chat','Resource directory']}}},
    { id:'groups_sudden', patterns:[/sudden loss/i,/unexpected (loss|death)/i,/traumatic (loss|death)/i,/\baccident\b/i,/car (crash|accident)/i,/heart attack/i,/sudden death/i,/violent (death|loss)/i,/murder/i,/homicide/i],
      response:function(){return{text:'A sudden, unexpected, or traumatic loss leaves no chance to prepare. The shock and disorientation can make grief feel especially overwhelming &mdash; and that makes complete sense.\n\n&#x2022; <a href="'+GROUPS.general_all_loss+'" target="_blank" rel="noopener">General All-Inclusive Group</a> &mdash; Sundays 7 PM ET\n&#x2022; <a href="'+CFG.groupsByLossUrl+'" target="_blank" rel="noopener">Groups by Type of Loss</a>\n&#x2022; <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">Online grief chat community</a>',quickReplies:['View all groups','Online grief chat','Find a grief counselor']}}},
    { id:'groups_lgbtq', patterns:[/lgbtq\+?/i,/\blgbt\b/i,/\bgay\b/i,/\blesbian\b/i,/bisexual/i,/transgender/i,/\btrans\b/i,/\bqueer\b/i,/non.?binary/i,/same.?sex/i,/lgbtqia/i],
      response:function(){return{text:'MyGriefAngels and its dedicated sister site <a href="'+CFG.lgbtqUrl+'" target="_blank" rel="noopener">LGBTQLoss.com</a> offer <strong>fully LGBTQIA+-affirming peer support</strong>.\n\n&#x2022; <a href="'+GROUPS.lgbtq_dedicated+'" target="_blank" rel="noopener">LGBTQ+ Loss Group</a> &mdash; 1st Wednesday 6 PM ET\n&#x2022; <a href="'+GROUPS.spouse_partner_lgbtqia+'" target="_blank" rel="noopener">Spouse, Partner &amp; LGBTQIA+ Loss Group</a> &mdash; Wednesdays 8 PM ET\n&#x2022; <a href="'+CFG.lgbtqDirUrl+'" target="_blank" rel="noopener">LGBTQ+ Grief Support Resource Directory</a>\n\nCrisis lines:\n&#x2022; The Trevor Project: (866) 488-7386\n&#x2022; Trans Lifeline: (877) 565-8860\n&#x2022; SAGE LGBT Elder Hotline: (877) 360-5428\n\nYou are fully and unconditionally welcome here.',quickReplies:['Register for LGBTQ+ group','Register for partner loss group','LGBTQ+ resource directory','Online grief chat']}}},
    { id:'groups_pet', patterns:[/pet loss/i,/lost (my )?(pet|dog|cat|animal|horse|bird|rabbit)/i,/(dog|cat|horse|pet)\s+(died|passed|death)/i,/rainbow bridge/i],
      response:function(){return{text:'The bond we share with our animal companions is real and deep. Losing a pet is a genuine loss &mdash; and the grief that follows deserves the same compassion as any other.\n\n&#x2022; <a href="'+CFG.petLossUrl+'" target="_blank" rel="noopener">Pet Loss Support page</a> at MyGriefAngels.org\n&#x2022; <a href="'+GROUPS.general_all_loss+'" target="_blank" rel="noopener">General All-Inclusive Group</a> (includes pet loss) &mdash; Sundays 7 PM ET\n&#x2022; <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">Online grief chat community</a>',quickReplies:['Pet loss support page','Register for general group','Online grief chat']}}},
    { id:'spanish_support', patterns:[/\bspanish\b/i,/espa[n\u00f1]ol/i,/habla\s+(espa[n\u00f1]ol|spanish)/i,/apoyo\s+en/i,/hispano/i,/\blatina?\b/i],
      response:function(){return{text:'MyGriefAngels ofrece apoyo de duelo gratuito en espa&ntilde;ol.\n\n&#x2022; <a href="'+CFG.spanishCoursesUrl+'" target="_blank" rel="noopener">UDuelo.com &mdash; Universidad del Duelo</a>: cursos gratuitos sobre el duelo en espa&ntilde;ol\n&#x2022; <a href="'+GROUPS.spanish_apoyo+'" target="_blank" rel="noopener">Registrarse: Grupo de Apoyo en Espa&ntilde;ol</a> &mdash; 1er domingo del mes, 6 PM ET\n&#x2022; <a href="'+CFG.spanishUrl+'" target="_blank" rel="noopener">P&aacute;gina de Apoyo en Espa&ntilde;ol</a>\n&#x2022; <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">Chat de duelo en l&iacute;nea</a>\n\nSpanish grief courses are also available at <a href="'+CFG.spanishCoursesUrl+'" target="_blank" rel="noopener">UDuelo.com</a>. The Spanish-language peer support group meets the 1st Sunday of each month.',quickReplies:['Spanish grief courses (UDuelo)','Register for Spanish group','Online grief chat','View all groups']}}},
    { id:'disabilities_support', patterns:[/disabilit/i,/\bdisabled\b/i,/accessibility/i,/accessible/i,/special needs/i],
      response:function(){return{text:'MyGriefAngels is committed to accessibility and full inclusion. There is a dedicated support pathway for <a href="'+CFG.disabilitiesUrl+'" target="_blank" rel="noopener">People with Disabilities</a>.\n\nAll virtual groups are held via Zoom, which supports captioning. For specific accommodation needs, please reach out through the <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">online grief chat</a>.',quickReplies:['Disabilities support page','View all groups','Online grief chat']}}},
    { id:'holiday_grief', patterns:[/holiday grief/i,/grief (at|during|around|on) (the )?holiday/i,/\bholiday\b/i,/\bchristmas\b/i,/\bthanksgiving\b/i,/new year/i,/mother.?s day/i,/father.?s day/i,/\bvalentine/i,/\beaster\b/i,/\bhalloween\b/i,/\bmemorial day\b/i,/\blabor day\b/i,/\bveterans day\b/i,/first (christmas|thanksgiving|holiday|birthday|anniversary)/i,/seasonal grief/i,/\banniversary\b/i,/\bbirthday\b/i],
      response:function(){return{text:'Holidays, birthdays, and anniversaries can be some of the most difficult times in grief. You are not alone in finding these days especially hard.\n\nMyGriefAngels hosts <strong>Holiday Grief Support Groups</strong> throughout the year &mdash; all free, all peer-led via Zoom.\n\n&#x2022; <a href="'+GROUPS.holiday_valentines+'" target="_blank" rel="noopener">Valentine\'s Day</a> &mdash; Feb 14, 8 PM ET\n&#x2022; <a href="'+GROUPS.holiday_easter+'" target="_blank" rel="noopener">Easter Sunday</a> &mdash; 8 PM ET\n&#x2022; <a href="'+GROUPS.holiday_mothers+'" target="_blank" rel="noopener">Mother\'s Day</a> &mdash; 8 PM ET\n&#x2022; <a href="'+GROUPS.holiday_fathers+'" target="_blank" rel="noopener">Father\'s Day</a> &mdash; 8 PM ET\n&#x2022; <a href="'+GROUPS.holiday_thanksgiving+'" target="_blank" rel="noopener">Thanksgiving</a> &mdash; 8 PM ET\n&#x2022; <a href="'+GROUPS.holiday_christmas+'" target="_blank" rel="noopener">Christmas Day</a> &mdash; 8 PM ET\n&#x2022; <a href="'+GROUPS.holiday_newyearseve+'" target="_blank" rel="noopener">New Year\'s Eve</a> &mdash; 8 PM ET\n\n<a href="'+CFG.holidayUrl+'" target="_blank" rel="noopener">View all holiday groups &rarr;</a>',quickReplies:['All holiday groups','View group calendar','Online grief chat','Find a regular group']}}},
    { id:'chat', patterns:[/online chat/i,/grief chat/i,/chat community/i,/chat (with|to) someone/i,/talk (to|with) someone/i,/\bchat\b/i,/connect with others/i],
      response:function(){return{text:'The <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">MyGriefAngels Online Grief Chat Community</a> is a free, welcoming space organized by type of loss &mdash; staffed by fellow grievers who truly understand.\n\n<strong>No mental health professionals</strong> &mdash; just genuine human connection from people who have been where you are.\n\n&#x2022; Free, no subscription\n&#x2022; Organized by type of loss\n&#x2022; Visit: <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">chat.mygriefangels.org</a>\n\nSometimes the most healing thing is simply knowing you are not alone.',quickReplies:['Go to online chat','Find a support group','Free grief courses']}}},
    { id:'courses', patterns:[/\bcourse/i,/\bugrief\b/i,/learn about grief/i,/online course/i,/grief education/i,/\bmooc\b/i,/self.?paced/i,/grief class/i],
      response:function(){return{text:'<a href="'+CFG.coursesUrl+'" target="_blank" rel="noopener">UGrief.com</a> &mdash; the educational arm of MyGriefAngels &mdash; hosts the <strong>largest free collection of online grief courses (MOOCs)</strong> created for and by people who are grieving.\n\nTopics include: understanding grief, every type of loss, grief brain, grief &amp; PTSD, self-care, workplace grief, cultural grief, LGBTQ+ grief, and 38+ more.\n\n<strong>Completely free. No subscription. Learn at your own pace.</strong>\n&#x2022; English: <a href="'+CFG.coursesUrl+'" target="_blank" rel="noopener">courses.ugrief.com</a>\n&#x2022; Espa&ntilde;ol: <a href="'+CFG.spanishCoursesUrl+'" target="_blank" rel="noopener">UDuelo.com</a>\n&#x2022; Fran&ccedil;ais: <a href="'+CFG.frenchCoursesUrl+'" target="_blank" rel="noopener">UDeuil.com</a>\n&#x2022; Portugu&ecirc;s: <a href="'+CFG.portugueseCoursesUrl+'" target="_blank" rel="noopener">UniLuto.com</a>\n&#x2022; Hindi: <a href="'+CFG.hindiCoursesUrl+'" target="_blank" rel="noopener">UDukh.com</a>',quickReplies:['Browse all courses','Multilingual grief courses','Find a support group','Online grief chat']}}},
    { id:'courses_detail', patterns:[/what courses/i,/list (of )?courses/i,/all (the )?courses/i,/course (catalog|list|options)/i,/which courses/i,/browse courses/i,/how grief (can )?kill/i,/child loss (mooc|course)/i,/parent(al)? loss (mooc|course)/i,/spousal? (loss )?(mooc|course)/i,/sibling loss (mooc|course)/i,/pet loss (mooc|course)/i,/grandparent (loss )?(mooc|course)/i,/traumatic (loss )?(mooc|course)/i,/military (loss )?(mooc|course)/i,/suicide (loss )?(mooc|course)/i,/gay grief/i,/queer grief/i,/lgbtq.*(mooc|course)/i,/healthcare worker.*(mooc|course|grief)/i,/special needs.*grief/i,/men.?s grief/i,/children (and|in) grief/i,/dementia.*grief/i,/grief brain/i,/grief.*(and |& )?ptsd/i,/prolonged grief/i,/complicated grief/i,/anticipatory grief (mooc|course)/i,/delayed grief/i,/disenfranchised grief/i,/cumulative grief/i,/collective grief/i,/eco.?grief/i,/climate.*grief/i,/grief.*(and |& )?signs/i,/transnational grief/i,/grief.*cultures? (mooc|course)/i,/grief.*couples/i,/workplace grief/i,/nature therapy.*grief/i,/healing power of pets/i,/substance.*loss (mooc|course)/i,/chronic illness.*grief/i,/self.?care (mooc|course)/i,/holiday.*(mooc|course|grief course)/i],
      response:function(){return{text:'<a href="'+CFG.coursesUrl+'" target="_blank" rel="noopener">UGrief.com</a> offers <strong>38+ free grief MOOCs</strong>. Here is the complete catalog:\n\n<strong>Understanding Grief</strong>\n&#x2022; <strong>Grief and How It Can Kill or Empower Us</strong> &mdash; The flagship course: what grief is, how it affects health, family &amp; work, grief attacks, and finding good from grief (5 lessons, 250+ videos)\n\n<strong>By Type of Loss</strong>\n&#x2022; Child Loss, Parental Loss, Spousal/Partner Loss, Sibling Loss, Grandparent Loss, Pet Loss, Military Loss, Suicide Loss, Traumatic Loss, Substance Use-Related Loss\n\n<strong>Identity &amp; Community</strong>\n&#x2022; Gay/Queer Grief, Men\'s Grief, Children and Grief, Grief &amp; Healthcare Workers, Special Needs Loss, Grief and Dementia\n\n<strong>Types of Grief</strong>\n&#x2022; Grief Attacks, Grief Brain, Grief &amp; PTSD, Prolonged/Complicated Grief, Anticipatory Grief, Delayed Grief, Disenfranchised Grief, Cumulative Grief, Collective Grief, Chronic Illness Grief\n\n<strong>Cultural &amp; Social Context</strong>\n&#x2022; Grief and Cultures, Transnational Grief, Eco-Grief/Climate Grief, Grief and Signs, Holidays Grief (8 languages)\n\n<strong>Relationships &amp; Professional Life</strong>\n&#x2022; Grief and Couples, Workplace Grief, Professional Differences\n\n<strong>Wellness &amp; Healing</strong>\n&#x2022; Self-Care &amp; Grief, Nature Therapy &amp; Grief, Healing Power of Pets\n\n<strong>All courses are completely free and self-paced.</strong>\n&#x2022; Browse and enroll: <a href="'+CFG.coursesUrl+'" target="_blank" rel="noopener">courses.ugrief.com</a>',quickReplies:['Go to UGrief.com','LGBTQ+ grief course','Holiday grief course','Find a support group']}}},
    { id:'directory', patterns:[/director/i,/grief resource/i,/find resource/i,/other organization/i,/\bnonprofit\b/i,/\bdirectory\b/i,/list of resource/i,/other (help|support)/i],
      response:function(){return{text:'MyGriefAngels maintains a curated <a href="'+CFG.resourceDirUrl+'" target="_blank" rel="noopener">Directory of Grief Support Resources</a> &mdash; vetted nonprofits offering free support by type of loss.\n\n<strong>Highlighted organizations:</strong>\n&#x2022; <a href="https://www.compassionatefriends.org" target="_blank" rel="noopener">The Compassionate Friends</a> &mdash; child loss: (877) 969-0010\n&#x2022; <a href="https://www.afsp.org" target="_blank" rel="noopener">AFSP</a> &mdash; suicide loss &amp; prevention\n&#x2022; <a href="https://www.nacg.org" target="_blank" rel="noopener">National Alliance for Grieving Children</a>\n&#x2022; <a href="'+CFG.lgbtqDirUrl+'" target="_blank" rel="noopener">LGBTQ+ Grief Support Directory</a>\n&#x2022; <a href="https://www.psychologytoday.com/us/therapists" target="_blank" rel="noopener">Psychology Today Therapist Finder</a>\n&#x2022; <a href="https://openpathcollective.org" target="_blank" rel="noopener">Open Path Collective</a> (reduced-cost therapy)\n&#x2022; <a href="https://www.friendsforsurvival.org" target="_blank" rel="noopener">Friends for Survival</a> &mdash; suicide loss: (800) 646-7322\n\n<a href="'+CFG.resourceDirUrl+'" target="_blank" rel="noopener">View the full directory &rarr;</a>',quickReplies:['View full directory','Find a support group','Find a grief counselor']}}},
    { id:'find_therapist', patterns:[/find (a )?(therapist|counselor|grief counselor)/i,/grief counselor/i,/grief therapist/i,/professional (help|support)/i,/clinical support/i,/therapy for grief/i],
      response:function(){return{text:'While MyGriefAngels is a peer support community, professional support can be deeply valuable alongside peer connection.\n\nOur <a href="'+CFG.therapistDirUrl+'" target="_blank" rel="noopener">Grief Counselor &amp; Therapist Directory</a> can help you find a licensed grief specialist.\n\n<strong>Additional directories:</strong>\n&#x2022; <a href="https://www.psychologytoday.com/us/therapists" target="_blank" rel="noopener">Psychology Today</a>\n&#x2022; <a href="https://www.goodtherapy.org/find-therapist.html" target="_blank" rel="noopener">GoodTherapy</a>\n&#x2022; <a href="https://openpathcollective.org" target="_blank" rel="noopener">Open Path Collective</a> (reduced-cost)\n&#x2022; <a href="https://www.opencounseling.com" target="_blank" rel="noopener">OpenCounseling</a> (free &amp; low-cost)\n&#x2022; <a href="https://www.inclusivetherapists.com" target="_blank" rel="noopener">Inclusive Therapists</a>',quickReplies:['View therapist directory','Find a peer support group','Online grief chat']}}},
    { id:'calendar', patterns:[/calendar/i,/schedule/i,/when (are|do) (the )?group/i,/upcoming group/i,/group time/i,/next group/i,/what time/i],
      response:function(){return{text:'All upcoming groups are on the public <a href="'+CFG.calendarUrl+'" target="_blank" rel="noopener">Group Calendar</a>.\n\n<strong>Recurring schedule:</strong>\n&#x2022; Tuesdays 7:30 PM ET &mdash; Grief Break (small group)\n&#x2022; Wednesdays 7:00 PM ET &mdash; Child, Sibling &amp; Friend Loss\n&#x2022; Wednesdays 8:00 PM ET &mdash; Spouse, Partner &amp; LGBTQIA+ Loss\n&#x2022; Sundays 7:00 PM ET &mdash; General All-Inclusive\n&#x2022; Sundays 8:00 PM ET &mdash; Parent, Grandparent &amp; Mentor Loss\n&#x2022; 1st Wednesday 6 PM ET &mdash; LGBTQ+ Dedicated\n&#x2022; 1st Sunday 6 PM ET &mdash; Apoyo en Espa&ntilde;ol\n\n<a href="'+CFG.calendarUrl+'" target="_blank" rel="noopener">View full calendar &rarr;</a>',quickReplies:['View full calendar','Holiday grief groups','Find a group by loss type','Online grief chat']}}},
    { id:'self_care', patterns:[/self.?care/i,/\bfeirg\b/i,/grief yoga/i,/grief meditation/i,/coping (with|strategies)/i,/healing (activities|practices)/i],
      response:function(){return{text:'Caring for yourself while grieving is not a luxury &mdash; it is part of how we survive.\n\n<a href="'+CFG.selfCareUrl+'" target="_blank" rel="noopener">Feirg.com</a> &mdash; a companion site of MyGriefAngels &mdash; offers free grief self-care resources:\n\n&#x2022; Grief yoga &amp; meditation\n&#x2022; Grief art\n&#x2022; Grief walking &amp; running\n&#x2022; Grief travel\n&#x2022; Healing through laughter\n&#x2022; Animal-assisted healing\n\n&#x2022; Visit: <a href="'+CFG.selfCareUrl+'" target="_blank" rel="noopener">feirg.com</a>',quickReplies:['Visit Feirg.com','Free grief courses','Find a support group']}}},
    { id:'grief_tv', patterns:[/grief tv/i,/grieftelevision/i,/grief (video|film|documentary)/i,/\bwatch\b/i,/grief film festival/i,/grieffest/i],
      response:function(){return{text:'<a href="'+CFG.griefTvUrl+'" target="_blank" rel="noopener">GriefTelevision.com</a> is a free video resource with grief content organized by type of loss.\n\n<a href="'+CFG.griefFestUrl+'" target="_blank" rel="noopener">GriefFest.com</a> is the International Grief Film Festival &mdash; exploring grief through cinema; LGBTQ+-friendly and non-religious.\n\n&#x2022; <a href="'+CFG.griefTvUrl+'" target="_blank" rel="noopener">GriefTelevision.com</a>\n&#x2022; <a href="'+CFG.griefFestUrl+'" target="_blank" rel="noopener">GriefFest.com</a>',quickReplies:['Visit GriefTelevision','Visit GriefFest','Grief podcasts','Free grief courses']}}},
    { id:'podcast', patterns:[/podcast/i,/\blisten\b/i,/griefwalking/i,/grief (podcast|audio)/i],
      response:function(){return{text:'<a href="'+CFG.podcastUrl+'" target="_blank" rel="noopener">GriefWalking.com</a> is the free grief podcast connected to MyGriefAngels, available on Spotify, Apple Podcasts, Amazon Music, iHeart Radio, and Pandora.\n\n&#x2022; Visit: <a href="'+CFG.podcastUrl+'" target="_blank" rel="noopener">GriefWalking.com</a>',quickReplies:['Visit GriefWalking','Grief TV videos','Free grief courses']}}},
    { id:'anticipatory_grief', patterns:[/anticipat(ory)? grief/i,/pre.?loss/i,/before (they|someone) (dies|passes)/i,/\bterminal\b/i,/\bdying\b/i,/end.?of.?life/i,/\bhospice\b/i,/preparing for (death|loss)/i],
      response:function(){return{text:'Grief does not begin only after a loss &mdash; anticipatory grief, the grief we carry while someone we love is dying, is very real.\n\nMyGriefAngels is here &ldquo;for and by people grieving <em>or anticipating</em> the death of a loved one.&rdquo; You belong here, right now.\n\n&#x2022; <a href="'+CFG.groupsPageUrl+'" target="_blank" rel="noopener">Find a support group</a>\n&#x2022; <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">Online grief chat community</a>\n&#x2022; <a href="'+CFG.checklistUrl+'" target="_blank" rel="noopener">Pre/Post-Loss Checklist</a>\n&#x2022; <a href="'+CFG.coursesUrl+'" target="_blank" rel="noopener">Free grief courses at UGrief.com</a>',quickReplies:['Find a support group','Online grief chat','Pre/Post-loss checklist','Free grief courses']}}},
    { id:'california_fires', patterns:[/california (fire|fires|wildfire)/i,/fire (loss|grief)/i,/wildfire (grief|loss)/i,/\bla fire\b/i,/los angeles fire/i],
      response:function(){return{text:'MyGriefAngels offers a dedicated <strong>California Fires Grief Support Group</strong> for those who have lost loved ones or their homes.\n\n&#x2022; <a href="'+GROUPS.california_fires+'" target="_blank" rel="noopener">Register for California Fires Grief Support Group</a>\n&#x2022; <a href="'+CFG.calFiresUrl+'" target="_blank" rel="noopener">FiresCalifornia.com</a> &mdash; FEMA, Red Cross, and state support resources\n&#x2022; <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">Online grief chat community</a>',quickReplies:['Register for fires group','View California fires resources','Online grief chat']}}},
    { id:'volunteer', patterns:[/volunteer/i,/help other/i,/how (can i|to) help/i,/give back/i,/\bdonate\b/i,/get involved/i],
      response:function(){return{text:'The heart of MyGriefAngels is its volunteers &mdash; fellow grievers who chose to walk alongside others.\n\nPlease visit the <a href="'+CFG.helpUrl+'" target="_blank" rel="noopener">How to Help page</a> at MyGriefAngels.org.\n\n<strong>Ways to contribute:</strong>\n&#x2022; Facilitating a peer-led grief support group\n&#x2022; Volunteering in the online chat community\n&#x2022; Sharing your story\n&#x2022; Supporting operations and outreach',quickReplies:['Learn how to help','Find a support group','What is MyGriefAngels?']}}},
    { id:'grief_info', patterns:[/what is grief/i,/stages of grief/i,/grief process/i,/how (long|do) (does )?grief/i,/normal to (feel|grieve)/i,/grief (feeling|emotion|stage|phase|journey|wave)/i],
      response:function(){return{text:'Grief is as individual as a fingerprint. There is no right way, no single timeline, and no wrong way to grieve. Whatever you are feeling is a valid part of your experience.\n\nOur free courses at <a href="'+CFG.coursesUrl+'" target="_blank" rel="noopener">UGrief.com</a> include deep, compassionate explorations of the grief process &mdash; created by and for people who are grieving.\n\n&#x2022; <a href="'+CFG.coursesUrl+'" target="_blank" rel="noopener">Free grief courses &mdash; UGrief.com</a>\n&#x2022; <a href="'+CFG.groupsPageUrl+'" target="_blank" rel="noopener">Find a support group</a>\n&#x2022; <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">Online grief chat</a>',quickReplies:['Free grief courses','Find a support group','Online grief chat','Resource directory']}}},
    { id:'help_menu', patterns:[/what can you (help|do|assist)/i,/what (do you|can you) (offer|do|help)/i,/\bhelp me\b/i,/^help$/i,/what.?s here/i,/what (resources|support) (is|are) available/i],
      response:function(){return{text:'I\'m Solace, and I\'m here to gently guide you to the support and resources at <a href="'+CFG.siteUrl+'" target="_blank" rel="noopener">MyGriefAngels.org</a>.\n\n<strong>Here is what I can help you find:</strong>\n&#x2022; Peer-led support groups by type of loss\n&#x2022; Holiday grief support groups\n&#x2022; Online grief chat community\n&#x2022; Free grief courses in 5 languages (UGrief.com)\n&#x2022; Grief resources &amp; directory\n&#x2022; Grief counselor &amp; therapist directory\n&#x2022; Self-care resources (Feirg.com)\n&#x2022; Grief TV, podcasts, GriefTech, and more',quickReplies:['Find a support group','Online grief chat','Free grief courses','Multilingual grief courses','Resource directory','Holiday grief support','Self-care resources']}}},
    { id:'multilingual_courses', patterns:[/multilingual/i,/french (grief|course|mooc)/i,/\bfrench\b.*grief/i,/grief.*\bfrench\b/i,/\budeuil\b/i,/portuguese (grief|course|mooc)/i,/\bportuguese\b.*grief/i,/grief.*\bportuguese\b/i,/\buniluto\b/i,/hindi (grief|course|mooc)/i,/\bhindi\b.*grief/i,/grief.*\bhindi\b/i,/\budukh\b/i,/\buduelo\b/i,/other language/i,/grief course.*language/i,/language.*grief course/i,/international (grief|course)/i],
      response:function(){return{text:'UGrief.com offers free grief courses in <strong>multiple languages</strong>:\n\n&#x2022; <strong>English</strong> &mdash; <a href="'+CFG.coursesUrl+'" target="_blank" rel="noopener">courses.ugrief.com</a> (38+ MOOCs)\n&#x2022; <strong>Espa&ntilde;ol</strong> &mdash; <a href="'+CFG.spanishCoursesUrl+'" target="_blank" rel="noopener">UDuelo.com</a>\n&#x2022; <strong>Fran&ccedil;ais</strong> &mdash; <a href="'+CFG.frenchCoursesUrl+'" target="_blank" rel="noopener">UDeuil.com</a>\n&#x2022; <strong>Portugu&ecirc;s</strong> &mdash; <a href="'+CFG.portugueseCoursesUrl+'" target="_blank" rel="noopener">UniLuto.com</a>\n&#x2022; <strong>Hindi</strong> &mdash; <a href="'+CFG.hindiCoursesUrl+'" target="_blank" rel="noopener">UDukh.com</a>\n\nAll courses are completely free and self-paced &mdash; no subscription, no barriers.',quickReplies:['Browse all English courses','Spanish grief courses (UDuelo)','Find a support group','Online grief chat']}}},
    { id:'grief_tech', patterns:[/\bgrieftech\b/i,/grief (tech|technology)/i,/technology.*grief/i,/digital grief/i,/memorial (tech|technology|app)/i,/grief app/i,/healing.*technology/i,/innovation.*grief/i],
      response:function(){return{text:'<a href="'+CFG.griefTechUrl+'" target="_blank" rel="noopener">GriefTech.com</a> explores the intersection of grief and technology &mdash; tools, platforms, and innovations that support healing and memorializing loved ones.\n\n&#x2022; Visit: <a href="'+CFG.griefTechUrl+'" target="_blank" rel="noopener">GriefTech.com</a>\n&#x2022; Free GriefTech course at <a href="'+CFG.coursesUrl+'" target="_blank" rel="noopener">courses.ugrief.com</a>',quickReplies:['Visit GriefTech.com','Browse all courses','Free grief courses','Find a support group']}}},
    { id:'bench_think', patterns:[/\bbenchthink\b/i,/bench think/i,/bench.?think/i,/grief.*bench/i,/bench.*grief/i],
      response:function(){return{text:'<a href="'+CFG.benchThinkUrl+'" target="_blank" rel="noopener">BenchThink.com</a> is a global initiative celebrating public benches as spaces for quiet reflection and healing in grief.\n\n&#x2022; Submit your bench photo: <a href="'+CFG.benchThinkUrl+'" target="_blank" rel="noopener">BenchThink.com</a>',quickReplies:['Visit BenchThink.com','Self-care resources','Find a support group','Free grief courses']}}},
    { id:'good_from_grief', patterns:[/good from grief/i,/\bgoodfromgrief\b/i,/positive.*grief/i,/growth.*grief/i,/post.?traumatic growth/i,/meaning.*loss/i,/purpose.*grief/i],
      response:function(){return{text:'<a href="'+CFG.goodFromGriefUrl+'" target="_blank" rel="noopener">GoodFromGrief.com</a> explores post-traumatic growth &mdash; how people sometimes find unexpected meaning, purpose, or transformation in the wake of profound loss.\n\n&#x2022; Visit: <a href="'+CFG.goodFromGriefUrl+'" target="_blank" rel="noopener">GoodFromGrief.com</a>\n&#x2022; Flagship course at <a href="'+CFG.coursesUrl+'" target="_blank" rel="noopener">UGrief.com</a>: <em>Grief and How It Can Kill or Empower Us</em>',quickReplies:['Visit GoodFromGrief.com','Free grief courses','Find a support group','What is MyGriefAngels?']}}},
    { id:'farewell', patterns:[/^bye[\s!.]*$/i,/goodbye/i,/take care/i,/thank(s| you)/i,/see you/i,/good night/i,/\bfarewell\b/i],
      response:function(){return{text:'Thank you for visiting MyGriefAngels. Wherever you are on your journey, please know that you are not alone &mdash; and that this community is here whenever you need it.\n\nTake gentle care of yourself.\n\n&#x2022; <a href="'+CFG.siteUrl+'" target="_blank" rel="noopener">MyGriefAngels.org</a>\n&#x2022; <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">Online grief chat</a> &mdash; whenever you need to connect',quickReplies:[]}}},
    { id:'fallback', patterns:[/.*/],
      response:function(){return{text:'Thank you for reaching out. I want to make sure I guide you to exactly what you need.\n\nI can help you find free peer-led grief support groups, the online chat community, free courses, grief resources, and more &mdash; all from <a href="'+CFG.siteUrl+'" target="_blank" rel="noopener">MyGriefAngels.org</a>.\n\nCould you share a little more about what brings you here today? Or please choose one of the options below.',quickReplies:['Find a support group','Online grief chat','Free grief courses','Resource directory','What is MyGriefAngels?']}}}
  ];

  /* ============================================================
     WELCOME MESSAGE
     ============================================================ */
  var WELCOME = {
    text: 'Hello, and welcome. I\'m <strong>Solace</strong> &mdash; the compassionate guide for <a href="'+CFG.siteUrl+'" target="_blank" rel="noopener">MyGriefAngels.org</a>.\n\nMyGriefAngels is a free, volunteer-led community of people supporting one another through grief. Everyone here &mdash; in the groups, the chat, and this guide &mdash; is a fellow griever, not a licensed mental health professional. We simply walk alongside each other.\n\nHowever you arrived here today, I\'m glad you found your way. <strong>How may I gently support you?</strong>',
    quickReplies: ['Find a support group','Online grief chat','Free grief courses','Multilingual grief courses','Holiday grief support','Resource directory','What is MyGriefAngels?']
  };

  /* ============================================================
     QUICK REPLY MAP
     ============================================================ */
  var QR = {
    'Find a support group':'support group','Find a regular group':'support group','View all groups':'support group','Find a group by loss type':'groups by type of loss',
    'Online grief chat':'online chat','Go to online chat':'online chat',
    'Free grief courses':'free courses ugrief','Go to UGrief.com':'free courses ugrief','Browse all courses':'what courses are available','LGBTQ+ grief course':'gay grief queer grief mooc','Holiday grief course':'holidays grief mooc course',
    'Holiday grief support':'holiday grief','Holiday grief groups':'holiday grief','All holiday groups':'holiday grief',
    'Resource directory':'grief resource directory','View full directory':'grief resource directory',
    'What is MyGriefAngels?':'what is mygriefangels',
    'View group calendar':'group calendar schedule','View full calendar':'group calendar schedule',
    'Child or sibling loss':'child loss','Register for child loss group':'child loss','Register for sibling loss group':'sibling loss','Register for friend loss group':'friend loss','Register for general group':'general all loss group',
    'Loss of a spouse or partner':'lost my spouse','Register for partner loss group':'lost my spouse',
    'Register for LGBTQ+ group':'lgbtq loss','LGBTQ+ loss group':'lgbtq loss','LGBTQ+ resource directory':'lgbtq grief resource directory',
    'Loss of a parent':'lost my parent','Register for parent loss group':'lost my parent',
    'Suicide loss':'suicide loss','View groups by type of loss':'support group',
    'Find a grief counselor':'find a therapist counselor','View therapist directory':'find a therapist counselor','Find a peer support group':'support group',
    'Pet loss support page':'pet loss','Disabilities support page':'disabilities support',
    'Register for Spanish group':'apoyo español spanish',
    'Pre/Post-loss checklist':'pre loss checklist anticipatory',
    'Visit Feirg.com':'self care feirg','Self-care resources':'self care feirg',
    'Visit GriefWalking':'podcast griefwalking','Grief podcasts':'podcast griefwalking',
    'Visit GriefTelevision':'grief tv video','Grief TV videos':'grief tv video',
    'Visit GriefFest':'grief film festival grieffest',
    'Register for fires group':'california fires','View California fires resources':'california fires',
    'Learn how to help':'volunteer help others',
    'Multilingual grief courses':'multilingual grief courses','Spanish grief courses (UDuelo)':'apoyo español spanish',
    'Browse all English courses':'what courses are available',
    'Visit GriefTech.com':'grieftech grief technology',
    'Visit BenchThink.com':'benchthink','Visit GoodFromGrief.com':'good from grief'
  };

  /* ============================================================
     INTENT MATCHING
     ============================================================ */
  function match(text) {
    var t = (text||'').toLowerCase().trim();
    for (var i = 0; i < INTENTS.length; i++) {
      var intent = INTENTS[i];
      for (var j = 0; j < intent.patterns.length; j++) {
        if (intent.patterns[j].test(t)) return intent;
      }
    }
    return INTENTS[INTENTS.length - 1];
  }

  /* ============================================================
     UI STATE & HELPERS
     ============================================================ */
  var isOpen = false, hasGreeted = false, msgs = null, inp = null;

  function $(id) { return document.getElementById(id); }

  function buildWidget() {
    msgs = $('mga-msgs');
    inp  = $('mga-input');
    if (!$('mga-launcher')) return;

    $('mga-launcher').addEventListener('click', function () { isOpen ? close() : open(); });
    $('mga-bubble').addEventListener('click', function (e) {
      if (e.target === $('mga-bc') || $('mga-bc').contains(e.target)) return;
      $('mga-bubble').style.display = 'none'; open();
    });
    $('mga-bc').addEventListener('click', function (e) {
      e.stopPropagation();
      $('mga-bubble').style.display = 'none';
      sessionStorage.setItem('mga_bd', '1');
    });
    $('mga-cb').addEventListener('click', close);
    $('mga-sb').addEventListener('click', send);
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') send(); });

    if (!sessionStorage.getItem('mga_bd') && !sessionStorage.getItem('mga_co')) {
      setTimeout(function () {
        if (!isOpen) { $('mga-bubble').style.display = 'block'; showBadge(); }
      }, CFG.proactiveDelay);
    }
  }

  function open() {
    isOpen = true;
    $('mga-window').classList.add('mga-open');
    $('mga-window').setAttribute('aria-hidden', 'false');
    hideBadge(); $('mga-bubble').style.display = 'none';
    sessionStorage.setItem('mga_co', '1');
    if (!hasGreeted) { hasGreeted = true; setTimeout(function () { addBot(WELCOME.text, WELCOME.quickReplies, false); }, 420); }
    setTimeout(function () { if (inp) inp.focus(); }, 380);
  }

  function close() {
    isOpen = false;
    $('mga-window').classList.remove('mga-open');
    $('mga-window').setAttribute('aria-hidden', 'true');
  }

  function showBadge() { var b = $('mga-badge'); if (b) b.style.display = 'flex'; }
  function hideBadge() { var b = $('mga-badge'); if (b) b.style.display = 'none'; }

  function send() {
    var txt = (inp.value || '').trim(); if (!txt) return;
    addUser(txt); inp.value = '';
    var intent = match(txt), tEl = showTyping();
    var delay = CFG.typingDelayMin + Math.random() * (CFG.typingDelayMax - CFG.typingDelayMin);
    setTimeout(function () { rmTyping(tEl); var r = intent.response(); addBot(r.text, r.quickReplies || [], r.crisis || false); }, delay);
  }

  function addUser(txt) {
    var w = document.createElement('div'); w.className = 'mga-wrap usr';
    var b = document.createElement('div'); b.className = 'mga-bbl usr'; b.textContent = txt;
    w.appendChild(b); msgs.appendChild(w); scroll();
  }

  var AVSVG = '<svg width="16" height="16" viewBox="0 0 40 40" fill="none"><ellipse cx="20" cy="22" rx="9" ry="7" fill="rgba(255,255,255,.88)"/><circle cx="20" cy="14" r="4" fill="rgba(255,255,255,.90)"/></svg>';

  function addBot(html, qrs, crisis) {
    var w = document.createElement('div'); w.className = 'mga-wrap bot';
    var av = document.createElement('div'); av.className = 'mga-av2'; av.setAttribute('aria-hidden', 'true'); av.innerHTML = AVSVG;
    var col = document.createElement('div'); col.className = 'mga-col';
    var b = document.createElement('div'); b.className = 'mga-bbl bot' + (crisis ? ' crs' : ''); b.innerHTML = (html || '').replace(/\n/g, '<br>');
    col.appendChild(b);
    if (qrs && qrs.length) {
      var row = document.createElement('div'); row.className = 'mga-qrow'; row.setAttribute('role', 'group'); row.setAttribute('aria-label', 'Suggested options');
      qrs.forEach(function (lbl) {
        var btn = document.createElement('button'); btn.className = 'mga-qbtn'; btn.textContent = lbl;
        btn.addEventListener('click', function () {
          row.style.display = 'none';
          addUser(lbl);
          var q = QR[lbl] || lbl, intent = match(q), tEl = showTyping();
          setTimeout(function () { rmTyping(tEl); var r = intent.response(); addBot(r.text, r.quickReplies || [], r.crisis || false); }, CFG.typingDelayMin);
        });
        row.appendChild(btn);
      });
      col.appendChild(row);
    }
    w.appendChild(av); w.appendChild(col); msgs.appendChild(w); scroll();
  }

  function showTyping() {
    var w = document.createElement('div'); w.className = 'mga-wrap bot'; w.id = 'mga-typing';
    var av = document.createElement('div'); av.className = 'mga-av2'; av.setAttribute('aria-hidden', 'true'); av.innerHTML = AVSVG;
    var b = document.createElement('div'); b.className = 'mga-bbl bot'; b.setAttribute('role', 'status'); b.setAttribute('aria-label', 'Solace is composing a response');
    var d = document.createElement('div'); d.className = 'mga-dots'; d.innerHTML = '<span></span><span></span><span></span>';
    b.appendChild(d); w.appendChild(av); w.appendChild(b); msgs.appendChild(w); scroll(); return w;
  }

  function rmTyping(el) { if (el && el.parentNode) el.parentNode.removeChild(el); }
  function scroll() { if (msgs) setTimeout(function () { msgs.scrollTop = msgs.scrollHeight; }, 50); }

  /* ============================================================
     SELF-UPDATE via /solace-data.json
     ============================================================ */
  function loadExternal() {
    if (!CFG.externalDataUrl || typeof fetch === 'undefined') return;
    fetch(CFG.externalDataUrl, { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data) return;
        if (data.groups) Object.keys(data.groups).forEach(function (k) { GROUPS[k] = data.groups[k]; });
        if (data.config) Object.keys(data.config).forEach(function (k) { CFG[k] = data.config[k]; });
        if (Array.isArray(data.intents)) data.intents.forEach(function (intent) {
          if (Array.isArray(intent.patterns)) intent.patterns = intent.patterns.map(function (p) { return typeof p === 'string' ? new RegExp(p, 'i') : p; });
          if (intent.response && typeof intent.response !== 'function') { var resp = intent.response; intent.response = function () { return resp; }; }
          INTENTS.splice(INTENTS.length - 1, 0, intent);
        });
      })
      .catch(function () {});
  }

  /* ============================================================
     INIT
     ============================================================ */
  function init() {
    loadExternal();
    injectStyles();
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { injectHTML(); buildWidget(); });
    } else {
      injectHTML(); buildWidget();
    }
  }

  init();

})();
