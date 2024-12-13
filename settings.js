module.exports = {
    uiPort: process.env.PORT || 1880, // ใช้ PORT จาก Render
    flowFile: 'flows.json', // ระบุไฟล์ flow
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "my-secret-key",
    httpAdminRoot: '/admin', // หน้าสำหรับจัดการ Flow
    httpNodeRoot: '/', // Root Node สำหรับ API/ฟีเจอร์อื่น
    logging: {
        console: {
            level: 'info',
            metrics: false,
            audit: false
        }
    },
    httpStatic: './public', // โฟลเดอร์ Static ถ้ามี
    httpServer: {
        // ฟังก์ชัน Redirect
        middleware: (req, res, next) => {
            if (req.originalUrl === '/') {
                res.redirect('/ui'); // Redirect ไปที่แดชบอร์ด
            } else {
                next(); // ถ้าไม่ใช่ `/` ให้ผ่านไปยัง endpoint อื่น
            }
        }
    }
};
