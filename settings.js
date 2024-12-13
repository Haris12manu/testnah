module.exports = {
    uiPort: process.env.PORT || 1880, // พอร์ตที่ Render ใช้
    flowFile: 'flows.json', // ไฟล์ Flow
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "your-secret-key", // คีย์ Credential
    httpNodeRoot: '/ui', // URL สำหรับ Dashboard (แก้ให้เป็น /ui)
    httpServer: {
        middleware: (req, res, next) => {
            if (req.originalUrl === '/') {
                // Redirect ไปยังหน้า Dashboard ที่ต้องการ
                res.redirect('/ui/#!/0?socketid=default');
            } else {
                next(); // ให้ผ่านไปตามปกติ
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
