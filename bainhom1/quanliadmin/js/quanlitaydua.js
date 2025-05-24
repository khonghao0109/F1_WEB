// quanlitaydua.js

// Biến toàn cục
let currentDriverId = null;
let drivers = [];

// Hàm khởi tạo trang
document.addEventListener('DOMContentLoaded', function() {
    loadDrivers();
    
    // Xử lý sự kiện nút thêm tay đua
    document.getElementById('addDriverButton').addEventListener('click', function() {
        currentDriverId = null;
        document.getElementById('editModalTitle').textContent = 'Thêm tay đua mới';
        document.getElementById('driverForm').reset();
        document.getElementById('editDriverModal').classList.remove('hidden');
    });
    
    // Xử lý form submit
    document.getElementById('driverForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveDriver();
    });
});

// Hàm tải danh sách tay đua từ database
async function loadDrivers() {
    try {
        const response = await fetch('/api/drivers');
        if (!response.ok) throw new Error('Lỗi khi tải dữ liệu');
        
        drivers = await response.json();
        renderDriverTable(drivers);
    } catch (error) {
        console.error('Error:', error);
        alert('Không thể tải danh sách tay đua');
    }
}

// Hàm hiển thị danh sách tay đua vào bảng
function renderDriverTable(drivers) {
    const tableBody = document.getElementById('driverTableBody');
    tableBody.innerHTML = '';
    
    drivers.forEach(driver => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${driver.DriverID}</td>
            <td><img src="${driver.DriverURL}" alt="${driver.Name}" style="width:60px;height:40px;object-fit:cover;"></td>
            <td>${driver.Name}</td>
            <td>${driver.Number}</td>
            <td>${driver.TeamID}</td>
            <td>${new Date(driver.DOB).toLocaleDateString()}</td>
            <td>${driver.POB}</td>
            <td class="action-buttons">
                <button class="action-btn edit" onclick="editDriver(${driver.DriverID})">Sửa</button>
                <button class="action-btn delete" onclick="confirmDeleteDriver(${driver.DriverID})">Xóa</button>
                <button class="action-btn view" onclick="viewDriver(${driver.DriverID})">Xem</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Hàm tìm kiếm tay đua
function searchDrivers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredDrivers = drivers.filter(driver => 
        driver.Name.toLowerCase().includes(searchTerm)
    );
    renderDriverTable(filteredDrivers);
}

// Hàm mở modal chỉnh sửa tay đua
function editDriver(driverId) {
    currentDriverId = driverId;
    const driver = drivers.find(d => d.DriverID === driverId);
    
    if (driver) {
        document.getElementById('editModalTitle').textContent = 'Chỉnh sửa tay đua';
        document.getElementById('driverName').value = driver.Name;
        document.getElementById('driverNationality').value = driver.CountryID;
        document.getElementById('driverPoints').value = driver.Points;
        document.getElementById('driverRank').value = driver.Position || 1;
        
        document.getElementById('editDriverModal').classList.remove('hidden');
    }
}

// Hàm lưu thông tin tay đua
async function saveDriver() {
    const formData = {
        DriverID: currentDriverId,
        Name: document.getElementById('driverName').value,
        CountryID: parseInt(document.getElementById('driverNationality').value),
        Points: parseFloat(document.getElementById('driverPoints').value),
        Position: parseInt(document.getElementById('driverRank').value)
    };
    
    try {
        const url = currentDriverId ? `/api/drivers/${currentDriverId}` : '/api/drivers';
        const method = currentDriverId ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (!response.ok) throw new Error('Lỗi khi lưu dữ liệu');
        
        closeEditModal();
        loadDrivers();
    } catch (error) {
        console.error('Error:', error);
        alert('Không thể lưu thông tin tay đua');
    }
}

// Hàm xác nhận xóa tay đua
function confirmDeleteDriver(driverId) {
    const driver = drivers.find(d => d.DriverID === driverId);
    if (driver) {
        document.getElementById('deleteDriverName').textContent = driver.Name;
        document.getElementById('confirmDeleteModal').classList.remove('hidden');
        currentDriverId = driverId;
    }
}

// Hàm xóa tay đua
async function confirmDelete() {
    try {
        const response = await fetch(`/api/drivers/${currentDriverId}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) throw new Error('Lỗi khi xóa tay đua');
        
        closeConfirmModal();
        loadDrivers();
    } catch (error) {
        console.error('Error:', error);
        alert('Không thể xóa tay đua');
    }
}

// Hàm xem chi tiết tay đua
function viewDriver(driverId) {
    const driver = drivers.find(d => d.DriverID === driverId);
    if (driver) {
        document.getElementById('previewTitle').textContent = driver.Name;
        document.getElementById('previewImage').src = driver.DriverURL;
        
        document.getElementById('previewMeta').innerHTML = `
            <strong>Số áo:</strong> ${driver.Number} | 
            <strong>Đội:</strong> ${driver.TeamID} | 
            <strong>Quốc tịch:</strong> ${driver.CountryID}
        `;
        
        document.getElementById('previewBody').innerHTML = `
            <p><strong>Ngày sinh:</strong> ${new Date(driver.DOB).toLocaleDateString()}</p>
            <p><strong>Nơi sinh:</strong> ${driver.POB}</p>
            <p><strong>Số lần podium:</strong> ${driver.Podium}</p>
            <p><strong>Tổng điểm:</strong> ${driver.Points}</p>
            <p><strong>Số GP đã tham gia:</strong> ${driver.GPEntered}</p>
        `;
        
        document.getElementById('previewModal').classList.remove('hidden');
    }
}

// Hàm đóng modal
function closeEditModal() {
    document.getElementById('editDriverModal').classList.add('hidden');
}

function closePreview() {
    document.getElementById('previewModal').classList.add('hidden');
}

function closeConfirmModal() {
    document.getElementById('confirmDeleteModal').classList.add('hidden');
}