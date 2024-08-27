function idCheck()
{
    let obj = document.getElementById("uid");
    let msgBox = document.getElementsByClassName("msgbox");
    if(obj.value == "")
    {
        msgBox[0].innerText = "아이디를 입력하세요.";
        obj.focus();
        return false; 
    }else if(obj.value.length < 4)
    {
        let msgBox = obj.parentElement.getElementsByClassName("msgbox");
        msgBox[0].innerText = "아이디는 4자 이상 입력하세요.";
        obj.focus();
        return false;
    }
    return true;
}

function pwCheck()
{
    let obj = document.getElementById("upw");
    let msgBox = obj.parentElement.getElementsByClassName("msgbox")[0];
    if(obj.value == "")
    {
        msgBox.innerText = "비밀번호를 입력하세요";
        obj.focus();
        return false;
    }else if(obj.value.length < 4)
    {
        msgBox.innerText = "비밀번호는 4자 이상 입력하세요";
        // obj.value = "";
        obj.focus();
        return false;
    }
}
function pwcCheck()
{
    let obj = document.getElementById("upwc");
    let msgBox = obj.parentElement.getElementsByClassName("msgbox")[0];
    if(obj.value == "")
    {
        msgBox.innerText = "비밀번호 확인을 입력하세요";
        obj.focus();
        return false;
    }else if(obj.value.length < 4)
    {
        msgBox.innerText = "비밀번호 확인은 4자 이상 입력하세요";
        obj.value = "";
        obj.focus();
        return false;
    }
}
function pwcMatch()
{
    let upw = document.getElementById("upw");
    let upwc = document.getElementById("upwc");
    msgBox = upwc.parentElement.getElementsByClassName("msgbox")[0];
    if(upw.value != upwc.value)
    {
        msgBox.innerText = "비밀번호가 일치하지 않습니다.";
        upwc.value = "";
        upwc.focus();
        return false;
    }
}
function nameCheck()
{
    let obj = document.getElementsByName("uname")[0];
    let msgBox = obj.parentNode.getElementsByClassName("msgbox")[0];
    if(obj.value == "")
    {
        msgBox.innerText = "이름을 입력하세요.";
        obj.focus();
        return false;
    }else if(obj.value.length < 2)
    {
        msgBox.innerText = "이름은 2글자 이상 입력하세요.";
        obj.focus();
        return false;
    }
}
function emailCheck()
{
    let obj = document.getElementsByName("uemail")[0];
    let msgBox = obj.parentNode.getElementsByClassName("msgbox")[0];
    if(obj.value == "")
    {
        msgBox.innerText = "이메일을 입력하세요.";
        obj.focus();
        return false;
    }
}

function DoJoin()
{
    if(idCheck() == false) return false;
    if(pwCheck() == false) return false;
    if(pwcCheck() == false) return false;
    if(pwcMatch() == false) return false;
    if(nameCheck() == false) return false;
    if(emailCheck() == false) return false;

    // 사용자에게 확인을 받는 함수
    if(confirm("회원가입을 진행하시겠습니까?") == false)
    {
        return false;
    }

    return true;
}

function DoReset()
{
    let msgBox = document.getElementsByClassName("msgbox");
    msgBox.innerHTML = "";
}

window.onload = function (){ // 문서 로드가 끝났을때
    // 모든 input 객체를 찾고, 그 첫번째에 커서를 이동
    let inputs = document.getElementsByTagName("input");
    inputs[0].focus();

    for(let item of inputs)
    {
        // 메세지 박스의 내용을 지우는 이벤트
        // 모든 input객체중에 형제로 msgbox가 있으면
        // input에서 키가 눌릴때에 msgbox의 내용을 초기화
        let msgBox = item.parentElement.getElementsByClassName("msgbox");
        if(msgBox.length > 0)
        {
            item.onkeydown = () => {
                msgBox[0].innerHTML = "";
            }
        }
    }

    // 모든 checkbox를 찾음
    let checkBoxs = document.getElementsByName("skill");
    // 그 중 첫번째가 '전체선택'버튼
    let checkAll = checkBoxs[0];
    checkAll.onchange = () =>{
        // '전체선택'버튼의 속성중에 checked값이
        if(checkAll.checked) { // -> true면 모든 버튼을 true로
            for( let item of checkBoxs ){ item.checked = true; }
        }else { // -> false면 모든 버튼을 false로
            for( let item of checkBoxs ){ item.checked = false;}
        }
        // // '전체선택'버튼의 값과 동일하게 모든 버튼의 값을 변경
        // for( let item of checkBoxs ){
        // 	item.checked = checkAll.checked;
        // }
    };
}

// function checkAll(obj){
//     console.log(obj.checked);
//     let cBtns = document.getElementsByClassName("cBtn");
//     if(obj.checked == true) 
//     {
//         for(let item of cBtns)
//         {
//             item.checked = true;
//         }
//     }else 
//     {
//         for(let item of cBtns)
//         {
//             item.checked = false;
//         }
//     }
// }