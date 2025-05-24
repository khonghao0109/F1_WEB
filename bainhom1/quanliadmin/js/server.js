// server.js (hoặc file tương đương)

const express = require('express');
const sql = require('mssql');
const app = express();

// Cấu hình kết nối SQL Server
const config = {
    user: 'your_username',
    password: 'your_password',
    server: 'localhost',
    database: 'WEBF1',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

// Middleware
app.use(express.json());

// API lấy danh sách tay đua
app.get('/api/drivers', async (req, res) => {
    try {
        await sql.connect(config);
        const result = await sql.query`SELECT * FROM Driver`;
        res.json(result.recordset);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    } finally {
        sql.close();
    }
});

// API thêm tay đua mới
app.post('/api/drivers', async (req, res) => {
    const { Name, CountryID, Points, Position } = req.body;
    
    try {
        await sql.connect(config);
        const result = await sql.query`
            INSERT INTO Driver (Name, CountryID, Points, Position)
            VALUES (${Name}, ${CountryID}, ${Points}, ${Position})
            SELECT SCOPE_IDENTITY() AS DriverID
        `;
        
        res.json({ success: true, DriverID: result.recordset[0].DriverID });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    } finally {
        sql.close();
    }
});

// API cập nhật tay đua
app.put('/api/drivers/:id', async (req, res) => {
    const { Name, CountryID, Points, Position } = req.body;
    const driverId = req.params.id;
    
    try {
        await sql.connect(config);
        await sql.query`
            UPDATE Driver 
            SET Name = ${Name}, 
                CountryID = ${CountryID}, 
                Points = ${Points}, 
                Position = ${Position}
            WHERE DriverID = ${driverId}
        `;
        
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    } finally {
        sql.close();
    }
});

// API xóa tay đua
app.delete('/api/drivers/:id', async (req, res) => {
    const driverId = req.params.id;
    
    try {
        await sql.connect(config);
        await sql.query`DELETE FROM Driver WHERE DriverID = ${driverId}`;
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    } finally {
        sql.close();
    }
});

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});