let password = "";

// 1. CHỖ THÊM NỘI DUNG THƯ Ở ĐÂY NÈ
const letterContent = "Nhân ngày Quốc tế Phụ nữ 8/3, xin gửi lời chúc tốt đẹp nhất đến tất cả chị em. Chúc mọi người luôn xinh đẹp, thành công và hạnh phúc trong cuộc sống 💕";

function addNumber(num) {
    password += num;
    document.getElementById("passwordDisplay").value = password;
    
    // Phát nhạc chill khi bắt đầu bấm
    const chill = document.getElementById("audioChill");
    if (chill && chill.paused) {
        chill.play().catch(e => console.log("Chờ tương tác để phát nhạc"));
    }
}

function clearPass() {
    password = "";
    document.getElementById("passwordDisplay").value = "";
}

function checkPassword() {
    const loadingBox = document.getElementById("loadingBox");
    loadingBox.classList.add("show");
    
    if (password === "1234") {
        const chill = document.getElementById("audioChill");
        const main = document.getElementById("audioMain");
        if (chill) chill.pause(); 
        if (main) {
            main.currentTime = 0;
            main.play();
        }

        loadingBox.innerHTML = `<h3>✅ Đúng rồi! Đợi xíu nha 💕</h3>`;
        
        setTimeout(() => {
            loadingBox.classList.remove("show");
            goToSection('homePage'); // Hiện menu chính
        }, 2000);
    } else {
        loadingBox.innerHTML = `<h3>❌ Sai pass rồi! 🥺</h3><button onclick="hideLoadingBox()" class="btn btn-light mt-3">Thử lại</button>`;
        clearPass();
    }
}

// 2. HÀM ĐIỀU KHIỂN CHUYỂN TRANG VÀ GÕ CHỮ
function goToSection(pageId) {
    // Ẩn tất cả các trang
    document.querySelectorAll('.page').forEach(p => p.style.display = "none");
    
    // Hiện trang được chọn
    const target = document.getElementById(pageId);
    if (target) {
        target.style.display = "flex";
    }

    // NẾU BẤM VÀO THƯ THÌ MỚI CHẠY GÕ CHỮ
    if (pageId === 'letterPage') {
        typeWriter();
    }
}

function typeWriter() {
    let i = 0;
    const textElement = document.getElementById("typedText");
    textElement.innerHTML = ""; // Xóa sạch chữ cũ trước khi gõ mới
    
    const typing = setInterval(() => {
        if (i < letterContent.length) {
            textElement.innerHTML += letterContent.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 50); // Tốc độ gõ 50ms
}

function hideLoadingBox() {
    document.getElementById("loadingBox").classList.remove("show");
}

// Các hàm bảo mật và hiệu ứng hoa rơi (giữ nguyên của ông)
document.addEventListener('contextmenu', e => e.preventDefault());
document.onkeydown = function(e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || (e.ctrlKey && e.keyCode == 85)) return false;
};

function createFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.innerHTML = ["🌸", "🌺", "🌷", "🌹"][Math.floor(Math.random() * 4)];
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.position = "fixed";
    flower.style.top = "-50px";
    flower.style.fontSize = Math.random() * 20 + 20 + "px";
    flower.style.transition = "transform 5s linear, opacity 5s";
    document.body.appendChild(flower);

    setTimeout(() => {
        flower.style.transform = `translateY(${window.innerHeight + 100}px) rotate(360deg)`;
        flower.style.opacity = "0";
    }, 100);
    setTimeout(() => flower.remove(), 6000);
}
setInterval(createFlower, 300);