let password = "";

function addNumber(num) {
    password += num;
    document.getElementById("passwordDisplay").value = password;
}

function clearPass() {
    password = "";
    document.getElementById("passwordDisplay").value = "";
}

function checkPassword() {
    const loadingBox = document.getElementById("loadingBox");
    
    // Hiện loading box
    loadingBox.classList.add("show");
    
    if (password === "1234") {
        // Trường hợp ĐÚNG pass
        loadingBox.innerHTML = `
            <h3>✅ Đúng rồi! Đợi xíu nha 💕</h3>
            <div class="spinner-border text-light mt-3"></div>
        `;
        
        // Chuyển trang sau 2.5 giây
        setTimeout(() => {
            window.location.href = "home.html";
        }, 2500);
        
    } else {
        // Trường hợp SAI pass
        loadingBox.innerHTML = `
            <h3>❌ Sai pass rồi! Thử lại đi nè 🥺</h3>
            <button onclick="hideLoadingBox()" class="btn btn-light mt-3 px-4 py-2 fw-bold" 
                    style="border-radius: 25px;">Thử lại</button>
        `;
        
        // Xóa pass cũ
        clearPass();
    }
}

// Hàm ẩn loading box
function hideLoadingBox() {
    const loadingBox = document.getElementById("loadingBox");
    loadingBox.classList.remove("show");
    // Xóa nội dung cũ
    setTimeout(() => {
        loadingBox.innerHTML = "";
    }, 300);
}

// Hàm tạo hoa rơi
function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    const flowers = ["🌸", "🌺", "🌷", "💮", "🌹", "🌻", "🌼"];
    flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = (Math.random() * 3 + 2) + "s";
    flower.style.fontSize = Math.random() * 20 + 20 + "px"; // Kích thước ngẫu nhiên
    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 5000);
}

// Tạo hoa rơi mỗi 0.3 giây
setInterval(createFlower, 300);
if (password === "1234") {
    // 1. Lấy thực thể nhạc từ HTML
    const chill = document.getElementById("audioChill");
    const main = document.getElementById("audioMain");

    // 2. Lệnh "Tráo nhạc" tự động
    if (chill) chill.pause(); // Dừng ngay bài chill
    if (main) {
        main.currentTime = 0; // Đảm bảo nhạc phát từ đầu
        main.play();          // Tự động nổi nhạc 2 lên
    }

    // 3. Hiển thị thông báo và chuyển giao diện (không chuyển trang)
    loadingBox.innerHTML = `<h3>✅ Đúng rồi! Đợi xíu nha 💕</h3>`;
    
    setTimeout(() => {
        loadingBox.classList.remove("show");
        // Ẩn phần nhập pass, hiện phần trang chủ
        document.getElementById("passwordPage").style.display = "none";
        document.getElementById("homePage").style.display = "flex"; 
    }, 2000);
}
// Chặn chuột phải
document.addEventListener('contextmenu', e => e.preventDefault());

// Chặn các phím tắt soi code (F12, Ctrl+U, Ctrl+Shift+I)
document.onkeydown = function(e) {
    if (e.keyCode == 123 || 
        (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) || 
        (e.ctrlKey && e.keyCode == 85)) {
        return false;
    }
};