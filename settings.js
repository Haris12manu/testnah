module.exports = {
    uiPort: process.env.PORT || 1880, // ใช้ PORT ของ Render หรือค่าเริ่มต้น 1880
    flowFile: 'flows.json', // ระบุไฟล์ flow ที่ใช้
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "secret-key", // ใช้สำหรับเข้ารหัส credential
    adminAuth: null, // สามารถเพิ่มการล็อกอินได้ถ้าต้องการ
    logging: {
        console: {
            level: 'info',
            metrics: false,
            audit: false
        }
    }
};
