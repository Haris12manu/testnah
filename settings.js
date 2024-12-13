module.exports = {
    uiPort: process.env.PORT || 1880, // ใช้พอร์ตจาก Render หรือ 1880
    flowFile: 'flows.json', // ไฟล์ Flow
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "my-secret-key", // คีย์ Credential
    httpAdminRoot: '/admin', // URL สำหรับหน้า Admin
    httpNodeRoot: '/ui', // URL สำหรับ Dashboard
    httpStatic: './public', // Static Files (ถ้ามี)
    httpServer: {
        // Redirect Root Path ไปยัง /ui
        middleware: (req, res, next) => {
            if (req.originalUrl === '/') {
                res.redirect('/ui'); // Redirect ไปที่ /ui
            } else {
                next(); // ถ้าไม่ใช่ Root Path ให้ผ่านไปตามปกติ
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
