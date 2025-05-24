// Quản lý tin tức F1 và nội bộ
const previewModal = document.getElementById('previewModal');
const previewImage = document.getElementById('previewImage');
const previewTitle = document.getElementById('previewTitle');
const previewMeta = document.getElementById('previewMeta');
const previewBody = document.getElementById('previewBody');
const addNewsModal = document.getElementById('addNewsModal');

// Đảm bảo mảng articles luôn là mảng và lấy từ localStorage
let articles = JSON.parse(localStorage.getItem('articles')) || [];
window.articles = articles;

// Lấy tin F1 và render vào bảng
function fetchAndRenderF1News() {
    // Dữ liệu mẫu dựa trên phong cách bài Saudi Arabian GP
    const f1Articles = [
        {
            id: 'f1_1',
            title: "Leo núi, tình bạn của Grosjean và lệnh cấm hát. Tìm hiểu về Ayao Komatsu thực sự",
            author: "Mike Seymour",
            avatar: "https://media.formula1.com/image/upload/f_auto,c_limit,w_102,q_auto/f_auto/q_auto/fom-website/2023/Miscellaneous/mike-profile-photo-2",
            date: "2025-05-10",
            views: 150,
            shares: 20,
            featured: false,
            image: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9North/f_auto/q_auto/trackside-images/2025/F1_Grand_Prix_of_Bahrain___Previews/2209521358",
            content: `
                <h2>Leo núi, tình bạn của Grosjean và lệnh cấm hát. Tìm hiểu về Ayao Komatsu thực sự</h2>
                <p>Khi mùa giải 2025 tiếp tục, Ayao Komatsu là ông chủ tiếp theo của đội phải đối mặt với các câu hỏi Tìm hiểu của chúng tôi. Từ việc chuyển từ Nhật Bản sang Anh khi còn trẻ đến tình yêu leo núi và những khoảnh khắc du lịch đáng nhớ cho đến việc bị con cái cấm hát, anh ấy tiết lộ tất cả trong trình phát video ở trên và bản ghi chép bên dưới…</p>
                <img src="https://example.com/saudi-gp-2025.jpg" style="width:100%;margin-top:10px;">
                <p>Đọc thêm tại <a href="https://www.formula1.com/en/latest/article/climbing-mountains-grosjeans-friendship-and-a-ban-from-singing-getting-to.eKn2TexvJgu00KeNEfeyg" target="_blank">F1.com</a></p>
            `,
            link: "https://www.formula1.com/en/latest/article/climbing-mountains-grosjeans-friendship-and-a-ban-from-singing-getting-to.eKn2TexvJgu00KeNEfeyg"
        },
        {
            id: 'f1_2',
            title: "BARRETTO: GP Saudi Arabian chứng minh mọi thứ đang bắt đầu có kết quả tốt cho đội hình toàn sao mới của Williams",
            author: "Lawrence Barretto",
            avatar: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9North/f_auto/q_auto/fom-website/2025/Williams/GettyImages-2209781767",
            date: "2025-05-09",
            views: 112,
            shares: 9,
            featured: false,
            image: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9North/f_auto/q_auto/fom-website/2025/Williams/GettyImages-2209781767",
            content: `
                <h2>BARRETTO: GP Saudi Arabian chứng minh mọi thứ đang bắt đầu có kết quả tốt cho đội hình toàn sao mới của Williams</h2>
                <p>James Hinchcliffe chia sẻ về sự ngưỡng mộ đối với phong cách đua xe thẳng thắn và không khoan nhượng của Lando Norris.</p>
                <img src="https://example.com/norris-2025.jpg" style="width:100%;margin-top:10px;">
                <p>Đọc thêm tại <a href="https://www.formula1.com/en/latest/article/barretto-the-saudi-arabian-gp-proved-things-are-starting-to-click-for.60rMB3CLMeK9VIdDIe7cxc" target="_blank">F1.com</a></p>
            `,
            link: "https://www.formula1.com/en/latest/article/barretto-the-saudi-arabian-gp-proved-things-are-starting-to-click-for.60rMB3CLMeK9VIdDIe7cxc"
        },
        {
            id: 'f1_3',
            title: "Niềm vui ở công viên giải trí, vũ trường với Russell và ước mơ kiến trúc sư, Tìm hiểu về Kimi Antonelli thực sự",
            author: "Mike Seymour",
            avatar: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/f_auto/q_auto/fom-website/2025/Miscellaneous/antonelli-getting-to-know",
            date: "2025-05-09",
            views: 1122,
            shares: 15,
            featured: false,
            image: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/f_auto/q_auto/fom-website/2025/Miscellaneous/antonelli-getting-to-know",
            content: `
                <h2>Niềm vui ở công viên giải trí, vũ trường với Russell và ước mơ kiến trúc sư, Tìm hiểu về Kimi Antonelli thực sự</h2>
                <p>Là một trong số nhiều tân binh trên đường đua năm 2025, Kimi Antonelli là tay đua tiếp theo phải đối mặt với những câu hỏi nhanh của Getting to Know trên F1.com . Từ những ký ức đầu tiên về đua xe karting đến những trải nghiệm hoang dã tại các công viên giải trí, và danh sách khách mời tiệc tối vui nhộn cho đến những đam mê của anh ngoài F1, chàng trai trẻ người Ý chia sẻ tất cả trong trình phát video ở trên và bản ghi chép bên dưới…</p>
                <img src="https://example.com/norris-2025.jpg" style="width:100%;margin-top:10px;">
                <p>Đọc thêm tại <a href="https://www.formula1.com/en/latest/article/theme-park-fun-discos-with-russell-and-architect-dreams-getting-to-know-the.2FRwiJ30ZpWNzmT8NoUhT7">F1.com</a></p>
            `,
            link: "https://www.formula1.com/en/latest/article/theme-park-fun-discos-with-russell-and-architect-dreams-getting-to-know-the.2FRwiJ30ZpWNzmT8NoUhT7"
        },
        {
            id: 'f1_4',
            title: "BIỂU TƯỢNG F1: Huyền thoại MotoGP Casey Stoner nói về 'những tay đua có tài năng phi thường' đã truyền cảm hứng cho anh",
            author: "Casey Stoner",
            avatar: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/2025/Miscellaneous/Stoner%20F1%20Icons",
            date: "2025-04-27",
            views: 150000,
            shares: 112,
            featured: false,
            image: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/2025/Miscellaneous/Stoner%20F1%20Icons",
            content: `
                <h2>BIỂU TƯỢNG F1: Huyền thoại MotoGP Casey Stoner nói về 'những tay đua có tài năng phi thường' đã truyền cảm hứng cho anh</h2>
                <p>Phong cách không thể nhầm lẫn của Casey Stoner trên xe máy đã đưa anh trở thành một trong những huyền thoại của MotoGP, tay đua người Úc này đã giành được hai chức vô địch thế giới và 38 chiến thắng hạng nhất trong suốt sự nghiệp của mình. Nhưng trong khi tình yêu đầu tiên của Stoner là xe máy, anh ấy có một lượng người hâm mộ và sự đánh giá cao sâu sắc đối với Công thức 1, và những tay đua tuyệt vời mà môn thể thao này đã chứng kiến như anh ấy giải thích độc quyền với Formula1.com…</p>
                <img src="https://example.com/norris-2025.jpg" style="width:100%;margin-top:10px;">
                <p>Đọc thêm tại <a href="https://www.formula1.com/en/latest/article/f1-icons-motogp-legend-casey-stoner-on-the-freaking-phenomenally-talented.4qjzXqozaMCIBGNxBDfHsB" target="_blank">F1.com</a></p>
            `,
            link: "https://www.formula1.com/en/latest/article/f1-icons-motogp-legend-casey-stoner-on-the-freaking-phenomenally-talented.4qjzXqozaMCIBGNxBDfHsB"
        }
    ];

    // Gộp tin F1 với tin hiện có từ localStorage, tránh trùng id
    articles = [
        ...f1Articles.filter(f1 => !articles.some(a => a.id === f1.id)),
        ...articles
    ];
    window.articles = articles;
    saveArticles();
    searchArticles();
}

