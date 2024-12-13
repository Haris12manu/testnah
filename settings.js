module.exports = {
    uiPort: process.env.PORT || 1880, // ใช้ PORT จาก Render
    flowFile: 'flows.json', // ระบุไฟล์ Flow ที่ใช้งาน
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "my-secret-key", // ตั้งค่าคีย์ความปลอดภัย
    httpAdminRoot: '/admin', // เปลี่ยน Root สำหรับหน้า Admin
    httpNodeRoot: '/ui', // ตั้ง Root ของ Node-RED Dashboard
    httpStatic: './public', // ไฟล์ Static (ถ้ามี)
    httpServer: {
        // ฟังก์ชันสำหรับ Redirect หน้า `/` ไปยัง `/ui`
        middleware: (req, res, next) => {
            if (req.originalUrl === '/') {
                res.redirect('/ui'); // เปลี่ยนเส้นทางไปยัง /ui
            } else {
                next(); // ให้ทำงานตามเส้นทางปกติ
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
