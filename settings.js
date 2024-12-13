module.exports = {
    uiPort: process.env.PORT || 1880,
    flowFile: 'flows.json',
    credentialSecret: process.env.NODE_RED_CREDENTIAL_SECRET || "your-secret-key", // ตั้งค่ารหัสลับ
    httpAdminRoot: '/admin',
    httpNodeRoot: '/ui',
    httpStatic: './public',
    logging: {
        console: {
            level: 'info',
            metrics: false,
            audit: false
        }
    }
};
