export default function openAcssRibbionBar() {
  var acssDesignBarLocked = false;
  var currentElement = null;
  var acssInputField;
  var infoMsg;
  var infoEle;
  function acssDraggable(element) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (document.getElementById(element.id + "header")) {
      document.getElementById(element.id + "header").onmousedown =
        dragMouseDown;
    } else {
      element.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      element.style.top = element.offsetTop - pos2 + "px";
      element.style.left = element.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  } //end of drragle

  function setClassToField() {
    acssInputField.value = currentElement.getAttribute("class");
  }
  function acssInputHandler() {
    // console.log(acssInputField);
    acssInputField.addEventListener("keydown", function (e) {
      if (acssDesignBarLocked) {
        return false;
      }
      var code = e.keyCode ? e.keyCode : e.which;
      //if(code==8){getClassList="";}
      if (code == 32 || code == 13) {
        if (code == 13) e.preventDefault();
        if (acssInputField.value.trim()) {
          currentElement.setAttribute("class", acssInputField.value.trim());
          ACSS.classPrinter.print(currentElement);
        }
      }
    });
  }
  function buttonRole() {
    var buttonParent = document.getElementById("buttonParent");
    var buttonPrev = document.getElementById("buttonPrev");
    var buttonNext = document.getElementById("buttonNext");
    var buttonChild = document.getElementById("buttonChild");
    var buttonCopy = document.getElementById("acssLiveUpadateCopy");
    var buttonPush = document.getElementById("acssPush");

    let nextElement = function () {
      if (
        currentElement.nextElementSibling &&
        currentElement.nextElementSibling.classList.contains("dont-include")
      ) {
        return false;
      }
      return currentElement.nextElementSibling;
    };
    let prevElement = function () {
      return currentElement.previousElementSibling;
    };
    let childElement = function () {
      return currentElement.firstElementChild;
    };
    let parent = function () {
      return currentElement.parentElement;
    };

    buttonNext.onclick = function () {
      if (nextElement()) {
        //currentElement.style.border="";
        currentElement = nextElement();
        infoEle.innerText =
          "Element on Target :- " +
          currentElement.nodeName.toLowerCase() +
          "#" +
          currentElement.id;

        infoMsg.innerHTML = "";
        setClassToField();
        //settleOldClass(currentElement);
      } else {
        infoMsg.innerHTML =
          "<span style='color:orange'>Has no next sibling Element</span>";
        return false;
      }
    };
    buttonPrev.onclick = function () {
      if (prevElement()) {
        //currentElement.style.border="";
        currentElement = prevElement();
        infoEle.innerText =
          "Element on Target :- " +
          currentElement.nodeName.toLowerCase() +
          "#" +
          currentElement.id;
        infoMsg.innerHTML = "";
        setClassToField();
        //settleOldClass(currentElement);
      } else {
        //console.log("clicked");
        infoMsg.innerHTML =
          "<span style='color:orange'>Has no Previous sibling Element</span>";
        return false;
      }
    };
    buttonParent.onclick = function () {
      if (parent()) {
        //currentElement.style.border="";
        currentElement = parent();
        infoEle.innerText =
          "Element on Target :- " +
          currentElement.nodeName.toLowerCase() +
          "#" +
          currentElement.id;
        infoMsg.innerHTML = "";
        setClassToField();
        //settleOldClass(currentElement);
      } else {
        //console.log("clicked");
        infoMsg.innerHTML =
          "<span style='color:orange'>Has no Parent Element</span>";
        return false;
      }
    };
    buttonChild.onclick = function () {
      if (childElement()) {
        //currentElement.style.border="";
        currentElement = childElement();
        infoEle.innerText =
          "Element on Target :- " +
          currentElement.nodeName.toLowerCase() +
          "#" +
          currentElement.id;
        infoMsg.innerHTML = "";
        setClassToField();
        //settleOldClass(currentElement);
      } else {
        //console.log("clicked");
        infoMsg.innerHTML =
          "<span style='color:orange'>Has no child Element</span>";
        return false;
      }
    };

    buttonCopy.onclick = function () {
      if (currentElement) {
        let textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        textarea.value = currentElement.outerHTML;
        textarea.select();
        if (document.execCommand("copy")) {
          console.log("Successfully! Copied to Clipboard");
          let title = document.getElementById("acss-title");
          title.style.color = "green";
          title.innerText = "Successfully copied to clipboard!";

          let st = setTimeout(function () {
            title.style.color = "initial";
            title.innerText = "Acss Live Update 1.0.3";
            clearTimeout(st);
          }, 1500);
        }
        textarea.parentNode.removeChild(textarea);
      }
    };

    buttonPush.onclick = function () {
      if (!ACSS.pushURL) return false;
      let content = document.getElementById("styleAlias").innerText;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          console.log("Connection successfull");
          let title = document.getElementById("acss-title");
          title.style.color = "green";
          title.innerText = "Pushed and saved!";

          let st = setTimeout(function () {
            title.style.color = "initial";
            title.innerText = "Acss Live Update 1.0.3";
            clearTimeout(st);
          }, 3000);
        }
      };
      xhttp.open("POST", ACSS.pushURL, true);
      xhttp.send(content);
    };

    // buttonSave.onclick=function(){
    //     //doing nothigs now
    // };
    // buttonCancel.onclick=function(){
    //     classNameInput.value=oldClass;
    // }
  }
  function quickChangeSelectOnClick(element) {
    var elements = element ? element : document.getElementsByTagName("*");
    Array.prototype.forEach.call(elements, function (el) {
      //if(!el.classList.contains("dont-include")){
      el.addEventListener(
        "click",
        function (e) {
          //console.log(this);
          if (!el.classList.contains("dont-include")) {
            //var oldClass=this.getAttribute("class");
            //classNameInput.value=oldClass;
            //currentElement.style.border="";
            currentElement = this;
            //this.style.boxShadow="0px 0px 5px #ccc";
            //settleOldClass();
            infoEle.innerText =
              "Element on Target :- " +
              this.nodeName.toLowerCase() +
              "#" +
              this.id;
            infoMsg.innerHTML = "";
            let infoBarMsg = "";
            setClassToField();
          }

          e.stopPropagation();
          e.preventDefault();
        },
        false
      );
      //}
    });
  } //end of quickChangeventilizer

  function quickChangeSelectByIdInput(selector) {
    if (selector) {
      selector.onchange = function () {
        //console.log(this.value);
        if (document.getElementById(this.value)) {
          currentElement = document.querySelector(this.value);
          //currentElement=document.getElementById(this.value);

          infoEle.innerText =
            "Element on Target :- " +
            currentElement.nodeName.toLowerCase() +
            "#" +
            currentElement.id;
          setClassToField();
          infoMsg.innerHTML = "";
          //currentElement.element.style.boxShadow="0px 0px 5px #ccc";
          //settleOldClass(currentElement);
        } else {
          infoMsg.innerHTML =
            "<span style='color:orange'> No element with querySelector:" +
            this.value +
            "</span>";
        }
      };
    }
  } //End of Selector

  function init(click) {
    launchQuickChange();
    infoMsg = document.getElementById("infoMsg");
    infoEle = document.getElementById("infoEle");
    acssInputField = document.getElementById("quickChangeAcssInput");

    // action="";
    //var acssInputField=document.getElementById('quickChangeAcssInput');
    var oldElement = "";
    quickChangeSelectOnClick();
    quickChangeSelectByIdInput(document.getElementById("quickChangeIdInput"));

    buttonRole();
    acssInputHandler();

    document.getElementById("quickChangeMin").onclick = function () {
      if (this.innerHTML == "min") {
        this.innerHTML = "max";
        document.getElementById("quickChangeBox").style.height = "20px";
        document.getElementById("acss-live-editor-content").style.display =
          "none";
        // document.getElementById("acss-live-editor-footer").style.display="none";
      } else {
        document.getElementById("quickChangeBox").style.height = "200px";
        document.getElementById("acss-live-editor-content").style.display =
          "flex";
        // document.getElementById("acss-live-editor-footer").style.display="block";
        this.innerHTML = "min";
      }
    };
    document.getElementById("quickChangeClose").onclick = function () {
      if (
        confirm(
          "Are you sure you want to close Acss Live Editor?\n You can reopen by typing ACSS.liveEditor(); in console"
        )
      ) {
        // Save it!
        var ele = document.getElementById("quickChangeBox");
        ele.parentNode.removeChild(ele);
      } else {
        // Do nothing!
      }
    };
  } //end of init

  //--------------ScriptManager-------------

  // --------------------------------HTML Display-----------------------------
  function launchQuickChange() {
    var newinnerHTML = `<div sid="alias-css-live-editor" id="quickChangeBox" class="bsbb dont-include zi1111111111 df pf fww bxs0px0px1px0px-c-0000000000d5 _input-lhi2 _button-lhi2 ffi2 fs12px bgc-fff w300px h200px b1px-s-00000000002 br5px r5px btm5px bgc-505050 ">\
    <!--Header  -->\
    <div sid="alias-css-live-editorheader" id="quickChangeBoxheader" class="bsbb df aic jcsb w100p br5px5px0p0p bgc-ccc h15px bb1px-s-00000000002 -h-cm mb10px dont-include">\
        <span id="acss-title" class="bsbb dib fs12px m0px5px ff-arial c-333333 dont-include">Acss Live Update 1.0.3</span>\
        <div class="bsbb  df  dont-include  jcc aic ">\
            <button id="quickChangeMin" class="bsbb mr5px b0d5px-s-535353 dif aic jcc bgc-e3e3e3 --hover-bgc-warning w30px h12px br10px  -fo-oln  dont-include p0px ff-verdana fs9px ">min</button>\
            <button id="quickChangeClose" class="bsbb mr5px dif aic jcc b0d5px-s-535353 bgc-e3e3e3 w30px --hover-bgc-danger h12px br10px  -fo-oln dont-include p0px ff-verdana fs9px">close</button>\
        </div>\
    </div>\

    
    <div class="bsbb  w100p df  dont-include" id="acss-live-editor-content">\
        <!-- Buttons -->\
        <div class="w20p  bsbb p5px dont-include _button-oln _button-ff-verdana _button-w100p _button-bgc-505050 _button-c-ccc  _button-br50px _button-h-c-grey _button-fo-oln _button-fw1  _button-fs9px _button-mb8px">\
            <button class=" dont-include"  id="buttonPrev">Prev</button>\
            <button class=" dont-include"  id="buttonNext">Next</button>\
            <button class=" dont-include"  id="buttonParent">Parent</button>\
            <button class=" dont-include"  id="buttonChild">Child</button>\
            <hr class=" mt0px mb10px  dont-include bc-666">\
            <button id="acssLiveUpadateCopy" class=" dont-include" >copy</button>\
            <button id="acssPush" class="fs7px dont-include"  >&uarr;push</button>\
        </div>\

        <!-- input area  -->\
        <div class="bsbb  dont-include w80p p0px10px h160px bl1px-s-606060  mt-10px">\
            <!-- input -->\
            <p class="bsbb fs13px m0px p3px dont-include mb5px">\
            <span class="c_bbb dont-include dib mb5px">Click element-or-input id</span> <input type="text" style="" spellcheck="false" id="quickChangeIdInput" class="dont-include w100p b1px-s-606060 br15px bgc-909090 -fo-oln pl15px" placeholder="input id of element">\
            </p>\
                <!-- text-are -->\
            <div class="bsbb tal dont-include ">\
            <small id="infoEle"class="c-bbb ff-arial fs11px tac dont-include dib mb5px">Input classname/s, press enter</small><small id="infoMsg" class=" fs11px  dont-include"></small>\
                <textarea id="quickChangeAcssInput" class=" dib dont-include bgc-909090 ff-courier h100px w100p oln c-333333 fw9" placeholder="Input ACSS class names " spellcheck="false"> </textarea>\
            </div>\
        </div>\
    </div>\
</div>`;

    var box = document.createElement("div");
    box.innerHTML = newinnerHTML;
    document.body.append(box);
    ACSS.classPrinter.run(box);
    acssDraggable(document.getElementById("quickChangeBox"));
  }

  init();
}
// module.exports=openAcssRibbionBar;
