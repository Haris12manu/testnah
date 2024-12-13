module.exports = {
    uiPort: process.env.PORT || 1880, // ใช้พอร์ตจาก Render หรือค่าเริ่มต้น
    flowFile: 'flows.json', // ไฟล์ Flow ที่ใช้งาน
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "my-secret-key", // คีย์สำหรับเข้ารหัสข้อมูล Credential
    httpAdminRoot: '/admin', // URL สำหรับหน้า Admin
    httpNodeRoot: '/ui', // ตั้ง Root Path สำหรับ Dashboard
    httpStatic: './public', // Static Files (ถ้ามี)
    httpServer: {
        // ฟังก์ชันสำหรับ Redirect หน้า `/` ไปยัง `/ui`
        middleware: (req, res, next) => {
            if (req.originalUrl === '/') {
                res.redirect('/ui'); // Redirect ไปที่แดชบอร์ด
            } else {
                next(); // ให้ทำงานตามปกติ
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