function searchArticles() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const tableBody = document.getElementById('articleTableBody');
    tableBody.innerHTML = '';
    const filteredArticles = window.articles.filter(article => 
        article.title.toLowerCase().includes(searchInput)
    );
    filteredArticles.forEach(article => {
        const row = document.createElement('tr');
        row.setAttribute('f1-article', article.id.startsWith('f1_') ? 'true' : 'false');
        row.innerHTML = `
            <td><img src="${article.image}" alt="Thumbnail" style="width:80px;height:50px;object-fit:cover;border-radius:4px" onerror="this.onerror=null;this.src='/images/default-news.png';"></td>
            <td><a href="#" class="f1-article-link" data-id="${article.id}">${article.title}</a></td>
            <td>${article.author}</td>
            <td>${article.date}</td>
            <td>${article.views || '-'}</td>
            <td>${article.shares || '-'}</td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn" onclick="previewArticle('${article.id}')">Xem</button>
                    <button class="action-btn delete" onclick="deleteArticle('${article.id}')">Xóa</button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
    document.querySelectorAll('.f1-article-link').forEach(link => {
        link.onclick = function(e) {
            e.preventDefault();
            previewArticle(this.getAttribute('data-id'));
        };
    });
}

function previewArticle(id) {
    const article = window.articles.find(a => a.id === id);
    if (article) {
        previewImage.src = article.image || '';
        previewTitle.textContent = article.title;
        previewMeta.innerHTML = `
            <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
                <img src="${article.avatar || '/images/default-avatar.png'}" alt="avatar" style="width:32px;height:32px;border-radius:50%;object-fit:cover;">
                <span><b>${article.author}</b></span>
                <span>| Ngày: ${article.date}</span>
                <span>| 👁️ ${article.views || '-'} </span>
                <span>| 🔄 ${article.shares || '-'}</span>
            </div>
        `;
        previewBody.innerHTML = article.content || '';
        previewModal.classList.remove('hidden');
    }
}

function closePreview() {
    previewModal.classList.add('hidden');
}

function openAddNewsModal() {
    document.getElementById('addNewsModal').classList.remove('hidden');
}

function closeAddNewsModal() {
    document.getElementById('addNewsModal').classList.add('hidden');
    // Xóa dữ liệu trong form
    document.getElementById('newsTitle').value = '';
    document.getElementById('newsAuthor').value = '';
    document.getElementById('newsDate').value = '';
    document.getElementById('newsImage').value = '';
    document.getElementById('newsAvatar').value = '';
    document.getElementById('newsContent').value = '';
    document.getElementById('newsLink').value = '';
}

function addNews() {
    const title = document.getElementById('newsTitle').value;
    const author = document.getElementById('newsAuthor').value;
    const date = document.getElementById('newsDate').value;
    const image = document.getElementById('newsImage').value || '/images/default-news.png';
    const avatar = document.getElementById('newsAvatar').value || '/images/default-avatar.png';
    const content = document.getElementById('newsContent').value;
    const link = document.getElementById('newsLink').value;

    // Kiểm tra các trường bắt buộc
    if (!title || !author || !date || !content) {
        alert('Vui lòng điền đầy đủ các trường bắt buộc (Tiêu đề, Tác giả, Ngày đăng, Nội dung)!');
        return;
    }

    // Tạo tin tức mới
    const newArticle = {
        id: 'news_' + Date.now(),
        title: title,
        author: author,
        date: date,
        views: 0,
        shares: 0,
        featured: false,
        image: image,
        avatar: avatar,
        content: `
            <h2>${title}</h2>
            <p>${content}</p>
            ${image ? `<img src="${image}" style="width:100%;margin-top:10px;">` : ''}
            ${link ? `<p>Đọc thêm tại <a href="${link}" target="_blank">Nguồn</a></p>` : ''}
        `,
        link: link || ''
    };

    // Thêm vào mảng articles
    window.articles.push(newArticle);

    // Lưu vào localStorage
    saveArticles();

    // Đóng modal và cập nhật bảng
    closeAddNewsModal();
    searchArticles();
    alert('Đã thêm tin tức mới thành công!');
}

function editArticle(id) {
    alert(`Chuyển hướng đến trang chỉnh sửa bài viết ${id}`);
}

function deleteArticle(id) {
    if (confirm(`Bạn có chắc muốn xóa bài viết ${id}?`)) {
        const index = window.articles.findIndex(a => a.id === id);
        if (index !== -1) {
            window.articles.splice(index, 1);
            saveArticles();
            searchArticles();
            alert(`Đã xóa bài viết ${id}`);
        }
    }
}

function copyArticle(id) {
    const article = window.articles.find(a => a.id === id);
    if (article) {
        const newArticle = {
            ...article,
            id: 'copy_' + Date.now(),
            title: `Sao chép: ${article.title}`,
            date: new Date().toLocaleDateString('vi-VN')
        };
        window.articles.push(newArticle);
        saveArticles();
        searchArticles();
        alert(`Đã sao chép bài viết ${id}`);
    }
}

function toggleFeatured(id) {
    const article = window.articles.find(a => a.id === id);
    if (article) {
        article.featured = !article.featured;
        saveArticles();
        searchArticles();
        alert(`Bài viết ${id} đã được ${article.featured ? 'đánh dấu' : 'bỏ'} nổi bật`);
    }
}

// Hàm lưu mảng articles vào localStorage
function saveArticles() {
    localStorage.setItem('articles', JSON.stringify(window.articles));
}

// Tìm kiếm khi nhấn Enter
document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchArticles();
    }
});

// Chạy khi tải trang
window.onload = function() {
    fetchAndRenderF1News();
};