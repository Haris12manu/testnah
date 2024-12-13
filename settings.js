module.exports = {
    uiPort: process.env.PORT || 1880, // ใช้พอร์ตจาก Render หรือค่าเริ่มต้น 1880
    flowFile: 'flows.json', // ระบุไฟล์ Flow
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "your-secret-key", // คีย์ Credential
    httpNodeRoot: '/ui', // ตั้ง Root Path สำหรับ Dashboard
    httpServer: {
        // Redirect Root Path ไปยัง /ui/#!/0
        middleware: (req, res, next) => {
            if (req.originalUrl === '/') {
                res.redirect('/ui/#!/0?socketid=default'); // Redirect ไปที่หน้าแดชบอร์ด
            } else {
                next(); // ทำงานตามปกติ
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
