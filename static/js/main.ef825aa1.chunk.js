(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{178:function(e,t,n){e.exports=n(379)},183:function(e,t,n){},184:function(e,t,n){},379:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(56),i=n.n(r),s=(n(183),n(7)),c=n(13),l=n(9),u=n(8),d=n(10),p=(n(184),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getData=function(){var e=n.props.event.yes_rsvp_count;return[{name:"Reserved",value:e},{name:"Spots Left",value:n.props.event.rsvp_limit-e}]},n.state={filteredevents:[],showDetails:!1},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"detailHide",value:function(){this.setState({showDetails:!1})}},{key:"makeModal",value:function(e){this.props.logFunc(e)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"event",onClick:function(){return e.makeModal(e.props.event.id)}},o.a.createElement("h2",{className:"event-name"},this.props.event.name))}}]),t}(a.Component)),h=function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onChangeSelectedEvent",value:function(e){this.props.changeSelEv(e)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"EventList"},this.props.events.map((function(t){return o.a.createElement("div",{className:"event-holder",key:t.id},o.a.createElement(p,{event:t,logFunc:function(t){return e.onChangeSelectedEvent(t)}}))})))}}]),t}(a.Component),m=n(11),f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getData=function(){var e=n.props.selectedModalEvent.yes_rsvp_count;return[{name:"Reserved",value:e},{name:"Spots Left",value:n.props.selectedModalEvent.rsvp_limit-e}]},n.closeIt=function(e){"modal"===e.target.className&&n.props.close()},n.state={events:[],showDetails:!1,selectedEvent:""},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"insertingHTML",value:function(){var e=this.props.selectedModalEvent.description;return void 0!==e?{__html:e}:{__html:"<p>n/a</p>"}}},{key:"render",value:function(){var e=this,t=this.props.selectedModalEvent,n=["#00465d","#207996"];return 0!==t.length?o.a.createElement("div",{className:"modal",onClick:function(t){return e.closeIt(t)}},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"the-x",onClick:function(){return e.props.close()}},"X"),o.a.createElement("div",{className:"modal-img"}),o.a.createElement("div",{className:"modal-event-info"},o.a.createElement("h1",{className:"modal-event-name"},this.props.selectedModalEvent.name),o.a.createElement("div",{className:"modal-event-location"},this.props.selectedModalEvent.group.localized_location),o.a.createElement("div",{className:"modal-event-date"},this.props.selectedModalEvent.local_date),o.a.createElement("div",{className:"the-details"},t.yes_rsvp_count&&t.rsvp_limit?o.a.createElement(m.g,{height:200},o.a.createElement(m.f,{width:200,height:200},o.a.createElement(m.e,{data:this.getData(),dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",innerRadius:60,outerRadius:80,label:!0},this.getData().map((function(e,t){return o.a.createElement(m.b,{key:"cell-".concat(t),fill:n[t]})}))),o.a.createElement(m.j,null),o.a.createElement(m.c,{verticalAlign:"top",height:36},o.a.createElement(m.d,{name:"Attending",type:"monotone",dataKey:"rsvped",stroke:"#8884d8"}),o.a.createElement(m.d,{name:"Spots Open",type:"monotone",dataKey:"openings",stroke:"#82ca9d"})))):null)),o.a.createElement("div",{className:"modal-event-description"},o.a.createElement("h3",null,"Description"),o.a.createElement("div",{className:"modal-the-description",dangerouslySetInnerHTML:this.insertingHTML()})))):null}}]),t}(a.Component),v=n(26),g=n.n(v),y=n(60),b={city:{id:1007700,city:"M\xfcnchen",lat:48.14,lon:11.58,state:"",country:"de",zip:"meetup3",member_count:1257},events:[{local_time:"15:00",local_date:"2019-10-27",link:"https://www.meetup.com/Djembe-and-Percussion-Fun-Munchen/events/lqqtbryznbkc/",visibility:"public_limited",group:{created:1376421848e3,name:"Djembe and Percussion Fun Muenchen",id:9795322,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Djembe-and-Percussion-Fun-Munchen",who:"Munich Percussionists",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},waitlist_count:0,yes_rsvp_count:1,duration:144e5,time:15721848e5,utc_offset:36e5,name:"Sonniger Sonntag - E-Garten",id:"lqqtbryznbkc"},{local_time:"19:00",local_date:"2019-10-31",link:"https://www.meetup.com/Djembe-and-Percussion-Fun-Munchen/events/265750801/",visibility:"public_limited",group:{created:1376421848e3,name:"Djembe and Percussion Fun Muenchen",id:9795322,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Djembe-and-Percussion-Fun-Munchen",who:"Munich Percussionists",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},waitlist_count:0,yes_rsvp_count:1,duration:72e5,time:15725448e5,utc_offset:36e5,name:"Neue Regeln f\xfcr neue Mitglieder",id:"265750801"},{created:1564129835e3,duration:72e5,id:"qbmqfryznbjc",name:"Shut Up & Write!\u2122 Munich",rsvp_limit:15,date_in_series_pattern:!1,status:"upcoming",time:1572075e6,local_date:"2019-10-26",local_time:"09:30",rsvp_open_offset:"PT163H30M",updated:1564129835e3,utc_offset:72e5,waitlist_count:11,yes_rsvp_count:15,venue:{id:25966475,name:"Bellevue M\xfcnchen",lat:48.160736083984375,lon:11.563915252685547,repinned:!1,address_1:"Schlei\xdfheimer Str. 142a",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1532540208e3,name:"Shut Up & Write!\xae Munich",id:29351354,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"shutupandwritemunich",who:"Writers",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/shutupandwritemunich/events/qbmqfryznbjc/",description:"<p>Join us for an hour of writing! We\u2019ve discovered that it\u2019s strikingly helpful to write with other writers. See if it\u2019s true for you at 09:30 on Saturday.</p> <p>Be it a book, blog, script, essay, dissertation, resume, melody, poem or just plain work stuff, you are invited to write it with us. No one will see what you've written or give you unsolicited advice. Instead of just thinking about writing, come and get some real writing done.<br/>SCHEDULE:<br/>09:30 - SESSION 1: quick intros.<br/>09:45 - timer starts: write for 1 hour.<br/>10:45 - chat / take off / keep writing for another timed hour (starting at ~11:15).</p> <p>OPTIONAL SOCIALIZING happens after we're done with the first/second writing hour. Writing is very solitary. Connecting (and sometimes even commiserating) with other writers is a cool thing.<br/>BEING LATE IS OKAY: just show up and get settled, then check-in with me after the session. (I\u2019ll be the person with the Shut Up &amp; Write! sign.) If you were on time, please be willing to make room for the friendly latecomer.<br/>Happy writing and I look forward to seeing you!</p> <p>What Should I Bring?<br/>Whatever you need to be able to write!<br/>Bring earbuds/earplugs if you want to block the cafe\u2019s overhead music or the occasional conversation by other patrons.<br/>There should be enough sockets to charge your devices, but make sure to charge them just in case! :)</p> <p>Other Important Details:<br/>GUIDELINES: Please thank our hosts by purchasing something.<br/>FUTURE LOCATIONS: If you have ideas about where and when we should meet, please share them! :)<br/>If you're on the waiting list, but still really really want to come, feel free to drop by\u2009\u2014\u2009but in case we end up being too large of a group to manage, or we don't find enough free seats, the priority is on the folks with the 'going' RSVPs!</p> ",how_to_find_us:"Look for the Shut up & Write! sign or ask for Arnaud ",visibility:"public",pro_is_email_shared:!1,member_pay_fee:!1},{local_time:"15:00",local_date:"2019-11-10",link:"https://www.meetup.com/Monthly-Creative-Jam/events/265881572/",visibility:"public_limited",group:{created:1571595318e3,name:"Monthly Creative Jam in Munich",id:32916012,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Monthly-Creative-Jam",who:"Jammers",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},waitlist_count:0,yes_rsvp_count:2,duration:108e5,time:15733944e5,utc_offset:36e5,name:"1st jam trial",id:"265881572"},{created:1567509854e3,duration:108e5,fee:{accepts:"cash",amount:5,currency:"EUR",description:"",label:"Price",required:!1},id:"264518852",name:"Handlettering Workshop for Beginners",rsvp_limit:20,date_in_series_pattern:!1,status:"upcoming",time:1573308e6,local_date:"2019-11-09",local_time:"15:00",updated:1567754879e3,utc_offset:36e5,waitlist_count:26,yes_rsvp_count:20,venue:{id:26506384,name:"Biedersteiner Str. 30",lat:48.16643142700195,lon:11.596017837524414,repinned:!1,address_1:"Biedersteiner Str. 30",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:154868324e4,name:"Munich Art Meetup",id:31031871,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munich-Art-Meetup",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Munich-Art-Meetup/events/264518852/",description:"<p>FOR WHO:<br/>Everyone interested in learning Handlettering</p> <p>THE WORKSHOP:<br/>3pm - 5pm<br/>- Introduction round<br/>- What is handlettering?<br/>- Understanding the principles &amp; Warm up<br/>- Basic strokes<br/>- Composition of letters<br/>- Writing the alphabet</p> <p>5pm<br/>Final project: write your name and a phrase</p> <p>Starter Kit: 5\u20ac<br/>It includes the basic materials: brush pen, guide, paper</p> <p>Since there are so many different tools for handlettering, it is quite confusing for a beginner to figure out what to get. That's why we decided to provide a starter kit for each attendee. The event itself is FREE, the 5\u20ac just cover the starter kit.</p> <p>PLEASE BRING:<br/>- Pencil (preferably H)<br/>- Eraser<br/>- Ruler<br/>- Any brush pen that you have at home and want to try (optional)<br/>- Color paper or cardstock to write a phrase on it (optional)</p> <p>LOCATION:<br/>Biedersteiner Wohnheim, Biedersteiner Str. 30, 80805 M\xfcnchen<br/>Enter the building, turn right and you'll find us!</p> <p>INSTRUCTOR:<br/>Our teacher will be the wonderful Adriana, who has been practising handlettering for a long time. She will show us the basics and guide us to letter our own compositions!<br/>Feel free to check out her work on Instagram: @letras_meigas</p> <p>We are looking forward to handletter with you!</p> ",how_to_find_us:"Enter the building, turn right and you'll find us!",visibility:"public",member_pay_fee:!1},{local_time:"19:30",local_date:"2019-11-16",link:"https://www.meetup.com/Munchen-Indie-Meetup/events/264110267/",visibility:"public_limited",group:{created:149885531e4,name:"M\xfcnchen Indie Meetup",id:24765976,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munchen-Indie-Meetup",who:"Indies",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},waitlist_count:0,yes_rsvp_count:3,duration:108e5,time:1573929e6,utc_offset:36e5,name:"Deerhunter & Black Lips",id:"264110267"},{created:1571688273e3,duration:72e5,fee:{accepts:"paypal",amount:5,currency:"EUR",description:"",label:"Price",required:!0},id:"265854972",name:"Music in the Round (Take 1) ",rsvp_limit:10,date_in_series_pattern:!1,status:"upcoming",time:15724584e5,local_date:"2019-10-30",local_time:"19:00",updated:1571756077e3,utc_offset:36e5,waitlist_count:0,yes_rsvp_count:7,venue:{id:26377511,name:"creaffective GmbH",lat:48.117469787597656,lon:11.611420631408691,repinned:!0,address_1:"Rosenheimer Str. 189",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:1407016888e3,name:"Amateur Musicians Munich",id:16147572,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"MusicLoversMeetup-Munich",who:"Musicians",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/MusicLoversMeetup-Munich/events/265854972/",description:"<p>Do you enjoy singing and playing an acoustic instrument? Do you have songs (original or covers) that you would like to practice live in a small group setting? Interested in listening and networking with other amateur musicians?</p> <p>Music in the Round is a 2-hour acoustic music meet-up of amateur musicians (10 people maximum). We will rotate around in a circle with each musician playing/singing one song of their choice. We will continue round and round until we run out of songs or run out of time. The goals are to build confidence performing in front of others, to let your voice/playing be heard, and most of all to have a good time with others!<br/>Please join us for the Music in the Round (Take 1) on Wednesday, 30 October.</p> <p>Please take note that there are no musical instruments at the location, other than what people bring along. So ideally bring your own (acoustic) instrument. If you have a keyboard or stage piano that needs electricity, that is not a problem. But since the workshop space we are using is located in a residential area with neighbours, we can have no amplification or percussive instruments. If you are unsure what you can or cannot bring along, feel free to contact me.</p> <p>Participation will cost 5 Euros, mostly because we only have 10 spaces and want to make sure that only people serious about the event sign up. We will also provide beverages and small snacks at the event.</p> ",how_to_find_us:"Ring at the door at the corner of Rosenheimer Stra\xdfe and Wollanistra\xdfe, not the entrance to the apartment building.",visibility:"public",member_pay_fee:!1},{created:1570533165e3,duration:108e5,id:"265499837",name:"Coffee and Portrait Sketching",rsvp_limit:15,date_in_series_pattern:!1,status:"upcoming",time:15721812e5,local_date:"2019-10-27",local_time:"14:00",updated:1570533165e3,utc_offset:36e5,waitlist_count:22,yes_rsvp_count:15,venue:{id:26173236,name:"The Tribeca Cafe",lat:48.16404342651367,lon:11.530770301818848,repinned:!0,address_1:"Klugstra\xdfe 134",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},group:{created:154868324e4,name:"Munich Art Meetup",id:31031871,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"Munich-Art-Meetup",who:"Members",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Munich-Art-Meetup/events/265499837/",description:"<p>Are you interested in improving your art and meet like-minded people?<br/>Whether you are a beginner or a professional who is willing to share some tips- all levels are welcome :)</p> <p>What we'll do:<br/>- Meet at the Tribeca Cafe, have a coffee and chat<br/>- We'll do some sketching warm-ups (1,2 and 5 min sketches)<br/>- Volunteers of the group pose for 15 min each, so we can sketch their face<br/>- Afterwards, we'll exchange art and share feedback and tips with each other</p> <p>Please bring:<br/>- Your sketchbook/paper<br/>- A pencil or the medium you prefer<br/>Since we will be drawing in a cafe, you should avoid mediums like oil &amp; acryl.</p> <p>BE NICE TO THE PEOPLE ON THE WAITING LIST<br/>Please make sure to cancel your reservation as soon as possible, in case you can't make it, so others have a chance to join!<br/>If you don't cancel your reservation and don't show up, I have to block you from future events :(</p> ",how_to_find_us:"I'll reserve a table for , so just ask the waiter or look for a happy group with sketchbooks and pencils :) ",visibility:"public",member_pay_fee:!1}]},E=n(61),w=n.n(E);function _(){return(_=Object(y.a)(g.a.mark((function e(t){var n,a,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M();case 2:if(!(n=e.sent)){e.next=9;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=7,w.a.get(a);case 7:return o=e.sent,e.abrupt("return",o.data);case 9:return e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t,n){return S.apply(this,arguments)}function S(){return(S=Object(y.a)(g.a.mark((function e(t,n,a){var o,r,i,s,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",b);case 2:if(navigator.onLine){e.next=5;break}return o=localStorage.getItem("lastDataList"),e.abrupt("return",JSON.parse(o));case 5:return e.next=7,M();case 7:if(!(r=e.sent)){e.next=18;break}return i="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+r,t&&n&&(i+="&lat="+t+"&lon="+n),a&&(i+="&page="+a),e.next=14,w.a.get(i);case 14:return s=e.sent,(c=s.data).length&&localStorage.setItem("lastDataList",JSON.stringify(c)),e.abrupt("return",c);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){var e=localStorage.getItem("access_token");if(!e){var t=new URLSearchParams(window.location.search).get("code");return t?j("get",t):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=mgee29biraftq19o00oeerh990&response_type=code&redirect_uri=https://the-gaffer-5.github.io/meetup/",null)}var n=localStorage.getItem("last_saved_time");return e&&Date.now()-n<36e5?e:j("renew",localStorage.getItem("refresh_token"))}function j(e,t){return O.apply(this,arguments)}function O(){return(O=Object(y.a)(g.a.mark((function e(t,n){var a,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://3p32az0goa.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://3p32az0goa.execute-api.us-east-2.amazonaws.com/dev/api/refresh/"+n),e.next=3,w.a.get(a);case 3:return o=e.sent,localStorage.setItem("access_token",o.data.access_token),localStorage.setItem("refresh_token",o.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",o.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getStyle=function(){return{color:n.color}},n.color=null,n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Alert"},o.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),t}(a.Component),I=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).color="blue",n}return Object(d.a)(t,e),t}(N),C=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).color="red",n}return Object(d.a)(t,e),t}(N),D=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).color="yellow",n}return Object(d.a)(t,e),t}(N),x=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",suggestions:[],infoText:""},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t}),function(e){return _.apply(this,arguments)}(t).then((function(e){n.setState({suggestions:e}),t&&0===e.length?n.setState({infoText:"We cannot find the city you are looking for!"}):n.setState({infoText:""})}))},n.handleItemClicked=function(e,t,a){n.setState({query:e,suggestions:[]}),n.props.updateEvents(t,a)},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"CitySearch"},o.a.createElement(I,{text:this.state.infoText}),o.a.createElement("input",{type:"text",className:"city-searchbar",placeholder:"City",value:this.state.query,onChange:this.handleInputChanged}),o.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return o.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),t}(a.Component),A=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={numberOfEvents:500,infoText:""},n.handleInputChanged=function(e){var t=e.target.value;n.setState({numberOfEvents:t}),n.props.updateEvents(null,null,t),t<=0?n.setState({infoText:"Must show atleast 1 event"}):n.setState({infoText:""})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"numberOfEventsClass"},o.a.createElement(C,{text:this.state.infoText}),o.a.createElement("h5",null,"Number of Events Shown"),o.a.createElement("input",{type:"number",className:"numberOfEvents_entered",value:this.state.numberOfEvents,onChange:this.handleInputChanged,placeholder:"500"}))}}]),t}(a.Component),P=n(158),T=n.n(P),W=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={events:[],filteredEvents:[],city:[],lat:null,lon:null,page:null,onlineStatus:"",selectedEventId:"",modalEvent:[],miles:50},n.connectAlert=function(){!1===navigator.onLine?n.setState({onlineStatus:"You're currently offline!"}):n.setState({onlineStatus:""})},n.updateEvents=function(e,t,a){e&&t?k(e,t,n.state.page).then((function(a){n.setState({events:a.events,city:a.city,lat:e,lon:t,miles:50}),n.setDistance()})):a?k(n.state.lat,n.state.lon,a).then((function(e){n.setState({events:e.events,city:e.city,page:a,miles:50}),n.setDistance()})):k(n.state.lat,n.state.lon,a).then((function(e){n.setState({events:e.events,city:e.city,miles:50}),n.setDistance()}))},n.countEventsOnADate=function(e){for(var t=0,a=0;a<n.state.events.length;a+=1)n.state.events[a].local_date===e&&(t+=1);return t},n.getData=function(){for(var e=[],t=T()(),a=0;a<7;a+=1){t.add(1,"days");var o=t.format("YYYY-MM-DD"),r=n.countEventsOnADate(o);e.push({date:o,number:r})}return e},n.openPopup=function(e){document.getElementById("popup-container").style.display="block"},n.closePopup=function(e){"popup-container"!==e.target.id&&"mile-list-item"!==e.target.className||(document.getElementById("popup-container").style.display="none")},n.openSearchPopup=function(e){document.getElementById("search-popup-container").style.display="block",console.log(n.state.city.country.length)},n.closeSearchPopup=function(e){"search-popup-container"===e.target.id&&(document.getElementById("search-popup-container").style.display="none")},n.setDistance=function(){n.setState({filteredEvents:[]});var e=[];n.state.events.forEach((function(t){t.group.lat<n.state.lat+.72&&t.group.lat>n.state.lat-.72&&t.group.lon<n.state.lon+.72&&t.group.lon>n.state.lon-.72&&e.push(t)})),n.setState({filteredEvents:e}),console.log("Filtered Events: "+n.state.filteredEvents)},n.changeDistance=function(e){var t=e.target.id;if(n.setState({miles:t}),"2"===e.target.id){n.setState({filteredEvents:[]});var a=[];n.state.events.forEach((function(e){e.group.lat<n.state.lat+.02&&e.group.lat>n.state.lat-.02&&e.group.lon<n.state.lon+.02&&e.group.lon>n.state.lon-.02&&a.push(e)})),n.setState({filteredEvents:a}),console.log(n.state.filteredEvents)}if("5"===e.target.id){n.setState({filteredEvents:[]});var o=[];n.state.events.forEach((function(e){e.group.lat<n.state.lat+.07&&e.group.lat>n.state.lat-.07&&e.group.lon<n.state.lon+.07&&e.group.lon>n.state.lon-.07&&o.push(e)})),n.setState({filteredEvents:o}),console.log(n.state.filteredEvents)}if("10"===e.target.id){n.setState({filteredEvents:[]});var r=[];n.state.events.forEach((function(e){e.group.lat<n.state.lat+.14&&e.group.lat>n.state.lat-.14&&e.group.lon<n.state.lon+.14&&e.group.lon>n.state.lon-.14&&r.push(e)})),n.setState({filteredEvents:r}),console.log(n.state.filteredEvents)}if("25"===e.target.id){n.setState({filteredEvents:[]});var i=[];n.state.events.forEach((function(e){e.group.lat<n.state.lat+.36&&e.group.lat>n.state.lat-.36&&e.group.lon<n.state.lon+.36&&e.group.lon>n.state.lon-.36&&i.push(e)})),n.setState({filteredEvents:i}),console.log(n.state.filteredEvents)}if("50"===e.target.id){n.setState({filteredEvents:[]});var s=[];n.state.events.forEach((function(e){e.group.lat<n.state.lat+.72&&e.group.lat>n.state.lat-.72&&e.group.lon<n.state.lon+.72&&e.group.lon>n.state.lon-.72&&s.push(e)})),n.setState({filteredEvents:s}),console.log(n.state.filteredEvents)}if("100"===e.target.id){n.setState({filteredEvents:[]});var c=[];n.state.events.forEach((function(e){e.group.lat<n.state.lat+1.44&&e.group.lat>n.state.lat-1.44&&e.group.lon<n.state.lon+1.44&&e.group.lon>n.state.lon-1.44&&c.push(e)})),n.setState({filteredEvents:c}),console.log(n.state.filteredEvents)}},n.changeSelectedEvent=function(e){n.setState({selectedEventId:e}),n.state.events.forEach((function(t){e===t.id&&n.setState({modalEvent:t})}))},n.closeModal=function(){n.setState({modalEvent:[]})},n.openChart=function(){document.getElementById("chart-modal-container").style.display="block"},n.closeChart=function(){document.getElementById("chart-modal-container").style.display="none"},n.closeChartModal=function(e){"chart-modal-container"===e.target.id&&(document.getElementById("chart-modal-container").style.display="none")},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;k().then((function(t){e.setState({events:t.events,city:t.city,lat:t.city.lat,lon:t.city.lon}),e.setDistance()})),window.addEventListener("online",this.connectAlert())}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"top-header"}),o.a.createElement("h1",{className:"next-header"},"Find your next event"),o.a.createElement("p",{className:"how-many-events"},this.state.events.length," events near you"),o.a.createElement("div",{className:"search-area"},o.a.createElement(x,{className:"city-search",updateEvents:this.updateEvents}),o.a.createElement("div",{className:"next-to-search"},"within ",o.a.createElement("div",{className:"miles",onClick:function(t){return e.openPopup(t)}},this.state.miles," miles")," of ",o.a.createElement("div",{className:"city",onClick:function(t){return e.openSearchPopup(t)}},this.state.city.city,", ",""===this.state.city.state?this.state.city.country:this.state.city.state)),o.a.createElement("div",{className:"chart-button",onClick:function(){return e.openChart()}},"Events this week")),o.a.createElement("div",{className:"popup-container",id:"popup-container",onClick:function(t){return e.closePopup(t)}},o.a.createElement("div",{className:"miles-popup",id:"miles-popup"},o.a.createElement("div",{className:"the-triangle"}),o.a.createElement("div",{id:"2",className:"mile-list-item",onClick:function(t){return e.changeDistance(t)}},"2 miles"),o.a.createElement("div",{id:"5",className:"mile-list-item",onClick:function(t){return e.changeDistance(t)}},"5 miles"),o.a.createElement("div",{id:"10",className:"mile-list-item",onClick:function(t){return e.changeDistance(t)}},"10 miles"),o.a.createElement("div",{id:"25",className:"mile-list-item",onClick:function(t){return e.changeDistance(t)}},"25 miles"),o.a.createElement("div",{id:"50",className:"mile-list-item",onClick:function(t){return e.changeDistance(t)}},"50 miles"),o.a.createElement("div",{id:"100",className:"mile-list-item",onClick:function(t){return e.changeDistance(t)}},"100 miles"))),o.a.createElement("div",{className:"search-popup-container",id:"search-popup-container",onClick:function(t){return e.closeSearchPopup(t)}},o.a.createElement("div",{className:"search-the-triangle"}),o.a.createElement("div",{className:"search-popup",id:"search-popup"},o.a.createElement(x,{className:"city-search-popup",updateEvents:this.updateEvents}))),o.a.createElement("div",{className:"chart-modal-container",id:"chart-modal-container",onClick:function(t){return e.closeChartModal(t)}},o.a.createElement("div",{className:"chart-modal"},o.a.createElement("div",{className:"close-modal-x",onClick:function(){return e.closeChart()}},"X"),o.a.createElement("h1",{className:"modal-title"},"Events per day"),o.a.createElement(m.g,{height:400},o.a.createElement(m.i,{className:"the-chart",margin:{top:20,right:20,bottom:20,left:20}},o.a.createElement(m.a,null),o.a.createElement(m.k,{type:"category",dataKey:"date",name:"date"}),o.a.createElement(m.l,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),o.a.createElement(m.j,{cursor:{strokeDasharray:"3 3"}}),o.a.createElement(m.h,{data:this.getData(),fill:"#8884d8"}))))),o.a.createElement(D,{text:this.state.onlineStatus}),o.a.createElement(h,{events:this.state.filteredEvents,changeSelEv:function(t){return e.changeSelectedEvent(t)}}),o.a.createElement(f,{selectedModalEvent:this.state.modalEvent,selectedEventId:this.state.selectedEventId,close:function(){return e.closeModal()}}),o.a.createElement(A,{updateEvents:this.updateEvents}))}}]),t}(a.Component),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var L=n(159);i.a.render(o.a.createElement(W,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetup",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetup","/service-worker.js");B?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):z(t,e)}))}}(),L.config("bfc2b9e94bd643d488e6d08c45c0bcff").install()}},[[178,1,2]]]);
//# sourceMappingURL=main.ef825aa1.chunk.js.map