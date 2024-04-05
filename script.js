var img = document.getElementById('popupImage');
var modal = document.getElementById('myModal');

img.onclick = function(){
    modal.style.display = "block";
}

// 모달을 닫기 위한 함수
function closeModal() {
    modal.style.display = "none";
}