var data= {
    chatinit:{
        title: ["Hello there.  <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","How can we help you?"],
        options: ["ResearchInstitute","Courses","Resources","OurTeam", "ContactUs"]
    },
    researchinstitute: {
        title:["Please select category"],
        options:['IISC','ISI','CMI','CEBS'],
        url : {
            more:"https://www.sciastra.com/iisc-indian-institute-of-science/",
            link:["https://www.sciastra.com/iisc-indian-institute-of-science/","https://www.sciastra.com/isi-indian-statistical-institute/", "https://www.sciastra.com/cmi-chennai-mathematical-institute/","https://www.sciastra.com/cebs-center-for-excellence-in-basic-sciences/"],
        }
    },
    
    courses: {
        title:["Our Courses"],
        options:["ISI & CMI 2024 Preparation Guide","IAT 2024 Preparation Guide","NEST 2024 Preparation Guide"],
        url : {
            more:"https://www.sciastra.com/courses/",
            link:["https://voaaf.courses.store/413438?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp","https://voaaf.courses.store/413431?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp","https://voaaf.courses.store/413433?utm_source%3Dother%26utm_medium%3Dtutor-course-referral%26utm_campaign%3Dcourse-overview-webapp"]
        }
    },
    resources: {
        title:["Our resouses"],
        options:["Blogs","Material","Web Stories"],
        url : {
            link:["https://www.sciastra.com/blog/", "https://www.sciastra.com/materials/", "https://www.sciastra.com/blog/web-stories/"]
            
        }
    },
    ourteam: {
        title:["Our Team"],
        options:['Mission', 'Team', "Book a session"],
        url : {
            link:["https://www.sciastra.com/mission/","https://www.sciastra.com/teams/","https://www.sciastra.com/bookSession/"],
        }
    },
    contactus: {
        title:["Connect with Us"],
        options:['Address','Email Us Now'],
        url : {
           
            link:["https://www.google.com/maps/place/ODM+Global+School/@20.361246,85.799734,14z/data=!4m6!3m5!1s0x3a190f7970870033:0xfd4793c045cc95d9!8m2!3d20.3769734!4d85.8059089!16s%2Fg%2F11rdc4t0x5?hl=en&entry=ttu","support@sciastra.com"]
        }
    },
    
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}