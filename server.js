require("dotenv").config();
const express = require("express");
const sql = require("mssql/msnodesqlv8");
const app = express();
const port = process.env.PORT || 3000;

const dbConfig = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
};

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());
// Phục vụ file tĩnh từ các thư mục thực tế
// ✅ Ghi đè header CORS bằng tay — dùng khi cors() không hiệu quả

console.log("✅ CORS middleware đã được áp dụng");
app.use(express.static("HTML"));
app.use(express.static("CSS"));
app.use(express.static("JS"));

app.use(express.static("images"));

let pool;
async function connectDB() {
  try {
    pool = await sql.connect(dbConfig);
    console.log("✅ Kết nối SQL Server thành công");
  } catch (err) {
    console.error("❌ Kết nối thất bại:", err.message);
    process.exit(1);
  }
}
connectDB();

// API lấy tất cả lịch đua
app.get("/api/schedule", async (req, res) => {
  console.log("🔍 Truy vấn toàn bộ lịch đua...");
  try {
    if (!pool) throw new Error("Chưa kết nối CSDL");

    app.get("/api/schedule", async (req, res) => {
      console.log("📥 Nhận request GET /api/schedule");
      try {
        if (!pool) throw new Error("Chưa kết nối CSDL");

        const result = await pool.request().query(`
      SELECT 
        RaceID,
        RaceName,
        CountryName,
        Date,
        FlagURL
      FROM Race
      ORDER BY Date
    `);

        console.log(
          "✅ Truy vấn thành công. Số dòng:",
          result.recordset.length
        );
        res.json(result.recordset);
      } catch (err) {
        console.error("❌ Lỗi API /api/schedule:", err);
        res.status(500).json({ error: "Không thể lấy lịch đua" });
      }
    });

    if (result.recordset.length === 0) {
      return res.status(200).json({ message: "Không có dữ liệu lịch đua" });
    }

    res.json(result.recordset);
  } catch (err) {
    console.error("❌ Lỗi truy vấn lịch đua:", err);
    res.status(500).json({ error: "Không thể lấy lịch đua" });
  }
});

// API lấy danh sách các phiên theo RaceID
app.get("/api/schedule/:raceId/sessions", async (req, res) => {
  const raceId = req.params.raceId;
  console.log(`🔍 Truy vấn phiên theo RaceID: ${raceId}`);

  try {
    if (!pool) throw new Error("Chưa kết nối CSDL");

    const result = await pool.request().query(`
    SELECT DISTINCT 
      RaceID,
      RaceName,
      CountryName,
      Date,
      FlagURL
    FROM Race
    ORDER BY Date
  `);

    if (result.recordset.length === 0) {
      return res
        .status(200)
        .json({ message: `Không tìm thấy phiên nào cho Race ID ${raceId}` });
    }

    res.json(result.recordset);
  } catch (err) {
    console.error("❌ Lỗi truy vấn phiên:", err);
    res.status(500).json({ error: "Không thể lấy các phiên" });
  }
});

// Chạy server
app.listen(port, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${port}`);
});
