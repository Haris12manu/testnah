module.exports = {
    uiPort: process.env.PORT || 1880, // ใช้พอร์ตจาก Render หรือค่าเริ่มต้น
    flowFile: 'flows.json', // ไฟล์ Flow
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "your-secret-key", // คีย์ Credential
    httpNodeRoot: '/ui', // ตั้ง Root Path สำหรับ Node-RED Dashboard
    httpServer: {
        middleware: (req, res, next) => {
            if (req.originalUrl === '/') {
                // Redirect Root Path ไปยัง /ui/ui/
                res.redirect('/ui/ui/');
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
