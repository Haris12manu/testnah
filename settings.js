module.exports = {
    uiPort: process.env.PORT || 1880, // ใช้พอร์ตจาก Render หรือค่าเริ่มต้น 1880
    flowFile: 'flows.json', // ไฟล์ Flow
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "your-secret-key", // คีย์ Credential
    httpNodeRoot: '/ui', // ตั้ง Root Path สำหรับ Dashboard
    httpServer: {
        middleware: (req, res, next) => {
            // ตรวจสอบ URL Root Path
            if (req.originalUrl === '/') {
                res.redirect('/ui/#!/0?socketid=default'); // Redirect ไปที่หน้าแดชบอร์ด
            } else {
                next(); // ให้ผ่านไปยังเส้นทางอื่น
            }
        }
    },
    logging: {
        console: {
            level: 'info',
            metrics: false,
            audit: false
        }
    }
};
