/* Solace for GriefSupportDirectory.com | v1.0 | An affiliate of MyGriefAngels.org | 2026-04-15 */
(function () {
  'use strict';

  /* ============================================================
     CONFIGURATION
     ============================================================ */
  var CFG = {
    siteUrl:          'https://www.griefsupportdirectory.com',
    directoryUrl:     'https://www.griefsupportdirectory.com/search_results',
    joinUrl:          'https://www.griefsupportdirectory.com/search_results',
    howItWorksUrl:    'https://www.griefsupportdirectory.com/about',
    contactUrl:       'https://www.griefsupportdirectory.com/contact-us',
    articlesUrl:      'https://www.griefsupportdirectory.com/articles',
    discussionsUrl:   'https://www.griefsupportdirectory.com/discussions',
    eventsUrl:        'https://www.griefsupportdirectory.com/events',
    newsletterUrl:    'https://www.griefsupportdirectory.com',
    memberLoginUrl:   'https://www.griefsupportdirectory.com/member-login',
    memberJoinUrl:    'https://www.griefsupportdirectory.com/search_results',

    /* Free Resources links (from menu) */
    resourcesByTypeUrl:   'https://www.mygriefangels.org/support-resources-by-type',
    virtualGroupsUrl:     'https://www.mygriefangels.org/free-virtual-grief-support-groups',
    virtualByHolidayUrl:  'https://www.mygriefangels.org/holidays-grief-support-groups',
    freeCoursesUrl:       'https://ugrief.com/',
    videoChannelUrl:      'https://www.youtube.com/c/griefsupportgroup',
    chatUrl:              'https://chat.mygriefangels.org',
    lgbtqUrl:             'https://lgbtqloss.com/',
    spanishUrl:           'https://www.mygriefangels.org/apoyo-para-el-duelo-en-espanol',
    disabilitiesUrl:      'https://www.mygriefangels.org/people-with-disabilities',
    petLossUrl:           'https://www.mygriefangels.org/pet-loss-support',
    healthGriefUrl:       'https://www.mygriefangels.org/grief-and-health',
    selfCareUrl:          'https://feirg.com/',
    griefTechUrl:         'https://grieftech.com/',
    griefFestUrl:         'https://grieffest.com/',

    /* Member Directory category pages */
    inPersonUrl:          'https://www.griefsupportdirectory.com/in-person-grief-support',
    licensedClinicalUrl:  'https://www.griefsupportdirectory.com/licensed-clinical-grief-support-therapy-1',
    counselorsUrl:        'https://www.griefsupportdirectory.com/grief-counselors-coaches-specialized-support',
    peerGroupUrl:         'https://www.griefsupportdirectory.com/peer-group-community-grief-support-1',
    spiritualUrl:         'https://www.griefsupportdirectory.com/spiritual-cultural-holistic-grief-support',
    deathcareUrl:         'https://www.griefsupportdirectory.com/deathcare-funeral-support-1',
    griefEducationUrl:    'https://www.griefsupportdirectory.com/grief-education-1',
    onlineGriefUrl:       'https://www.griefsupportdirectory.com/online-grief-support',
    onlineClinicalUrl:    'https://www.griefsupportdirectory.com/online-licensed-clinical-grief-support-therapy',
    onlineCounselorsUrl:  'https://www.griefsupportdirectory.com/online-grief-counselors-coaches-specialized-support',
    onlinePeerUrl:        'https://www.griefsupportdirectory.com/online-peer-group-community-grief-support',
    onlineSpiritualUrl:   'https://www.griefsupportdirectory.com/online-spiritual-cultural-holistic-grief-support',
    onlineDeathcareUrl:   'https://www.griefsupportdirectory.com/online-deathcare-support',
    onlineEducationUrl:   'https://www.griefsupportdirectory.com/online-grief-education',
    griefMediaUrl:        'https://www.griefsupportdirectory.com/grief-media-content-creators-1',

    /* MGA calendar (embedded on events page) */
    calendarUrl:      'https://www.griefsupportdirectory.com/events',
    mgaCalendarUrl:   'https://calendar.google.com/calendar/embed?src=mygriefangels@gmail.com',

    /* Featured communities (from Discussions page) */
    mgaChatUrl:       'https://chat.mygriefangels.org',
    rPetlossUrl:      'https://www.reddit.com/r/petloss',
    compassionateFriendsUrl: 'https://www.compassionatefriends.org',
    afspUrl:          'https://www.afsp.org/healing-conversations',
    dougyUrl:         'https://www.dougy.org',
    rGriefSupportUrl: 'https://www.reddit.com/r/GriefSupport',
    rWidowersUrl:     'https://www.reddit.com/r/widowers',
    rSuicideLossUrl:  'https://www.reddit.com/r/SuicideLossSupport',
    widowWidowerUrl:  'https://www.facebook.com/groups/widowwidowersupportgroup',
    rMiscarriageUrl:  'https://www.reddit.com/r/Miscarriage',
    griefLossUrl:     'https://www.facebook.com/groups/GriefandLossSupportGroup',
    anticipatoryUrl:  'https://www.facebook.com/groups/AnticipatoryGriefSupport',
    griefShareUrl:    'https://www.griefshare.org',

    proactiveDelay:   6000,
    typingDelayMin:   700,
    typingDelayMax:   1300
  };

  /* ============================================================
     CSS
     ============================================================ */
  function injectStyles() {
    if (document.getElementById('gsd-solace-styles')) return;
    var css = [
      '#gsd-launcher,#gsd-window,#gsd-bubble,.gsd-wrap,.gsd-qrow,#gsd-input-row,#gsd-header,#gsd-disclaimer,#gsd-msgs,#gsd-footer{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;line-height:1.5}',

      /* launcher */
      '#gsd-launcher{position:fixed;bottom:24px;right:24px;z-index:2147483647;width:64px;height:64px;border-radius:50%;background:linear-gradient(145deg,#1B5E8A,#2E86C1);border:none;cursor:pointer;box-shadow:0 4px 24px rgba(27,94,138,.50);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:2px;transition:transform .22s,box-shadow .22s;padding:0}',
      '#gsd-launcher:hover{transform:translateY(-3px);box-shadow:0 8px 32px rgba(27,94,138,.60)}',
      '#gsd-lbl{color:rgba(255,255,255,.92);font-size:9px;font-weight:700;letter-spacing:.6px;text-transform:uppercase}',
      '#gsd-badge{position:absolute;top:-3px;right:-3px;background:#E53935;color:#fff;border-radius:50%;width:20px;height:20px;font-size:11px;font-weight:800;display:none;align-items:center;justify-content:center;border:2px solid #fff}',

      /* proactive bubble */
      '#gsd-bubble{position:fixed;bottom:100px;right:24px;z-index:2147483646;background:#fff;border:1.5px solid #B8D4EE;border-radius:18px 18px 6px 18px;padding:14px 38px 14px 16px;max-width:272px;font-size:13.5px;line-height:1.55;color:#2D2D2D;box-shadow:0 4px 20px rgba(27,94,138,.18);cursor:pointer;display:none;animation:gsd-fi .4s ease}',
      '#gsd-bc{position:absolute;top:8px;right:10px;background:none;border:none;cursor:pointer;font-size:15px;color:#2E86C1;padding:2px 4px;line-height:1}',

      /* main window */
      '#gsd-window{position:fixed;bottom:100px;right:24px;z-index:2147483647;width:372px;max-width:calc(100vw - 32px);height:580px;max-height:calc(100vh - 116px);background:#F0F7FF;border-radius:22px;box-shadow:0 10px 48px rgba(27,94,138,.26);display:none;flex-direction:column;overflow:hidden}',
      '#gsd-window.gsd-open{display:flex;animation:gsd-si .3s ease}',
      '@keyframes gsd-fi{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}',
      '@keyframes gsd-si{from{opacity:0;transform:translateY(16px) scale(.98)}to{opacity:1;transform:translateY(0) scale(1)}}',

      /* header */
      '#gsd-header{background:linear-gradient(135deg,#1B5E8A,#2E86C1);padding:14px 16px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}',
      '#gsd-hl{display:flex;align-items:center;gap:11px}',
      '#gsd-av{width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;flex-shrink:0;border:1.5px solid rgba(255,255,255,.28)}',
      '#gsd-bn{color:#fff;font-size:17px;font-weight:700}',
      '#gsd-bs{color:rgba(255,255,255,.78);font-size:11.5px;margin-top:1px}',
      '#gsd-cb{background:rgba(255,255,255,.15);border:none;color:#fff;border-radius:50%;width:34px;height:34px;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .18s;font-family:inherit}',
      '#gsd-cb:hover{background:rgba(255,255,255,.30)}',

      /* disclaimer */
      '#gsd-disclaimer{background:#E3F0FA;color:#1B4F72;font-size:11px;padding:8px 14px;line-height:1.5;flex-shrink:0;border-bottom:1px solid #B8D4EE}',

      /* messages */
      '#gsd-msgs{flex:1;overflow-y:auto;padding:16px 13px;display:flex;flex-direction:column;gap:12px;scroll-behavior:smooth}',
      '#gsd-msgs::-webkit-scrollbar{width:5px}',
      '#gsd-msgs::-webkit-scrollbar-thumb{background:#90C4E8;border-radius:4px}',

      /* bubbles */
      '.gsd-wrap{display:flex;align-items:flex-end;gap:8px;max-width:100%}',
      '.gsd-wrap.bot{justify-content:flex-start}',
      '.gsd-wrap.usr{justify-content:flex-end}',
      '.gsd-av2{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#1B5E8A,#2E86C1);display:flex;align-items:center;justify-content:center;flex-shrink:0}',
      '.gsd-col{max-width:83%;display:flex;flex-direction:column;gap:7px}',
      '.gsd-bbl{padding:10px 14px;border-radius:18px;font-size:13.5px;line-height:1.58;word-wrap:break-word;overflow-wrap:break-word}',
      '.gsd-bbl.bot{background:#fff;color:#1A1A2E;border-radius:5px 18px 18px 18px;border:1px solid #C8E0F4;box-shadow:0 1px 5px rgba(27,94,138,.09)}',
      '.gsd-bbl.bot a{color:#1B5E8A;text-decoration:underline;text-decoration-color:#90C4E8}',
      '.gsd-bbl.usr{background:linear-gradient(135deg,#1B5E8A,#2471A3);color:#fff;border-radius:18px 18px 5px 18px;align-self:flex-end}',
      '.gsd-bbl.crs{background:#FFF3F3;color:#8B0000;border:1.5px solid #F5AAAA}',

      /* typing */
      '.gsd-dots{display:flex;align-items:center;gap:5px;padding:13px 16px}',
      '.gsd-dots span{width:7px;height:7px;background:#90C4E8;border-radius:50%;animation:gsd-b 1.3s infinite ease-in-out}',
      '.gsd-dots span:nth-child(2){animation-delay:.18s}',
      '.gsd-dots span:nth-child(3){animation-delay:.36s}',
      '@keyframes gsd-b{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-7px)}}',

      /* quick replies */
      '.gsd-qrow{display:flex;flex-wrap:wrap;gap:6px;padding:2px 0}',
      '.gsd-qbtn{background:#fff;border:1.5px solid #2E86C1;color:#1B5E8A;border-radius:22px;padding:6px 13px;font-size:12.5px;cursor:pointer;transition:background .18s,color .18s;font-family:inherit;line-height:1.35}',
      '.gsd-qbtn:hover{background:#1B5E8A;color:#fff;border-color:#1B5E8A}',

      /* input */
      '#gsd-input-row{display:flex;align-items:center;gap:8px;padding:11px 13px;background:#fff;border-top:1px solid #C8E0F4;flex-shrink:0}',
      '#gsd-input{flex:1;border:1.5px solid #A9CCE3;border-radius:26px;padding:10px 16px;font-size:13.5px;outline:none;color:#1A1A2E;background:#F5FAFF;transition:border-color .18s;font-family:inherit}',
      '#gsd-input:focus{border-color:#2E86C1;background:#fff}',
      '#gsd-input::placeholder{color:#7FB3D3}',
      '#gsd-sb{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#1B5E8A,#2E86C1);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:opacity .18s}',
      '#gsd-sb:hover{opacity:.88}',

      /* footer */
      '#gsd-footer{text-align:center;font-size:10px;color:#7FB3D3;padding:5px 10px 7px;background:#fff;border-top:1px solid #E8F4FD;flex-shrink:0}',
      '#gsd-footer a{color:#2E86C1;text-decoration:none}',

      /* mobile */
      '@media(max-width:479px){#gsd-window{bottom:0;right:0;width:100vw;max-width:100vw;height:100dvh;max-height:100dvh;border-radius:0}#gsd-launcher{bottom:16px;right:16px}#gsd-bubble{right:16px;max-width:calc(100vw - 88px)}}'
    ].join('');
    var s = document.createElement('style');
    s.id = 'gsd-solace-styles';
    s.textContent = css;
    (document.head || document.documentElement).appendChild(s);
  }

  /* ============================================================
     HTML
     ============================================================ */
  function injectHTML() {
    if (document.getElementById('gsd-solace-root')) return;

    /* Book/compass icon for directory theme */
    var ICON = '<svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="6" y="8" width="20" height="26" rx="3" fill="rgba(255,255,255,.85)"/><rect x="8" y="11" width="12" height="2" rx="1" fill="rgba(27,94,138,.5)"/><rect x="8" y="15" width="16" height="2" rx="1" fill="rgba(27,94,138,.4)"/><rect x="8" y="19" width="14" height="2" rx="1" fill="rgba(27,94,138,.4)"/><rect x="8" y="23" width="10" height="2" rx="1" fill="rgba(27,94,138,.3)"/><circle cx="30" cy="28" r="7" fill="rgba(255,255,255,.92)"/><path d="M27 28l2 2 4-4" stroke="#1B5E8A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var ICON_SM = '<svg width="20" height="20" viewBox="0 0 40 40" fill="none"><rect x="7" y="7" width="18" height="24" rx="3" fill="rgba(255,255,255,.88)"/><circle cx="30" cy="30" r="7" fill="rgba(255,255,255,.80)"/><path d="M27.5 30l2 2 4-4" stroke="#1B5E8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var SEND = '<svg width="17" height="17" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>';

    var html = [
      '<button id="gsd-launcher" aria-label="Open Guide — GriefSupportDirectory.com" title="Find Grief Support">',
        ICON,
        '<span id="gsd-lbl">Find Help</span>',
        '<span id="gsd-badge" aria-label="New message">1</span>',
      '</button>',

      '<div id="gsd-bubble" role="complementary" aria-label="Message from GriefSupportDirectory Guide">',
        '<button id="gsd-bc" aria-label="Dismiss">&#x2715;</button>',
        'Looking for grief support or a mental health professional? I can help you find the right resource.',
      '</div>',

      '<div id="gsd-window" role="dialog" aria-modal="false" aria-label="GriefSupportDirectory.com Guide" aria-hidden="true">',
        '<div id="gsd-header">',
          '<div id="gsd-hl">',
            '<div id="gsd-av" aria-hidden="true">', ICON_SM, '</div>',
            '<div>',
              '<div id="gsd-bn">Directory Guide</div>',
              '<div id="gsd-bs">GriefSupportDirectory.com &middot; Here to help</div>',
            '</div>',
          '</div>',
          '<button id="gsd-cb" aria-label="Close">&#x2715;</button>',
        '</div>',

        '<div id="gsd-disclaimer" role="note">',
          '<strong>Please note:</strong> This directory connects you with grief support providers and resources. If you are in crisis, please call or text <strong>988</strong> immediately.',
        '</div>',

        '<div id="gsd-msgs" role="log" aria-live="polite" aria-atomic="false"></div>',

        '<div id="gsd-input-row">',
          '<input id="gsd-input" type="text" placeholder="What kind of grief support are you looking for?" aria-label="Type your question" autocomplete="off" maxlength="500"/>',
          '<button id="gsd-sb" aria-label="Send">', SEND, '</button>',
        '</div>',

        '<div id="gsd-footer">',
          '<a href="https://www.griefsupportdirectory.com" target="_blank" rel="noopener">GriefSupportDirectory.com</a> &mdash; An affiliate of <a href="https://www.mygriefangels.org" target="_blank" rel="noopener">MyGriefAngels.org</a>',
        '</div>',
      '</div>'
    ].join('');

    var root = document.createElement('div');
    root.id = 'gsd-solace-root';
    root.innerHTML = html;
    document.body.appendChild(root);
  }

  /* ============================================================
     INTENTS
     ============================================================ */
  var INTENTS = [

    /* CRISIS */
    { id:'crisis', patterns:[/suicid/i,/kill\s*(my)?self/i,/end\s+my\s+life/i,/don.?t\s+want\s+to\s+live/i,/want\s+to\s+die/i,/harm\s+my\s*self/i,/hurt\s+my\s*self/i,/self.?harm/i,/no\s+reason\s+to\s+live/i,/can.?t\s+go\s+on/i,/not\s+worth\s+living/i,/better\s+off\s+dead/i],
      response:function(){return{crisis:true,text:'<strong>Your life matters, and I am genuinely concerned about you.</strong>\n\nPlease reach out for immediate support right now:\n\n<strong>&#x260E; Call or text 988</strong> &mdash; Suicide &amp; Crisis Lifeline (free, confidential, 24/7)\n<strong>&#x270F; Text HOME to 741741</strong> &mdash; Crisis Text Line\n\nPlease contact one of these resources right away. When you are safe and ready, GriefSupportDirectory.com is here to help you find ongoing support.',quickReplies:[]}}},

    /* GREETING */
    { id:'greeting', patterns:[/^h[ie][iy]?[\s!.]*$/i,/^hello[\s!.]*$/i,/^hey[\s!.]*$/i,/good\s+(morning|afternoon|evening|day)/i,/^howdy/i,/^greetings/i,/^hola\b/i],
      response:function(){return{text:'Hello, and welcome to <a href="'+CFG.siteUrl+'" target="_blank" rel="noopener">GriefSupportDirectory.com</a> &mdash; the top directory for grief support and mental health services providers, brought to you by an affiliate of <a href="https://www.mygriefangels.org" target="_blank" rel="noopener">MyGriefAngels.org</a>.\n\nWhether you are looking for a grief counselor, a support group, online resources, or community connection &mdash; I can help you find exactly what you need.\n\nHow may I support you today?',quickReplies:['Search the directory','Free grief resources','Online grief support groups','Grief counselors & therapists','Peer & community support','What is this directory?']}}},

    /* ABOUT */
    { id:'about', patterns:[/what is (this|the) (directory|site)/i,/about (this|the) (site|directory)/i,/who (are you|runs this)/i,/tell me about/i,/what do you (do|offer)/i,/how does (this|the directory) work/i,/what.?s (here|available)/i,/griefsupportdirectory/i],
      response:function(){return{text:'<a href="'+CFG.siteUrl+'" target="_blank" rel="noopener">GriefSupportDirectory.com</a> is the <strong>top grief support and mental health services directory</strong> &mdash; an affiliate of the award-winning nonprofit <a href="https://www.mygriefangels.org" target="_blank" rel="noopener">MyGriefAngels.org</a>.\n\n<strong>What you can do here:</strong>\n&#x2022; <strong>Search</strong> grief support and mental health providers by name, specialty, or location\n&#x2022; <strong>Compare</strong> provider profiles, reviews, and details\n&#x2022; <strong>Connect</strong> directly with providers via private messaging\n&#x2022; Access a rich library of <strong>free grief resources</strong>\n&#x2022; Browse <strong>grief communities</strong> and discussion boards\n&#x2022; Read <strong>articles</strong> on The Gentle Path &mdash; compassionate insights on grief and healing\n&#x2022; View <strong>upcoming grief support events</strong>\n\n<strong>For providers:</strong> List your services free (Member), or upgrade to Premium ($10/mo) or Elite ($20/mo) for greater visibility.\n\n<a href="'+CFG.howItWorksUrl+'" target="_blank" rel="noopener">Learn how it works &rarr;</a>',quickReplies:['Search the directory','Browse by category','Free grief resources','Get listed as a provider','Upcoming grief events']}}},

    /* SEARCH / FIND PROVIDER */
    { id:'search_directory', patterns:[/search (the )?director/i,/find (a )?(provider|counselor|therapist|coach|support|group|professional)/i,/look(ing)? for (a )?(counselor|therapist|support|provider|coach|group)/i,/browse (the )?director/i,/near me/i,/in my area/i,/local grief/i,/grief (near|in|around)/i,/find someone/i],
      response:function(){return{text:'You can search the full directory at <a href="'+CFG.directoryUrl+'" target="_blank" rel="noopener">GriefSupportDirectory.com</a> &mdash; search by name, specialty, or location to find providers near you or online.\n\n<strong>In-Person Support Categories:</strong>\n&#x2022; <a href="'+CFG.inPersonUrl+'" target="_blank" rel="noopener">In-Person Grief Support</a>\n&#x2022; <a href="'+CFG.licensedClinicalUrl+'" target="_blank" rel="noopener">Licensed Clinical Grief Support &amp; Therapy</a>\n&#x2022; <a href="'+CFG.counselorsUrl+'" target="_blank" rel="noopener">Grief Counselors, Coaches &amp; Specialists</a>\n&#x2022; <a href="'+CFG.peerGroupUrl+'" target="_blank" rel="noopener">Peer, Group &amp; Community Grief Support</a>\n&#x2022; <a href="'+CFG.spiritualUrl+'" target="_blank" rel="noopener">Spiritual, Cultural &amp; Holistic Grief Support</a>\n&#x2022; <a href="'+CFG.deathcareUrl+'" target="_blank" rel="noopener">Deathcare &amp; Funeral Support</a>\n&#x2022; <a href="'+CFG.griefEducationUrl+'" target="_blank" rel="noopener">Grief Education</a>',quickReplies:['Online grief support','Licensed therapists & counselors','Peer & community support','Spiritual & holistic support','Deathcare & funeral support','Search the full directory']}}},

    /* ONLINE SUPPORT */
    { id:'online_support', patterns:[/online (grief|support|counselor|therapist|coach|group)/i,/virtual (grief|support|group|counselor|therapist)/i,/remote (grief|support|therapy)/i,/online.*support/i,/grief.*online/i,/amwell/i,/betterhelp/i,/brave health/i,/brightside/i,/cohens veterans/i,/e.therapy cafe/i,/gay therapy/i,/grow therapy/i,/inclusive therapists/i,/talkspace/i,/cerebral/i,/teladoc/i],
      response:function(){return{text:'The <a href="'+CFG.onlineGriefUrl+'" target="_blank" rel="noopener">Online Grief Support section</a> of GriefSupportDirectory.com lists <strong>24+ online providers</strong> including:\n\n<strong>Featured Online Providers:</strong>\n&#x2022; <strong>Amwell</strong> &mdash; Telehealth therapy including grief counseling\n&#x2022; <strong>BetterHelp</strong> &mdash; Online therapy matched to your needs\n&#x2022; <strong>Brave Health</strong> &mdash; Mental health care via telehealth\n&#x2022; <strong>Brightside Health, Inc.</strong> &mdash; Online therapy &amp; psychiatry\n&#x2022; <strong>Cohens Veterans Network</strong> &mdash; Free mental health for veterans &amp; families\n&#x2022; <strong>E-Therapy Cafe</strong> &mdash; Affordable online therapy sessions\n&#x2022; <strong>Gay Therapy Center</strong> &mdash; LGBTQ+-affirming online therapy\n&#x2022; <strong>Grow Therapy</strong> &mdash; Insurance-friendly online therapists\n&#x2022; <strong>Inclusive Therapists</strong> &mdash; Diverse, anti-oppressive therapist matching\n\n<strong>Browse all online categories:</strong>\n&#x2022; <a href="'+CFG.onlineClinicalUrl+'" target="_blank" rel="noopener">Online Licensed Clinical Grief Support &amp; Therapy</a>\n&#x2022; <a href="'+CFG.onlineCounselorsUrl+'" target="_blank" rel="noopener">Online Grief Counselors, Coaches &amp; Specialists</a>\n&#x2022; <a href="'+CFG.onlinePeerUrl+'" target="_blank" rel="noopener">Online Peer, Group &amp; Community Support</a>\n&#x2022; <a href="'+CFG.onlineSpiritualUrl+'" target="_blank" rel="noopener">Online Spiritual, Cultural &amp; Holistic Grief</a>\n&#x2022; <a href="'+CFG.onlineDeathcareUrl+'" target="_blank" rel="noopener">Online Deathcare Support</a>\n&#x2022; <a href="'+CFG.onlineEducationUrl+'" target="_blank" rel="noopener">Online Grief Education</a>\n&#x2022; <a href="'+CFG.griefMediaUrl+'" target="_blank" rel="noopener">Grief Media &amp; Content Creators</a>\n\n<a href="'+CFG.onlineGriefUrl+'" target="_blank" rel="noopener">View all 24+ online providers &rarr;</a>',quickReplies:['View all online providers','Licensed therapists & counselors','Free virtual support groups','Online grief chat community','Search the full directory']}}},

    /* LICENSED THERAPIST / COUNSELOR */
    { id:'therapist', patterns:[/therapist/i,/counselor/i,/licensed/i,/clinical/i,/psychologist/i,/psychiatrist/i,/mental health (professional|provider)/i,/grief (therapy|therapist|counseling|counselor)/i,/professional (help|support|grief)/i,/what.?s the difference.*counselor/i,/difference.*therapist/i,/grief coach/i],
      response:function(){return{text:'Not sure which type of grief professional is right for you? Here is a quick guide:\n\n&#x2022; <strong>Grief Therapists</strong> &mdash; Licensed mental health professionals (LCSW, LPC, MFT, Psychologist) who treat complicated grief, trauma, and co-occurring conditions\n&#x2022; <strong>Grief Counselors</strong> &mdash; May be licensed or certified; provide talk-based grief support\n&#x2022; <strong>Grief Coaches</strong> &mdash; Not licensed clinicians; focus on goal-setting and moving forward\n&#x2022; <strong>Grief Psychiatrists</strong> &mdash; Medical doctors who can prescribe medication for grief-related depression or anxiety\n&#x2022; <strong>Holistic Grief Healers</strong> &mdash; Use body-based, spiritual, or alternative approaches\n\nA <a href="https://ugrief.com/" target="_blank" rel="noopener">free MOOC on these differences</a> is available at UGrief.com.\n\n<strong>Find licensed providers:</strong>\n&#x2022; <a href="'+CFG.licensedClinicalUrl+'" target="_blank" rel="noopener">Licensed Clinical Grief Support</a>\n&#x2022; <a href="'+CFG.counselorsUrl+'" target="_blank" rel="noopener">Grief Counselors &amp; Coaches</a>\n&#x2022; <a href="'+CFG.onlineClinicalUrl+'" target="_blank" rel="noopener">Online Licensed Clinical Support</a>',quickReplies:['Search licensed therapists','Grief coaches & counselors','Online licensed support','Free courses on grief professionals']}}},

    /* PEER / COMMUNITY SUPPORT */
    { id:'peer_support', patterns:[/peer support/i,/support group/i,/grief group/i,/community support/i,/group (support|therapy|grief)/i,/talk to (someone|others)/i,/connect with (others|people)/i,/not alone/i],
      response:function(){return{text:'Connecting with others who truly understand can be one of the most healing things in grief.\n\n<strong>Peer &amp; Community Support in the Directory:</strong>\n&#x2022; <a href="'+CFG.peerGroupUrl+'" target="_blank" rel="noopener">Peer, Group &amp; Community Grief Support</a>\n&#x2022; <a href="'+CFG.onlinePeerUrl+'" target="_blank" rel="noopener">Online Peer &amp; Group Grief Support</a>\n\n<strong>Free Virtual Peer-Led Groups (via MyGriefAngels.org):</strong>\n&#x2022; <a href="'+CFG.virtualGroupsUrl+'" target="_blank" rel="noopener">Groups by Type of Loss</a>\n&#x2022; <a href="'+CFG.virtualByHolidayUrl+'" target="_blank" rel="noopener">Holiday Grief Support Groups</a>\n&#x2022; <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">Online Grief Chat Community</a> (open 24/7)\n\n<strong>Featured Online Communities:</strong>\n&#x2022; <a href="'+CFG.mgaChatUrl+'" target="_blank" rel="noopener">My Grief Angels Chat</a> &mdash; Live chat, all grief types, free\n&#x2022; <a href="'+CFG.griefShareUrl+'" target="_blank" rel="noopener">GriefShare</a> &mdash; 13-week structured groups\n&#x2022; <a href="'+CFG.compassionateFriendsUrl+'" target="_blank" rel="noopener">The Compassionate Friends</a> &mdash; Child loss',quickReplies:['Virtual grief support groups','Online grief chat','Holiday grief groups','Grief communities & discussions','Search the full directory']}}},

    /* FREE RESOURCES */
    { id:'free_resources', patterns:[/free (resource|support|help|grief)/i,/no cost/i,/free.*grief/i,/grief.*free/i,/\bfree\b/i,/resource/i,/what.?s (free|available)/i],
      response:function(){return{text:'GriefSupportDirectory.com offers a rich library of <strong>free grief resources</strong> curated by MyGriefAngels.org:\n\n<strong>Support Groups &amp; Community</strong>\n&#x2022; <a href="'+CFG.virtualGroupsUrl+'" target="_blank" rel="noopener">Virtual Peer-Led Groups by Type of Loss</a>\n&#x2022; <a href="'+CFG.virtualByHolidayUrl+'" target="_blank" rel="noopener">Virtual Peer-Led Groups by Holiday</a>\n&#x2022; <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">Online Grief Chat Community</a>\n\n<strong>Education</strong>\n&#x2022; <a href="'+CFG.freeCoursesUrl+'" target="_blank" rel="noopener">Free Online Grief Courses (UGrief.com)</a> &mdash; 38+ MOOCs\n&#x2022; <a href="'+CFG.videoChannelUrl+'" target="_blank" rel="noopener">Video Channel &mdash; Grief Support Group (YouTube)</a>\n\n<strong>Specialized Resources</strong>\n&#x2022; <a href="'+CFG.lgbtqUrl+'" target="_blank" rel="noopener">LGBTQIA+ Grief Support (LGBTQLoss.com)</a>\n&#x2022; <a href="'+CFG.spanishUrl+'" target="_blank" rel="noopener">Recursos en Espa&ntilde;ol</a>\n&#x2022; <a href="'+CFG.disabilitiesUrl+'" target="_blank" rel="noopener">People with Disabilities &amp; Grief</a>\n&#x2022; <a href="'+CFG.petLossUrl+'" target="_blank" rel="noopener">Pet Loss Support</a>\n&#x2022; <a href="'+CFG.healthGriefUrl+'" target="_blank" rel="noopener">Health &amp; Grief</a>\n&#x2022; <a href="'+CFG.selfCareUrl+'" target="_blank" rel="noopener">Self-Care &amp; Grief (Feirg.com)</a>\n&#x2022; <a href="'+CFG.griefTechUrl+'" target="_blank" rel="noopener">Grief Tech (GriefTech.com)</a>\n&#x2022; <a href="'+CFG.griefFestUrl+'" target="_blank" rel="noopener">Grief Film Festival (GriefFest.com)</a>',quickReplies:['Free grief courses','Online grief support groups','Online grief chat','LGBTQ+ grief support','Spanish grief resources','Pet loss support']}}},

    /* GRIEF COURSES */
    { id:'courses', patterns:[/course/i,/mooc/i,/ugrief/i,/learn/i,/education/i,/online class/i,/grief class/i,/study/i,/self.?paced/i],
      response:function(){return{text:'<a href="'+CFG.freeCoursesUrl+'" target="_blank" rel="noopener">UGrief.com</a> &mdash; the University of Grief &mdash; offers <strong>38+ free online grief MOOCs</strong> created for and by people who are grieving.\n\n<strong>Topics include:</strong> every type of loss, grief brain, grief &amp; PTSD, anticipatory grief, disenfranchised grief, LGBTQ+ grief, workplace grief, self-care, cultural grief, and more.\n\n<strong>Also available in multiple languages:</strong>\n&#x2022; Espa&ntilde;ol: <a href="https://uduelo.com" target="_blank" rel="noopener">UDuelo.com</a>\n&#x2022; Fran&ccedil;ais: <a href="https://www.udeuil.com" target="_blank" rel="noopener">UDeuil.com</a>\n&#x2022; Portugu&ecirc;s: <a href="https://uniluto.com" target="_blank" rel="noopener">UniLuto.com</a>\n&#x2022; Hindi: <a href="https://udukh.com" target="_blank" rel="noopener">UDukh.com</a>\n\nAll completely free &mdash; no subscription, no barriers.\n&#x2022; <a href="'+CFG.freeCoursesUrl+'" target="_blank" rel="noopener">Browse all courses at UGrief.com &rarr;</a>',quickReplies:['Browse all free courses','Free grief resources','Online grief support groups','Search the directory']}}},

    /* VIRTUAL GROUPS */
    { id:'virtual_groups', patterns:[/virtual group/i,/zoom group/i,/online group/i,/peer.led/i,/free group/i,/support group/i,/grief group/i,/join (a )?group/i,/find (a )?group/i],
      response:function(){return{text:'Free virtual peer-led grief support groups are available through <a href="https://www.mygriefangels.org" target="_blank" rel="noopener">MyGriefAngels.org</a> &mdash; the nonprofit behind this directory.\n\n<strong>Ongoing Zoom Groups (Eastern Time):</strong>\n&#x2022; Tuesdays 7:30 PM &mdash; Grief Break (small group, max 15)\n&#x2022; Wednesdays 7:00 PM &mdash; Child, Sibling &amp; Friend Loss\n&#x2022; Wednesdays 8:00 PM &mdash; Spouse, Partner &amp; LGBTQIA+ Loss\n&#x2022; Sundays 7:00 PM &mdash; General / All Loss Types\n&#x2022; Sundays 8:00 PM &mdash; Parent, Grandparent &amp; Mentor Loss\n&#x2022; 1st Wednesday 6 PM &mdash; LGBTQ+ Dedicated\n&#x2022; 1st Sunday 6 PM &mdash; Apoyo en Espa&ntilde;ol\n\n&#x2022; <a href="'+CFG.virtualGroupsUrl+'" target="_blank" rel="noopener">View all groups &amp; register &rarr;</a>\n&#x2022; <a href="'+CFG.calendarUrl+'" target="_blank" rel="noopener">View upcoming events calendar &rarr;</a>',quickReplies:['Holiday grief groups','View events calendar','Online grief chat','Peer & community directory']}}},

    /* HOLIDAY GRIEF */
    { id:'holiday_grief', patterns:[/holiday/i,/christmas/i,/thanksgiving/i,/new year/i,/mother.?s day/i,/father.?s day/i,/valentine/i,/easter/i,/halloween/i,/memorial day/i,/anniversary/i,/birthday/i,/first.*without/i,/seasonal grief/i],
      response:function(){return{text:'Holidays, anniversaries, and birthdays can be some of the hardest moments in grief. You are not alone in finding these days especially painful.\n\nMyGriefAngels.org hosts <strong>free Holiday Grief Support Groups</strong> via Zoom throughout the year:\n\n&#x2022; Valentine\'s Day &mdash; Feb 14, 8 PM ET\n&#x2022; Easter Sunday &mdash; 8 PM ET\n&#x2022; Mother\'s Day &mdash; 8 PM ET\n&#x2022; Father\'s Day &mdash; 8 PM ET\n&#x2022; Thanksgiving &mdash; 8 PM ET\n&#x2022; Christmas Day &mdash; 8 PM ET\n&#x2022; New Year\'s Eve &mdash; 8 PM ET\n\n&#x2022; <a href="'+CFG.virtualByHolidayUrl+'" target="_blank" rel="noopener">View all holiday groups &amp; register &rarr;</a>\n&#x2022; <a href="'+CFG.calendarUrl+'" target="_blank" rel="noopener">Upcoming events calendar &rarr;</a>',quickReplies:['View all holiday groups','Upcoming events calendar','Online grief chat','Free grief resources']}}},

    /* EVENTS / CALENDAR */
    { id:'events', patterns:[/event/i,/calendar/i,/upcoming/i,/schedule/i,/when (is|are)/i,/what.?s on/i,/next (group|meeting|event)/i],
      response:function(){return{text:'All upcoming grief support events are listed on the <a href="'+CFG.eventsUrl+'" target="_blank" rel="noopener">Upcoming Events page</a> at GriefSupportDirectory.com.\n\nThe embedded calendar shows live events from MyGriefAngels.org including all recurring peer-led groups and special holiday groups.\n\n&#x2022; <a href="'+CFG.eventsUrl+'" target="_blank" rel="noopener">View upcoming events &rarr;</a>\n&#x2022; <a href="'+CFG.mgaCalendarUrl+'" target="_blank" rel="noopener">Add to your Google Calendar &rarr;</a>',quickReplies:['View upcoming events','Virtual support groups','Holiday grief groups','Free grief resources']}}},

    /* DISCUSSIONS / COMMUNITIES */
    { id:'discussions', patterns:[/discussion/i,/communit/i,/forum/i,/reddit/i,/facebook group/i,/finding your people/i,/online communit/i,/grief communit/i,/\br\/grief/i],
      response:function(){return{text:'The <a href="'+CFG.discussionsUrl+'" target="_blank" rel="noopener">Discussions &amp; Communities</a> page at GriefSupportDirectory.com features <strong>Finding Your People</strong> &mdash; a curated guide to 21+ grief communities across platforms with 1.2M+ total members.\n\n<strong>Featured communities include:</strong>\n&#x2022; <a href="'+CFG.mgaChatUrl+'" target="_blank" rel="noopener">My Grief Angels Chat</a> &mdash; Live chat, all grief types, always free ⭐ Featured\n&#x2022; <a href="'+CFG.rPetlossUrl+'" target="_blank" rel="noopener">r/petloss</a> &mdash; 127,000+ members\n&#x2022; <a href="'+CFG.compassionateFriendsUrl+'" target="_blank" rel="noopener">The Compassionate Friends</a> &mdash; Child loss, 200+ members/platforms\n&#x2022; <a href="'+CFG.afspUrl+'" target="_blank" rel="noopener">Alliance of Hope for Suicide Loss</a> &mdash; 34,200+ members\n&#x2022; <a href="'+CFG.dougyUrl+'" target="_blank" rel="noopener">Dougy Center Community</a> &mdash; Children &amp; teens, 18,900+ members\n&#x2022; <a href="'+CFG.rGriefSupportUrl+'" target="_blank" rel="noopener">r/GriefSupport</a> &mdash; 214,000+ members\n&#x2022; <a href="'+CFG.rWidowersUrl+'" target="_blank" rel="noopener">r/widowers</a> &mdash; 58,300+ members\n&#x2022; <a href="'+CFG.griefShareUrl+'" target="_blank" rel="noopener">GriefShare Online</a> &mdash; 13-week structured groups, 55,000+ members\n&#x2022; <a href="'+CFG.griefLossUrl+'" target="_blank" rel="noopener">Grief &amp; Loss Support Group</a> (Facebook) &mdash; 98,500+ members\n\n<a href="'+CFG.discussionsUrl+'" target="_blank" rel="noopener">View all communities &rarr;</a>',quickReplies:['View all communities','Online grief chat','Virtual support groups','Peer & community directory']}}},

    /* ARTICLES */
    { id:'articles', patterns:[/article/i,/read/i,/blog/i,/gentle path/i,/research/i,/insight/i,/news/i,/communit(y|ies) (article|update)/i],
      response:function(){return{text:'<strong>The Gentle Path</strong> &mdash; compassionate insights on grief, healing, and remembrance &mdash; is the article hub at <a href="'+CFG.articlesUrl+'" target="_blank" rel="noopener">GriefSupportDirectory.com/articles</a>.\n\nThe feed is updated automatically and covers peer-reviewed research, healing insights, and mental health tools from trusted sources worldwide.\n\n<strong>Article topics include:</strong>\n&#x2022; Human loss &amp; grief recovery research\n&#x2022; Pet loss &amp; disenfranchised grief\n&#x2022; Anticipatory grief\n&#x2022; Prolonged grief disorder\n&#x2022; Mental health tools\n&#x2022; Treatments (EMDR, CBT, mindfulness)\n&#x2022; Grief in children\n&#x2022; Neuroscience of grief\n\n&#x2022; <a href="'+CFG.articlesUrl+'" target="_blank" rel="noopener">Read The Gentle Path &rarr;</a>',quickReplies:['Read The Gentle Path articles','Grief communities & discussions','Free grief courses','Search the directory']}}},

    /* GET LISTED / JOIN AS PROVIDER */
    { id:'join_provider', patterns:[/get listed/i,/join (the )?director/i,/list (my|a) (practice|business|service|organization)/i,/add (my|a) listing/i,/provider (account|listing|signup|join)/i,/sign up (as|for) (a )?(provider|member|professional)/i,/member(ship)?/i,/premium/i,/elite plan/i,/how (do i|to) join/i,/\$10/i,/\$20/i,/plan/i],
      response:function(){return{text:'Grief support providers can join <a href="'+CFG.siteUrl+'" target="_blank" rel="noopener">GriefSupportDirectory.com</a> and create a searchable listing to connect with people who need their services.\n\n<strong>Membership Plans:</strong>\n\n&#x2022; <strong>Member &mdash; Free</strong>\n&nbsp;&nbsp;Tier 3 search placement &middot; 1 category &middot; Website link &middot; Reviews &middot; Direct inquiries\n\n&#x2022; <strong>Premium &mdash; $10/month</strong>\n&nbsp;&nbsp;Tier 2 search placement &middot; 3 categories &middot; Phone &middot; Click-to-call &middot; Private chat &middot; Social media links &middot; Photo/logo &middot; Post events, classifieds, articles, coupons, products, videos, photo albums &amp; Soundcloud\n\n&#x2022; <strong>Elite &mdash; $20/month</strong>\n&nbsp;&nbsp;Tier 1 search placement &middot; 5 categories &middot; All Premium features &middot; Maximum visibility\n\n&#x2022; <a href="'+CFG.memberJoinUrl+'" target="_blank" rel="noopener">Get listed today &rarr;</a>',quickReplies:['Join as a free member','Search the directory','How it works','Contact us']}}},

    /* HOW IT WORKS */
    { id:'how_it_works', patterns:[/how (it|does it|this) work/i,/how (do i|to) (use|search|find)/i,/get started/i,/where (do i|to) start/i,/step by step/i],
      response:function(){return{text:'Using <a href="'+CFG.siteUrl+'" target="_blank" rel="noopener">GriefSupportDirectory.com</a> is simple &mdash; just three steps:\n\n<strong>1. Search</strong>\nSearch grief support and mental health services providers by name, specialty, or location using the directory search.\n\n<strong>2. Compare</strong>\nView and compare detailed provider profiles, read reviews, and explore their services.\n\n<strong>3. Connect</strong>\nSend a direct message to the providers you want to reach &mdash; right from their listing.\n\n&#x2022; <a href="'+CFG.directoryUrl+'" target="_blank" rel="noopener">Search the directory now &rarr;</a>\n&#x2022; <a href="'+CFG.howItWorksUrl+'" target="_blank" rel="noopener">Full How It Works guide &rarr;</a>',quickReplies:['Search the directory','Browse by category','Get listed as a provider','Free grief resources']}}},

    /* LGBTQ+ */
    { id:'lgbtq', patterns:[/lgbtq\+?/i,/\blgbt\b/i,/\bgay\b/i,/\blesbian\b/i,/bisexual/i,/transgender/i,/\btrans\b/i,/\bqueer\b/i,/non.?binary/i,/lgbtqia/i,/same.?sex/i],
      response:function(){return{text:'GriefSupportDirectory.com and its affiliated network fully support LGBTQIA+ grievers.\n\n&#x2022; <a href="'+CFG.lgbtqUrl+'" target="_blank" rel="noopener">LGBTQLoss.com</a> &mdash; dedicated LGBTQIA+ grief support resource\n&#x2022; <a href="'+CFG.virtualGroupsUrl+'" target="_blank" rel="noopener">LGBTQ+ Virtual Peer Groups</a> via MyGriefAngels.org\n&#x2022; Free LGBTQ+ grief MOOC: <a href="'+CFG.freeCoursesUrl+'" target="_blank" rel="noopener">Gay/Queer Grief course at UGrief.com</a>\n\n<strong>Crisis lines:</strong>\n&#x2022; The Trevor Project: (866) 488-7386\n&#x2022; Trans Lifeline: (877) 565-8860\n&#x2022; SAGE LGBT Elder Hotline: (877) 360-5428\n\nYou are fully and unconditionally welcome here.',quickReplies:['LGBTQ+ grief resources','Virtual support groups','Free grief courses','Search the directory']}}},

    /* PET LOSS */
    { id:'pet_loss', patterns:[/pet loss/i,/lost (my )?(pet|dog|cat|animal|horse|bird)/i,/(dog|cat|horse|pet)\s+(died|passed|death)/i,/rainbow bridge/i,/animal loss/i],
      response:function(){return{text:'The bond with an animal companion is real and deep &mdash; and the grief when we lose them deserves the same compassion as any other loss.\n\n&#x2022; <a href="'+CFG.petLossUrl+'" target="_blank" rel="noopener">Pet Loss Support resources via MyGriefAngels.org</a>\n&#x2022; <a href="'+CFG.rPetlossUrl+'" target="_blank" rel="noopener">r/petloss community</a> &mdash; 127,000+ members\n&#x2022; Free <a href="'+CFG.freeCoursesUrl+'" target="_blank" rel="noopener">Pet Loss MOOC and Healing Power of Pets course</a> at UGrief.com\n&#x2022; <a href="'+CFG.peerGroupUrl+'" target="_blank" rel="noopener">Search peer grief support in the directory</a>',quickReplies:['Pet loss resources','Grief communities','Free grief courses','Search the directory']}}},

    /* SPANISH */
    { id:'spanish', patterns:[/\bspanish\b/i,/espa[n\u00f1]ol/i,/habla/i,/apoyo/i,/\blatino?\b/i,/\bhispano?\b/i],
      response:function(){return{text:'GriefSupportDirectory.com y su red afiliada ofrecen recursos de duelo gratuitos en espa&ntilde;ol.\n\n&#x2022; <a href="'+CFG.spanishUrl+'" target="_blank" rel="noopener">Recursos en Espa&ntilde;ol &mdash; MyGriefAngels.org</a>\n&#x2022; <a href="https://uduelo.com" target="_blank" rel="noopener">UDuelo.com</a> &mdash; Universidad del Duelo: cursos gratuitos en espa&ntilde;ol\n&#x2022; Grupo virtual en espa&ntilde;ol: 1er domingo del mes, 6 PM ET\n&#x2022; <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">Chat de duelo en l&iacute;nea</a>',quickReplies:['Spanish grief courses','Virtual groups in Spanish','Search the directory','Free grief resources']}}},

    /* SPIRITUAL / HOLISTIC */
    { id:'spiritual', patterns:[/spiritual/i,/holistic/i,/religious/i,/faith.?based/i,/cultural grief/i,/alternative/i,/energy heal/i,/mindful/i],
      response:function(){return{text:'GriefSupportDirectory.com includes dedicated categories for spiritual, cultural, and holistic grief support:\n\n&#x2022; <a href="'+CFG.spiritualUrl+'" target="_blank" rel="noopener">Spiritual, Cultural &amp; Holistic Grief Support</a> (in-person)\n&#x2022; <a href="'+CFG.onlineSpiritualUrl+'" target="_blank" rel="noopener">Online Spiritual, Cultural &amp; Holistic Grief</a>\n&#x2022; <a href="'+CFG.selfCareUrl+'" target="_blank" rel="noopener">Self-Care &amp; Grief (Feirg.com)</a> &mdash; grief yoga, meditation, art, and more\n\nGrief is deeply personal &mdash; whatever path feels right for you is valid.',quickReplies:['Search spiritual providers','Self-care & grief resources','Search the full directory','Free grief courses']}}},

    /* DEATHCARE / FUNERAL */
    { id:'deathcare', patterns:[/deathcare/i,/funeral/i,/burial/i,/cremation/i,/death doula/i,/end.?of.?life (planning|support)/i,/advance directive/i,/estate/i],
      response:function(){return{text:'GriefSupportDirectory.com includes providers specializing in deathcare and funeral support:\n\n&#x2022; <a href="'+CFG.deathcareUrl+'" target="_blank" rel="noopener">Deathcare &amp; Funeral Support</a> (in-person)\n&#x2022; <a href="'+CFG.onlineDeathcareUrl+'" target="_blank" rel="noopener">Online Deathcare Support</a>\n\nThese providers can help with end-of-life planning, funeral arrangements, death doula services, and bereavement support during and after the dying process.',quickReplies:['Deathcare & funeral providers','Online deathcare support','Search the directory','Free grief resources']}}},

    /* CHILD LOSS */
    { id:'child_loss', patterns:[/child loss/i,/lost (my )?(child|son|daughter|baby|infant)/i,/bereaved parent/i,/infant loss/i,/pregnancy loss/i,/miscarriage/i,/stillbirth/i,/\bsids\b/i],
      response:function(){return{text:'Losing a child is one of the most profound griefs a person can carry. You are not alone.\n\n&#x2022; <a href="'+CFG.compassionateFriendsUrl+'" target="_blank" rel="noopener">The Compassionate Friends</a> &mdash; national nonprofit for child loss: (877) 969-0010\n&#x2022; <a href="'+CFG.rMiscarriageUrl+'" target="_blank" rel="noopener">r/Miscarriage community</a> &mdash; 89,000+ members\n&#x2022; <a href="'+CFG.virtualGroupsUrl+'" target="_blank" rel="noopener">Child, Sibling &amp; Friend Loss Group</a> &mdash; Wednesdays 7 PM ET (free)\n&#x2022; <a href="'+CFG.peerGroupUrl+'" target="_blank" rel="noopener">Search peer grief support in the directory</a>\n&#x2022; Free <a href="'+CFG.freeCoursesUrl+'" target="_blank" rel="noopener">Child Loss MOOC at UGrief.com</a>',quickReplies:['Child loss support groups','Grief communities','Free grief courses','Search licensed therapists']}}},

    /* SUICIDE LOSS */
    { id:'suicide_loss', patterns:[/suicide loss/i,/lost to suicide/i,/died by suicide/i,/suicide survivor/i,/loss (from|after|by) suicide/i],
      response:function(){return{text:'Grief after losing someone to suicide carries a unique weight &mdash; questions that may never have answers, and feelings that are hard to name. You deserve compassionate support.\n\n&#x2022; <a href="'+CFG.afspUrl+'" target="_blank" rel="noopener">Alliance of Hope for Suicide Loss</a> &mdash; 34,200+ members, evidence-informed support\n&#x2022; <a href="https://www.afsp.org" target="_blank" rel="noopener">AFSP</a> &mdash; American Foundation for Suicide Prevention\n&#x2022; <a href="'+CFG.rSuicideLossUrl+'" target="_blank" rel="noopener">r/SuicideLossSupport</a> &mdash; 44,800+ members\n&#x2022; <a href="'+CFG.virtualGroupsUrl+'" target="_blank" rel="noopener">General All-Loss Group</a> via MyGriefAngels.org (free)\n&#x2022; Free <a href="'+CFG.freeCoursesUrl+'" target="_blank" rel="noopener">Suicide Loss MOOC at UGrief.com</a>\n\n<em>If you yourself are having thoughts of suicide, please call or text <strong>988</strong> immediately.</em>',quickReplies:['Suicide loss communities','Virtual support groups','Free grief courses','Search licensed therapists']}}},

    /* SPOUSE / PARTNER / WIDOW */
    { id:'spouse_loss', patterns:[/widow(er)?/i,/widowed/i,/lost (my )?(husband|wife|partner|spouse)/i,/(husband|wife|partner|spouse)\s+(died|passed|death)/i,/spousal loss/i,/partner loss/i],
      response:function(){return{text:'The loss of a partner reshapes every part of life. Your grief is real, and you deserve support.\n\n&#x2022; <a href="'+CFG.rWidowersUrl+'" target="_blank" rel="noopener">r/widowers community</a> &mdash; 58,300+ members\n&#x2022; <a href="'+CFG.widowWidowerUrl+'" target="_blank" rel="noopener">Widow/Widower Support Group</a> (Facebook) &mdash; 61,200+ members\n&#x2022; <a href="'+CFG.virtualGroupsUrl+'" target="_blank" rel="noopener">Spouse, Partner &amp; LGBTQIA+ Loss Group</a> &mdash; Wednesdays 8 PM ET (free)\n&#x2022; Free <a href="'+CFG.freeCoursesUrl+'" target="_blank" rel="noopener">Spousal/Partner Loss MOOC at UGrief.com</a>\n&#x2022; <a href="'+CFG.peerGroupUrl+'" target="_blank" rel="noopener">Search peer grief support in the directory</a>',quickReplies:['Widower communities','Virtual support groups','Search licensed therapists','Free grief courses']}}},

    /* SELF CARE */
    { id:'self_care', patterns:[/self.?care/i,/feirg/i,/grief yoga/i,/meditat/i,/coping/i,/healing (activity|practice|tool)/i,/wellness/i],
      response:function(){return{text:'<a href="'+CFG.selfCareUrl+'" target="_blank" rel="noopener">Feirg.com</a> &mdash; a free companion resource in the MyGriefAngels network &mdash; offers grief self-care tools:\n\n&#x2022; Grief yoga &amp; meditation\n&#x2022; Grief art &amp; creative expression\n&#x2022; Grief walking &amp; running\n&#x2022; Grief travel\n&#x2022; Healing through laughter\n&#x2022; Animal-assisted healing\n\n&#x2022; Visit: <a href="'+CFG.selfCareUrl+'" target="_blank" rel="noopener">Feirg.com &rarr;</a>\n&#x2022; Also: <a href="'+CFG.griefTechUrl+'" target="_blank" rel="noopener">GriefTech.com</a> &mdash; grief &amp; technology resources',quickReplies:['Visit Feirg.com','Free grief courses','Virtual support groups','Search the directory']}}},

    /* CONTACT */
    { id:'contact', patterns:[/contact/i,/get in touch/i,/reach out/i,/email/i,/support (ticket|request)/i,/\bhelp\b/i,/question/i],
      response:function(){return{text:'You can reach the GriefSupportDirectory.com team at:\n\n&#x2022; <a href="'+CFG.contactUrl+'" target="_blank" rel="noopener">Contact Us page &rarr;</a>\n\nFor technical support with your member listing:\n&#x2022; <a href="'+CFG.memberLoginUrl+'" target="_blank" rel="noopener">Member Login</a>\n&#x2022; Password Reset available on the login page\n\nFor grief support resources, I am here to help guide you right now.',quickReplies:['Search the directory','Join as a provider','Free grief resources','Upcoming events']}}},

    /* NEWSLETTER */
    { id:'newsletter', patterns:[/newsletter/i,/subscribe/i,/email list/i,/mailing list/i,/updates/i,/community updates/i],
      response:function(){return{text:'Stay connected with grief support news, resources, and community updates!\n\n&#x2022; <a href="'+CFG.newsletterUrl+'" target="_blank" rel="noopener">Subscribe to the GriefSupportDirectory.com newsletter &rarr;</a>\n&#x2022; <a href="'+CFG.articlesUrl+'" target="_blank" rel="noopener">Read community articles &rarr;</a>\n&#x2022; <a href="'+CFG.discussionsUrl+'" target="_blank" rel="noopener">Join the discussion board &rarr;</a>',quickReplies:['Subscribe to newsletter','Read articles','Join discussions','Upcoming events']}}},

    /* GRIEF FILM FEST */
    { id:'grief_fest', patterns:[/grieffest/i,/grief film/i,/film festival/i,/grief.*film/i,/film.*grief/i],
      response:function(){return{text:'<a href="'+CFG.griefFestUrl+'" target="_blank" rel="noopener">GriefFest.com</a> &mdash; the International Grief Film Festival &mdash; explores grief, love, loss, and healing through cinema. It is LGBTQ+-friendly and non-religious.\n\n&#x2022; Visit: <a href="'+CFG.griefFestUrl+'" target="_blank" rel="noopener">GriefFest.com &rarr;</a>',quickReplies:['Visit GriefFest','Grief tech resources','Free grief courses','Virtual support groups']}}},

    /* HELP MENU */
    { id:'help_menu', patterns:[/what can you (help|do)/i,/what (do you|can you) (offer|do)/i,/^help$/i,/menu/i,/options/i,/what.?s here/i,/where (do i|to) start/i],
      response:function(){return{text:'I\'m the guide for <a href="'+CFG.siteUrl+'" target="_blank" rel="noopener">GriefSupportDirectory.com</a> &mdash; here to help you find exactly the right support.\n\n<strong>I can help you:</strong>\n&#x2022; Search the directory for grief counselors, therapists, coaches &amp; groups &mdash; near you or online\n&#x2022; Find free virtual peer-led grief support groups\n&#x2022; Discover free grief courses (38+ MOOCs at UGrief.com)\n&#x2022; Browse grief communities with 1.2M+ members\n&#x2022; Read articles on The Gentle Path\n&#x2022; View upcoming grief support events\n&#x2022; Get listed as a grief support provider\n&#x2022; Find specialized resources (LGBTQ+, pet loss, Spanish, disabilities &amp; more)',quickReplies:['Search the directory','Free grief resources','Virtual support groups','Grief communities','Read articles','Get listed as a provider']}}},

    /* FAREWELL */
    { id:'farewell', patterns:[/^bye[\s!.]*$/i,/goodbye/i,/take care/i,/thank(s| you)/i,/see you/i,/good night/i,/farewell/i],
      response:function(){return{text:'Thank you for visiting <a href="'+CFG.siteUrl+'" target="_blank" rel="noopener">GriefSupportDirectory.com</a>. Wherever you are on your grief journey, you are not alone &mdash; and the right support is out there for you.\n\nTake gentle care of yourself.\n\n&#x2022; <a href="'+CFG.directoryUrl+'" target="_blank" rel="noopener">Search the directory anytime &rarr;</a>\n&#x2022; <a href="'+CFG.chatUrl+'" target="_blank" rel="noopener">Online grief chat community &rarr;</a>',quickReplies:[]}}},

    /* FALLBACK */
    { id:'fallback', patterns:[/.*/],
      response:function(){return{text:'Thank you for reaching out. I want to make sure I connect you with exactly the right support.\n\n<a href="'+CFG.siteUrl+'" target="_blank" rel="noopener">GriefSupportDirectory.com</a> is the top directory for grief support and mental health services providers &mdash; with free resources, virtual groups, grief communities, and articles too.\n\nCould you tell me a little more about what you are looking for? Or choose one of the options below.',quickReplies:['Search the directory','Free grief resources','Virtual support groups','Grief communities','Get listed as a provider','What is this directory?']}}}

  ]; // end INTENTS

  /* ============================================================
     WELCOME MESSAGE
     ============================================================ */
  var WELCOME = {
    text: 'Hello, and welcome to <a href="'+CFG.siteUrl+'" target="_blank" rel="noopener">GriefSupportDirectory.com</a> &mdash; the top directory for grief support and mental health services providers, brought to you by an affiliate of the award-winning nonprofit <a href="https://www.mygriefangels.org" target="_blank" rel="noopener">MyGriefAngels.org</a>.\n\nI can help you find grief counselors, therapists, support groups, free resources, grief communities, and much more &mdash; near you or online.\n\n<strong>How may I help you today?</strong>',
    quickReplies: ['Search the directory','Free grief resources','Online grief support groups','Grief counselors & therapists','Grief communities & discussions','Read articles','Upcoming grief events','Get listed as a provider']
  };

  /* ============================================================
     QUICK REPLY MAP
     ============================================================ */
  var QR = {
    'Search the directory':'search the directory',
    'Browse by category':'search the directory',
    'Search the full directory':'search the directory',
    'Free grief resources':'free grief resources',
    'Online grief support groups':'virtual grief support groups',
    'Virtual support groups':'virtual grief support groups',
    'Grief counselors & therapists':'find a therapist counselor grief',
    'Licensed therapists & counselors':'find a licensed therapist',
    'Grief coaches & counselors':'find a grief coach counselor',
    'Online licensed support':'online licensed clinical grief',
    'Peer & community support':'peer community grief support',
    'Peer & community directory':'peer community grief support',
    'Spiritual & holistic support':'spiritual holistic grief support',
    'Search spiritual providers':'spiritual holistic grief support',
    'Deathcare & funeral support':'deathcare funeral grief support',
    'Online grief support':'online grief support',
    'View all online providers':'online grief support',
    'Online grief chat':'online grief chat community',
    'Online grief chat community':'online grief chat community',
    'Grief communities':'grief discussions communities',
    'Grief communities & discussions':'grief discussions communities',
    'View all communities':'grief discussions communities',
    'Virtual grief support groups':'virtual grief support groups',
    'Free virtual support groups':'virtual grief support groups',
    'Holiday grief groups':'holiday grief',
    'All holiday groups':'holiday grief',
    'View all holiday groups':'holiday grief',
    'Upcoming grief events':'upcoming events calendar',
    'View upcoming events':'upcoming events calendar',
    'View events calendar':'upcoming events calendar',
    'Upcoming events calendar':'upcoming events calendar',
    'Read articles':'grief articles gentle path',
    'Read The Gentle Path articles':'grief articles gentle path',
    'Free grief courses':'free grief courses ugrief',
    'Browse all free courses':'free grief courses ugrief',
    'Free courses on grief professionals':'free grief courses ugrief',
    'Get listed as a provider':'get listed join directory provider',
    'Join as a free member':'get listed join directory provider',
    'How it works':'how does the directory work',
    'Contact us':'contact griefsupportdirectory',
    'Subscribe to newsletter':'newsletter subscribe',
    'Read community articles':'grief articles gentle path',
    'Join discussions':'grief discussions communities',
    'What is this directory?':'what is this directory',
    'LGBTQ+ grief resources':'lgbtq grief support',
    'LGBTQ+ grief support':'lgbtq grief support',
    'Spanish grief resources':'spanish grief support',
    'Spanish grief courses':'spanish grief support',
    'Virtual groups in Spanish':'spanish grief support',
    'Pet loss resources':'pet loss grief',
    'Pet loss support':'pet loss grief',
    'Grief communities':'grief discussions communities',
    'Child loss support groups':'child loss grief',
    'Suicide loss communities':'suicide loss grief',
    'Widower communities':'spouse partner loss grief',
    'Self-care & grief resources':'self care grief feirg',
    'Visit Feirg.com':'self care grief feirg',
    'Visit GriefFest':'grief film festival grieffest',
    'Grief tech resources':'grief tech grieftech',
    'Search licensed therapists':'find a therapist counselor grief',
    'Deathcare & funeral providers':'deathcare funeral grief support',
    'Online deathcare support':'deathcare funeral grief support'
  };

  /* ============================================================
     INTENT MATCHING
     ============================================================ */
  function match(text) {
    var t = (text || '').toLowerCase().trim();
    for (var i = 0; i < INTENTS.length; i++) {
      var intent = INTENTS[i];
      for (var j = 0; j < intent.patterns.length; j++) {
        if (intent.patterns[j].test(t)) return intent;
      }
    }
    return INTENTS[INTENTS.length - 1];
  }

  /* ============================================================
     UI STATE
     ============================================================ */
  var isOpen = false, hasGreeted = false, msgs = null, inp = null;
  function $(id) { return document.getElementById(id); }

  function buildWidget() {
    msgs = $('gsd-msgs'); inp = $('gsd-input');
    if (!$('gsd-launcher')) return;
    $('gsd-launcher').addEventListener('click', function () { isOpen ? close() : open(); });
    $('gsd-bubble').addEventListener('click', function (e) {
      if (e.target === $('gsd-bc') || $('gsd-bc').contains(e.target)) return;
      $('gsd-bubble').style.display = 'none'; open();
    });
    $('gsd-bc').addEventListener('click', function (e) {
      e.stopPropagation();
      $('gsd-bubble').style.display = 'none';
      sessionStorage.setItem('gsd_bd', '1');
    });
    $('gsd-cb').addEventListener('click', close);
    $('gsd-sb').addEventListener('click', send);
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') send(); });
    if (!sessionStorage.getItem('gsd_bd') && !sessionStorage.getItem('gsd_co')) {
      setTimeout(function () { if (!isOpen) { $('gsd-bubble').style.display = 'block'; showBadge(); } }, CFG.proactiveDelay);
    }
  }

  function open() {
    isOpen = true;
    $('gsd-window').classList.add('gsd-open');
    $('gsd-window').setAttribute('aria-hidden', 'false');
    hideBadge(); $('gsd-bubble').style.display = 'none';
    sessionStorage.setItem('gsd_co', '1');
    if (!hasGreeted) { hasGreeted = true; setTimeout(function () { addBot(WELCOME.text, WELCOME.quickReplies, false); }, 420); }
    setTimeout(function () { if (inp) inp.focus(); }, 380);
  }

  function close() {
    isOpen = false;
    $('gsd-window').classList.remove('gsd-open');
    $('gsd-window').setAttribute('aria-hidden', 'true');
  }

  function showBadge() { var b = $('gsd-badge'); if (b) b.style.display = 'flex'; }
  function hideBadge() { var b = $('gsd-badge'); if (b) b.style.display = 'none'; }

  function send() {
    var txt = (inp.value || '').trim(); if (!txt) return;
    addUser(txt); inp.value = '';
    var intent = match(txt), tEl = showTyping();
    var delay = CFG.typingDelayMin + Math.random() * (CFG.typingDelayMax - CFG.typingDelayMin);
    setTimeout(function () { rmTyping(tEl); var r = intent.response(); addBot(r.text, r.quickReplies || [], r.crisis || false); }, delay);
  }

  function addUser(txt) {
    var w = document.createElement('div'); w.className = 'gsd-wrap usr';
    var b = document.createElement('div'); b.className = 'gsd-bbl usr'; b.textContent = txt;
    w.appendChild(b); msgs.appendChild(w); scroll();
  }

  var AVSVG = '<svg width="16" height="16" viewBox="0 0 40 40" fill="none"><rect x="7" y="7" width="16" height="22" rx="2" fill="rgba(255,255,255,.88)"/><circle cx="30" cy="30" r="7" fill="rgba(255,255,255,.75)"/><path d="M27.5 30l2 2 4-4" stroke="#1B5E8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function addBot(html, qrs, crisis) {
    var w = document.createElement('div'); w.className = 'gsd-wrap bot';
    var av = document.createElement('div'); av.className = 'gsd-av2'; av.setAttribute('aria-hidden', 'true'); av.innerHTML = AVSVG;
    var col = document.createElement('div'); col.className = 'gsd-col';
    var b = document.createElement('div'); b.className = 'gsd-bbl bot' + (crisis ? ' crs' : ''); b.innerHTML = (html || '').replace(/\n/g, '<br>');
    col.appendChild(b);
    if (qrs && qrs.length) {
      var row = document.createElement('div'); row.className = 'gsd-qrow'; row.setAttribute('role', 'group'); row.setAttribute('aria-label', 'Suggested options');
      qrs.forEach(function (lbl) {
        var btn = document.createElement('button'); btn.className = 'gsd-qbtn'; btn.textContent = lbl;
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
    var w = document.createElement('div'); w.className = 'gsd-wrap bot'; w.id = 'gsd-typing';
    var av = document.createElement('div'); av.className = 'gsd-av2'; av.setAttribute('aria-hidden', 'true'); av.innerHTML = AVSVG;
    var b = document.createElement('div'); b.className = 'gsd-bbl bot'; b.setAttribute('role', 'status'); b.setAttribute('aria-label', 'Composing response');
    var d = document.createElement('div'); d.className = 'gsd-dots'; d.innerHTML = '<span></span><span></span><span></span>';
    b.appendChild(d); w.appendChild(av); w.appendChild(b); msgs.appendChild(w); scroll(); return w;
  }

  function rmTyping(el) { if (el && el.parentNode) el.parentNode.removeChild(el); }
  function scroll() { if (msgs) setTimeout(function () { msgs.scrollTop = msgs.scrollHeight; }, 50); }

  /* ============================================================
     INIT
     ============================================================ */
  function init() {
    injectStyles();
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { injectHTML(); buildWidget(); });
    } else {
      injectHTML(); buildWidget();
    }
  }

  init();

})();
